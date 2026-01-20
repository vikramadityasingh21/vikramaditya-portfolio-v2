'use client';

export default function BiotechResearch() {
  const research = [
    {
      id: 1,
      institution: 'Northwestern Memorial Hospital',
      role: 'Research Scientist - Cell Therapy',
      location: 'Chicago, IL',
      period: '2012-2014',
      focus: 'Transplant Immunology & Cancer Immunotherapy',
      projects: [
        {
          title: 'Treg Cell Therapy for Transplant Rejection Prevention',
          description: 'Developed regulatory T cell (Treg) therapies to prevent organ rejection in transplant patients, advancing personalized immunotherapy approaches.',
          impact: 'Contributed to next-generation transplant protocols'
        },
        {
          title: 'Cancer Antigen-Specific T Cell Identification',
          description: 'Identified and characterized T cells reactive against specific cancer antigens for cancer vaccine development and immunotherapy applications.',
          impact: 'Advanced personalized cancer vaccine preparation'
        }
      ],
      technologies: ['Cell Therapy', 'Treg Cells', 'Cancer Immunotherapy', 'Flow Cytometry', 'T Cell Biology'],
      logo: '🏥',
      color: 'from-purple-500 to-purple-700',
      icon: '🔬'
    },
    {
      id: 2,
      institution: 'Exicure (formerly AuraSense)',
      role: 'Bioengineer - Nanomedicine',
      location: 'Skokie, IL',
      period: '2013-2014',
      focus: 'Nanoparticle Drug Delivery & Gene Therapy',
      projects: [
        {
          title: 'Gold Nanoparticle-miRNA Conjugates for Cancer Therapy',
          description: 'Developed stable gold nanoparticle platforms embedded with miRNA for targeted gene knockdown in tumor cells, advancing precision nanomedicine.',
          impact: 'Pioneered targeted gene therapy delivery systems'
        },
        {
          title: 'Nanodots for Gene Expression Modulation',
          description: 'Engineered quantum dot nanoparticles for precise gene expression knockout, enabling controlled therapeutic interventions at the molecular level.',
          impact: 'Advanced precision gene therapy platforms'
        }
      ],
      technologies: ['Gold Nanoparticles', 'miRNA Therapeutics', 'Nanodots', 'Gene Knockdown', 'Targeted Delivery'],
      logo: '⚛️',
      color: 'from-red-500 to-red-700',
      icon: '💊'
    },
    {
      id: 3,
      institution: 'Therapeutic Proteins Inc. (TPI)',
      role: 'Process Development Engineer',
      location: 'Chicago, IL',
      period: '2012-2013',
      focus: 'Protein Engineering & Bioprocess Optimization',
      projects: [
        {
          title: 'IFN-Beta Production Process - 20x Improvement Over Amgen',
          description: 'Designed upstream E. coli-based bioprocess achieving 2.1 g/L IFN-Beta yield - 20 times higher than Amgen\'s commercial process.',
          impact: '20x yield improvement over industry standard'
        },
        {
          title: 'Next-Generation Bioreactor Design',
          description: 'Engineered iterative bioreactor design optimizations that enhanced E. coli bioprocess efficiency and scalability for therapeutic protein production.',
          impact: 'Set new benchmarks in bioprocess engineering'
        }
      ],
      technologies: ['E. coli Expression', 'Bioreactor Design', 'Upstream Processing', 'Protein Purification', 'Bioprocess Optimization'],
      logo: '🧪',
      color: 'from-blue-500 to-blue-700',
      icon: '⚗️'
    },
    {
      id: 4,
      institution: 'Coskata (now Synata Bio)',
      role: 'Bioengineer - Synthetic Biology',
      location: 'Warrenville, IL',
      period: '2011-2012',
      focus: 'Industrial Biotechnology & Biofuel Production',
      projects: [
        {
          title: 'Three-Species Bacterial Homeostasis for Ethanol Production',
          description: 'Developed and maintained complex bioreactor system with three bacterial species in homeostatic balance to convert natural gas into ethanol fuel.',
          impact: 'Advanced sustainable biofuel technology'
        }
      ],
      technologies: ['Synthetic Biology', 'Bioreactor Engineering', 'Metabolic Engineering', 'Microbial Consortia', 'Biofuel Production'],
      logo: '⚡',
      color: 'from-green-500 to-green-700',
      icon: '🦠'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <div className="inline-block px-4 py-2 bg-purple-100 border border-purple-300 rounded-full text-purple-700 text-sm font-medium mb-4">
            Scientific Foundation
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            From <span className="gradient-text">Cutting-Edge Biotech Research</span><br />
            to AI-First Product Leadership
          </h2>
          <p className="text-slate-600 text-lg max-w-4xl mx-auto leading-relaxed">
            Before leading AI-powered product teams, I was at the forefront of biomedical research — 
            engineering <span className="font-semibold text-purple-600">cell therapies</span>, 
            designing <span className="font-semibold text-purple-600">nanoparticle drug delivery systems</span>, 
            optimizing <span className="font-semibold text-purple-600">biomanufacturing processes 20x beyond industry standards</span>, 
            and building <span className="font-semibold text-purple-600">synthetic biology systems</span>. 
            This deep scientific training shapes how I approach AI and product strategy today.
          </p>
        </div>

        {/* Research Cards */}
        <div className="space-y-8 max-w-6xl mx-auto">
          {research.map((work, index) => (
            <div
              key={work.id}
              className="group glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                {/* Left: Icon & Period */}
                <div className="flex-shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${work.color} rounded-xl flex items-center justify-center text-4xl shadow-lg mb-4 group-hover:scale-110 transition-transform`}>
                    {work.icon}
                  </div>
                  <div className="text-center">
                    <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-xs font-semibold rounded-lg">
                      {work.period}
                    </span>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 space-y-6">
                  {/* Header */}
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                      {work.institution}
                    </h3>
                    <p className="text-lg font-semibold text-purple-600 mb-1">
                      {work.role}
                    </p>
                    <p className="text-sm text-slate-500 mb-3">
                      {work.location} • {work.focus}
                    </p>
                  </div>

                  {/* Projects */}
                  <div className="space-y-4">
                    {work.projects.map((project, idx) => (
                      <div key={idx} className="border-l-4 border-purple-300 pl-6 py-2">
                        <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                          <span className="text-purple-600">→</span>
                          {project.title}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed mb-2">
                          {project.description}
                        </p>
                        <p className="text-purple-600 text-sm font-semibold">
                          Impact: {project.impact}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {work.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium text-slate-700 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200 hover:border-purple-300 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Statement */}
        <div className="mt-16 max-w-4xl mx-auto fade-in-up delay-500">
          <div className="glass rounded-2xl p-8 md:p-12 border-l-4 border-purple-600">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-500 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                "
              </div>
              <div>
                <p className="text-xl text-slate-700 leading-relaxed mb-4">
                  <span className="font-bold text-slate-900">This isn't just academic background</span> — 
                  I've engineered cell therapies for transplant patients, built nanoparticle drug delivery systems 
                  for cancer treatment, and designed bioprocesses that beat Amgen's commercial standards by 20x.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  When I approach AI-first product strategy, I'm not guessing. I'm applying the same rigorous, 
                  evidence-based methodology I used in the lab: <span className="font-semibold text-purple-600">hypothesis-driven 
                  thinking, controlled experimentation, data integrity, and respect for long-term consequences</span>. 
                  That's what separates scientific product leadership from feature factory management.
                </p>
                <p className="text-sm text-purple-600 font-semibold mt-6">
                  — Vikramaditya Singh, Research Scientist → AI-First Product Leader
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="mt-12 text-center">
          <div className="inline-block glass rounded-2xl px-8 py-6 max-w-3xl">
            <p className="text-slate-700 leading-relaxed">
              <span className="font-bold text-purple-600">99.9% of product managers</span> have never designed a therapeutic protein process, 
              engineered nanoparticle drug delivery, or worked with regulatory T cells. 
              <span className="font-bold text-slate-900"> This scientific foundation is my unfair advantage.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
