'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ArrowRight, Filter } from 'lucide-react';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const projects = [
    {
      id: 'govtech-vital-events',
      title: 'AI-Powered Vital Events Modernization',
      company: 'Ontario Government',
      category: 'GovTech',
      year: '2024 - Present',
      status: 'In Progress',
      summary: 'Leading product strategy for modernizing 26-year legacy vital events system using AI+OCR, serving 15M Ontario residents.',
      impact: ['60% processing time reduction', '50K+ annual applications automated', '$2M+ projected savings'],
      tags: ['AI/OCR', 'Legacy Modernization', 'GovTech', 'Platform Strategy'],
      gradient: 'from-purple-500 to-indigo-600'
    },
    {
      id: 'business-experience-platform',
      title: 'Business Experience Platform (BXP)',
      company: 'Ontario Government',
      category: 'GovTech',
      year: '2024 - Present',
      status: 'In Progress',
      summary: 'Cross-ministry digital transformation platform replacing ServiceOntario Account for Business as single window for business services.',
      impact: ['22 eForms migrated', '60% reduction in cross-dependencies', '4 parallel product teams aligned'],
      tags: ['Platform', 'Multi-Ministry', 'Team Topologies', 'Agile Transformation'],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'document-management-system',
      title: 'Enterprise Document Management System with GenAI',
      company: 'FirstAmerican Title (via TheoremOne)',
      category: 'Enterprise',
      year: '2021 - 2024',
      status: 'Delivered',
      summary: 'Led 15-member global team to build DMS with Generative AI capabilities enabling $5.6B in annual title insurance products.',
      impact: ['$5.6B annual products enabled', '40% efficiency gains', '90% user adoption', '500+ underwriters served'],
      tags: ['GenAI', 'Enterprise SaaS', 'Kubernetes', 'APIs', 'Global Team'],
      gradient: 'from-emerald-500 to-teal-600'
    },
    {
      id: 'data4good-covid',
      title: 'Data4Good - COVID-19 Analytics Platform',
      company: 'TELUS Digital',
      category: 'Data Platform',
      year: '2020',
      status: 'Delivered',
      summary: 'CEO-sponsored project analyzing anonymized device data to assist Provincial/Federal governments in COVID-19 policy-making.',
      impact: ['HPE-IAPP Privacy Innovation Award 2020', 'Government policy influence', 'Privacy-preserving analytics'],
      tags: ['Privacy Innovation', 'Data Science', 'GCP', 'Award-Winning'],
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      id: 'seo-data-warehouse',
      title: 'Centralized SEO/SEM Data Warehouse',
      company: 'TELUS Digital',
      category: 'Data Platform',
      year: '2019 - 2021',
      status: 'Delivered',
      summary: 'Built centralized GCP data warehouse consolidating 12 disconnected data sources, serving 200+ stakeholders.',
      impact: ['$2M CAD annual savings', '12 data sources unified', '200+ stakeholders enabled'],
      tags: ['GCP', 'BigQuery', 'ETL', 'Analytics', 'Cost Optimization'],
      gradient: 'from-orange-500 to-amber-600'
    },
    {
      id: 'nlp-search-optimization',
      title: 'NLP-Powered Search Optimization',
      company: 'Grainger',
      category: 'E-Commerce',
      year: '2016 - 2017',
      status: 'Delivered',
      summary: 'Implemented NLP-powered search optimization for 1.5M products driving significant revenue growth on B2B/B2C platform.',
      impact: ['$170M revenue increase', '7% organic traffic growth', '14% boost in featured SKU sales'],
      tags: ['NLP', 'Search', 'E-Commerce', 'Revenue Growth'],
      gradient: 'from-violet-500 to-purple-600'
    },
    {
      id: 'dasl-platform',
      title: 'DASL Platform for Mobile/Desktop',
      company: 'StateFarm Insurance',
      category: 'Enterprise',
      year: '2014 - 2016',
      status: 'Delivered',
      summary: 'REST-based API layer aggregating backend services for State Farm mobile app and desktop serving 80M+ policyholders.',
      impact: ['$400K savings through monitoring', '80M+ policyholders served', 'Unified API layer'],
      tags: ['APIs', 'Java/J2EE', 'Mobile', 'Enterprise'],
      gradient: 'from-red-500 to-orange-600'
    }
  ];

  const categories = ['All', 'GovTech', 'Enterprise', 'Data Platform', 'E-Commerce'];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Portfolio
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              A collection of transformational projects across government, enterprise, and e-commerce. 
              Each project tells a story of solving complex problems and creating measurable impact.
            </p>
          </div>
        </section>

        {/* Filter Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 text-gray-600">
              <Filter size={20} />
              <span className="font-medium">Filter:</span>
            </div>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <Link key={project.id} href={`/portfolio/${project.id}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full">
                  {/* Gradient Header */}
                  <div className={`h-3 bg-gradient-to-r ${project.gradient}`}></div>
                  
                  <div className="p-8">
                    {/* Status & Category */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                        project.status === 'In Progress' 
                          ? 'bg-blue-100 text-blue-700' 
                          : 'bg-green-100 text-green-700'
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-purple-600 font-semibold text-sm">{project.category}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-500 text-sm">{project.year}</span>
                    </div>

                    {/* Title & Company */}
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h2>
                    <p className="text-purple-600 font-semibold mb-4">{project.company}</p>

                    {/* Summary */}
                    <p className="text-gray-700 mb-6">{project.summary}</p>

                    {/* Impact */}
                    <div className="bg-purple-50 rounded-xl p-4 mb-6">
                      <p className="text-xs font-bold text-gray-500 uppercase mb-2">Key Impact</p>
                      <ul className="space-y-1">
                        {project.impact.map((item, idx) => (
                          <li key={idx} className="flex items-center text-sm text-gray-700">
                            <span className="text-purple-600 mr-2">✓</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* View Details Link */}
                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-3 transition-all">
                      View Case Study <ArrowRight size={18} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Interested in Working Together?
            </h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              Let's discuss how I can help with your next project or initiative.
            </p>
            <Link 
              href="#contact" 
              className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              Let's Talk
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
