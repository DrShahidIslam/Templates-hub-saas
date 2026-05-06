import dotenv from "dotenv";

// Load .env.local manually since we're in a script context
dotenv.config({ path: ".env.local" });

const API_KEY = process.env.GEMINI_API_KEY_1 || process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ No API key found. Please set GEMINI_API_KEY_1 in your .env.local file.");
  process.exit(1);
}

async function listModels() {
  console.log("🔍 Fetching available models for your API key...");
  
  const url = `https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.error) {
      console.error("❌ API Error:", JSON.stringify(data.error, null, 2));
      return;
    }

    console.log("\n✅ Available Models:");
    console.log("--------------------------------------------------");
    
    if (data.models && Array.isArray(data.models)) {
      data.models.forEach((model: any) => {
        console.log(`- ID: ${model.name}`);
        console.log(`  Name: ${model.displayName}`);
        console.log(`  Methods: ${model.supportedGenerationMethods.join(", ")}`);
        console.log("--------------------------------------------------");
      });
    } else {
      console.log("No models found in the response.");
    }
  } catch (error) {
    console.error("❌ Failed to fetch models:", error);
  }
}

listModels();
