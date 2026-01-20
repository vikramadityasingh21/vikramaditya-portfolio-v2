import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export async function GET() {
  try {
    // Path to your articles
    const articlesDirectory = path.join(process.cwd(), 'content', 'articles');
    
    // Check if directory exists
    if (!fs.existsSync(articlesDirectory)) {
      return NextResponse.json([]);
    }

    // Get all markdown files
    const filenames = fs.readdirSync(articlesDirectory).filter(file => 
      file.endsWith('.md') || file.endsWith('.mdx')
    );

    // Read and parse each file
    const articles = await Promise.all(
      filenames.map(async (filename, index) => {
        const filePath = path.join(articlesDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        
        // Parse frontmatter
        const { data, content } = matter(fileContents);
        
        // Convert markdown to HTML
        const processedContent = await remark()
          .use(html)
          .process(content);
        const contentHtml = processedContent.toString();
        
        // Calculate read time (rough estimate: 200 words per minute)
        const wordCount = content.split(/\s+/).length;
        const readTime = Math.ceil(wordCount / 200);
        
        return {
          id: index + 1,
          slug: filename.replace(/\.mdx?$/, ''),
          title: data.title || 'Untitled',
          excerpt: data.excerpt || data.description || '',
          content: contentHtml,
          date: data.date || new Date().toISOString().split('T')[0],
          readTime: data.readTime || `${readTime} min read`,
          tags: data.tags || [],
          featured: data.featured || false,
          image: data.image || data.coverImage || null,
          author: data.author || 'Vikramaditya Singh'
        };
      })
    );

    // Sort by date (newest first)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));

    return NextResponse.json(articles);
  } catch (error) {
    console.error('Error reading articles:', error);
    return NextResponse.json([], { status: 500 });
  }
}
