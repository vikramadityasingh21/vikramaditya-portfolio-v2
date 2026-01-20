'use client';

export default function CorePrinciples() {
  const principles = [
    {
      number: '01',
      title: 'Evidence Over Intuition',
      description: 'Decisions in complex systems must be testable, measurable, and auditable. My scientific training shaped this non-negotiable standard.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: '02',
      title: 'AI as Thinking Partner, Not Replacement',
      description: 'AI accelerates synthesis and reduces friction — but judgment, accountability, and consequences remain human.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: '03',
      title: 'Progress Must Be Demonstrable',
      description: 'In ambiguous programs, visibility creates trust. Trust creates momentum. Momentum creates outcomes.',
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="principles" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            How I Think
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Three <span className="gradient-text">Core Principles</span>
          </h2>
        </div>

        {/* Principles */}
        <div className="max-w-4xl mx-auto space-y-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="flex items-start gap-6 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Number */}
              <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center shadow-lg`}>
                <span className="text-white text-2xl font-bold">{principle.number}</span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {principle.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {principle.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
