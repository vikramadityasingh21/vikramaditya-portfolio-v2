'use client';

export default function SystemsThinking() {
  const foundations = [
    {
      icon: '🧬',
      title: 'Scientific Rigor',
      description: 'Hypothesis-driven thinking, evidence-based validation, and systems analysis. From genome research to enterprise products.',
      color: 'from-blue-500 to-blue-600',
      examples: ['Evidence-based decision-making', 'Controlled experimentation', 'Data integrity & validation']
    },
    {
      icon: '⚖️',
      title: 'Business Judgment',
      description: 'Strategic trade-offs, outcome orientation, and stakeholder alignment. MBA-trained to balance competing priorities.',
      color: 'from-green-500 to-green-600',
      examples: ['Strategy & trade-offs', 'Risk assessment', 'Stakeholder management']
    },
    {
      icon: '🤖',
      title: 'AI as Force Multiplier',
      description: 'AI embedded across the entire lifecycle — from discovery to delivery to learning. Not bolted on, built in.',
      color: 'from-purple-500 to-purple-600',
      examples: ['AI-accelerated research', 'Intelligent prioritization', 'Automated insights']
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            How I Think
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            A <span className="gradient-text">Systems-Driven</span> Approach
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto leading-relaxed">
            My work is shaped by three foundations. This combination allows me to operate effectively 
            in complex, regulated, and high-impact environments where most leaders struggle.
          </p>
        </div>

        {/* Three Pillars */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {foundations.map((pillar, index) => (
            <div
              key={index}
              className="group glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in-up card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${pillar.color} rounded-xl flex items-center justify-center text-3xl shadow-lg mb-6 group-hover:scale-110 transition-transform`}>
                {pillar.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-slate-900 mb-3">
                {pillar.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 leading-relaxed mb-6">
                {pillar.description}
              </p>

              {/* Examples */}
              <div className="space-y-2">
                {pillar.examples.map((example, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-slate-500">{example}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement - The Differentiator */}
        <div className="max-w-4xl mx-auto fade-in-up delay-400">
          <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-purple-600">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                "
              </div>
              <div>
                <p className="text-xl text-slate-700 leading-relaxed mb-6">
                  <span className="font-semibold text-slate-900">Leadership in complex systems requires more than velocity</span> — 
                  it requires judgment, accountability, and respect for consequences.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From analyzing DNA mutations to delivering $5.6B platforms to modernizing government services for millions — 
                  I've learned that <span className="font-semibold text-purple-600">AI accelerates thinking, but humans make the decisions that matter</span>. 
                  This is where scientific training, business acumen, and AI fluency converge.
                </p>
                <p className="text-sm text-purple-600 font-semibold mt-6">
                  — Vikramaditya Singh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why This Matters */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Why This Combination Is Rare</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl mb-2">🧬</div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Most PMs</span> don't have deep scientific training
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl mb-2">🎓</div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Most scientists</span> don't have MBA-level business judgment
              </p>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-3xl mb-2">⚡</div>
              <p className="text-sm text-slate-600">
                <span className="font-semibold text-slate-900">Most AI enthusiasts</span> don't understand systems thinking from first principles
              </p>
            </div>
          </div>
          <p className="text-slate-600 mt-6 leading-relaxed">
            I bring all three. That's what makes the difference in complex, regulated, high-stakes environments.
          </p>
        </div>
      </div>
    </section>
  );
}
