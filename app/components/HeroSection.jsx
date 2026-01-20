'use client';

import Image from 'next/image';
import Link from 'next/link';
import NewsletterSignup from './NewsletterSignup';
import { Download, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const scrollToNewsletter = () => {
    const element = document.getElementById('newsletter-section');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Main Hero */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-8">
              {/* Name & Title */}
              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-2 break-words">
                  Vikramaditya Singh, <span className="whitespace-nowrap">MS/MBA</span>
                </h1>
              </div>

              {/* One-liner */}
              <p className="text-2xl md:text-3xl font-semibold text-gray-800">
                AI Product Leader | E2E Product Management
              </p>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed">
                I help organizations transform vision into reality through strategic product leadership, 
                data-driven decision making, and building high-performing teams. 
                10+ years of experience across product management, program leadership, and digital transformation.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link 
                  href="/resume" 
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </Link>

                <Link 
                  href="/portfolio" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-bold border-2 border-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  View Portfolio
                </Link>
              </div>

              {/* Scroll Indicator */}
              <button
                onClick={scrollToNewsletter}
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors pt-4"
              >
                <span className="text-sm font-semibold">Explore More</span>
                <ChevronDown size={20} className="animate-bounce" />
              </button>
            </div>

            {/* Professional Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <Image
                  src="/images/profile.jpg"
                  alt="Vikramaditya Singh"
                  fill
                  className="object-cover rounded-lg shadow-2xl"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured AI Products */}
      <section className="bg-white py-12 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Featured AI-First Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project 1 */}
            <Link href="/portfolio/govtech-platform">
              <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                  01
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  GovTech Platform
                </h3>
                <p className="text-gray-700 mb-4">
                  Digital transformation platform serving 500K+ citizens. Reduced processing time by 87%.
                </p>
                <span className="text-blue-600 font-semibold group-hover:gap-2 transition-all inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Project 2 */}
            <Link href="/portfolio/ai-strategy-implementation">
              <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-8 border border-green-200 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                  02
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Strategy Framework
                </h3>
                <p className="text-gray-700 mb-4">
                  Company-wide AI strategy with governance. 3 features in production, 5 pilots active.
                </p>
                <span className="text-green-600 font-semibold group-hover:gap-2 transition-all inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>

            {/* Project 3 */}
            <Link href="/portfolio/team-topologies-restructuring">
              <div className="group bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-8 border border-purple-200 hover:shadow-lg transition-all cursor-pointer h-full">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold mb-4">
                  03
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  Team Topologies
                </h3>
                <p className="text-gray-700 mb-4">
                  Org restructuring reduced time-to-market by 60%, deployments now weekly.
                </p>
                <span className="text-purple-600 font-semibold group-hover:gap-2 transition-all inline-flex items-center">
                  Learn More →
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/portfolio" 
              className="inline-block px-8 py-3 text-blue-600 font-bold text-lg hover:text-blue-700"
            >
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter-section" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <NewsletterSignup />
      </section>
    </>
  );
}
