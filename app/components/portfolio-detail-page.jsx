'use client';

import { getPortfolioItemBySlug } from '@/app/lib/portfolio-data';
import Link from 'next/link';
import { ArrowLeft, BarChart3, Users, Clock, Code2 } from 'lucide-react';
import { notFound } from 'next/navigation';

export default function PortfolioDetailPage({ params }) {
  const { slug } = params;
  const item = getPortfolioItemBySlug(slug);

  if (!item) {
    notFound();
  }

  const content = item.content;

  return (
    <main className="min-h-screen bg-white">
      {/* Back Navigation */}
      <div className="bg-gray-50 border-b border-gray-200 sticky top-16 z-30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/portfolio" 
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            <ArrowLeft size={20} />
            <span>Back to Portfolio</span>
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl">
          {/* Category Badge */}
          <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
            {item.category.replace('-', ' ').toUpperCase()}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {item.title}
          </h1>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="flex items-start space-x-3">
              <BarChart3 className="text-blue-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm font-semibold text-gray-600">Outcome</p>
                <p className="text-gray-900 font-bold">{item.outcome}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Users className="text-blue-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm font-semibold text-gray-600">Role</p>
                <p className="text-gray-900 font-bold">{item.role}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Clock className="text-blue-600 mt-1 flex-shrink-0" size={24} />
              <div>
                <p className="text-sm font-semibold text-gray-600">Timeline</p>
                <p className="text-gray-900 font-bold">{item.timeline}</p>
              </div>
            </div>
          </div>

          {/* Summary */}
          <p className="text-xl text-gray-700 leading-relaxed">
            {item.summary}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="max-w-4xl">
          {/* Key Outcomes */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Outcomes</h2>
            <ul className="space-y-4">
              {content.keyOutcomes.map((outcome, idx) => (
                <li key={idx} className="flex items-start space-x-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-700 font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span className="text-gray-700 text-lg leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Problem Description */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              {content.problemDescription.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">My Role</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              {content.myRole.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* What I Did */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What I Did</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              {content.whatIDid.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Learnings</h2>
            <div className="text-gray-700 text-lg leading-relaxed space-y-4">
              {content.keyLearnings.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Technologies */}
          {content.technologies && content.technologies.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-3">
                {content.technologies.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Want to Work Together?
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            If my approach resonates with you, let's connect and discuss how I can help with your next challenge.
          </p>
          <Link 
            href="/contact" 
            className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* Related Projects */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">More Projects</h2>
        <div className="text-center text-gray-600">
          <Link 
            href="/portfolio" 
            className="inline-block px-6 py-2 text-blue-600 font-semibold hover:text-blue-700"
          >
            View All Projects →
          </Link>
        </div>
      </section>
    </main>
  );
}
