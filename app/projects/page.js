'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ProjectsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Business Experience Platform (BXP)',
      organization: 'Ontario Government',
      category: 'GovTech',
      year: '2025',
      status: 'In Progress',
      description: 'Leading product strategy for replacing ServiceOntario Account for Business as a single window for business services across ministries.',
      challenge: '50-person team stuck in waterfall, frequent direction changes, no clear roadmap',
      approach: [
        'Established product-centric delivery model transitioning from waterfall',
        'Set up 4 parallel streams using Team Topologies (Core, Services, eForms, Migration)',
        'Led discovery and redesign of 22 eForms across 4 ministries',
        'Created Product Requirements Documents and backlog governance frameworks'
      ],
      impact: [
        '~40% reduction in delivery blockers',
        'Enabled parallel execution across streams',
        'Accelerated path to UAT',
        'Improved team autonomy and morale'
      ],
      tags: ['Team Topologies', 'Agile Transformation', 'Platform', 'Multi-Ministry'],
      techStack: ['Azure DevOps', 'React', 'APIs', 'GA4', 'Miro']
    },
    {
      id: 2,
      title: 'AI-Powered OCR for Vital Events',
      organization: 'Ontario Government',
      category: 'GovTech',
      year: '2024-2025',
      status: 'Live',
      description: 'Modernizing 26-year legacy system processing birth, marriage, and death certificates using AI-powered OCR.',
      challenge: 'Paper-based registration requiring manual data entry, high error rates, slow processing',
      approach: [
        'Led product discovery and roadmap for Paper-based Death Registration',
        'Designed AI+OCR solution to extract structured data from scanned applications',
        'Created pre-population workflow as OCR data became production-ready',
        'Established metrics collection strategy for operational efficiency'
      ],
      impact: [
        '60% reduction in manual processing time (keystroke reduction)',
        'Serving 15M Ontario residents',
        'Automated downstream workflows',
        'Faster approvals and reduced errors'
      ],
      tags: ['AI/ML', 'OCR', 'Computer Vision', 'Legacy Modernization', 'Python'],
      techStack: ['Python', 'OCR', 'Azure', 'APIs', 'Legacy Integration']
    },
    {
      id: 3,
      title: 'Document Management System with GenAI',
      organization: 'FirstAmerican Title (via TheoremOne)',
      category: 'Enterprise',
      year: '2021-2024',
      status: 'Live',
      description: 'Led 15-member global team to build DMS with Generative AI capabilities enabling $5.6B in annual title insurance products.',
      challenge: 'Manual document management, inefficient underwriter workflows, no AI automation',
      approach: [
        'Led end-to-end development of Document Management System',
        'Developed GenAI solution training custom LLMs on historical policies',
        'Designed microservices architecture and API layer',
        'Spearheaded Kubernetes migration for scalability'
      ],
      impact: [
        '$5.6B in annual title products enabled',
        '40% increase in underwriter efficiency (docs processed per hour)',
        '90% user adoption in first year',
        'Projected 70% efficiency gain from AI automation'
      ],
      tags: ['GenAI', 'LLM', 'Enterprise Platform', 'Kubernetes', 'APIs', 'Microservices'],
      techStack: ['GenAI/LLM', 'Kubernetes', 'APIs', 'Alfresco', 'GraphQL', 'Figma']
    },
    {
      id: 4,
      title: 'NLP-Powered Search Optimization',
      organization: 'Grainger',
      category: 'E-Commerce',
      year: '2016-2017',
      status: 'Live',
      description: 'Implemented NLP-powered search optimization for 1.5M products driving significant revenue growth.',
      challenge: 'Poor product discovery, low search relevance, suboptimal ranking for high-value SKUs',
      approach: [
        'Designed NLP-powered ranking algorithms using Inbenta',
        'Implemented product boosting based on Adobe Analytics data',
        'Optimized Solr search engine for intent-based queries',
        'Built analytics framework for search-to-purchase conversion'
      ],
      impact: [
        '$170M revenue increase (from organic search traffic)',
        '7% organic traffic growth',
        '14% boost in featured SKU sales',
        'Improved user experience and discovery'
      ],
      tags: ['NLP', 'Search', 'E-Commerce', 'Revenue Growth', 'Analytics'],
      techStack: ['Solr', 'Endeca', 'Inbenta NLP', 'Adobe Analytics', 'Java']
    },
    {
      id: 5,
      title: 'Data4Good - COVID-19 Analytics',
      organization: 'TELUS Digital',
      category: 'Data/Analytics',
      year: '2020',
      status: 'Completed',
      description: 'CEO-sponsored project analyzing anonymized device data to assist Provincial/Federal governments in COVID-19 policy-making.',
      challenge: 'Need for real-time movement data while maintaining strict privacy compliance',
      approach: [
        'Led technical program as PM for CEO-monitored project',
        'Collaborated with data scientists to scale Python algorithms',
        'Reduced models from 12,000 to 700 lines through optimization',
        'Deployed automated solution via GKE'
      ],
      impact: [
        'Won HPE-IAPP Privacy Innovation Award 2020',
        'Enabled Provincial/Federal policy decisions',
        'Generated daily displacement reports',
        'Maintained strict privacy compliance'
      ],
      tags: ['Data Science', 'Privacy', 'Public Health', 'Python', 'Award-Winning'],
      techStack: ['Python', 'GCP', 'GKE', 'Tableau', 'Looker Studio']
    },
    {
      id: 6,
      title: 'Centralized SEO Data Warehouse',
      organization: 'TELUS Digital',
      category: 'Data/Analytics',
      year: '2019-2021',
      status: 'Live',
      description: 'Built centralized GCP data warehouse consolidating SEO, SEM, analytics, and performance data.',
      challenge: 'Dispersed data across tools, manual reporting, no real-time insights, high tool costs',
      approach: [
        'Designed data strategy for platform performance measurement',
        'Built centralized warehouse using BigQuery',
        'Developed automated ETL pipelines with Cloud Functions',
        'Created Google Data Studio dashboards for executives'
      ],
      impact: [
        '$2M CAD cost savings through automation',
        'Real-time executive insights enabled',
        'Comprehensive data governance established',
        'Eliminated manual reporting overhead'
      ],
      tags: ['Data Warehouse', 'GCP', 'BigQuery', 'Analytics', 'Cost Savings'],
      techStack: ['GCP', 'BigQuery', 'Cloud Functions', 'Looker Studio', 'Python']
    },
    {
      id: 7,
      title: 'DASL Platform for Mobile/Desktop',
      organization: 'State Farm Insurance',
      category: 'Enterprise',
      year: '2014-2016',
      status: 'Live',
      description: 'REST-based API layer aggregating backend services for State Farm mobile app and desktop.',
      challenge: 'Mobile app needed unified API layer, multiple backend services, monitoring gaps',
      approach: [
        'Coded modules using builder design pattern in Java/J2EE',
        'Developed Splunk dashboard for log analysis',
        'Implemented synthetic monitoring with Selenium',
        'Migrated from Websphere 6.1 to 8.5'
      ],
      impact: [
        '$400K savings for State Farm through monitoring',
        'Unified API layer for mobile + desktop',
        'Improved performance reporting',
        'Seamless deployment and smoke testing'
      ],
      tags: ['APIs', 'Java/J2EE', 'Mobile', 'Monitoring', 'Websphere'],
      techStack: ['Java', 'J2EE', 'Websphere', 'Splunk', 'Selenium', 'REST APIs']
    }
  ];

  const categories = ['All', 'GovTech', 'Enterprise', 'E-Commerce', 'Data/Analytics'];

  const filteredProjects = selectedFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Spacer */}
      <div className="h-20"></div>

      <div className="container mx-auto px-6 py-20">
        {/* Page Header */}
        <div className="text-center mb-16 fade-in-up">
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-4">
            All <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            Complete portfolio of AI-first platforms, enterprise transformations, and data-driven 
            solutions across GovTech, Fortune 500, and e-commerce
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedFilter(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-200 ${
                selectedFilter === category
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'bg-white text-slate-700 border-2 border-slate-200 hover:border-purple-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto space-y-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      project.status === 'Live' ? 'bg-green-100 text-green-700' :
                      project.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {project.status}
                    </span>
                    <span className="text-purple-600 font-semibold">{project.category}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-600">{project.year}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg font-semibold text-purple-600 mb-4">
                    {project.organization}
                  </p>
                  <p className="text-slate-700 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Challenge & Approach */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    Challenge
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {project.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                    Approach
                  </h3>
                  <ul className="space-y-2">
                    {project.approach.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                        <span className="text-purple-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Impact */}
              <div className="bg-purple-50 rounded-xl p-6 mb-6">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3">
                  Impact & Results
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.impact.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-slate-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-purple-700 bg-purple-100 px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium text-slate-600 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Back Home */}
        <div className="text-center mt-16">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
