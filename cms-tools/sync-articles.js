#!/usr/bin/env node

/**
 * Sync Markdown Articles to content-data.js
 * 
 * This script reads your full markdown articles from content/articles/
 * and updates the content field in app/lib/content-data.js
 */

const fs = require('fs');
const path = require('path');

// Paths
const articlesDir = path.join(__dirname, '../content/articles');
const contentDataPath = path.join(__dirname, '../app/lib/content-data.js');

console.log('\n📝 Syncing Full Article Content to Website\n');

// Read all markdown files
const markdownFiles = fs.readdirSync(articlesDir)
  .filter(f => f.endsWith('.md'))
  .sort();

console.log(`Found ${markdownFiles.length} markdown articles\n`);

// Read current content-data.js
let contentData = fs.readFileSync(contentDataPath, 'utf8');

// For each markdown file
markdownFiles.forEach((filename, index) => {
  const articleNum = index + 1;
  const filepath = path.join(articlesDir, filename);
  const markdown = fs.readFileSync(filepath, 'utf8');
  
  // Extract the content (everything after the frontmatter)
  const contentMatch = markdown.match(/---[\s\S]*?---\n\n([\s\S]*)/);
  
  if (!contentMatch) {
    console.log(`⚠️  Could not extract content from ${filename}`);
    return;
  }
  
  const fullContent = contentMatch[1];
  
  // Find the article in content-data.js by id
  const articleRegex = new RegExp(
    `(\\{[\\s\\S]*?id:\\s*${articleNum},)[\\s\\S]*?(content:\\s*\`)([\\s\\S]*?)(\`,\\s*tags:)`,
    'm'
  );
  
  const match = contentData.match(articleRegex);
  
  if (!match) {
    console.log(`⚠️  Could not find article ${articleNum} in content-data.js`);
    return;
  }
  
  // Replace the content - escape ALL special characters for JavaScript
  const newContent = fullContent
    .replace(/\\/g, '\\\\')  // Escape backslashes first
    .replace(/`/g, '\\`')    // Escape backticks
    .replace(/\$/g, '\\$')   // Escape dollar signs
    .replace(/\{/g, '\\{')   // Escape opening braces
    .replace(/\}/g, '\\}');  // Escape closing braces
  
  contentData = contentData.replace(
    articleRegex,
    `$1$2\n${newContent}\n    $4`
  );
  
  console.log(`✅ Updated Article ${articleNum}: ${filename}`);
});

// Write back to file
fs.writeFileSync(contentDataPath, contentData, 'utf8');

console.log(`\n✅ All articles synced successfully!`);
console.log(`\n🚀 Restart your dev server to see the full content:\n   npm run dev\n`);
