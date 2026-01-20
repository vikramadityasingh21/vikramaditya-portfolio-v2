#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n📝 Syncing article content (preserving ALL content)\n');

// Read the original content-data.js
let contentData = fs.readFileSync(path.join(__dirname, '../app/lib/content-data.js'), 'utf8');

// Read all markdown files
const articlesDir = path.join(__dirname, '../content/articles');
const markdownFiles = fs.readdirSync(articlesDir).filter(f => f.endsWith('.md')).sort();

console.log(`Found ${markdownFiles.length} markdown files\n`);

markdownFiles.forEach((filename, index) => {
  const articleNum = index + 1;
  const filepath = path.join(articlesDir, filename);
  const markdown = fs.readFileSync(filepath, 'utf8');
  
  // Extract everything after the frontmatter
  const match = markdown.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n\r?\n([\s\S]*)$/);
  
  if (!match) {
    console.log(`⚠️  Could not extract content from ${filename}`);
    return;
  }
  
  const fullContent = match[1];
  
  // Escape for JavaScript template literal - be very careful here
  const escaped = fullContent
    .replace(/\\/g, '\\\\')   // Escape backslashes FIRST
    .replace(/`/g, '\\`')     // Escape backticks
    .replace(/\$\{/g, '\\${'); // Escape template literal syntax
  
  // Find the article block - look for the specific id, then find its content field
  // Pattern: id: N, ... content: `...`, tags:
  const idPattern = new RegExp(`\\bid:\\s*${articleNum}\\b`, 'g');
  const matches = [];
  let match2;
  
  while ((match2 = idPattern.exec(contentData)) !== null) {
    matches.push(match2.index);
  }
  
  if (matches.length === 0) {
    console.log(`⚠️  Could not find id: ${articleNum} in content-data.js`);
    return;
  }
  
  // Use the FIRST match (the actual article, not examples in other articles)
  const idIndex = matches[0];
  
  // Find the content field after this id
  const afterId = contentData.substring(idIndex);
  const contentMatch = afterId.match(/content:\s*`([^`]*(?:`(?!,\s*tags:)[^`]*)*)`/);
  
  if (!contentMatch) {
    console.log(`⚠️  Could not find content field for article ${articleNum}`);
    return;
  }
  
  // Get the position of this content field in the full string
  const contentFieldStart = idIndex + contentMatch.index;
  const contentStart = contentFieldStart + contentMatch[0].indexOf('`') + 1;
  const contentEnd = contentFieldStart + contentMatch[0].lastIndexOf('`');
  
  // Replace just the content between the backticks
  const before = contentData.substring(0, contentStart);
  const after = contentData.substring(contentEnd);
  
  contentData = before + '\n' + escaped + '\n    ' + after;
  
  console.log(`✅ Article ${articleNum}: ${filename}`);
});

// Write the result
fs.writeFileSync(path.join(__dirname, '../app/lib/content-data.js'), contentData, 'utf8');

console.log(`\n✅ All articles synced!\n`);
console.log(`🚀 Restart dev server: npm run dev\n`);
