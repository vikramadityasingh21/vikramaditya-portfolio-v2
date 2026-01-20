'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { 
  ArrowLeft, Calendar, Clock, User, Tag, 
  Share2, Linkedin, Facebook, Mail, MessageCircle,
  Copy, Check, ChevronUp, BookOpen
} from 'lucide-react';
import { getArticleBySlug, getAllArticles, getArticlesBySeries } from '../../lib/content-data';

export default function ArticlePage() {
  const params = useParams();
  const article = getArticleBySlug(params.slug);
  const allArticles = getAllArticles();
  const [copied, setCopied] = useState(false);

  // Get related articles (same series or same category)
  const relatedArticles = article ? 
    (article.series 
      ? getArticlesBySeries(article.series).filter(a => a.slug !== article.slug).slice(0, 3)
      : allArticles.filter(a => a.category === article.category && a.slug !== article.slug).slice(0, 3)
    ) : [];

  if (!article) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">📄</div>
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
            <Link href="/blog" className="text-purple-600 hover:underline flex items-center justify-center gap-2">
              <ArrowLeft size={20} />
              Back to Articles
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const articleUrl = typeof window !== 'undefined' ? window.location.href : '';
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(article.title);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    email: `mailto:?subject=${encodedTitle}&body=Check out this article: ${encodedUrl}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(articleUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Convert markdown-style content to HTML-like rendering
  const renderContent = (content) => {
    const lines = content.trim().split('\n');
    const elements = [];
    let currentList = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`list-${elements.length}`} className="list-disc list-inside space-y-2 mb-6 text-gray-700 ml-4">
            {currentList.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, index) => {
      const trimmedLine = line.trim();

      if (trimmedLine.startsWith('## ')) {
        flushList();
        elements.push(
          <h2 key={index} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
            {trimmedLine.replace('## ', '')}
          </h2>
        );
      } else if (trimmedLine.startsWith('### ')) {
        flushList();
        elements.push(
          <h3 key={index} className="text-xl font-bold text-gray-900 mt-8 mb-3">
            {trimmedLine.replace('### ', '')}
          </h3>
        );
      } else if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushList();
        elements.push(
          <p key={index} className="font-bold text-gray-900 mt-6 mb-2">
            {trimmedLine.replace(/\*\*/g, '')}
          </p>
        );
      } else if (trimmedLine.startsWith('- ') || trimmedLine.startsWith('• ')) {
        currentList.push(trimmedLine.replace(/^[-•]\s*/, ''));
      } else if (/^\d+\.\s/.test(trimmedLine)) {
        flushList();
        currentList.push(trimmedLine.replace(/^\d+\.\s*/, ''));
      } else if (trimmedLine === '') {
        flushList();
      } else if (trimmedLine) {
        flushList();
        // Handle inline bold text
        const processedLine = trimmedLine.replace(
          /\*\*([^*]+)\*\*/g, 
          '<strong class="font-semibold text-gray-900">$1</strong>'
        );
        elements.push(
          <p 
            key={index} 
            className="text-gray-700 leading-relaxed mb-4"
            dangerouslySetInnerHTML={{ __html: processedLine }}
          />
        );
      }
    });

    flushList();
    return elements;
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Article Header */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium mb-6 group"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                Back to Articles
              </Link>

              {/* Series & Category */}
              <div className="flex items-center gap-3 mb-4">
                {article.series && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 bg-purple-200 text-purple-800 text-sm font-semibold rounded-full">
                    <BookOpen size={14} />
                    {article.series}
                  </span>
                )}
                <span className="inline-block px-4 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full">
                  {article.category}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {article.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar size={18} />
                  {article.date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {article.readTime}
                </span>
              </div>

              {/* Summary */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-purple-100">
                <p className="text-lg text-gray-700 leading-relaxed italic">
                  {article.summary}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg max-w-none">
                {renderContent(article.content)}
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <div className="flex items-center gap-3 flex-wrap">
                  <Tag size={18} className="text-gray-500" />
                  {article.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-pointer"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Share Section */}
              <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-3">
                    <Share2 size={20} className="text-gray-600" />
                    <span className="font-semibold text-gray-900">Share this article</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <a
                      href={shareLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
                      title="Share on LinkedIn"
                    >
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={shareLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#1877F2] text-white rounded-lg hover:opacity-90 transition-opacity"
                      title="Share on Facebook"
                    >
                      <Facebook size={20} />
                    </a>
                    <a
                      href={shareLinks.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#25D366] text-white rounded-lg hover:opacity-90 transition-opacity"
                      title="Share on WhatsApp"
                    >
                      <MessageCircle size={20} />
                    </a>
                    <a
                      href={shareLinks.email}
                      className="p-3 bg-gray-600 text-white rounded-lg hover:opacity-90 transition-opacity"
                      title="Share via Email"
                    >
                      <Mail size={20} />
                    </a>
                    <button
                      onClick={copyToClipboard}
                      className={`p-3 rounded-lg transition-all ${
                        copied 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                      title="Copy link"
                    >
                      {copied ? <Check size={20} /> : <Copy size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* Author Card */}
              <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    VS
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-bold text-gray-900 text-lg">{article.author}</h3>
                    <p className="text-gray-600 text-sm mb-3">
                      AI Product Leader | MS/MBA | 10+ years building transformational products
                    </p>
                    <Link 
                      href="/about-me" 
                      className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                    >
                      Learn more about me →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedArticles.length > 0 && (
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">
                  {article.series ? `More from ${article.series}` : 'Related Articles'}
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedArticles.map((related) => (
                    <Link key={related.slug} href={`/blog/${related.slug}`}>
                      <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow h-full">
                        <span className="text-xs font-semibold text-purple-600">{related.category}</span>
                        <h3 className="font-bold text-gray-900 mt-2 mb-2 line-clamp-2 hover:text-purple-600 transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">{related.excerpt}</p>
                        <p className="text-xs text-gray-500 mt-3">{related.readTime}</p>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navigation */}
        <section className="py-8 border-t border-gray-200">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                <ArrowLeft size={20} />
                All Articles
              </Link>
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
              >
                <ChevronUp size={20} />
                Back to Top
              </button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Enjoyed this article?
            </h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Subscribe to get more insights on product management, AI strategy, and leadership.
            </p>
            <Link 
              href="/#newsletter-section" 
              className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
