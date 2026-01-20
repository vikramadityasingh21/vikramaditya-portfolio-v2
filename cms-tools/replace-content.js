#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n📝 Replacing article content with full markdown\n');

// Read original content-data.js
let contentData = fs.readFileSync(path.join(__dirname, '../app/lib/content-data.js'), 'utf8');

// Read all markdown files
const articlesDir = path.join(__dirname, '../content/articles');
const markdownFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md')).sort();

console.log(`Found ${markdownFiles.length} markdown files\n`);

markdownFiles.forEach((filename, index) => {
  const articleNum = index + 1;
  const filepath = path.join(articlesDir, filename);
  const markdown = fs.readFileSync(filepath, 'utf8');
  
  // Extract content after frontmatter
  const match = markdown.match(/---[\s\S]*?---\n\n([\s\S]*)/);
  if (!match) {
    console.log(`⚠️  No content in ${filename}`);
    return;
  }
  
  const fullContent = match[1];
  
  // Escape for JavaScript template literal
  const escaped = fullContent
    .replace(/\\/g, '\\\\')   // Backslashes
    .replace(/`/g, '\\`')      // Backticks  
    .replace(/\${/g, '\\${');  // Template literals
  
  // Find: content: `[anything]`,
  // Replace with: content: `[new content]`,
  const pattern = new RegExp(
    `(id:\\s*${articleNum},\\s*[\\s\\S]*?content:\\s*\`)[\\s\\S]*?(\`,\\s*tags:)`,
    'm'
  );
  
  if (contentData.match(pattern)) {
    contentData = contentData.replace(pattern, `$1\n${escaped}\n    $2`);
    console.log(`✅ Article ${articleNum}: ${filename}`);
  } else {
    console.log(`❌ Could not find pattern for article ${articleNum}`);
  }
});

// Write result
fs.writeFileSync(path.join(__dirname, '../app/lib/content-data.js'), contentData, 'utf8');

console.log(`\n✅ Done! Restart dev server: npm run dev\n`);
