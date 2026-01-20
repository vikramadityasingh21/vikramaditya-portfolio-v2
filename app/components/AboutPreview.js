'use client';

export default function AboutPreview() {
  const achievements = [
    { 
      icon: '🎓', 
      title: 'Northwestern Trained',
      description: 'MS Biotechnology, McCormick School of Engineering'
    },
    { 
      icon: '🏆', 
      title: 'Award-Winning',
      description: 'HPE-IAPP Privacy Innovation Award 2020'
    },
    { 
      icon: '🎯', 
      title: 'Battle-Tested',
      description: '10+ years leading high-stakes, complex programs'
    }
  ];

  const values = [
    {
      title: 'Strategic Courage',
      description: 'Making bold, calculated decisions when others hesitate',
      icon: '⚔️'
    },
    {
      title: 'AI as Force Multiplier',
      description: 'Embedded intelligence, not bolted-on features',
      icon: '🤖'
    },
    {
      title: 'Protective Leadership',
      description: 'Building teams that thrive, not just survive',
      icon: '🛡️'
    },
    {
      title: 'Systems Thinking',
      description: 'Connecting strategy to delivery to outcomes',
      icon: '🔄'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left: Story */}
          <div className="space-y-6 fade-in-up">
            <div>
              <div className="inline-block px-4 py-2 bg-scarlet-900/30 backdrop-blur-sm border border-scarlet-700/50 rounded-full text-scarlet-300 text-sm font-medium mb-4">
                About Me
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
                From Northwestern to <span className="gradient-text">AI-First Leadership</span>
              </h2>
            </div>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                I am <span className="text-slate-900 font-semibold">Vikramaditya Singh Shekhawat</span>, and I come from a family where 
                intellectual rigor isn't optional — everyone holds a PhD or MD. Growing up surrounded by doctors and researchers taught 
                me that precision, evidence, and long-term thinking aren't just academic values — they're how you approach any complex system.
              </p>
              
              <p>
                My foundation was built at <span className="text-slate-900 font-semibold">St. Xavier's in Jaipur</span> and 
                deepened at <span className="text-slate-900 font-semibold">Northwestern University's McCormick School of Engineering</span>. 
                From analyzing Drosophila genomes with Perl to building <span className="text-purple-600 font-semibold">self-learning AI models for DNA analysis</span>, 
                from engineering <span className="text-purple-600 font-semibold">Treg cell therapies for transplant patients</span> to 
                developing <span className="text-purple-600 font-semibold">gold nanoparticle drug delivery systems</span> — my scientific 
                training taught me how systems work at their deepest level.
              </p>

              <p>
                But I also earned a <span className="text-slate-900 font-semibold">black belt in Okinawa Goju Ryu (2004)</span>. 
                Martial arts taught me discipline, patience, and respect for consequences — lessons that shape how I lead today. 
                When you've trained in a practice where precision and control can mean the difference between mastery and injury, 
                you learn to value judgment over speed.
              </p>
              
              <p>
                I'm also a musician (guitar, learning violin, studying jazz theory), polyglot (fluent in Spanish, continuously learning), 
                artist (painting, calligraphy), and voracious reader. These aren't hobbies — they're how I think. 
                <span className="text-purple-600 font-semibold"> Music theory teaches me about patterns and improvisation. 
                Languages teach me about perspective. Calligraphy teaches me about precision and patience.</span>
              </p>

              <p>
                At <span className="text-slate-900 font-semibold">Ivey Business School</span>, I learned strategy, trade-offs, and 
                how to translate complex technology into business value. This combination — 
                <span className="text-purple-600 font-semibold">biotech research + AI expertise + strategic thinking + cultural depth + artistic sensibility</span> — 
                is what I bring to product leadership.
              </p>

              <p>
                Over the last decade, I've used this unique background to build products that matter: from <span className="text-purple-600">$170M e-commerce 
                transformations</span> at Grainger to <span className="text-purple-600">AI-powered government systems</span> serving millions of Ontarians. 
                I don't just use AI as a tool — I understand it from first principles, from genome analysis to enterprise deployment.
              </p>

              <p>
                My approach: <span className="text-slate-900 font-semibold">embed AI in decision-making, use it to think faster and execute better, 
                but keep human judgment at the center.</span> That's what a family of doctors, martial arts discipline, Renaissance learning, 
                and 10+ years of building AI systems taught me.
              </p>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="text-center p-4 glass rounded-xl hover:bg-slate-800/50 transition-colors"
                >
                  <div className="text-3xl mb-2">{achievement.icon}</div>
                  <div className="text-xs font-semibold text-white mb-1">{achievement.title}</div>
                  <div className="text-xs text-slate-400">{achievement.description}</div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary inline-block mt-6">
              Let's Work Together
            </a>
          </div>

          {/* Right: Values */}
          <div className="space-y-4 fade-in-up delay-200">
            <h3 className="font-display text-2xl font-bold text-white mb-6">
              How I Lead
            </h3>
            
            {values.map((value, index) => (
              <div 
                key={index}
                className="glass rounded-xl p-6 hover:bg-slate-800/50 transition-all card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-scarlet-700 to-scarlet-900 rounded-lg flex items-center justify-center text-2xl flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-bold text-white mb-1">
                      {value.title}
                    </h4>
                    <p className="text-sm text-slate-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quote */}
            <div className="glass rounded-xl p-6 border-l-4 border-scarlet-600 mt-6">
              <p className="text-slate-300 italic leading-relaxed">
                "Strategy without execution is hallucination. Execution without strategy is chaos. AI without judgment is risk. This is where I operate — at the intersection of all three."
              </p>
              <p className="text-sm text-scarlet-400 font-medium mt-3">
                — My Product Philosophy
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
