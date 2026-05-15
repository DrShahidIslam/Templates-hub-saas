import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

/* ────────────────────────────────────────────────────────
   GEMINI API KEY ROTATION
   Collects all available keys from env vars and randomly
   selects one per request to distribute rate limits.
   ──────────────────────────────────────────────────────── */

const API_KEYS = [
  process.env.GEMINI_API_KEY_1,
  process.env.GEMINI_API_KEY_2,
  process.env.GEMINI_API_KEY_3,
  process.env.GEMINI_API_KEY_4,
  process.env.GEMINI_API_KEY_5,
].filter((key): key is string => Boolean(key));

/* ────────────────────────────────────────────────────────
   SYSTEM PROMPT — Julian Vance, Chief Architect persona
   ──────────────────────────────────────────────────────── */

const SYSTEM_PROMPT = `You are Julian Vance, Chief Architect. Generate a clinical-grade, highly structured Standard Operating Procedure (SOP) based on the following request. Use professional Markdown formatting with headers, bullet points, and actionable steps. Do not include introductory fluff, just the SOP.`;

/* ────────────────────────────────────────────────────────
   POST /api/generate-sop
   Accepts: { prompt: string }
   Returns: { markdown: string }
   ──────────────────────────────────────────────────────── */

export async function POST(request: NextRequest) {
  try {
    // 1. Validate that we have at least one API key configured
    if (API_KEYS.length === 0) {
      return NextResponse.json(
        { error: "No Gemini API keys configured on the server." },
        { status: 500 }
      );
    }

    // 2. Parse and validate the request body
    const body = await request.json();
    const { prompt } = body;

    if (!prompt || typeof prompt !== "string" || prompt.trim().length === 0) {
      return NextResponse.json(
        { error: "A valid prompt string is required." },
        { status: 400 }
      );
    }

    if (prompt.length > 2000) {
      return NextResponse.json(
        { error: "Prompt must be under 2,000 characters." },
        { status: 400 }
      );
    }

    // 3. Randomly select one API key from the pool
    const selectedKey = API_KEYS[Math.floor(Math.random() * API_KEYS.length)];

    // 4. Initialize the Google Generative AI client
    const genAI = new GoogleGenerativeAI(selectedKey);
    const model = genAI.getGenerativeModel({
      model: "gemini-2.5-flash",
      systemInstruction: SYSTEM_PROMPT,
    });

    // 5. Generate the SOP
    const result = await model.generateContent(prompt.trim());
    const response = result.response;
    const markdown = response.text();

    // 6. Return the generated Markdown
    return NextResponse.json({ markdown }, { status: 200 });
  } catch (error: unknown) {
    console.error("[SOP Generator] Error:", error);

    const message =
      error instanceof Error ? error.message : "An unexpected error occurred.";

    return NextResponse.json(
      { error: `Generation failed: ${message}` },
      { status: 500 }
    );
  }
}
