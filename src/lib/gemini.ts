import { GoogleGenerativeAI } from "@google/generative-ai";
import fs from "fs";
import path from "path";

/**
 * Gemini 3.1 Flash Lite SOP generator with API key rotation.
 * Checks local disk first for pre-generated content from the GitHub Action.
 */

function getRandomApiKey(): string {
  const keys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5,
  ].filter((key): key is string => Boolean(key));

  if (keys.length === 0) {
    throw new Error(
      "No Gemini API keys found. Set at least one of: GEMINI_API_KEY_1, GEMINI_API_KEY_2, etc."
    );
  }

  return keys[Math.floor(Math.random() * keys.length)];
}

/**
 * Generate a detailed SOP & checklist for a given keyword.
 * Uses local file cache first, then falls back to Gemini 3.1 Flash Lite.
 *
 * @param keyword - The raw keyword string (e.g. "checklist for a wedding")
 * @returns The generated Markdown content string
 */
export async function generateSOP(keyword: string): Promise<string> {
  // 1. Check for pre-generated file on disk (from github-generator.ts)
  const slug = keyword
    .toLowerCase()
    .trim()
    .replace(/[\s_]+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-{2,}/g, "-")
    .replace(/^-|-$/g, "");

  const filePath = path.join(process.cwd(), "outstatic/content/templates", `${slug}.md`);

  if (fs.existsSync(filePath)) {
    try {
      console.log(`[Content] Serving pre-generated file for: ${slug}`);
      return fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error(`[Content] Failed to read file ${filePath}:`, err);
    }
  }

  // 2. LIVE FALLBACK DISABLED (Preventing cost spikes and latency)
  return "";
}
