#!/usr/bin/env node

/**
 * List all articles in your website
 */

const fs = require('fs');
const path = require('path');

const contentDataPath = path.join(__dirname, '../app/lib/content-data.js');
const fileContent = fs.readFileSync(contentDataPath, 'utf8');

// Extract article data
const articleMatches = fileContent.match(/\{[\s\S]*?id:\s*(\d+)[\s\S]*?title:\s*"([^"]*)"[\s\S]*?slug:\s*"([^"]*)"[\s\S]*?series:\s*"([^"]*)"[\s\S]*?\}/g);

if (!articleMatches) {
  console.log('No articles found');
  process.exit(0);
}

console.log('\n📚 Current Articles on Your Website\n');
console.log('='.repeat(80));

articleMatches.forEach(match => {
  const id = match.match(/id:\s*(\d+)/)[1];
  const title = match.match(/title:\s*"([^"]*)"/)[1];
  const slug = match.match(/slug:\s*"([^"]*)"/)[1];
  const seriesMatch = match.match(/series:\s*"([^"]*)"/);
  const series = seriesMatch ? seriesMatch[1] : 'No series';
  
  console.log(`\n${id}. ${title}`);
  console.log(`   Slug: ${slug}`);
  console.log(`   Series: ${series}`);
  console.log(`   URL: https://yoursite.com/blog/${slug}`);
});

console.log('\n' + '='.repeat(80));
console.log(`\nTotal: ${articleMatches.length} articles\n`);
