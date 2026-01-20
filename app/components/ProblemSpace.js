'use client';

import { useState } from 'react';

export default function ProblemSpace() {
  const [expandedCard, setExpandedCard] = useState(null);

  const capabilities = [
    {
      title: 'Data-Driven Decision Making & Analytics',
      description: 'Building analytics frameworks and data strategies that turn complex information into actionable insights',
      icon: '📊',
      details: [
        'Built centralized data warehouse at TELUS achieving $2M CAD savings',
        'Developed Google Data Studio dashboards for real-time executive insights',
        'Led data strategy for health metrics and platform performance measurement'
      ]
    },
    {
      title: 'Digital Transformation & Agile Programs',
      description: 'Implementing Team Topologies, product-focused structures, and modern delivery practices',
      icon: '🚀',
      details: [
        'Established product-centric delivery model for BXP at Ontario Government',
        'Set up parallel delivery streams (Core, Services, eForms, Migration) using Team Topologies',
        'Transitioned teams from waterfall to structured agile practices',
        'Reduced delivery blockers by ~40% through stream optimization'
      ]
    },
    {
      title: 'Value Creation & Impact Focus',
      description: 'Obsessed with measurable outcomes - every feature must create demonstrable value',
      icon: '💎',
      details: [
        '$170M revenue increase at Grainger through NLP-powered search',
        '$5.6B in annual products enabled through FirstAmerican DMS',
        '60% reduction in processing time through AI-powered OCR',
        'Always asking: What problem does this solve? How do we measure success?'
      ]
    },
    {
      title: 'Renaissance Curiosity & Systems Thinking',
      description: 'Bringing diverse perspectives - from biotech research to martial arts to music theory',
      icon: '🎯',
      details: [
        'Scientific rigor from Northwestern biotech research',
        'Discipline and patience from martial arts (Black Belt, 2004)',
        'Pattern recognition from music theory and jazz',
        'Cross-cultural perspective from language learning',
        'Connecting dots others miss by drawing from unexpected domains'
      ]
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            I Specialize In <span className="gradient-text">Complex Systems Under Constraint</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Trained in scientific and regulated environments where decisions must be evidence-based, 
            auditable, and repeatable — a foundation that now informs my approach to AI-enabled 
            platforms and transformation programs.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {capabilities.map((cap, index) => (
            <button
              key={index}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              className="text-left glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 fade-in-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{cap.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {cap.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-4">
                {cap.description}
              </p>
              
              {/* Expandable Details */}
              {expandedCard === index && cap.details && (
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-purple-600 mb-3">Real Examples:</p>
                  <ul className="space-y-2">
                    {cap.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              <div className="mt-4 text-purple-600 text-sm font-medium">
                {expandedCard === index ? '← Click to collapse' : 'Click to see examples →'}
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Context */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <p className="text-slate-600 leading-relaxed">
            Whether it's <span className="font-semibold text-purple-600">GovTech modernization</span>, 
            <span className="font-semibold text-purple-600"> Fortune 500 transformation</span>, or 
            <span className="font-semibold text-purple-600"> AI-powered platform delivery</span> — 
            I create clarity where there is chaos, structure where there is ambiguity, and trust where there is uncertainty.
          </p>
        </div>
      </div>
    </section>
  );
}
