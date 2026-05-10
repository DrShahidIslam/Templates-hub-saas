const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const templatesDir = path.join(process.cwd(), 'outstatic/content/templates');

function quickPublish() {
  if (!fs.existsSync(templatesDir)) {
    console.error('Templates directory not found!');
    return;
  }

  const files = fs.readdirSync(templatesDir).filter(f => f.endsWith('.md'));
  console.log(`Found ${files.length} files. Starting quick publish...`);

  let updatedCount = 0;

  files.forEach(file => {
    const filePath = path.join(templatesDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    
    try {
      const parsed = matter(fileContent);
      let changed = false;

      if (parsed.data.status !== 'published') {
        parsed.data.status = 'published';
        changed = true;
      }

      if (!parsed.data.title) {
        parsed.data.title = file.replace('.md', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        changed = true;
      }

      if (!parsed.data.publishedAt) {
        parsed.data.publishedAt = new Date().toISOString();
        changed = true;
      }

      if (changed) {
        const updatedContent = matter.stringify(parsed.content, parsed.data);
        fs.writeFileSync(filePath, updatedContent, 'utf-8');
        updatedCount++;
      }
    } catch (err) {
      console.warn(`Could not process ${file}: ${err.message}`);
    }
  });

  console.log(`Successfully updated ${updatedCount} files to 'published' status.`);
}

quickPublish();
