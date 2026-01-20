'use client';

import { useParams } from 'next/navigation';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { ArrowLeft, Calendar, Building, MapPin, Users, Target, Lightbulb, CheckCircle } from 'lucide-react';

// Project data - in production this would come from a CMS or database
const projectsData = {
  'govtech-vital-events': {
    title: 'AI-Powered Vital Events Modernization',
    company: 'Ministry of Public and Business Service Delivery',
    location: 'Toronto, ON',
    year: '2024 - Present',
    role: 'Integrated Product Manager (Principal Product Lead)',
    status: 'In Progress',
    gradient: 'from-purple-500 to-indigo-600',
    overview: 'Leading product strategy and cross-ministry digital transformation for Ontario\'s vital events registration system (Birth, Marriage, Death certificates) serving 15M residents. Championing AI+OCR solution to modernize a 26-year legacy system.',
    challenge: 'The vital events registration system was built 26 years ago and relies heavily on paper-based processes. Staff manually entered data from 50K+ annual paper applications, leading to high error rates, slow processing times, and citizen frustration. The legacy system couldn\'t scale to meet modern expectations.',
    approach: [
      'Defined long-term vision and OKRs aligning product direction with policy goals and technical modernization roadmap',
      'Established product management frameworks across four parallel product teams, restructuring from project-centric to product-centric model',
      'Spearheaded API modernization and metadata standardization for legacy systems',
      'Promoted integration of AI + OCR solution to extract structured data from scanned paper applications',
      'Established analytics practice defining KPIs to measure adoption rates, form completion, and user drop-offs',
      'Authored comprehensive PRDs, BDDs and Epic/Feature/Story Writing Guide adopted across product cluster'
    ],
    outcomes: [
      { metric: '60%', description: 'Reduction in processing time through AI+OCR automation' },
      { metric: '50K+', description: 'Annual paper applications to be automated' },
      { metric: '$2M+', description: 'Projected annual savings' },
      { metric: '60%', description: 'Reduction in cross-team dependencies' }
    ],
    technologies: ['AI/ML', 'OCR', 'Azure DevOps', 'APIs', 'Power BI', 'Google Analytics'],
    learnings: 'Government transformation requires balancing innovation with strict regulatory compliance. Building trust with stakeholders through quick wins while maintaining long-term vision is essential. Product-centric operating models can dramatically improve delivery even in traditional government environments.'
  },
  'business-experience-platform': {
    title: 'Business Experience Platform (BXP)',
    company: 'Ministry of Public and Business Service Delivery',
    location: 'Toronto, ON',
    year: '2024 - Present',
    role: 'Integrated Product Manager (Principal Product Lead)',
    status: 'In Progress',
    gradient: 'from-blue-500 to-cyan-600',
    overview: 'Leading product strategy for replacing ServiceOntario Account for Business as a single window for business services across ministries. Coordinating across multiple ministries to deliver unified business experience.',
    challenge: 'Businesses in Ontario needed to navigate multiple ministry portals and systems to complete various government services. The fragmented experience led to confusion, duplicated data entry, and inefficient service delivery. A unified platform was needed to streamline business interactions with government.',
    approach: [
      'Led complex cross-team coordination in government environment with multiple stakeholders',
      'Migrated 22 eForms from legacy platform onto new Business eXperience Platform (BXP)',
      'Partnered with business and technical architects to shape platform solution design',
      'Balanced policy requirements, system dependencies, and technical feasibility',
      'Established 4 parallel product streams using Team Topologies approach',
      'Created Product Requirements Documents and backlog governance frameworks'
    ],
    outcomes: [
      { metric: '22', description: 'eForms migrated from legacy platform' },
      { metric: '4', description: 'Parallel product teams aligned' },
      { metric: '60%', description: 'Reduction in cross-dependencies' },
      { metric: '~40%', description: 'Reduction in delivery blockers' }
    ],
    technologies: ['React', 'APIs', 'Azure DevOps', 'Miro', 'GA4'],
    learnings: 'Multi-ministry coordination requires exceptional stakeholder management and clear governance frameworks. Team Topologies principles can work effectively even in government contexts when adapted appropriately.'
  },
  'document-management-system': {
    title: 'Enterprise Document Management System with GenAI',
    company: 'FirstAmerican Title (via TheoremOne)',
    location: 'Remote US',
    year: '2021 - 2024',
    role: 'Product Manager / Technical Product Manager',
    status: 'Delivered',
    gradient: 'from-emerald-500 to-teal-600',
    overview: 'Led product strategy and delivery for Document Management System serving North America\'s top-3 title insurance company, managing $5.6B in annual policy issuance. Pioneered industry-first GenAI solution for underwriting automation.',
    challenge: 'The title insurance company processed millions of documents annually across 500+ underwriters. Manual document management led to inefficiencies, and there was no AI automation. The existing system couldn\'t scale with business growth.',
    approach: [
      'Delivered enterprise DMS with intelligent search, metadata tagging, and automated workflows',
      'Developed GenAI solution training custom LLMs on historical policies for underwriting automation',
      'Managed complete lifecycle of API-based solutions (Document API, Search API) from concept to production',
      'Led globally distributed Agile team of 15 members across three continents',
      'Spearheaded migration from EC2 to Kubernetes-based EKS infrastructure',
      'Delivered Document Search API with GraphQL design and open schema architecture'
    ],
    outcomes: [
      { metric: '$5.6B', description: 'Annual title products enabled' },
      { metric: '40%', description: 'Increase in underwriter efficiency' },
      { metric: '90%', description: 'User adoption in first year' },
      { metric: '30%', description: 'Reduction in development time' }
    ],
    technologies: ['GenAI/LLM', 'Kubernetes', 'GraphQL', 'Alfresco', 'APIs', 'AWS EKS'],
    learnings: 'Enterprise GenAI implementation requires strong governance and clear ROI metrics. Global team leadership demands clear communication cadences and cultural sensitivity. Infrastructure modernization should be paired with feature delivery for continuous value.'
  },
  'data4good-covid': {
    title: 'Data4Good - COVID-19 Analytics Platform',
    company: 'TELUS Digital',
    location: 'Toronto, Canada',
    year: '2020',
    role: 'Technical Product Program Manager',
    status: 'Delivered',
    gradient: 'from-pink-500 to-rose-600',
    overview: 'CEO-sponsored project analyzing anonymized device data to assist Provincial/Federal governments in COVID-19 policy-making while maintaining strict privacy compliance.',
    challenge: 'During the COVID-19 pandemic, governments needed real-time movement data to make informed policy decisions. However, this required balancing public health needs with strict privacy protection requirements.',
    approach: [
      'Selected by VP as Technical Product Program Manager for CEO-monitored project',
      'Collaborated with data science team to scale Python algorithms generating daily displacement reports',
      'Implemented concurrency optimization reducing codebase from 12,000 to 700 production-ready lines',
      'Oversaw cloud deployment via Google Kubernetes Engine (GKE)',
      'Created Tableau dashboards for government policy makers',
      'Maintained strict privacy compliance throughout'
    ],
    outcomes: [
      { metric: 'Award', description: 'HPE-IAPP Privacy Innovation Award 2020' },
      { metric: 'Daily', description: 'Displacement reports for governments' },
      { metric: '94%', description: 'Code reduction through optimization' },
      { metric: 'National', description: 'Impact on policy decisions' }
    ],
    technologies: ['Python', 'GCP', 'GKE', 'Tableau', 'Looker Studio'],
    learnings: 'Privacy-preserving analytics is possible with the right architecture and governance. CEO-visibility projects require exceptional communication and rapid iteration. Data science optimization can dramatically reduce operational complexity.'
  },
  'seo-data-warehouse': {
    title: 'Centralized SEO/SEM Data Warehouse',
    company: 'TELUS Digital',
    location: 'Toronto, Canada',
    year: '2019 - 2021',
    role: 'Senior Technical Product Manager',
    status: 'Delivered',
    gradient: 'from-orange-500 to-amber-600',
    overview: 'Built centralized GCP data warehouse consolidating SEO, SEM, analytics, and performance data from 12 disconnected sources, serving 200+ stakeholders.',
    challenge: 'Data was dispersed across 12 different tools and sources, requiring 40 hours/week of manual reporting. Executives and managers lacked real-time insights, and high tool costs were impacting the budget.',
    approach: [
      'Architected unified SEO/SEM data warehouse on Google Cloud Platform',
      'Developed automated ETL pipelines using Cloud Functions, Storage, and Scheduler',
      'Designed and deployed real-time analytics dashboards in Google Data Studio',
      'Established comprehensive data governance model defining roles and IAM access',
      'Implemented change management program driving Data-as-a-Service adoption',
      'Conducted training sessions, workshops, and weekly office hours'
    ],
    outcomes: [
      { metric: '$2M', description: 'CAD annual cost savings' },
      { metric: '200+', description: 'Stakeholders empowered with self-service insights' },
      { metric: '12', description: 'Data sources consolidated' },
      { metric: '40hrs', description: 'Weekly manual work eliminated' }
    ],
    technologies: ['GCP', 'BigQuery', 'Cloud Functions', 'Looker Studio', 'Python'],
    learnings: 'Data democratization requires not just technical infrastructure but strong change management. Self-service analytics empowers teams but requires proper governance. ROI from data platforms compounds over time.'
  },
  'nlp-search-optimization': {
    title: 'NLP-Powered Search Optimization',
    company: 'Grainger',
    location: 'Chicago, IL, US',
    year: '2016 - 2017',
    role: 'Product Manager',
    status: 'Delivered',
    gradient: 'from-violet-500 to-purple-600',
    overview: 'Led product strategy for "Search and Select" functionality on Grainger\'s B2B/B2C e-commerce platform serving 1.5M products. Drove SEO/SEM optimization and search engine development.',
    challenge: 'Poor product discovery and low search relevance were impacting sales. The existing search couldn\'t understand user intent, and high-value SKUs weren\'t being promoted effectively.',
    approach: [
      'Implemented NLP-powered search optimization using Inbenta',
      'Conceptualized and implemented Java-based product boosting algorithm',
      'Coordinated with business teams to optimize Solr search engine',
      'Used Adobe Analytics data for intelligent product ranking',
      'Initiated Endeca to Solr migration feasibility analysis'
    ],
    outcomes: [
      { metric: '$170M', description: 'Revenue increase from organic search' },
      { metric: '7%', description: 'Organic traffic growth' },
      { metric: '14%', description: 'Boost in featured SKU sales' },
      { metric: '23%', description: 'Improvement in search satisfaction' }
    ],
    technologies: ['Solr', 'Endeca', 'Inbenta NLP', 'Adobe Analytics', 'Java'],
    learnings: 'Search optimization has direct revenue impact in e-commerce. NLP can significantly improve user intent understanding. Data-driven product boosting creates compounding returns.'
  },
  'dasl-platform': {
    title: 'DASL Platform for Mobile/Desktop',
    company: 'StateFarm Insurance',
    location: 'Bloomington, IL, US',
    year: '2014 - 2016',
    role: 'Sr. Software Developer / Product Owner',
    status: 'Delivered',
    gradient: 'from-red-500 to-orange-600',
    overview: 'Technical Product Owner for DASL platform (Digital Aggregation Service Layer)—REST API backend serving State Farm\'s mobile apps and website for 80M+ policyholders.',
    challenge: 'State Farm\'s mobile app needed a unified API layer to aggregate responses from multiple backend services. There were monitoring gaps and no consolidated view of system performance.',
    approach: [
      'Coded REST API modules using builder design pattern in Java/J2EE',
      'Developed Splunk dashboard for log analysis and performance reporting',
      'Implemented synthetic monitoring with Selenium',
      'Migrated from Websphere 6.1 to 8.5',
      'Partnered with engineering manager to define KPIs and reporting processes'
    ],
    outcomes: [
      { metric: '$400K', description: 'Savings through proactive monitoring' },
      { metric: '80M+', description: 'Policyholders served' },
      { metric: 'Unified', description: 'API layer for mobile + desktop' },
      { metric: 'Improved', description: 'Performance reporting and visibility' }
    ],
    technologies: ['Java', 'J2EE', 'Websphere', 'Splunk', 'Selenium', 'REST APIs'],
    learnings: 'Proactive monitoring delivers significant ROI. API aggregation layers simplify client development. Performance visibility is essential for enterprise systems.'
  }
};

export default function PortfolioDetailPage() {
  const params = useParams();
  const projectId = params.slug;
  const project = projectsData[projectId];

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
            <Link href="/portfolio" className="text-purple-600 hover:underline">
              ← Back to Portfolio
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className={`bg-gradient-to-r ${project.gradient} py-16 md:py-24`}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Link href="/portfolio" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to Portfolio
            </Link>
            
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                project.status === 'In Progress' 
                  ? 'bg-white/20 text-white' 
                  : 'bg-white/30 text-white'
              }`}>
                {project.status}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            
            <div className="flex flex-wrap gap-6 text-white/90 mt-6">
              <span className="flex items-center gap-2">
                <Building size={18} />
                {project.company}
              </span>
              <span className="flex items-center gap-2">
                <MapPin size={18} />
                {project.location}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={18} />
                {project.year}
              </span>
              <span className="flex items-center gap-2">
                <Users size={18} />
                {project.role}
              </span>
            </div>
          </div>
        </section>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{project.overview}</p>
            </section>

            {/* Key Outcomes */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Outcomes</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.outcomes.map((outcome, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl shadow-sm text-center">
                    <p className="text-3xl font-bold text-purple-600 mb-2">{outcome.metric}</p>
                    <p className="text-sm text-gray-600">{outcome.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Challenge */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Target className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">The Challenge</h2>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>
            </section>

            {/* Approach */}
            <section className="mb-12">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="text-purple-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">My Approach</h2>
              </div>
              <ul className="space-y-3">
                {project.approach.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CheckCircle className="text-purple-600 mr-3 mt-1 flex-shrink-0" size={20} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Technologies */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Technologies & Tools</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Key Learnings */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Learnings</h2>
              <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl border-l-4 border-purple-600">
                <p className="text-gray-700 leading-relaxed italic">{project.learnings}</p>
              </div>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Want to discuss this project?</h2>
              <p className="text-purple-100 mb-6">I'd love to share more details about my approach and learnings.</p>
              <Link 
                href="#contact" 
                className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                Get in Touch
              </Link>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
