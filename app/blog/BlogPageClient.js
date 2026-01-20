'use client';

import { useState, useMemo, useEffect } from 'react';
import { remark } from 'remark';
import html from 'remark-html';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function BlogPageClient({ initialArticles }) {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [dateFilter, setDateFilter] = useState('all');
  const [showTagDropdown, setShowTagDropdown] = useState(false);
  const [articleHtml, setArticleHtml] = useState('');

  const articles = initialArticles;

  useEffect(() => {
    async function convertMarkdown() {
      if (selectedArticle) {
        const article = articles.find(a => a.id === selectedArticle);
        if (article && article.content) {
          const processedContent = await remark()
            .use(html)
            .process(article.content);
          setArticleHtml(processedContent.toString());
        }
      }
    }
    convertMarkdown();
  }, [selectedArticle, articles]);

  const allTags = useMemo(() => {
    if (!articles || articles.length === 0) return [];
    return [...new Set(articles.flatMap(a => a.tags || []))].sort();
  }, [articles]);
  
  const allYears = useMemo(() => {
    if (!articles || articles.length === 0) return ['all'];
    return ['all', ...new Set(articles.map(a => {
      try {
        return new Date(a.date).getFullYear();
      } catch {
        return new Date().getFullYear();
      }
    }))];
  }, [articles]);

  const toggleTag = (tag) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearAllTags = () => {
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedTags.length > 0 || searchQuery || dateFilter !== 'all' || sortBy !== 'date-desc';

  const filteredAndSortedArticles = useMemo(() => {
    if (!articles) return [];
    let filtered = articles;

    if (selectedTags.length > 0) {
      filtered = filtered.filter(a => 
        a.tags && selectedTags.some(tag => a.tags.includes(tag))
      );
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(query) ||
        a.slug.toLowerCase().includes(query) ||
        (a.tags && a.tags.some(tag => tag.toLowerCase().includes(query)))
      );
    }

    if (dateFilter !== 'all') {
      filtered = filtered.filter(a => {
        try {
          return new Date(a.date).getFullYear().toString() === dateFilter;
        } catch {
          return false;
        }
      });
    }

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
  }, [articles, selectedTags, searchQuery, dateFilter, sortBy]);

  const handleShare = (platform, article) => {
    const url = typeof window !== 'undefined' ? window.location.href : '';
    const text = article.title;
    
    switch(platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        break;
    }
  };

  // ARTICLE VIEW
  if (selectedArticle) {
    const article = articles.find(a => a.id === selectedArticle);
    if (!article) return null;

    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <div className="container mx-auto px-6 pt-8 pb-16 max-w-4xl">
          <button
            onClick={() => {
              setSelectedArticle(null);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold mb-8 transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to all articles
          </button>

          <header className="mb-12 border-b border-slate-200 pb-8">
            {article.featured && (
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-semibold text-purple-700 uppercase tracking-wide">Featured Article</span>
              </div>
            )}
            
            <h1 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-slate-600 mb-6">
              <time dateTime={article.date} className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </time>
              {article.readTime && (
                <>
                  <span className="text-slate-300">•</span>
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {article.readTime}
                  </span>
                </>
              )}
            </div>

            {article.tags && article.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-700 bg-purple-50 rounded-full hover:bg-purple-100 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </header>

        <div 
        className="article-content prose prose-lg md:prose-xl prose-slate max-w-none
            
            /* Headings */
            prose-headings:font-display prose-headings:font-bold prose-headings:tracking-tight prose-headings:scroll-mt-28
            
            prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:text-slate-900 prose-h1:mb-6 prose-h1:mt-12 prose-h1:leading-tight prose-h1:font-extrabold
            
            prose-h2:text-3xl md:prose-h2:text-4xl prose-h2:text-slate-900 prose-h2:mb-5 prose-h2:mt-12 
            prose-h2:border-b-2 prose-h2:border-purple-200 prose-h2:pb-3 prose-h2:font-bold
            
            prose-h3:text-2xl md:prose-h3:text-3xl prose-h3:text-slate-800 prose-h3:mb-4 prose-h3:mt-10 prose-h3:font-bold
            
            prose-h4:text-xl md:prose-h4:text-2xl prose-h4:text-slate-800 prose-h4:mb-3 prose-h4:mt-8 prose-h4:font-semibold
            
            prose-h5:text-lg md:prose-h5:text-xl prose-h5:text-slate-700 prose-h5:mb-2 prose-h5:mt-6 prose-h5:font-semibold
            
            prose-h6:text-base md:prose-h6:text-lg prose-h6:text-slate-700 prose-h6:mb-2 prose-h6:mt-4 prose-h6:font-medium prose-h6:italic
            
            /* Paragraphs */
            prose-p:text-base md:prose-p:text-lg prose-p:text-slate-700 prose-p:leading-[1.8] prose-p:mb-5 prose-p:mt-0
            
            /* Links */
            prose-a:text-purple-600 prose-a:font-medium prose-a:no-underline prose-a:transition-colors
            hover:prose-a:text-purple-700 hover:prose-a:underline
            
            /* Strong and emphasis */
            prose-strong:text-slate-900 prose-strong:font-bold
            prose-em:text-slate-700 prose-em:italic prose-em:not-italic
            
            /* Code */
            prose-code:text-sm prose-code:text-purple-700 prose-code:bg-purple-50 
            prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:font-mono
            prose-code:before:content-[''] prose-code:after:content-['']
            
            /* Code blocks */
            prose-pre:bg-slate-900 prose-pre:text-slate-100 prose-pre:rounded-xl 
            prose-pre:shadow-lg prose-pre:p-6 prose-pre:overflow-x-auto
            prose-pre:text-sm prose-pre:leading-relaxed
            
            /* Lists */
            prose-ul:my-6 prose-ul:space-y-2 prose-ul:list-disc prose-ul:pl-6
            prose-ol:my-6 prose-ol:space-y-2 prose-ol:list-decimal prose-ol:pl-6
            
            prose-li:text-base md:prose-li:text-lg prose-li:text-slate-700 prose-li:leading-relaxed
            prose-li:marker:text-purple-600 prose-li:pl-2
            
            /* Nested lists */
            prose-li>ul:mt-2 prose-li>ol:mt-2
            
            /* Blockquotes */
            prose-blockquote:border-l-4 prose-blockquote:border-purple-500 
            prose-blockquote:pl-6 prose-blockquote:pr-4 prose-blockquote:py-3
            prose-blockquote:italic prose-blockquote:text-slate-600 
            prose-blockquote:bg-purple-50/50 prose-blockquote:rounded-r-lg 
            prose-blockquote:my-8 prose-blockquote:not-italic
            
            /* Images */
            prose-img:rounded-xl prose-img:shadow-xl prose-img:my-8 prose-img:w-full
            
            /* Horizontal rules */
            prose-hr:border-slate-300 prose-hr:my-12
            
            /* Tables */
            prose-table:text-sm prose-table:my-8 prose-table:w-full
            prose-thead:bg-slate-50 prose-thead:border-b-2 prose-thead:border-slate-200
            prose-th:px-4 prose-th:py-3 prose-th:text-left prose-th:font-semibold prose-th:text-slate-900
            prose-td:px-4 prose-td:py-3 prose-td:border-b prose-td:border-slate-200
            
            /* First paragraph drop cap (optional - remove if you don't like it) */
            [&>p:first-of-type]:first-letter:text-6xl [&>p:first-of-type]:first-letter:font-bold 
            [&>p:first-of-type]:first-letter:text-purple-600 [&>p:first-of-type]:first-letter:float-left 
            [&>p:first-of-type]:first-letter:mr-3 [&>p:first-of-type]:first-letter:mt-1
            [&>p:first-of-type]:first-letter:leading-none"
        dangerouslySetInnerHTML={{ __html: articleHtml }}
        />

          <div className="mt-16 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Share this article</h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => handleShare('linkedin', article)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#0077B5] text-white rounded-lg font-medium hover:bg-[#006399] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                Share on LinkedIn
              </button>
              
              <button
                onClick={() => handleShare('twitter', article)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#1DA1F2] text-white rounded-lg font-medium hover:bg-[#1a8cd8] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
                Share on Twitter
              </button>

              <button
                onClick={() => handleShare('copy', article)}
                className="inline-flex items-center gap-2 px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Link
              </button>
            </div>
          </div>

            {filteredAndSortedArticles.length > 1 && (
            <div className="mt-16 pt-8 border-t border-slate-200">
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {filteredAndSortedArticles.filter(a => a.id !== article.id).slice(0, 3).map(related => (
                  <button
                    key={related.id}
                    onClick={() => {
                      setSelectedArticle(related.id);
                      window.scrollTo(0, 0);
                    }}
                    className="text-left group"
                  >
                    <div className="glass rounded-xl p-5 hover:shadow-xl transition-all">
                      <h4 className="font-bold text-slate-900 mb-2 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {related.title}
                      </h4>
                      <p className="text-sm text-slate-600 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <Footer />
      </div>
    );
  }

  // BLOG LISTING VIEW
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <div className="container mx-auto px-4 md:px-6 pt-16 pb-12">
        <div className="max-w-6xl mx-auto mb-8">
          <button
            onClick={() => window.location.href = '/'}
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-semibold transition-colors group"
          >
            <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to homepage
          </button>
        </div>

        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
            Insights & <span className="gradient-text">Perspectives</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto px-4 leading-relaxed">
            Essays on AI, systems thinking, and leadership for people building complex products in constrained environments
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="glass rounded-2xl p-4 md:p-6 space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search by title, filename, or topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-3 md:py-4 pl-12 rounded-xl border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

              <div className="flex items-end">
                <div className="w-full px-4 py-3 bg-purple-50 rounded-lg text-purple-700 font-medium text-center">
                  {filteredAndSortedArticles.length} {filteredAndSortedArticles.length === 1 ? 'article' : 'articles'}
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Filter by Topics</label>
              <div className="relative">
                <button
                  onClick={() => setShowTagDropdown(!showTagDropdown)}
                  className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900 text-left flex items-center justify-between bg-white"
                >
                  <span className="text-slate-600">
                    {selectedTags.length === 0 ? 'Select topics...' : `${selectedTags.length} topic${selectedTags.length > 1 ? 's' : ''} selected`}
                  </span>
                  <svg className={`w-5 h-5 text-slate-400 transition-transform ${showTagDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {showTagDropdown && (
                  <div className="absolute z-10 w-full mt-2 bg-white border-2 border-slate-200 rounded-lg shadow-lg max-h-80 overflow-y-auto">
                    <div className="p-2">
                      {allTags.map(tag => (
                        <label
                          key={tag}
                          className="flex items-center gap-3 px-3 py-2 hover:bg-slate-50 rounded-lg cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTags.includes(tag)}
                            onChange={() => toggleTag(tag)}
                            className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-slate-700">{tag}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {selectedTags.length > 0 && (
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm font-medium text-slate-700">Active filters:</span>
                {selectedTags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium hover:bg-purple-200 transition-colors"
                  >
                    {tag}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                ))}
                <button
                  onClick={clearAllTags}
                  className="text-sm text-slate-500 hover:text-slate-700 underline"
                >
                  Clear all
                </button>
              </div>
            )}
          </div>
        </div>

        {filteredAndSortedArticles.length > 0 && (
          <div className="max-w-6xl mx-auto mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Featured Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {filteredAndSortedArticles.slice(0, 3).map(article => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article.id)}
                  className="group text-left"
                >
                  <article className="glass rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300 border-2 border-purple-100">
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-xs font-semibold text-purple-700 uppercase tracking-wide">Featured</span>
                      </div>
                      
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {article.tags.slice(0, 2).map((tag, idx) => (
                            <span key={idx} className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p className="text-slate-600 leading-relaxed mb-4 text-sm line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        {article.readTime && <span>{article.readTime}</span>}
                      </div>
                    </div>
                  </article>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">All Articles</h2>
          {filteredAndSortedArticles.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-600 text-lg">No articles found matching your criteria.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedTags([]);
                  setDateFilter('all');
                  setSortBy('date-desc');
                }}
                className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredAndSortedArticles.map((article) => (
                <button
                  key={article.id}
                  onClick={() => setSelectedArticle(article.id)}
                  className="group text-left w-full"
                >
                  <article className="glass rounded-2xl overflow-hidden h-full hover:shadow-2xl transition-all duration-300">
                    <div className="p-6">
                      {article.tags && article.tags.length > 0 && (
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
                      )}

                      <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      {article.excerpt && (
                        <p className="text-slate-600 leading-relaxed mb-4 text-sm md:text-base line-clamp-3">
                          {article.excerpt}
                        </p>
                      )}

                      <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-200">
                        <time dateTime={article.date}>
                          {new Date(article.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric'
                          })}
                        </time>
                        {article.readTime && <span>{article.readTime}</span>}
                      </div>
                    </div>
                  </article>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}