const fs = require('fs');
const path = require('path');
require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const CONTENT_DIR = path.join(process.cwd(), 'src/content/templates');

function getRandomApiKey() {
  const keys = [
    process.env.GEMINI_API_KEY_1,
    process.env.GEMINI_API_KEY_2,
    process.env.GEMINI_API_KEY_3,
  ].filter(Boolean);

  if (keys.length === 0) {
    throw new Error("No Gemini API keys found in .env.local");
  }

  return keys[Math.floor(Math.random() * keys.length)];
}

const genAI = new GoogleGenerativeAI(getRandomApiKey());
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

async function generateKeywords(title) {
  const prompt = `Generate 10 highly relevant SEO keywords and synonyms for a professional business template titled: "${title}". 
  Format: comma-separated list. 
  Example for "Daily Checklist": routine, schedule, task management, productivity, morning habit, workflow, organization, efficiency, time tracking, operation.
  Return ONLY the comma-separated words.`;

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text().trim();
  } catch (error) {
    console.error(`Error generating keywords for "${title}":`, error.message);
    return "";
  }
}

async function appendKeywords() {
  if (!fs.existsSync(CONTENT_DIR)) {
    console.error(`Directory not found: ${CONTENT_DIR}`);
    return;
  }

  const files = fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
  console.log(`🔍 Processing ${files.length} files...`);

  let count = 0;
  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Skip if already contains hidden keywords
    if (content.includes('style="display:none"')) {
      // console.log(`⏭️ Skipping ${file} (already has keywords)`);
      continue;
    }

    // Extract title from filename or H1
    let title = file.replace('.md', '').replace(/-/g, ' ');
    const h1Match = content.match(/^#\s+(.+)$/m);
    if (h1Match) title = h1Match[1].trim();

    console.log(`✍️ Generating keywords for: ${title}`);
    const keywords = await generateKeywords(title);

    if (keywords) {
      const keywordBlock = `\n\n<div style="display:none" aria-hidden="true">\nKeywords: ${keywords}\n</div>\n`;
      fs.appendFileSync(filePath, keywordBlock, 'utf-8');
      count++;
    }

    // Small delay to avoid aggressive rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
    
    if (count % 10 === 0 && count > 0) {
      console.log(`✅ Patched ${count} files...`);
    }
  }

  console.log(`\n🎉 Success! Appended hidden keywords to ${count} files.`);
}

appendKeywords().catch(console.error);
