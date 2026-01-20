'use client';

export default function Education() {
  const degrees = [
    {
      id: 1,
      degree: 'Master of Business Administration (MBA)',
      school: 'Ivey Business School, Western University',
      location: 'London, ON, Canada',
      year: '2017 - 2018',
      specialization: 'Strategy & Design/Tech Management',
      highlights: [
        'Richard Ivey Excellence Award for outstanding incoming candidate',
        'Specialization in Strategy and Technology Management',
        'Ivey Field Project: Change Management System for Therapure Biopharma'
      ],
      color: 'from-green-500 to-green-600',
      icon: '🎓'
    },
    {
      id: 2,
      degree: 'Master of Science in Computer & Information Sciences',
      school: 'Knowledge Systems Institute',
      location: 'Skokie, IL, USA',
      year: '2015 - 2017',
      specialization: 'AI/ML & Data Science',
      highlights: [
        'Thesis: Self-Learning Model for DNA Analysis',
        'Designed ML model trained on human DNA from 1000 Genome project',
        'Built algorithm to analyze genes and update for genetic mutations',
        'Focus: Machine Learning, Data Mining, Decision Support Systems'
      ],
      color: 'from-purple-500 to-purple-600',
      icon: '🤖',
      featured: true
    },
    {
      id: 3,
      degree: 'Master of Science in Biotechnology',
      school: 'McCormick School of Engineering, Northwestern University',
      location: 'Evanston, IL, USA',
      year: '2010 - 2012',
      specialization: 'Computational Biology',
      highlights: [
        'Created Perl scripts for Drosophila genome analysis',
        'Marked miRNA target sites predicting gene silencing',
        'Focus: Bioinformatics, Risk Analysis, Quality Systems'
      ],
      color: 'from-blue-500 to-blue-600',
      icon: '🧬'
    },
    {
      id: 4,
      degree: 'Bachelor of Engineering in Biotechnology',
      school: 'Manipal Institute of Technology, Manipal University',
      location: 'Udupi, Karnataka, India',
      year: '2005 - 2009',
      specialization: 'Biotechnology Engineering',
      highlights: [
        'Foundation in biological sciences and engineering',
        'Early exposure to computational biology',
        'Research in genetic engineering applications'
      ],
      color: 'from-orange-500 to-orange-600',
      icon: '🔬'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Education & Research
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            From Biotech to <span className="gradient-text">AI-First Leadership</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            A unique journey: From analyzing DNA with Perl scripts at Northwestern, to building 
            self-learning AI models, to leading product transformations at scale. My technical 
            foundation isn't just theoretical — it's battle-tested in genomics, data science, and enterprise products.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6 max-w-5xl mx-auto">
          {degrees.map((edu, index) => (
            <div
              key={edu.id}
              className={`group glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in-up ${
                edu.featured ? 'ring-2 ring-purple-300 shadow-lg' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Icon & Year */}
                <div className="flex-shrink-0">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                    {edu.icon}
                  </div>
                  {edu.featured && (
                    <div className="mt-2 text-center">
                      <span className="inline-block px-3 py-1 bg-purple-100 text-purple-700 text-xs font-bold rounded-full">
                        AI THESIS
                      </span>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-slate-900 mb-1">
                        {edu.degree}
                      </h3>
                      <p className="text-lg font-semibold text-purple-600">
                        {edu.school}
                      </p>
                      <p className="text-sm text-slate-500">
                        {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-4 py-2 bg-slate-100 text-slate-700 font-semibold rounded-lg text-sm">
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  {/* Specialization */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r {edu.color} text-white text-xs font-semibold rounded-full">
                      {edu.specialization}
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2">
                    {edu.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-slate-600 text-sm leading-relaxed">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-12 text-center max-w-3xl mx-auto fade-in-up delay-500">
          <div className="glass rounded-2xl p-8 border-l-4 border-purple-600">
            <p className="text-lg text-slate-700 leading-relaxed italic">
              "My journey from genomics research to AI product leadership isn't conventional — 
              but it's exactly why I understand both the <span className="font-bold text-purple-600">science behind AI</span> and 
              the <span className="font-bold text-purple-600">business value it creates</span>. I've built self-learning models 
              for DNA analysis and $5.6B enterprise platforms. That's the power of combining deep technical 
              knowledge with strategic execution."
            </p>
            <p className="text-sm text-purple-600 font-semibold mt-4">
              — Vikramaditya Singh
            </p>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Certifications</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Product Management Basics (Pendo)',
              'Digital Adoption (Pendo)',
              'AI for Product Manager (Pendo)',
              'Product-Led Certification (Pendo)',
              'Product Analytics (Pendo)'
            ].map((cert, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-white border-2 border-purple-200 rounded-lg text-sm font-medium text-slate-700 hover:border-purple-400 hover:shadow-md transition-all"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
