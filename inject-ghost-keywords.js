/* eslint-disable */
const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const CONTENT_DIR = path.join(process.cwd(), 'outstatic/content/templates');

function getRandomApiKey() {
  const keys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
    process.env.GEMINI_API_KEY_4,
    process.env.GEMINI_API_KEY_5,
  ].filter(Boolean);

  if (keys.length === 0) {
    throw new Error("No Gemini API keys found in .env.local");
  }

  return keys[Math.floor(Math.random() * keys.length)];
}

async function generateKeywordsWithRetry(text, title, retries = 3) {
  const apiKey = getRandomApiKey();
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
  
  const prompt = `Document Title: ${title}\n\nDocument Content Snippet: ${text.substring(0, 1500)}\n\nTask: Generate 15 high-intent SEO search keywords and synonyms for this topic. Output them as a simple comma-separated list. Focus on what a user would type into a search bar to find this document.`;

  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text().trim().replace(/\n/g, ' ');
    } catch (error) {
      if (error.message.includes("503") || error.message.includes("429")) {
        const wait = Math.pow(2, i) * 2000 + Math.random() * 1000;
        console.warn(`⚠️ [${title}] Model busy (${error.message.includes("503") ? "503" : "429"}). Retrying in ${Math.round(wait/1000)}s...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      console.error(`❌ Error generating keywords for "${title}":`, error.message);
      return "";
    }
  }
  return "";
}

async function injectKeywords() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`Directory not found: ${CONTENT_DIR}`);
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  console.log(`🔍 Processing ${files.length} files for Ghost SEO injection...`);

  let count = 0;
  let skipped = 0;

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip if already contains ghost keywords
    if (content.includes('data-html2canvas-ignore="true"')) {
      skipped++;
      continue;
    }

    // Extract title
    let title = file.replace('.md', '').replace(/-/g, ' ');
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) title = h1Match[1].trim();

    console.log(`✍️ Analyzing: ${title}`);
    const keywords = await generateKeywordsWithRetry(content, title);

    if (keywords) {
      const injection = `\n\n<div data-html2canvas-ignore="true" style="display:none">${keywords}</div>\n<!-- AI_KEYWORDS: ${keywords} -->\n`;
      fs.appendFileSync(filePath, injection, 'utf-8');
      count++;
    }

    // Normal delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (count % 5 === 0 && count > 0) {
      console.log(`✅ Progress: ${count} injected, ${skipped} skipped.`);
    }
  }

  console.log(`\n🎉 Success! Ghost keywords injected into ${count} templates. Total processed: ${count + skipped}`);
}

injectKeywords().catch(console.error);
