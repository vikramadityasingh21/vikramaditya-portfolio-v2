'use client';

import { useState, useMemo } from 'react';

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTag, setSelectedTag] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc'); // date-desc, date-asc, title-asc, title-desc
  const [dateFilter, setDateFilter] = useState('all'); // all, 2025, 2024, etc.

  const articles = [
    {
      id: 1,
      title: 'Why I Built This: From Gene Therapy to AI-First Leadership',
      slug: 'gene-therapy-to-ai-leadership',
      excerpt: 'How my journey from analyzing DNA mutations in therapy trials to building AI-powered government platforms taught me that systems thinking applies everywhere.',
      content: `
        <div class="prose">
          <h2>The Unexpected Path</h2>
          <p>In 2012, I was analyzing T-regulatory cell therapies at Northwestern Memorial Hospital, trying to prevent organ rejection in transplant patients. Fast forward to 2025, and I'm leading AI-powered OCR systems that process birth and death certificates for 15 million Ontario residents.</p>
          
          <p>The connection isn't obvious. But the pattern is.</p>
          
          <h2>Systems Thinking Transfers</h2>
          <p>In gene therapy research, you're dealing with complex biological systems, rigorous protocols, data integrity as non-negotiable, and the humility to know what you don't know.</p>
          
          <p>In government platform development, you're dealing with complex organizational systems, compliance requirements, data integrity as non-negotiable, and the humility to know what you don't know.</p>
          
          <p>The discipline is the same: hypothesis, design, execute, measure, iterate.</p>
          
          <h2>Why This Matters in Product Leadership</h2>
          <p>My biotech background gives me: comfort with complexity, evidence over intuition, structured thinking, and respect for unknowns.</p>
          
          <p>From Northwestern's gene therapy lab to Ontario's Business Experience Platform, the constant has been: understanding complex systems, bringing structure to ambiguity, and delivering measurable outcomes.</p>
        </div>
      `,
      date: '2025-01-15',
      readTime: '8 min read',
      tags: ['Career Journey', 'AI', 'Biotech', 'Leadership', 'Systems Thinking'],
      featured: true,
      image: '/images/blog/gene-therapy-ai.jpg'
    },
    {
      id: 2,
      title: 'Team Topologies in Government: Lessons from BXP',
      slug: 'team-topologies-government',
      excerpt: 'How we applied Team Topologies principles to reduce dependencies and accelerate delivery in a 50-person government platform team stuck in waterfall.',
      content: `
        <div class="prose">
          <h2>The Problem</h2>
          <p>When I joined Ontario's Business Experience Platform (BXP) project in May 2025, I inherited a challenge: 40-50 person team, waterfall mindset, no clear roadmap, frequent direction changes, and constant cross-team dependencies.</p>
          
          <h2>The Team Topologies Approach</h2>
          <p>We restructured into 4 parallel streams: Core Platform, Services, eForms, and Migration. Each stream had clear mission and autonomy.</p>
          
          <h2>The Results</h2>
          <p>Within 3 months: ~40% reduction in delivery blockers, parallel execution enabled, improved team autonomy, clearer roadmap.</p>
          
          <h2>Key Lessons</h2>
          <p>Conway's Law is real. Cognitive load matters. Make dependencies explicit. Government constraints are real but you can work within them.</p>
        </div>
      `,
      date: '2025-01-10',
      readTime: '6 min read',
      tags: ['Team Topologies', 'GovTech', 'Platform', 'Leadership', 'Agile Transformation'],
      featured: false,
      image: '/images/blog/team-topologies.jpg'
    },
    {
      id: 3,
      title: 'The Renaissance PM: Why Diverse Interests Make Better Product Leaders',
      slug: 'renaissance-product-manager',
      excerpt: 'How martial arts, music theory, and calligraphy make me a better product leader than any PM framework ever could.',
      content: `
        <div class="prose">
          <h2>The Unconventional PM</h2>
          <p>My real PM education came from: Okinawa Goju Ryu karate (Black Belt), jazz theory and guitar, learning Spanish, calligraphy, and molecular biology research.</p>
          
          <h2>What Each Discipline Teaches</h2>
          <p>Martial arts → discipline and patience. Music theory → pattern recognition. Language learning → perspective and communication. Calligraphy → precision and craft.</p>
          
          <h2>Why Diverse Interests Matter</h2>
          <p>PM frameworks teach tactics. Wisdom comes from synthesizing across domains. This synthesis creates unique perspective—and perspective is what makes a senior PM valuable.</p>
          
          <h2>The Compounding Effect</h2>
          <p>Each interest reinforces the others. The connections aren't obvious until you look for them. Then they're everywhere.</p>
        </div>
      `,
      date: '2025-01-05',
      readTime: '7 min read',
      tags: ['Product Management', 'Systems Thinking', 'Leadership', 'Personal Development'],
      featured: false,
      image: '/images/blog/renaissance-pm.jpg'
    }
  ];

  // Get unique tags
  const allTags = ['All', ...new Set(articles.flatMap(a => a.tags))];
  
  // Get unique years
  const allYears = ['all', ...new Set(articles.map(a => new Date(a.date).getFullYear()))];

  // Filter and sort articles
  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    // Filter by tag
    if (selectedTag !== 'All') {
      filtered = filtered.filter(a => a.tags.includes(selectedTag));
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by date
    if (dateFilter !== 'all') {
      filtered = filtered.filter(a => 
        new Date(a.date).getFullYear().toString() === dateFilter
      );
    }

    // Sort
    const sorted = [...filtered].sort((a, b) => {
      switch (sortBy) {
        case 'date-desc':
          return new Date(b.date) - new Date(a.date);
        case 'date-asc':
          return new Date(a.date) - new Date(b.date);
        case 'title-asc':
          return a.title.localeCompare(b.title);
        case 'title-desc':
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

    return sorted;
  }, [selectedTag, searchQuery, dateFilter, sortBy]);

  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="h-20"></div>
        
        <article className="container mx-auto px-6 py-12 max-w-4xl">
          {/* Back button */}
          <button
            onClick={() => setSelectedArticle(null)}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </button>

          {/* Article header */}
          <header className="mb-12">
            {article.featured && (
              <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full mb-4">
                Featured
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
              <time dateTime={article.date}>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-sm font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Featured image */}
            {article.image && (
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            )}
          </header>

          {/* Article content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-900 prose-p:text-slate-700 prose-a:text-purple-600 prose-strong:text-slate-900"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Share section */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Share this article</h3>
            <div className="flex gap-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(`https://vikramadityasingh.tech/blog#article-${article.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                Twitter
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://vikramadityasingh.tech/blog#article-${article.id}`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </article>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="h-20"></div>

      <div className="container mx-auto px-4 md:px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Insights & <span className="gradient-text">Perspectives</span>
          </h1>
          <p className="text-slate-600 text-base md:text-lg max-w-2xl mx-auto px-4">
            Systems thinking, AI-first leadership, and lessons from navigating complexity
          </p>
        </div>

        {/* Search and filters */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="glass rounded-2xl p-4 md:p-6 space-y-6">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 md:py-4 pl-12 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Filters row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Sort by */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                >
                  <option value="date-desc">Newest First</option>
                  <option value="date-asc">Oldest First</option>
                  <option value="title-asc">Title (A-Z)</option>
                  <option value="title-desc">Title (Z-A)</option>
                </select>
              </div>

              {/* Year filter */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Year</label>
                <select
                  value={dateFilter}
                  onChange={(e) => setDateFilter(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                >
                  {allYears.map(year => (
                    <option key={year} value={year}>
                      {year === 'all' ? 'All Years' : year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Results count */}
              <div className="flex items-end">
                <div className="w-full px-4 py-3 bg-purple-50 rounded-lg text-purple-700 font-medium text-center">
                  {filteredAndSortedArticles.length} {filteredAndSortedArticles.length === 1 ? 'article' : 'articles'}
                </div>
              </div>
            </div>

            {/* Tag filters */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-3">Filter by Topic</label>
              <div className="flex flex-wrap gap-2">
                {allTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 md:px-4 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                      selectedTag === tag
                        ? 'bg-purple-600 text-white'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Articles grid */}
        {filteredAndSortedArticles.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {filteredAndSortedArticles.map((article, index) => (
              <button
                key={article.id}
                onClick={() => setSelectedArticle(article.id)}
                className="group text-left fade-in-up w-full"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <article className="glass rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                  {/* Image */}
                  {article.image && (
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                        onError={(e) => {
                          e.target.parentElement.style.display = 'none';
                        }}
                      />
                      {article.featured && (
                        <span className="absolute top-4 left-4 px-3 py-1 bg-purple-600 text-white text-xs font-semibold rounded-full">
                          Featured
                        </span>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="p-6">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {article.tags.slice(0, 2).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 2 && (
                        <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                          +{article.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3 text-sm md:text-base">
                      {article.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                      <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      <span>{article.readTime}</span>
                    </div>

                    {/* Read more */}
                    <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                      Read article
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </article>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
