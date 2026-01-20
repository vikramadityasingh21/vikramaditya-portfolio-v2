'use client';

export default function RenaissanceInterests() {
  const interests = [
    {
      category: 'Martial Arts',
      icon: '🥋',
      title: 'Okinawa Goju Ryu Black Belt',
      year: '2004',
      description: 'Discipline, precision, and respect for consequences. Martial arts taught me that mastery requires patience and that control matters more than speed.',
      skills: ['Discipline', 'Patience', 'Control', 'Respect for consequences'],
      color: 'from-red-500 to-red-700'
    },
    {
      category: 'Music',
      icon: '🎸',
      title: 'Musician & Jazz Student',
      year: 'Ongoing',
      description: 'Guitar (was in a band), learning violin, studying jazz theory and music composition. Music teaches me about patterns, improvisation, and structure.',
      skills: ['Guitar', 'Violin (learning)', 'Jazz Theory', 'Classic Rock', 'Classical Music'],
      color: 'from-purple-500 to-purple-700'
    },
    {
      category: 'Languages',
      icon: '🌍',
      title: 'Polyglot & Continuous Learner',
      year: 'Ongoing',
      description: 'Fluent in Spanish, continuously learning new languages. Each language opens a new way of thinking and seeing the world.',
      skills: ['Spanish (fluent)', 'Hindi', 'English', 'Continuous learning'],
      color: 'from-blue-500 to-blue-700'
    },
    {
      category: 'Visual Arts',
      icon: '🎨',
      title: 'Calligraphy & Painting',
      year: 'Ongoing',
      description: 'Calligraphy and painting teach precision, patience, and the value of deliberate practice. Every stroke matters.',
      skills: ['Calligraphy', 'Painting', 'Visual Design', 'Attention to Detail'],
      color: 'from-green-500 to-green-700'
    },
    {
      category: 'Reading & Learning',
      icon: '📚',
      title: 'Voracious Reader',
      year: 'Lifelong',
      description: 'Ardent reader with deep interest in human nature, systems thinking, and continuous learning. I consume large amounts of information and synthesize it into actionable insights.',
      skills: ['Human Nature', 'Systems Thinking', 'Information Synthesis', 'Pattern Recognition'],
      color: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Beyond Product Leadership
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            The <span className="gradient-text">Renaissance Mind</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            Product leadership isn't just about frameworks and metrics. It's shaped by how you think, 
            learn, and see the world. These disciplines — martial arts, music, languages, art — aren't 
            hobbies. They're how I approach complex systems.
          </p>
        </div>

        {/* Interests Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon & Year */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${interest.color} rounded-xl flex items-center justify-center text-3xl shadow-lg group-hover:scale-110 transition-transform`}>
                  {interest.icon}
                </div>
                <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                  {interest.year}
                </span>
              </div>

              {/* Category */}
              <div className="text-xs font-bold text-purple-600 uppercase tracking-wider mb-2">
                {interest.category}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-slate-900 mb-3">
                {interest.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {interest.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {interest.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs text-slate-700 bg-slate-100 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="max-w-4xl mx-auto fade-in-up delay-500">
          <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-purple-600">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                "
              </div>
              <div>
                <p className="text-xl text-slate-700 leading-relaxed mb-4">
                  <span className="font-bold text-slate-900">A family of doctors taught me intellectual rigor.</span> 
                  Martial arts taught me discipline and control. Music taught me about patterns and improvisation. 
                  Languages taught me perspective. Art taught me patience and precision.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  When I approach a complex product challenge, I'm not just applying frameworks. I'm synthesizing 
                  insights from biotech research, martial arts discipline, musical theory, linguistic perspective, 
                  and artistic precision. <span className="font-semibold text-purple-600">This is what Renaissance 
                  product leadership looks like</span> — depth across domains, not just vertical expertise.
                </p>
                <p className="text-sm text-purple-600 font-semibold mt-6">
                  — Vikramaditya Singh Shekhawat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Family Heritage */}
        <div className="mt-12 text-center max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-8">
            <div className="text-4xl mb-4">👨‍⚕️👩‍🔬👨‍🎓</div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">A Family of Scholars</h3>
            <p className="text-slate-600 leading-relaxed">
              I come from a family where everyone holds a PhD or MD. This heritage shaped my approach to 
              everything: evidence-based thinking, long-term perspective, and respect for complexity. 
              <span className="font-semibold text-slate-900"> Intellectual rigor isn't optional — it's in my DNA.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
