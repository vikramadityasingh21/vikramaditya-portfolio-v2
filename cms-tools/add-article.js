#!/usr/bin/env node

/**
 * Simple Article Adder
 * Adds new articles to your existing content-data.js file
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

// Template for new article
const articleTemplate = {
  id: 0, // Will be auto-incremented
  title: "",
  slug: "",
  date: new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
  author: "Vikramaditya Singh",
  category: "",
  series: "",
  readTime: "",
  image: "",
  excerpt: "",
  summary: "",
  content: "",
  tags: []
};

async function addArticle() {
  console.log('\n📝 Add New Article to Your Website\n');
  console.log('This will add a new article to your existing content-data.js file\n');

  // Get article details
  const title = await question('Article title: ');
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  
  console.log(`Generated slug: ${slug}`);
  const confirmSlug = await question('Use this slug? (y/n): ');
  const finalSlug = confirmSlug.toLowerCase() === 'n' ? await question('Enter custom slug: ') : slug;

  const category = await question('Category (e.g., Product Management, AI Strategy): ');
  const series = await question('Series (e.g., Foundation Canon, Product × AI, or leave blank): ');
  const readTime = await question('Read time (e.g., "15 min read"): ');
  const excerpt = await question('Excerpt (short 1-2 sentence preview): ');
  const summary = await question('Summary (2-3 sentence overview): ');
  const tags = await question('Tags (comma-separated): ');
  const imageName = await question('Image filename (will be saved to /public/images/blog/): ');

  console.log('\n📄 Now paste your article content (markdown format).');
  console.log('Type END_CONTENT on a new line when done:\n');

  let content = '';
  let line;
  while ((line = await question('')) !== 'END_CONTENT') {
    content += line + '\n';
  }

  // Read current content-data.js
  const contentDataPath = path.join(__dirname, '../app/lib/content-data.js');
  let fileContent = fs.readFileSync(contentDataPath, 'utf8');

  // Find the highest article ID
  const idMatches = fileContent.match(/id:\s*(\d+)/g);
  const ids = idMatches.map(match => parseInt(match.match(/\d+/)[0]));
  const nextId = Math.max(...ids) + 1;

  // Create new article object
  const newArticle = {
    ...articleTemplate,
    id: nextId,
    title,
    slug: finalSlug,
    category,
    series: series || undefined,
    readTime,
    image: imageName ? `/images/blog/${imageName}` : '/images/blog/default.jpg',
    excerpt,
    summary,
    content: '`\n' + content.trim() + '\n    `',
    tags: tags.split(',').map(t => t.trim())
  };

  // Format the new article as a JavaScript object string
  const newArticleString = `  {
    id: ${newArticle.id},
    title: "${newArticle.title}",
    slug: "${newArticle.slug}",
    date: "${newArticle.date}",
    author: "${newArticle.author}",
    category: "${newArticle.category}",${series ? `\n    series: "${newArticle.series}",` : ''}
    readTime: "${newArticle.readTime}",
    image: "${newArticle.image}",
    excerpt: "${newArticle.excerpt}",
    summary: "${newArticle.summary}",
    content: ${newArticle.content},
    tags: [${newArticle.tags.map(t => `"${t}"`).join(', ')}]
  },`;

  // Find where to insert (after the last article, before the closing bracket)
  const insertPosition = fileContent.lastIndexOf('];');
  
  // Insert the new article
  const updatedContent = fileContent.slice(0, insertPosition) + newArticleString + '\n' + fileContent.slice(insertPosition);

  // Write back to file
  fs.writeFileSync(contentDataPath, updatedContent, 'utf8');

  console.log('\n✅ Article added successfully!');
  console.log(`\nArticle ID: ${nextId}`);
  console.log(`Slug: ${finalSlug}`);
  console.log(`URL: /blog/${finalSlug}`);
  
  if (imageName) {
    console.log(`\n📸 Don't forget to add your image:`);
    console.log(`   Save it to: public/images/blog/${imageName}`);
  }

  console.log('\n🚀 Restart your dev server to see the changes:\n   npm run dev\n');

  rl.close();
}

// Run
addArticle().catch(err => {
  console.error('Error:', err);
  rl.close();
  process.exit(1);
});
