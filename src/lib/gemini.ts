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

  const filePath = path.join(process.cwd(), "src/content/templates", `${slug}.md`);

  if (fs.existsSync(filePath)) {
    try {
      console.log(`[Content] Serving pre-generated file for: ${slug}`);
      return fs.readFileSync(filePath, "utf-8");
    } catch (err) {
      console.error(`[Content] Failed to read file ${filePath}:`, err);
    }
  }

  // 2. Fallback to live API generation
  const apiKey = getRandomApiKey();
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });

  const prompt = `You are an expert operations manager. Write a highly detailed, professional Standard Operating Procedure (SOP) and checklist for: '${keyword}'. Output STRICTLY in Markdown. Do not include markdown code block backticks at the start/end of the response. Include: 1) A brief intro paragraph. 2) A step-by-step checklist divided into logical sections using H2s and bullet points. 3) A 'Pro Tips & Pitfalls' section. 4) A short FAQ with 3 questions.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Gemini returned an empty response");
    }

    return text;
  } catch (error) {
    console.error(`[Gemini] Failed to generate SOP for "${keyword}":`, error);

    // Return a graceful fallback so the page still renders
    return `# Template Generating...\n\nWe are currently experiencing high demand. The AI is queueing this template.\n\n**Please refresh this page in 60 seconds to view and download your customized SOP.**`;
  }
}
