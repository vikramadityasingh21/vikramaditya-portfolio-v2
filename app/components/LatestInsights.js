'use client';

import Link from 'next/link';

export default function LatestInsights() {
  const articles = [
    {
      id: 1,
      title: 'From Gene Therapy to AI-First Leadership',
      excerpt: 'How my journey from analyzing DNA mutations to building AI-powered platforms taught me systems thinking applies everywhere.',
      date: 'Jan 15, 2025',
      readTime: '8 min read',
      tags: ['Career', 'AI', 'Leadership'],
      slug: 'gene-therapy-to-ai-leadership'
    },
    {
      id: 2,
      title: 'Team Topologies in Government',
      excerpt: 'Applying Team Topologies principles to reduce dependencies and accelerate delivery in a 50-person government platform team.',
      date: 'Jan 10, 2025',
      readTime: '6 min read',
      tags: ['Team Topologies', 'GovTech'],
      slug: 'team-topologies-government'
    },
    {
      id: 3,
      title: 'The Renaissance Product Manager',
      excerpt: 'Why martial arts, music theory, and calligraphy make me a better product leader than any PM framework ever could.',
      date: 'Jan 5, 2025',
      readTime: '7 min read',
      tags: ['Product', 'Systems Thinking'],
      slug: 'renaissance-product-manager'
    }
  ];

  return (
    <section id="insights" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Latest Insights
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Thoughts on <span className="gradient-text">AI & Product Leadership</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Systems thinking, complex programs, and lessons from the intersection of science and product
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/blog#article-${article.id}`}
              className="group fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <article className="glass rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-purple-700 bg-purple-50 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-purple-600 transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center gap-3 text-sm text-slate-500 mt-auto pt-4 border-t border-slate-200">
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>

                {/* Read More Arrow */}
                <div className="mt-4 flex items-center gap-2 text-purple-600 font-medium group-hover:gap-3 transition-all">
                  Read article
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center fade-in-up delay-400">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-purple-600 text-purple-600 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-200"
          >
            View All Articles
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
