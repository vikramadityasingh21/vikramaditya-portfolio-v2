#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('\n🏗️  Building content-data.js from scratch\n');

// Read all markdown files
const articlesDir = path.join(__dirname, '../content/articles');
const markdownFiles = fs.readdirSync(articlesDir)
  .filter(f => f.endsWith('.md'))
  .sort();

console.log(`Found ${markdownFiles.length} markdown files\n`);

const articles = [];

markdownFiles.forEach((filename) => {
  const filepath = path.join(articlesDir, filename);
  const markdown = fs.readFileSync(filepath, 'utf8');
  
  // Extract frontmatter
  const frontmatterMatch = markdown.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!frontmatterMatch) {
    console.log(`⚠️  No frontmatter in ${filename}`);
    return;
  }
  
  const frontmatter = {};
  frontmatterMatch[1].split('\n').forEach(line => {
    const match = line.match(/^(\w+):\s*"?([^"]+)"?$/);
    if (match) {
      frontmatter[match[1]] = match[2].replace(/"/g, '');
    }
  });
  
  // Extract content after frontmatter
  const contentMatch = markdown.match(/^---\r?\n[\s\S]*?\r?\n---\r?\n\r?\n([\s\S]*)$/);
  const fullContent = contentMatch ? contentMatch[1] : '';
  
  // Escape for JS template literal
  const escaped = fullContent
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  
  // Extract article number from filename
  const articleNum = parseInt(filename.match(/^(\d+)-/)?.[1] || '0');
  
  // Build article object
  const article = {
    id: articleNum,
    title: frontmatter.title || 'Untitled',
    slug: frontmatter.slug || filename.replace('.md', ''),
    date: frontmatter.date || frontmatter.publication_date || 'January 1, 2026',
    author: frontmatter.author || 'Vikramaditya Singh',
    category: frontmatter.category || 'Product Management',
    series: frontmatter.series || 'Foundation Canon',
    readTime: frontmatter.readTime || frontmatter.reading_time || '20 min read',
    image: `/images/blog/${frontmatter.slug || filename.replace('.md', '')}.jpg`,
    excerpt: frontmatter.excerpt || frontmatter.subtitle || '',
    summary: frontmatter.summary || frontmatter.abstract || frontmatter.excerpt || '',
    content: escaped,
    tags: [] // Will extract from frontmatter tags if present
  };
  
  articles.push(article);
  console.log(`✅ Article ${articleNum}: ${frontmatter.title}`);
});

// Sort by ID
articles.sort((a, b) => a.id - b.id);

// Add stub articles 19-30
const stubArticles = [
  {id: 19, title: "AI Platforms vs AI Products", slug: "platforms-vs-products", category: "AI Strategy & Product", series: "AI in Practice", excerpt: "Organizations confuse platform readiness with product value creation."},
  {id: 20, title: "When AI Should Not Be Used", slug: "when-ai-should-not-be-used", category: "AI Strategy & Product", series: "AI in Practice", excerpt: "The decision not to use AI constitutes a first-class product judgment."},
  {id: 21, title: "Managing Model Drift Is a Product Problem", slug: "model-drift-product-problem", category: "AI Operations & Product", series: "AI in Practice", excerpt: "Model drift is fundamentally a product ownership problem."},
  {id: 22, title: "Outcome-Driven Delivery Is a Measurement Problem", slug: "outcome-driven-delivery-measurement", category: "Product & Delivery", series: "AI in Practice", excerpt: "You cannot deliver what you cannot measure."},
  {id: 23, title: "Delivery Velocity Is a Systems Property", slug: "delivery-velocity-systems", category: "Delivery & Operations", series: "AI in Practice", excerpt: "Velocity is a property of the system, not individual teams."},
  {id: 24, title: "Why Big Transformations Fail", slug: "transformation-physics", category: "Organizational Change", series: "AI in Practice", excerpt: "Organizational change obeys conservation laws."},
  {id: 25, title: "The AI Implementation Debt That Nobody Measures", slug: "ai-implementation-debt", category: "AI Operations & Governance", series: "AI in Practice", excerpt: "Implementation debt compounds until sudden failures occur."},
  {id: 26, title: "Why AI Ethics Without Operations Is Theater", slug: "ai-ethics-operations", category: "AI Ethics & Governance", series: "AI in Practice", excerpt: "Ethics principles that cannot be measured cannot be enforced."},
  {id: 27, title: "The Compound Interest of Organizational Learning", slug: "organizational-learning", category: "Organizational Performance", series: "AI in Practice", excerpt: "Learning velocity determines long-term competitive position."},
  {id: 28, title: "Why Most AI Strategies Are Technology Strategies in Disguise", slug: "ai-strategy-confusion", category: "AI Strategy", series: "AI in Practice", excerpt: "The confusion between strategy and technology plans dooms AI investments."},
  {id: 29, title: "Why AI Projects Need Product Thinking", slug: "product-thinking", category: "AI Delivery & Operations", series: "AI in Practice", excerpt: "AI systems are products to be evolved, not artifacts to be built."},
  {id: 30, title: "The Hidden Tax of AI Complexity", slug: "ai-complexity-tax", category: "AI Operations & Architecture", series: "AI in Practice", excerpt: "Complexity should be treated as a liability, not an asset."}
];

stubArticles.forEach(stub => {
  if (!articles.find(a => a.id === stub.id)) {
    articles.push({
      ...stub,
      date: "February 1, 2026",
      author: "Vikramaditya Singh",
      readTime: "30 min read",
      image: `/images/blog/${stub.slug}.jpg`,
      summary: stub.excerpt,
      content: '',
      tags: []
    });
    console.log(`📝 Added stub for Article ${stub.id}: ${stub.title}`);
  }
});

// Sort again
articles.sort((a, b) => a.id - b.id);

// Generate JavaScript
const js = `// Auto-generated content data
// Do not edit manually - use cms-tools/build-from-markdown.js to regenerate

export const articlesData = [
${articles.map(a => `  {
    id: ${a.id},
    title: "${a.title}",
    slug: "${a.slug}",
    date: "${a.date}",
    author: "${a.author}",
    category: "${a.category}",
    series: "${a.series}",
    readTime: "${a.readTime}",
    image: "${a.image}",
    excerpt: "${a.excerpt}",
    summary: "${a.summary}",
    content: \`
${a.content}    \`,
    tags: ${JSON.stringify(a.tags)}
  }`).join(',\n')}
];

// Experience, education, and other data from original file
export const experienceData = [];
export const educationData = [];  
export const portfolioData = [];

// Utility functions
export function getAllArticles() {
  return articlesData;
}

export function getArticleBySlug(slug) {
  return articlesData.find(article => article.slug === slug);
}

export function searchArticles(query) {
  const lowercaseQuery = query.toLowerCase();
  return articlesData.filter(article => 
    article.title.toLowerCase().includes(lowercaseQuery) ||
    article.excerpt.toLowerCase().includes(lowercaseQuery) ||
    article.content.toLowerCase().includes(lowercaseQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery)) ||
    (article.series && article.series.toLowerCase().includes(lowercaseQuery))
  );
}

export function getArticleCategories() {
  const categories = new Set(articlesData.map(article => article.category));
  return ['All', ...Array.from(categories)];
}

export function getArticleSeries() {
  const series = new Set(articlesData.filter(a => a.series).map(article => article.series));
  return Array.from(series);
}
`;

// Write to file
fs.writeFileSync(path.join(__dirname, '../app/lib/content-data.js'), js, 'utf8');

console.log(`\n✅ Generated content-data.js with ${articles.length} articles\n`);
