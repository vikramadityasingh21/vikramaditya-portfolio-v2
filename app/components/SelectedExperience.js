'use client';

export default function SelectedExperience() {
  const roles = [
    {
      title: 'Senior Product Manager (Product Lead)',
      company: 'Ontario Government - Ministry of Public and Business Service Delivery',
      period: '2022 - Present',
      location: 'Toronto, ON',
      outcomes: [
        'Leading product strategy for two flagship platforms (Vital Events & Business Experience) serving 15M Ontario residents',
        'Established product-centric delivery model transitioning from waterfall to structured Epics/Features/Stories',
        'Set up parallel delivery streams using Team Topologies principles (Core, Services, eForms, Migration) reducing dependencies',
        '60% reduction in manual processing time through AI-powered OCR for vital events registration'
      ],
      tags: ['GovTech', 'AI/ML', 'OCR', 'Team Topologies', 'Platform Leadership', 'Agile Transformation']
    },
    {
      title: 'Product Manager / Technical Product Manager',
      company: 'TheoremOne',
      period: '2021 - 2024',
      location: 'Toronto, ON',
      outcomes: [
        'Led 15-member global team building Document Management System enabling $5.6B in annual title insurance products',
        'Developed Generative AI solution training custom LLMs on historical policies to generate insurance drafts',
        '40% increase in underwriter efficiency (documents processed per hour)',
        'Spearheaded Kubernetes migration improving deployment frequency and disaster recovery'
      ],
      tags: ['GenAI', 'LLM', 'Kubernetes', 'APIs', 'Product Trio', 'Global Team Leadership']
    },
    {
      title: 'Senior Technical Product Manager',
      company: 'TELUS Digital',
      period: '2019 - 2021',
      location: 'Toronto, ON',
      outcomes: [
        'Led Data4Good project (CEO-sponsored) analyzing anonymized device data for Covid-19 policy-making',
        'Won HPE-IAPP Privacy Innovation Award 2020 for responsible data use in public health',
        'Built centralized GCP data warehouse achieving $2M CAD cost savings through automation',
        'Reduced Python data models from 12,000 to 700 lines through algorithm optimization'
      ],
      tags: ['Data Strategy', 'GCP', 'Privacy', 'Analytics', 'Award-Winning', 'BigQuery']
    },
    {
      title: 'Product Manager',
      company: 'Grainger Inc.',
      period: '2016 - 2017',
      location: 'Chicago, IL',
      outcomes: [
        '$170M revenue increase from NLP-powered search optimization across 1.5M products',
        '7% organic traffic growth through Solr/Endeca optimization',
        '14% boost in featured SKU sales via product boosting algorithm',
        'Implemented Inbenta NLP for intent-based search improving user experience'
      ],
      tags: ['NLP', 'Search', 'E-Commerce', 'Solr', 'Revenue Growth', 'B2B']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Selected Experience
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Recent <span className="gradient-text">Leadership Roles</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            10+ years delivering AI-first platforms across GovTech, Enterprise, and Fortune 500
          </p>
        </div>

        {/* Experience Cards */}
        <div className="max-w-5xl mx-auto space-y-6">
          {roles.map((role, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-8 hover:shadow-xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {role.title}
                  </h3>
                  <p className="text-lg font-semibold text-purple-600 mb-1">
                    {role.company}
                  </p>
                  <p className="text-sm text-slate-500">
                    {role.location}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm whitespace-nowrap">
                    {role.period}
                  </span>
                </div>
              </div>

              {/* Outcomes */}
              <div className="space-y-3 mb-6">
                {role.outcomes.map((outcome, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700 leading-relaxed">
                      {outcome}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up delay-400">
          <a 
            href="/resume" 
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-200"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Full Resume
          </a>
        </div>
      </div>
    </section>
  );
}
