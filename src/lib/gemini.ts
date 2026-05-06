import { GoogleGenAI } from "@google/genai";
import fs from "fs";
import path from "path";

/**
 * Gemini 2.5 Flash SOP generator with API key rotation.
 *
 * Pulls up to 3 keys from environment variables and randomly selects one
 * per request to distribute load and avoid per-key rate limits.
 */

function getRandomApiKey(): string {
  const keys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
  ].filter((key): key is string => Boolean(key));

  if (keys.length === 0) {
    throw new Error(
      "No Gemini API keys found. Set at least one of: GEMINI_API_KEY_1, GEMINI_API_KEY_2, GEMINI_API_KEY_3"
    );
  }

  return keys[Math.floor(Math.random() * keys.length)];
}

/**
 * Generate a detailed SOP & checklist for a given keyword using Gemini 2.5 Flash.
 * Checks local disk first for pre-generated content from the GitHub Action.
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
  const ai = new GoogleGenAI({ apiKey });

  const prompt = `You are an expert operations manager. Write a highly detailed, professional Standard Operating Procedure (SOP) and checklist for: '${keyword}'. Output STRICTLY in Markdown. Do not include markdown code block backticks at the start/end of the response. Include: 1) A brief intro paragraph. 2) A step-by-step checklist divided into logical sections using H2s and bullet points. 3) A 'Pro Tips & Pitfalls' section. 4) A short FAQ with 3 questions.`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite",
      contents: prompt,
    });

    const text = response.text;

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

/**
 * Fallback content if the API call fails — ensures the page never breaks.
 */
function getFallbackContent(keyword: string): string {
  return `## Overview

This is a comprehensive guide for **${keyword}**. A well-structured process ensures consistency, reduces errors, and saves time.

## Step-by-Step Checklist

### Phase 1: Preparation
- Review all requirements and gather necessary materials
- Identify key stakeholders and assign responsibilities
- Set clear timelines and milestones
- Prepare all required documentation

### Phase 2: Execution
- Follow the established process step by step
- Document any deviations or issues encountered
- Communicate progress to all stakeholders
- Verify each step before moving to the next

### Phase 3: Review & Follow-Up
- Conduct a thorough review of completed work
- Gather feedback from all participants
- Document lessons learned for future improvement
- Archive all relevant records and documentation

## Pro Tips & Pitfalls

- **Start early**: Give yourself adequate preparation time to avoid last-minute rushes
- **Document everything**: Written records prevent miscommunication and provide accountability
- **Communicate proactively**: Keep all stakeholders informed of progress and any changes
- **Review and iterate**: Use each experience to improve the process for next time

## Frequently Asked Questions

**Q: How long does this process typically take?**
The timeline varies depending on complexity, but most processes can be completed within 1-4 weeks with proper planning and dedicated resources.

**Q: What are the most common mistakes to avoid?**
The biggest pitfalls are inadequate preparation, poor communication between team members, and failing to document the process for future reference.

**Q: How often should this process be reviewed and updated?**
Best practice is to review and update your procedures at least quarterly, or after any significant change in requirements or regulations.`;
}
