#!/usr/bin/env node

/**
 * Build content-data.js from markdown files
 * Replaces the content field with full markdown content
 */

const fs = require('fs');
const path = require('path');

const articlesDir = path.join(__dirname, '../content/articles');
const contentDataPath = path.join(__dirname, '../app/lib/content-data.js');

console.log('\n📝 Building content-data.js from markdown files\n');

// Read all markdown files
const markdownFiles = fs.readdirSync(articlesDir)
  .filter(f => f.endsWith('.md'))
  .sort();

console.log(`Found ${markdownFiles.length} markdown files\n`);

// Read markdown content
const articles = markdownFiles.map((filename, index) => {
  const filepath = path.join(articlesDir, filename);
  const markdown = fs.readFileSync(filepath, 'utf8');
  
  // Extract content after frontmatter
  const contentMatch = markdown.match(/---[\s\S]*?---\n\n([\s\S]*)/);
  
  if (!contentMatch) {
    console.log(`⚠️  Could not extract content from ${filename}`);
    return null;
  }
  
  return contentMatch[1];
}).filter(Boolean);

// Read the original content-data.js template
const originalContent = fs.readFileSync(contentDataPath, 'utf8');

// For each article, find and replace just the content field
let newContent = originalContent;

articles.forEach((content, index) => {
  const articleNum = index + 1;
  
  // Escape content for JavaScript template literal
  const escaped = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
  
  // Find the pattern: id: N, ... content: `...`, tags:
  // and replace just the content between the backticks
  const pattern = new RegExp(
    `(id:\\s*${articleNum},[\\s\\S]*?content:\\s*\`)[\\s\\S]*?(\`,\\s*tags:)`,
    'm'
  );
  
  const match = newContent.match(pattern);
  
  if (match) {
    newContent = newContent.replace(pattern, `$1\n${escaped}\n    $2`);
    console.log(`✅ Updated Article ${articleNum}`);
  } else {
    console.log(`⚠️  Could not find article ${articleNum} pattern`);
  }
});

// Write the new content
fs.writeFileSync(contentDataPath, newContent, 'utf8');

console.log(`\n✅ Successfully built content-data.js\n`);
console.log(`🚀 Restart your dev server:\n   npm run dev\n`);
