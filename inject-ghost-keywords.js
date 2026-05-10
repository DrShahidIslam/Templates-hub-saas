/* eslint-disable */
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
require('dotenv').config({ path: '.env.local' });
const { GoogleGenerativeAI } = require("@google/generative-ai");

const DIRECTORIES = [
  path.join(process.cwd(), 'outstatic/content/templates'),
  path.join(process.cwd(), 'outstatic/content/blogs')
];

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

async function processSeoData(content, type, retries = 3) {
  const apiKey = getRandomApiKey();
  const genAI = new GoogleGenerativeAI(apiKey);
  const model = genAI.getGenerativeModel({ model: "gemini-3.1-flash-lite-preview" });
  
  const prompt = `You are an expert Technical SEO Specialist.
Task: Analyze the following document content and generate a highly optimized JSON object.

Requirements:
- meta_title: Catchy, click-optimized SEO title (under 60 characters).
- meta_description: Engaging, keyword-rich description (under 160 characters).
- faq_schema: A valid JSON-LD FAQPage object with 3-4 highly relevant Q&As.
- entity_schema: A valid JSON-LD ${type === 'templates' ? 'SoftwareApplication' : 'BlogPosting'} object.

Return ONLY a raw, valid JSON object with the exact keys: meta_title, meta_description, faq_schema, entity_schema. Do not use markdown code blocks like \`\`\`json.

Document Content Snippet (first 2500 chars):
${content.substring(0, 2500)}
`;

  for (let i = 0; i < retries; i++) {
    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text().trim();
      
      // Clean potential markdown blocks
      const cleanedText = text.replace(/^```json\s*/i, '').replace(/^```\s*/, '').replace(/\s*```$/, '');
      return JSON.parse(cleanedText);
    } catch (error) {
      if (error.message.includes("503") || error.message.includes("429")) {
        const wait = Math.pow(2, i) * 2000 + Math.random() * 1000;
        console.warn(`⚠️ Model busy (${error.message.includes("503") ? "503" : "429"}). Retrying in ${Math.round(wait/1000)}s...`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }
      console.error(`❌ Error generating SEO data:`, error.message);
      return null;
    }
  }
  return null;
}

async function injectSEO() {
  const BATCH_LIMIT = 500;
  let targetFiles = [];

  // Gather untouched files
  for (const dir of DIRECTORIES) {
    if (!fs.existsSync(dir)) continue;

    const files = fs.readdirSync(dir).filter(f => f.endsWith('.md'));
    const type = dir.includes('templates') ? 'templates' : 'blogs';

    for (const file of files) {
      const filePath = path.join(dir, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      
      try {
        const parsed = matter(fileContent);

        // Filter out files that are already SEO optimized
        if (parsed.data.seo_optimized !== true) {
          targetFiles.push({ filePath, parsed, type });
        }
      } catch (err) {
        console.warn(`⚠️ Could not parse gray-matter for ${filePath}`, err.message);
      }
    }
  }

  // Enforce batch limit to avoid GitHub Action timeouts
  const batch = targetFiles.slice(0, BATCH_LIMIT);

  if (batch.length === 0) {
    console.log("✅ All files are fully optimized. No action needed.");
    return;
  }

  console.log(`🔍 Processing ${batch.length} files for Schema & SEO Metadata Injection...`);

  let successCount = 0;

  for (const item of batch) {
    const { filePath, parsed, type } = item;
    const title = parsed.data.title || path.basename(filePath, '.md');

    console.log(`✍️ Optimizing: ${title}`);
    const seoData = await processSeoData(parsed.content, type);

    if (seoData) {
      // 1. Update Frontmatter
      parsed.data.title = seoData.meta_title || parsed.data.title;
      parsed.data.description = seoData.meta_description || parsed.data.description;
      parsed.data.seo_optimized = true;

      // 2. Safely generate updated markdown string with new frontmatter
      const updatedMarkdown = matter.stringify(parsed.content, parsed.data);

      // 3. Prepare Schema string safely checking if it is an object
      let schemaString = '';
      if (seoData.faq_schema && typeof seoData.faq_schema === 'object') {
        schemaString += `\n\n<script type="application/ld+json">\n${JSON.stringify(seoData.faq_schema, null, 2)}\n</script>`;
      }
      if (seoData.entity_schema && typeof seoData.entity_schema === 'object') {
        schemaString += `\n\n<script type="application/ld+json">\n${JSON.stringify(seoData.entity_schema, null, 2)}\n</script>`;
      }

      // 4. Write back to disk (Frontmatter + Markdown Body + Schema Scripts)
      fs.writeFileSync(filePath, updatedMarkdown + schemaString + '\n', 'utf-8');
      successCount++;
    }

    // Rate limiting delay
    await new Promise(resolve => setTimeout(resolve, 2000));
  }

  console.log(`\n🎉 Success! SEO Metadata & Schema injected into ${successCount} files.`);
}

injectSEO().catch(console.error);
