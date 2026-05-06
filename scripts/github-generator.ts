import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { GoogleGenAI } from "@google/genai";

/**
 * scripts/github-generator.ts
 * 
 * A resilient content generation script for Programmatic SEO.
 * Features:
 * - Round-robin API Key Rotation
 * - Exponential Backoff Retries
 * - Instant Disk Writing
 * - Batch Git Commits every 50 files
 */

// -- Configuration --
const BATCH_SIZE = 50;
const RETRY_LIMIT = 3;
const BACKOFF_DELAYS = [5000, 10000, 20000];
const CONTENT_DIR = path.join(process.cwd(), "src/content/templates");
const CSV_PATH = path.join(process.cwd(), "seo_keywords.csv");

// -- API Key Rotation --
const API_KEYS = Object.keys(process.env)
  .filter((key) => key.startsWith("GEMINI_API_KEY_"))
  .sort() // Keep a consistent rotation order
  .map((key) => process.env[key])
  .filter((key): key is string => Boolean(key));

if (API_KEYS.length === 0) {
  console.error("❌ No Gemini API keys found. Set GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc. in your environment.");
  process.exit(1);
}

let currentKeyIndex = 0;
function getNextApiKey(): string {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return key;
}

// -- Utility Functions --
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

function toSlug(keyword: string): string {
  return keyword
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");
}

/**
 * Generates content with exponential backoff and key rotation.
 */
async function generateWithResilience(keyword: string): Promise<string | null> {
  const prompt = `You are an expert operations manager. Write a highly detailed, professional Standard Operating Procedure (SOP) and checklist for: '${keyword}'. Output STRICTLY in Markdown. Do not include markdown code block backticks at the start/end of the response. Include: 1) A brief intro paragraph. 2) A step-by-step checklist divided into logical sections using H2s and bullet points. 3) A 'Pro Tips & Pitfalls' section. 4) A short FAQ with 3 questions.`;

  for (let attempt = 0; attempt <= RETRY_LIMIT; attempt++) {
    const apiKey = getNextApiKey();
    const ai = new GoogleGenAI({ apiKey });

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
      });

      const text = response.text;
      if (text) return text;
      throw new Error("Empty response from Gemini API");
    } catch (error: any) {
      const status = error?.status;
      const message = error?.message || "Unknown error";
      
      const isRateLimit = status === 429 || message.includes("429");
      const isServerError = (status >= 500 && status <= 599) || message.includes("500") || message.includes("503");

      if ((isRateLimit || isServerError) && attempt < RETRY_LIMIT) {
        const delay = BACKOFF_DELAYS[attempt];
        console.warn(`⚠️ [${keyword}] Attempt ${attempt + 1} failed. Retrying in ${delay / 1000}s...`);
        await sleep(delay);
        continue;
      }

      console.error(`❌ [${keyword}] Persistent failure after ${attempt + 1} attempts:`, message);
      return null;
    }
  }
  return null;
}

/**
 * Commits and pushes the current changes to GitHub.
 */
function syncToGithub(count: number) {
  try {
    console.log(`\n🚀 Syncing batch of ${count} templates to GitHub...`);
    execSync("git add .", { stdio: "inherit" });
    // Using [skip ci] to prevent infinite workflow loops if this runs in an action
    execSync('git commit -m "chore: auto-generated batch of templates [skip ci]"', { stdio: "inherit" });
    execSync("git push", { stdio: "inherit" });
    console.log("✅ Batch synced successfully.\n");
  } catch (error: any) {
    console.error("❌ Git sync failed:", error.message);
  }
}

/**
 * Main execution loop.
 */
async function main() {
  console.log("🔥 Starting GitHub Content Generator Script");
  console.log(`🔑 Rotating through ${API_KEYS.length} Gemini API keys`);

  if (!fs.existsSync(CONTENT_DIR)) {
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const rawCsv = fs.readFileSync(CSV_PATH, "utf-8");
  const lines = rawCsv.split(/\r?\n/).filter((l) => l.trim() !== "");
  const keywords = lines.slice(1); // Skip the "Keyword" header

  let totalNew = 0;
  let batchCounter = 0;

  for (const keyword of keywords) {
    const slug = toSlug(keyword);
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    // Skip if the file already exists (allows resuming a crashed/stopped run)
    if (fs.existsSync(filePath)) {
      continue;
    }

    console.log(`⏳ Generating [${totalNew + 1}]: ${keyword}...`);
    const content = await generateWithResilience(keyword);

    if (content) {
      // Instant Disk Writing
      fs.writeFileSync(filePath, content, "utf-8");
      totalNew++;
      batchCounter++;
      console.log(`✅ Saved ${slug}.md`);

      // Batch Git Sync every 50 successful items
      if (batchCounter >= BATCH_SIZE) {
        syncToGithub(batchCounter);
        batchCounter = 0;
      }
    } else {
      console.error(`⏩ Skipping persistent failure for: ${keyword}`);
    }
  }

  // Final sync for any remaining items in the last batch
  if (batchCounter > 0) {
    syncToGithub(batchCounter);
  }

  console.log(`\n🎉 Task Complete! Total new templates generated: ${totalNew}`);
}

main().catch((err) => {
  console.error("💀 Fatal error in generator:", err);
  process.exit(1);
});
