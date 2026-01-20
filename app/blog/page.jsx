'use client';

import { useState, useMemo } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { Search, Filter, SortAsc, SortDesc, Calendar, Clock, Tag, BookOpen } from 'lucide-react';
import { getAllArticles, getArticleCategories, searchArticles, getArticleSeries } from '../lib/content-data';

export default function BlogPage() {
  const allArticles = getAllArticles();
  const categories = getArticleCategories();
  const seriesList = getArticleSeries();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [sortOrder, setSortOrder] = useState('newest');

  // Filter and search articles
  const filteredArticles = useMemo(() => {
    let results = allArticles;

    // Apply search
    if (searchQuery.trim()) {
      results = searchArticles(searchQuery);
    }

    // Apply category filter
    if (selectedCategory !== 'All') {
      results = results.filter(article => article.category === selectedCategory);
    }

    // Apply series filter
    if (selectedSeries !== 'All') {
      results = results.filter(article => article.series === selectedSeries);
    }

    // Apply sorting
    results = [...results].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === 'newest' ? dateB - dateA : dateA - dateB;
    });

    return results;
  }, [searchQuery, selectedCategory, selectedSeries, sortOrder, allArticles]);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleSort = () => {
    setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedSeries('All');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Articles & Insights
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-4">
              Exploring product management, AI strategy, data-driven decision making, and building high-performing teams. 
              Practical insights from real-world experience.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <BookOpen size={16} />
                {allArticles.length} Articles
              </span>
              <span>•</span>
              <span>2 Series: Foundation Canon & Product × AI</span>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 border-b border-gray-200">
          {/* Search Bar */}
          <div className="mb-6">
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search articles by title, content, or tags..."
                value={searchQuery}
                onChange={handleSearch}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Filter Row */}
          <div className="space-y-4">
            {/* Category Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <Filter size={18} />
                <span className="font-medium text-sm">Category:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Series Filters */}
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-2 text-gray-600">
                <BookOpen size={18} />
                <span className="font-medium text-sm">Series:</span>
              </div>
              <button
                onClick={() => setSelectedSeries('All')}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                  selectedSeries === 'All'
                    ? 'bg-purple-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {seriesList.map((series) => (
                <button
                  key={series}
                  onClick={() => setSelectedSeries(series)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                    selectedSeries === series
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {series}
                </button>
              ))}
            </div>

            {/* Sort and Results */}
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing <strong>{filteredArticles.length}</strong> of {allArticles.length} articles
                {searchQuery && ` for "${searchQuery}"`}
              </div>
              <button
                onClick={toggleSort}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {sortOrder === 'newest' ? <SortDesc size={18} /> : <SortAsc size={18} />}
                <span className="text-sm font-medium">
                  {sortOrder === 'newest' ? 'Newest First' : 'Oldest First'}
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="bg-gray-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <Link key={article.id} href={`/blog/${article.slug}`}>
                    <article className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      {/* Image/Gradient Header */}
                      <div className="relative h-48 bg-gradient-to-br from-purple-500 to-indigo-600 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-6xl opacity-20">📝</span>
                        </div>
                        {article.series && (
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 text-purple-700 text-xs font-semibold rounded-full">
                              {article.series}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        {/* Category */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">
                            {article.category}
                          </span>
                        </div>

                        {/* Title */}
                        <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                          {article.title}
                        </h2>

                        {/* Excerpt */}
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1 mb-4">
                          {article.tags.slice(0, 3).map((tag) => (
                            <span key={tag} className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Meta */}
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Calendar size={14} />
                              {article.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={14} />
                              {article.readTime}
                            </span>
                          </div>
                          <span className="text-purple-600 font-semibold text-sm group-hover:translate-x-1 transition-transform inline-flex items-center">
                            Read →
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No articles found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Subscribe to Get New Articles
            </h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Get weekly insights on product management, AI strategy, and building exceptional organizations delivered to your inbox.
            </p>
            <Link 
              href="/#newsletter-section" 
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Subscribe to Product Thinking
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
