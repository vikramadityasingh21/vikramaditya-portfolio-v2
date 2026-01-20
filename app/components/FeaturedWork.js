'use client';

export default function FeaturedWork() {
  const projects = [
    {
      id: 1,
      title: 'AI-Powered OCR for Vital Events',
      slug: 'govtech-vital-events',
      company: 'Ontario Government',
      category: 'AI/ML · Government',
      description: 'Built computer vision and ML solution to extract structured data from paper applications, revolutionizing vital events registration for millions of Ontarians.',
      impact: [
        '60% reduction in processing time (keystroke reduction in data entry)',
        'Automated downstream workflows',
        'Serving 15M Ontario residents'
      ],
      tags: ['AI/ML', 'OCR', 'Python', 'Computer Vision', 'Gov Tech'],
      gradient: 'from-purple-500 to-purple-600',
      icon: '🤖'
    },
    {
      id: 2,
      title: 'Document Management System',
      slug: 'document-management-system',
      company: 'FirstAmerican (via TheoremOne)',
      category: 'GenAI · Enterprise',
      description: 'Led 15-member global team to build DMS with Generative AI capabilities, enabling $5.6B in annual title insurance products.',
      impact: [
        '40% increase in underwriter efficiency (documents processed per hour)',
        '$5.6B in annual title products enabled',
        '90% user adoption in first year'
      ],
      tags: ['GenAI', 'LLM', 'Product Leadership', 'Kubernetes', 'APIs'],
      gradient: 'from-blue-500 to-blue-600',
      icon: '📄'
    },
    {
      id: 3,
      title: 'Search Intelligence at Scale',
      slug: 'nlp-search-optimization',
      company: 'Grainger',
      category: 'NLP · E-Commerce',
      description: 'Implemented NLP-powered search optimization for 1.5M products, using intent-based ranking and product boosting algorithms.',
      impact: [
        '$170M revenue increase (from organic search traffic)',
        '7% organic traffic growth',
        '14% boost in featured SKU sales'
      ],
      tags: ['NLP', 'Search', 'Analytics', 'E-Commerce', 'Solr'],
      gradient: 'from-green-500 to-green-600',
      icon: '🔍'
    }
  ];

  return (
    <section id="work" className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            AI-First Products
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Not Products <span className="italic">with</span> AI —<br />
            <span className="gradient-text">Products Designed, Delivered & Evolved Using AI</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            AI embedded across the <span className="font-semibold text-purple-600">entire lifecycle</span>: 
            from discovery and synthesis, through prioritization and scenario analysis, 
            to delivery measurement and continuous learning. This is AI as a force multiplier, not a feature.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={`/portfolio/${project.slug}`}
              className="group card-hover glass rounded-2xl p-6 fade-in-up block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Category */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-14 h-14 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {project.icon}
                </div>
                <span className="text-xs text-slate-600 font-medium bg-slate-100 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mb-1 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 font-medium">{project.company}</p>
                </div>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Impact Metrics */}
                <div className="space-y-2 pt-2">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-xs text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded border border-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <button className="w-full mt-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-600 hover:text-white transition-all text-sm">
                  View Case Study →
                </button>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 fade-in-up delay-400">
          <a href="/portfolio" className="inline-flex items-center space-x-2 text-purple-600 hover:text-purple-700 font-medium transition-colors">
            <span>See all projects</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
