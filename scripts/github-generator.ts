import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import { fileURLToPath } from "url";

// Load environment variables from .env.local relative to this script
const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, "../.env.local") });

/**
 * scripts/github-generator.ts
 * 
 * A resilient content generation script for Programmatic SEO.
 * Features:
 * - Round-robin API Key Rotation
 * - Exponential Backoff Retries
 * - Aggressive Git Sync (Self-Healing)
 * - Batch Git Commits every 50 files
 * 
 * Goal: Ensure 3,000+ templates generate even with simultaneous UI updates.
 */

// -- Configuration --
const BATCH_SIZE = 50;
const RETRY_LIMIT = 3;
const BACKOFF_DELAYS = [5000, 10000, 20000];
const CONTENT_DIR = path.join(process.cwd(), "outstatic/content/templates");
const CSV_PATH = path.join(process.cwd(), "seo_keywords.csv");

// -- API Key Rotation --
const API_KEYS = Object.keys(process.env)
  .filter((key) => key.startsWith("GEMINI_API_KEY_"))
  .sort()
  .map((key) => process.env[key])
  .filter((key): key is string => Boolean(key));

if (API_KEYS.length === 0) {
  console.error("❌ No Gemini API keys found. Set GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc.");
  process.exit(1);
}

let currentKeyIndex = 0;
function getNextApiKey(): string {
  const key = API_KEYS[currentKeyIndex];
  currentKeyIndex = (currentKeyIndex + 1) % API_KEYS.length;
  return key;
}

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

async function generateWithResilience(keyword: string): Promise<string | null> {
  const prompt = `You are an expert operations manager. Write a highly detailed, professional Standard Operating Procedure (SOP) and checklist for: '${keyword}'. Output STRICTLY in Markdown. Do not include markdown code block backticks at the start/end of the response. Include: 1) A brief intro paragraph. 2) A step-by-step checklist divided into logical sections using H2s and bullet points. 3) A 'Pro Tips & Pitfalls' section. 4) A short FAQ with 3 questions.`;

  for (let attempt = 0; attempt <= RETRY_LIMIT; attempt++) {
    const apiKey = getNextApiKey();
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using the verified 3.1 Flash Lite model
    const model = genAI.getGenerativeModel({ 
      model: "gemini-3.1-flash-lite-preview",
    });

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      if (text) return text;
      throw new Error("Empty response from Gemini API");
    } catch (error) {
      const err = error as { status?: number; message?: string };
      const status = err?.status;
      const message = err?.message || "Unknown error";
      
      const isRateLimit = status === 429 || message.includes("429") || message.includes("quota");
      const isServerError = (status && status >= 500 && status <= 599) || message.includes("500") || message.includes("503");

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
 * Aggressive Sync Logic
 * Performs git pull --rebase --autostash before pushing to ensure templates
 * are merged on top of any UI changes made simultaneously.
 */
async function syncToGithub(count: number, retry = false) {
  try {
    console.log(`\n🚀 Syncing batch of ${count} templates to GitHub...`);
    
    // Configure Action User
    execSync('git config user.name "GitHub Action"', { stdio: "inherit" });
    execSync('git config user.email "action@github.com"', { stdio: "inherit" });

    // Check for changes
    const status = execSync("git status --porcelain").toString();
    if (!status) {
      console.log("ℹ️ No changes to sync.");
      return;
    }

    // Stage and commit locally
    execSync("git add .", { stdio: "inherit" });
    execSync('git commit -m "chore: auto-generated batch of templates [skip ci]"', { stdio: "inherit" });

    // Aggressive Pull & Rebase
    console.log("📥 Pulling latest changes (aggressive rebase + autostash)...");
    execSync("git pull --rebase --autostash origin main", { stdio: "inherit" });

    // Push the merged batch
    execSync("git push origin main", { stdio: "inherit" });
    
    console.log("✅ Batch synced successfully.\n");
    } catch (error) {
    const err = error as Error;
    console.error("❌ Git sync failed:", err.message);
    
    if (!retry) {
      console.log("⏳ Waiting 10 seconds before final retry...");
      await sleep(10000);
      await syncToGithub(count, true);
    } else {
      console.log("⚠️ Sync persistently failing. Continuing generation loop, will retry in next batch.");
    }
  }
}

async function main() {
  console.log("🔥 Starting Aggressive Content Generator");
  console.log(`🔑 Rotating through ${API_KEYS.length} Gemini API keys`);

  // Explicitly ensure the output directory exists
  if (!fs.existsSync(CONTENT_DIR)) {
    console.log(`📁 Creating missing directory: ${CONTENT_DIR}`);
    fs.mkdirSync(CONTENT_DIR, { recursive: true });
  }

  const rawCsv = fs.readFileSync(CSV_PATH, "utf-8");
  const lines = rawCsv.split(/\r?\n/).filter((l) => l.trim() !== "");
  const keywords = lines.slice(1);

  let totalNew = 0;
  let batchCounter = 0;

  for (const keyword of keywords) {
    const slug = toSlug(keyword);
    const filePath = path.join(CONTENT_DIR, `${slug}.md`);

    if (fs.existsSync(filePath)) {
      continue;
    }

    console.log(`⏳ Generating [${totalNew + 1}]: ${keyword}...`);
    const content = await generateWithResilience(keyword);

    if (content) {
      fs.writeFileSync(filePath, content, "utf-8");
      totalNew++;
      batchCounter++;
      console.log(`✅ Saved ${slug}.md`);

      if (batchCounter >= BATCH_SIZE) {
        await syncToGithub(batchCounter);
        batchCounter = 0;
      }
      
      // Delay to respect RPM limits
      await sleep(6000);
    } else {
      console.error(`⏩ Skipping persistent failure for: ${keyword}`);
    }
  }

  if (batchCounter > 0) {
    await syncToGithub(batchCounter);
  }

  console.log(`\n🎉 Task Complete! Total new templates generated: ${totalNew}`);
}

main().catch((err) => {
  console.error("💀 Fatal error in generator:", err);
  process.exit(1);
});
