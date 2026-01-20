'use client';

export default function EducationPreview() {
  const degrees = [
    {
      degree: 'MBA',
      field: 'Strategy & Technology Management',
      school: 'Ivey Business School',
      location: 'Western University, Canada',
      year: '2018',
      highlight: 'Richard Ivey Excellence Award',
      icon: '🎓',
      color: 'from-green-500 to-green-600'
    },
    {
      degree: 'MS Computer Science',
      field: 'AI & Knowledge Systems',
      school: 'Knowledge Systems Institute',
      location: 'Chicago, IL',
      year: '2017',
      highlight: 'Thesis: Self-Learning Model for DNA Analysis',
      icon: '🤖',
      color: 'from-purple-500 to-purple-600'
    },
    {
      degree: 'MS Biotechnology',
      field: 'Computational Biology',
      school: 'Northwestern University',
      location: 'McCormick School of Engineering',
      year: '2012',
      highlight: 'Genome Analysis & miRNA Research',
      icon: '🧬',
      color: 'from-blue-500 to-blue-600'
    },
    {
      degree: 'BE Biotechnology',
      field: 'Engineering Foundation',
      school: 'Manipal University',
      location: 'India',
      year: '2009',
      highlight: 'Engineering + Biological Sciences',
      icon: '🔬',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const certifications = [
    // Pendo Certifications
    'Pendo Certified Product Manager',
    'Pendo Certified: Digital Adoption',
    'Pendo Certified: AI for Product Managers',
    'Pendo Certified: Product-Led',
    'Pendo Certified: Product Analytics',
    // LinkedIn Learning Certifications
    'LinkedIn: Product Management First Steps',
    'LinkedIn: Agile Foundations',
    'LinkedIn: Data-Driven Product Management',
    'LinkedIn: Strategic Thinking',
    'LinkedIn: Leading Teams',
    'LinkedIn: User Experience (UX) Foundations',
    'LinkedIn: SQL Essential Training'
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Education & Credentials
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            <span className="gradient-text">Academic Foundation</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Scientific rigor from Northwestern biotech research + AI/ML expertise + 
            Strategic thinking from Ivey MBA
          </p>
        </div>

        {/* Degrees Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12">
          {degrees.map((edu, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center text-2xl shadow-lg`}>
                  {edu.icon}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">
                      {edu.degree}
                    </h3>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2 py-1 rounded whitespace-nowrap">
                      {edu.year}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-purple-600 mb-1">
                    {edu.field}
                  </p>
                  <p className="text-sm text-slate-700 font-medium mb-1">
                    {edu.school}
                  </p>
                  <p className="text-xs text-slate-500 mb-3">
                    {edu.location}
                  </p>
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-slate-600">
                      {edu.highlight}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">
            Professional Certifications
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, idx) => (
              <span
                key={idx}
                className="text-sm font-medium text-purple-700 bg-purple-50 px-4 py-2 rounded-full border border-purple-200"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 fade-in-up delay-400">
          <a 
            href="/about-me" 
            className="inline-flex items-center gap-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors"
          >
            View full academic background & research
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
