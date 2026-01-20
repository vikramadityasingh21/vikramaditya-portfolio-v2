'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { 
  Search, Target, Map, Rocket, Users, BarChart3, 
  ArrowRight, CheckCircle, Layers, GitBranch, 
  Settings, Gauge, FileText, Calendar, Shield,
  Zap, TrendingUp, Lightbulb, Award
} from 'lucide-react';

export default function ServicesPage() {
  const [activePhase, setActivePhase] = useState(null);

  const operatingPhases = [
    {
      id: 'discover',
      number: '01',
      title: 'Discover',
      subtitle: 'Context & Problem Framing',
      icon: Search,
      color: 'from-purple-500 to-purple-600',
      description: 'Understand business context, constraints, and incentives. Identify real problems vs. symptoms.',
      activities: [
        'Stakeholder interviews & alignment sessions',
        'Current-state assessments',
        'Value chain & service mapping',
        'Competitive & market analysis',
        'User research synthesis'
      ],
      outcomes: [
        'Clear problem statements',
        'Shared understanding of priorities',
        'Success metrics defined'
      ]
    },
    {
      id: 'strategize',
      number: '02',
      title: 'Strategize',
      subtitle: 'Vision & Strategic Direction',
      icon: Target,
      color: 'from-indigo-500 to-indigo-600',
      description: 'Create compelling, executable vision. Define value propositions and strategic themes.',
      activities: [
        'Vision narratives & north-star definition',
        'Value proposition design',
        'Strategic trade-off analysis',
        'OKR framework setup',
        'Business case development'
      ],
      outcomes: [
        'Direction teams can align behind',
        'Strategy that guides decisions',
        'Investment priorities clear'
      ]
    },
    {
      id: 'plan',
      number: '03',
      title: 'Plan',
      subtitle: 'Strategic Roadmapping',
      icon: Map,
      color: 'from-blue-500 to-blue-600',
      description: 'Balance short-term delivery with long-term vision. Create decision-ready roadmaps.',
      activities: [
        'Now/Next/Later prioritization',
        'Dependency mapping',
        'Resource & capacity planning',
        'Risk assessment (RAID logs)',
        'Release planning'
      ],
      outcomes: [
        'Decision-ready roadmaps',
        'Flexibility without losing direction',
        'Clear milestones & checkpoints'
      ]
    },
    {
      id: 'execute',
      number: '04',
      title: 'Execute',
      subtitle: 'Delivery & Implementation',
      icon: Rocket,
      color: 'from-emerald-500 to-emerald-600',
      description: 'End-to-end ownership from idea to impact. No handoffs or silos.',
      activities: [
        '5D Model: Discovery → Definition → Design → Development → Delivery',
        'Sprint planning & backlog management',
        'Cross-functional team coordination',
        'Blocker resolution & escalation',
        'Quality assurance & UAT'
      ],
      outcomes: [
        'Continuous flow from idea to impact',
        'Fewer gaps between strategy and execution',
        'Predictable delivery cadence'
      ]
    },
    {
      id: 'scale',
      number: '05',
      title: 'Scale',
      subtitle: 'Program & Team Structure',
      icon: Users,
      color: 'from-orange-500 to-orange-600',
      description: 'Design programs for clarity, speed, and accountability. Build high-performing teams.',
      activities: [
        'Program structures & governance',
        'Team Topologies implementation',
        'Clear roles & decision rights (RACI)',
        'Dependency & risk management',
        'Scaled Agile (SAFe) implementation'
      ],
      outcomes: [
        'Predictable delivery',
        'Teams that move faster with less friction',
        'Reduced cross-team dependencies'
      ]
    },
    {
      id: 'optimize',
      number: '06',
      title: 'Optimize',
      subtitle: 'Measurement & Learning',
      icon: BarChart3,
      color: 'from-pink-500 to-pink-600',
      description: 'Measure outcomes, not just outputs. Build feedback loops for continuous improvement.',
      activities: [
        'KPI definition & tracking',
        'Analytics implementation',
        'Retrospectives & learning loops',
        'Process optimization',
        'Performance dashboards'
      ],
      outcomes: [
        'Sustainable success',
        'Continuous improvement culture',
        'Data-driven decisions'
      ]
    }
  ];

  const frameworks = [
    {
      category: 'Product Management',
      icon: Layers,
      items: [
        { name: '5D Product Model', desc: 'Discovery → Definition → Design → Development → Delivery' },
        { name: 'Jobs to be Done', desc: 'Understanding user motivations and desired outcomes' },
        { name: 'Product Discovery', desc: 'Opportunity assessment, experiments, validation' },
        { name: 'Prioritization Frameworks', desc: 'RICE, MoSCoW, Value vs. Effort, Kano' }
      ]
    },
    {
      category: 'Program Management',
      icon: GitBranch,
      items: [
        { name: 'RAID Logs', desc: 'Risks, Assumptions, Issues, Dependencies tracking' },
        { name: 'Governance Models', desc: 'Steering committees, decision rights, escalation paths' },
        { name: 'Milestone Planning', desc: 'Critical path analysis, checkpoint reviews' },
        { name: 'Stakeholder Management', desc: 'Communication plans, alignment cadences' }
      ]
    },
    {
      category: 'Agile & Delivery',
      icon: Zap,
      items: [
        { name: 'Scrum & Kanban', desc: 'Sprint planning, daily standups, retrospectives' },
        { name: 'SAFe (Scaled Agile)', desc: 'PI Planning, ARTs, Solution Trains' },
        { name: 'Team Topologies', desc: 'Stream-aligned, Platform, Enabling, Complicated-subsystem teams' },
        { name: 'Continuous Delivery', desc: 'CI/CD, feature flags, incremental rollouts' }
      ]
    },
    {
      category: 'Product Operations',
      icon: Settings,
      items: [
        { name: 'Product Ops Setup', desc: 'Tools, processes, data infrastructure' },
        { name: 'Backlog Governance', desc: 'Epic/Feature/Story frameworks, definition of ready/done' },
        { name: 'Release Management', desc: 'Release trains, go-live coordination, rollback plans' },
        { name: 'Documentation Standards', desc: 'PRDs, BRDs, technical specs, runbooks' }
      ]
    },
    {
      category: 'Strategy & Planning',
      icon: Target,
      items: [
        { name: 'OKRs', desc: 'Objectives and Key Results for outcome-focused planning' },
        { name: 'Now/Next/Later', desc: 'Flexible roadmapping without false precision' },
        { name: 'Wardley Mapping', desc: 'Value chain visualization and strategic positioning' },
        { name: 'Business Model Canvas', desc: 'Value propositions, channels, revenue models' }
      ]
    },
    {
      category: 'Data & Analytics',
      icon: Gauge,
      items: [
        { name: 'KPI Frameworks', desc: 'Leading/lagging indicators, North Star metrics' },
        { name: 'Analytics Implementation', desc: 'Event tracking, funnel analysis, cohort analysis' },
        { name: 'A/B Testing', desc: 'Experiment design, statistical significance, learnings' },
        { name: 'Dashboarding', desc: 'Executive dashboards, operational metrics, self-service BI' }
      ]
    }
  ];

  const timelinePlan = [
    {
      phase: '0-30 Days',
      title: 'Foundation',
      color: 'bg-purple-600',
      items: [
        'Stakeholder discovery & interviews',
        'Current-state assessment',
        'Problem framing & alignment',
        'Quick wins identification',
        'Success metrics definition'
      ]
    },
    {
      phase: '31-60 Days',
      title: 'Direction',
      color: 'bg-indigo-600',
      items: [
        'Vision & strategy articulation',
        'Roadmap development',
        'Program structure setup',
        'Team alignment & roles',
        'Prioritization framework'
      ]
    },
    {
      phase: '61-90 Days',
      title: 'Momentum',
      color: 'bg-emerald-600',
      items: [
        'Execution in motion',
        'First deliverables shipped',
        'Measurement in place',
        'Optimization cycles started',
        'Scalable patterns established'
      ]
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 py-16 md:py-24 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-purple-300 font-semibold mb-4 tracking-wide uppercase">How I Create Impact</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                From Vision to Value
              </h1>
              <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                Strategy → Structure → Execution → Measurable Impact
              </p>
              <p className="text-lg text-purple-200 max-w-3xl leading-relaxed">
                I work from 3000-ft strategy to ground-level execution, helping organizations move from 
                ambiguity to clarity and from vision to real, measurable outcomes.
              </p>
            </div>
          </div>
        </section>

        {/* Operating Model - Visual Flow */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Operating Model</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">End-to-end approach from understanding to impact</p>
            </div>

            {/* Phase Cards - Horizontal Flow */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {operatingPhases.map((phase, idx) => {
                const Icon = phase.icon;
                return (
                  <button
                    key={phase.id}
                    onClick={() => setActivePhase(activePhase === phase.id ? null : phase.id)}
                    className={`relative p-6 rounded-2xl text-center transition-all duration-300 ${
                      activePhase === phase.id 
                        ? 'bg-gradient-to-br ' + phase.color + ' text-white shadow-xl scale-105' 
                        : 'bg-white hover:shadow-lg border border-gray-200'
                    }`}
                  >
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 ${
                      activePhase === phase.id ? 'bg-white/20' : 'bg-purple-100'
                    }`}>
                      <Icon size={24} className={activePhase === phase.id ? 'text-white' : 'text-purple-600'} />
                    </div>
                    <p className={`text-xs font-bold mb-1 ${activePhase === phase.id ? 'text-white/80' : 'text-purple-600'}`}>
                      {phase.number}
                    </p>
                    <h3 className={`font-bold ${activePhase === phase.id ? 'text-white' : 'text-gray-900'}`}>
                      {phase.title}
                    </h3>
                    {idx < operatingPhases.length - 1 && (
                      <ArrowRight 
                        size={20} 
                        className="absolute -right-3 top-1/2 transform -translate-y-1/2 text-gray-300 hidden lg:block" 
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Expanded Phase Detail */}
            {activePhase && (
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 animate-fadeIn">
                {operatingPhases.filter(p => p.id === activePhase).map(phase => {
                  const Icon = phase.icon;
                  return (
                    <div key={phase.id}>
                      <div className="flex items-start gap-6 mb-8">
                        <div className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center`}>
                          <Icon size={32} className="text-white" />
                        </div>
                        <div>
                          <p className="text-purple-600 font-bold text-sm mb-1">{phase.number}. {phase.subtitle}</p>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                          <p className="text-gray-600">{phase.description}</p>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <Settings size={18} className="text-purple-600" />
                            What I Do
                          </h4>
                          <ul className="space-y-3">
                            {phase.activities.map((activity, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700">{activity}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                            <TrendingUp size={18} className="text-emerald-600" />
                            Outcomes
                          </h4>
                          <ul className="space-y-3">
                            {phase.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <ArrowRight size={18} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-700 font-medium">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* 5D Product Model Highlight */}
        <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The 5D Product & Delivery Model</h2>
              <p className="text-purple-200 max-w-2xl mx-auto">End-to-end ownership. No handoffs. No silos. Continuous flow from idea to impact.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {['Discovery', 'Definition', 'Design', 'Development', 'Delivery'].map((stage, idx) => (
                <div key={stage} className="flex items-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 text-center border border-white/20">
                    <p className="text-3xl font-bold mb-1">D{idx + 1}</p>
                    <p className="text-purple-200 text-sm font-medium">{stage}</p>
                  </div>
                  {idx < 4 && (
                    <ArrowRight size={24} className="text-purple-300 mx-2 hidden md:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Frameworks & Methodologies */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frameworks & Methodologies</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Battle-tested approaches adapted to your context</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frameworks.map((framework) => {
                const Icon = framework.icon;
                return (
                  <div key={framework.category} className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                        <Icon size={24} className="text-purple-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{framework.category}</h3>
                    </div>
                    <div className="space-y-4">
                      {framework.items.map((item) => (
                        <div key={item.name} className="border-l-2 border-purple-200 pl-4">
                          <p className="font-semibold text-gray-900">{item.name}</p>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 30-60-90 Day Plan */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">30-60-90 Day Value Plan</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Structured approach to delivering value fast</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {timelinePlan.map((phase, idx) => (
                <div key={phase.phase} className="relative">
                  {idx < timelinePlan.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gray-300"></div>
                  )}
                  <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow h-full">
                    <div className={`inline-block ${phase.color} text-white text-sm font-bold px-4 py-2 rounded-full mb-4`}>
                      {phase.phase}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle size={18} className="text-purple-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Engagement Types */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Can Work Together</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Flexible engagement models based on your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Lightbulb size={28} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Advisory</h3>
                <p className="text-gray-600 mb-4">Strategic guidance and coaching for product leaders and teams.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Product strategy reviews</li>
                  <li>• Leadership coaching</li>
                  <li>• Team assessments</li>
                </ul>
              </div>

              <div className="border-2 border-purple-400 rounded-2xl p-8 bg-purple-50 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
                <div className="w-14 h-14 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Rocket size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Embedded Leadership</h3>
                <p className="text-gray-600 mb-4">Hands-on product leadership embedded in your organization.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Interim/fractional PM leadership</li>
                  <li>• Program leadership</li>
                  <li>• Transformation execution</li>
                </ul>
              </div>

              <div className="border-2 border-purple-200 rounded-2xl p-8 hover:border-purple-400 transition-colors">
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Award size={28} className="text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Workshops & Training</h3>
                <p className="text-gray-600 mb-4">Capability building for teams and organizations.</p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Product management training</li>
                  <li>• Agile/SAFe workshops</li>
                  <li>• Team Topologies implementation</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Move from Vision to Execution?
            </h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help your organization deliver real, measurable outcomes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="#contact" 
                className="inline-block px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Let's Talk
              </Link>
              <Link 
                href="/portfolio" 
                className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
