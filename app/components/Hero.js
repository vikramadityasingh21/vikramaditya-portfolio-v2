'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/headshot.jpg',
      alt: 'Vikramaditya Singh - AI-First Product Leader'
    },
    {
      image: '/images/professional-1.jpg',
      alt: 'Product Leadership at Ontario Government'
    },
    {
      image: '/images/aifirst.jpg',
      alt: 'AI-First Transformation'
    }
  ];

  const companies = [
    { name: 'Ontario Government', logo: '🏛️' },
    { name: 'FirstAmerican', logo: '🏢' },
    { name: 'TELUS', logo: '📱' },
    { name: 'Grainger', logo: '🔧' },
    { name: 'State Farm', logo: '🛡️' },
    { name: 'Northwestern', logo: '🎓' },
    { name: 'Ivey Business School', logo: '📚' },
    { name: 'Manipal University', logo: '🌟' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-gradient-to-br from-slate-50 via-purple-50 to-blue-50">
      {/* Background gradient - LIGHT */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30"></div>
      
      {/* Animated background elements - LIGHT */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Content */}
          <div className="space-y-8 fade-in-up">
            {/* Availability Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-300 rounded-full px-4 py-2">
              <span className="flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-green-700 text-sm font-medium">Available for Product & Program Leadership Roles</span>
            </div>

            {/* Main headline - NO ICON */}
            <div className="flex flex-col items-start">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 leading-tight tracking-tight mb-2 break-words" style={{ fontFamily: "'Cinzel', serif" }}>
                <span className="block sm:inline">VIKRAMADITYA</span>{' '}
                <span className="gradient-text block sm:inline">SINGH</span>
              </h1>
              <div className="text-base sm:text-lg md:text-xl text-purple-600 font-bold mb-3">
                MS/MBA
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-slate-700 font-semibold mb-3">
                AI-First Product & Platform Leader
              </div>
              <p className="text-lg md:text-xl text-slate-600 max-w-xl leading-relaxed font-medium">
                I turn ambiguous transformation programs into structured, AI-enabled platforms — 
                in complex, regulated environments where clarity, trust, and delivery credibility matter most.
              </p>
            </div>

            {/* Stats bar */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-purple-200 bg-white/50 backdrop-blur-sm rounded-lg px-4">
              <div>
                <div className="text-2xl font-bold text-purple-600">10+</div>
                <div className="text-sm text-slate-700 font-medium">Years Experience</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">$5.6B</div>
                <div className="text-sm text-slate-700 font-medium">Products Enabled</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-600">60%</div>
                <div className="text-sm text-slate-700 font-medium">AI Efficiency Gains</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="/resume" 
                className="btn-primary text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                View Resume
              </a>
              <a 
                href="/Vikramaditya_Singh_Resume.pdf" 
                download
                className="btn-secondary text-center inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <a href="/portfolio" className="btn-secondary text-center">
                View Case Studies
              </a>
            </div>
          </div>

          {/* Right: Image Slider */}
          <div className="relative fade-in-up delay-200">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Image slider */}
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-1000 ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-purple-200 bg-slate-100">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Show placeholder gradient if image doesn't load
                        e.target.style.display = 'none';
                        e.target.parentElement.classList.add('bg-gradient-to-br', 'from-purple-100', 'to-blue-100');
                      }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent"></div>
                  </div>
                </div>
              ))}

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-300 rounded-full blur-2xl opacity-40"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold-300 rounded-full blur-2xl opacity-30"></div>
            </div>

            {/* Slide indicators */}
            <div className="flex justify-center space-x-2 mt-6">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-600 w-8' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
