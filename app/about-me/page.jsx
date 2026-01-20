'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Link from 'next/link';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap, Award } from 'lucide-react';

export default function AboutMePage() {
  const [expandedExperience, setExpandedExperience] = useState(null);
  const [expandedEducation, setExpandedEducation] = useState(null);

  const experience = [
    {
      id: 1,
      title: "Integrated Product Manager (Principal Product Lead)",
      company: "Ministry of Public and Business Service Delivery",
      location: "Toronto, ON",
      period: "Oct 2024 - Present",
      summary: "Leading product strategy and cross-ministry digital transformation for two flagship government platforms (Vital Events & Business Experience Program) serving millions of Ontarians and Businesses",
      highlights: [
        "Defined long-term vision and OKRs aligning product direction for vital events modernization with policy goals and technical modernization roadmap",
        "Established product management frameworks across four parallel product teams, restructuring delivery from project-centric to product-centric model and reducing cross-dependencies by 60%",
        "Spearheaded API modernization and metadata standardization for legacy systems, enabling compliance with accessibility standards",
        "Migrated 22 eForms from legacy platform onto new Business eXperience Platform (BXP), coordinating across multiple ministries",
        "Authored comprehensive PRDs, BDDs and Epic/Feature/Story Writing Guide adopted across product cluster",
        "Established analytics practice defining KPIs and implementing tracking to measure adoption rates, form completion, and user drop-offs",
        "Promoted integration of AI + OCR solution to extract structured data from scanned paper applications, reducing digitalization time by 60%"
      ],
      tags: ["GovTech", "AI/OCR", "Platform Modernization", "Agile Transformation"]
    },
    {
      id: 2,
      title: "Product Manager / Technical Product Manager",
      company: "TheoremOne LLC (Client: FirstAmerican Title)",
      location: "Remote US",
      period: "Oct 2021 - Jun 2024",
      summary: "Led product strategy and delivery for Document Management System serving North America's top-3 title insurance company, managing $5.6B in annual policy issuance. Pioneered industry-first GenAI solution for underwriting automation.",
      highlights: [
        "Delivered enterprise DMS serving 500+ underwriters, improving operational efficiency by 40% through intelligent search, metadata tagging, and automated workflows",
        "Achieved 90% user adoption within first year through dynamic multi-year product strategy aligned with corporate goals and user-centric design approach",
        "Secured funding for DMS expansion and ticketing system, driving $9.8M in account growth while managing C-suite and divisional head stakeholders",
        "Managed complete lifecycle of API-based solutions (Document API, Search API) from concept to production",
        "Delivered Document Search API with GraphQL design and open schema architecture, enabling flexible metadata structures",
        "Led globally distributed Agile team of 15 members across three continents, achieving 30% reduction in development time",
        "Spearheaded migration from EC2 to Kubernetes-based EKS infrastructure, improving deployment frequency and disaster recovery"
      ],
      tags: ["Enterprise SaaS", "GenAI", "API Development", "Kubernetes", "Global Team Leadership"]
    },
    {
      id: 3,
      title: "Senior Technical Product Manager",
      company: "TELUS Digital",
      location: "Toronto, Canada",
      period: "Jul 2019 - Oct 2021",
      summary: "Scaled SEO practice and analytics capabilities by building centralized data platforms serving 200+ stakeholders. Led CEO-sponsored Data4Good initiative for COVID-19 policy support.",
      highlights: [
        "Architected unified SEO/SEM data warehouse on Google Cloud Platform consolidating 12 disconnected data sources",
        "Achieved $2M CAD annual cost savings by developing automated ETL pipelines using Cloud Functions, Storage, and Scheduler",
        "Designed and deployed real-time analytics dashboards empowering 200+ executives, directors, and managers with self-service insights",
        "Selected by VP as Technical Product Program Manager for CEO-monitored Data4Good project providing anonymized mobility insights to governments",
        "Implemented concurrency optimization, reducing codebase from 12,000 to 700 production-ready lines",
        "Earned HPE-IAPP Privacy Innovation Award (2020) for privacy-preserving approach balancing public health insights with data protection",
        "Developed JavaScript optimization scripts for SEM managers saving TELUS Health $140K CAD annually"
      ],
      tags: ["Data Platform", "GCP", "COVID-19 Analytics", "Award-Winning", "Privacy Innovation"]
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Grainger Inc.",
      location: "Chicago, IL, US",
      period: "Mar 2016 - Mar 2017",
      summary: "Led product strategy for 'Search and Select' functionality on Grainger's B2B/B2C e-commerce platform serving 1.5M products. Drove SEO/SEM optimization and search engine development.",
      highlights: [
        "Increased online sales revenue by $170M USD through NLP-powered search optimization (Inbenta) and intelligent product boosting algorithm across 1.5M SKU catalog",
        "Coordinated with business teams to optimize Solr search engine, driving 7% increase in organic search traffic",
        "Conceptualized and implemented Java-based product boosting algorithm using Adobe Analytics and Endeca, resulting in 14% increase in boosted SKU sales",
        "Implemented Inbenta Natural Language Processing tool to understand user search intent, improving search satisfaction scores by 23%",
        "Initiated Endeca to Solr migration feasibility analysis"
      ],
      tags: ["E-Commerce", "NLP", "Search Optimization", "$170M Revenue Impact"]
    },
    {
      id: 5,
      title: "Sr. Software Developer / Product Owner",
      company: "StateFarm Insurance (via Advansoft International)",
      location: "Bloomington, IL, US",
      period: "May 2014 - Mar 2016",
      summary: "Technical Product Owner for DASL platform (Digital Aggregation Service Layer)—REST API backend serving State Farm's mobile apps and website for 80M+ policyholders.",
      highlights: [
        "Spearheaded web service monitoring initiative by developing Splunk dashboard, delivering $400K savings through proactive issue identification",
        "Coded REST API modules using builder design pattern for DASL aggregation layer in Java/J2EE",
        "Partnered with engineering manager to define KPIs and reporting processes for mobile app adoption and performance measurement"
      ],
      tags: ["REST APIs", "Java/J2EE", "Mobile Platform", "Monitoring"]
    }
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Business Administration",
      institution: "Ivey Business School, Western University",
      location: "London, ON",
      year: "2017 - 2018",
      highlights: [
        "Richard Ivey Excellence Award for outstanding incoming candidate",
        "Ivey Field Project: Developed comprehensive change management system for Therapure Biopharma including OKR review, KPI setting, and quality optimization program",
        "Relevant Coursework: Decision Making with Analytics, Corporate & Global Strategy, Design & Technology Management, Transformational Leadership, Leading Cross-Enterprise Teams"
      ],
      icon: "🎓"
    },
    {
      id: 2,
      degree: "Master of Science in Computer and Information Sciences",
      institution: "Knowledge Systems Institute, Graduate School",
      location: "Skokie, IL",
      year: "2015 - 2017",
      highlights: [
        "Thesis: Designed machine learning model trained on human DNA from 1000 Genome Project to analyze genetic mutations and self-update for variant detection",
        "Relevant Coursework: Software Project Management, Database Management Systems, Decision Support Systems, Data Mining, Computer Networking"
      ],
      icon: "💻"
    },
    {
      id: 3,
      degree: "Master of Science in Biotechnology",
      institution: "McCormick School of Engineering, Northwestern University",
      location: "Evanston, IL",
      year: "2010 - 2012",
      highlights: [
        "Research: Created Perl scripts to analyze Drosophila genome, marking miRNA target sites for gene silencing and expression prediction",
        "Relevant Coursework: Computer Simulation & Risk Analysis, Quality Systems, Project Management"
      ],
      icon: "🧬"
    },
    {
      id: 4,
      degree: "Bachelor of Engineering in Biotechnology",
      institution: "Manipal Institute of Technology, Manipal University",
      location: "Udupi, Karnataka, India",
      year: "2005 - 2009",
      highlights: [
        "Foundation in biotechnology and engineering principles",
        "Research focus on DNA extraction techniques"
      ],
      icon: "🔬"
    }
  ];

  const toggleExperience = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  const toggleEducation = (id) => {
    setExpandedEducation(expandedEducation === id ? null : id);
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl">
              Product Leader with 10+ years of experience leading end-to-end product lifecycles across government,
              financial services, and enterprise technology. Combining a foundation in biotechnology, software
              engineering, and business management with an analytical, systems-thinking approach to product leadership.
            </p>
          </div>
        </section>

        {/* Quick Links */}
        <section className="bg-white border-b border-gray-200 sticky top-16 z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-6 py-4">
              <a href="#experience" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
                <Briefcase size={18} /> Experience
              </a>
              <a href="#education" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
                <GraduationCap size={18} /> Education
              </a>
              <a href="#achievements" className="text-purple-600 hover:text-purple-700 font-semibold flex items-center gap-2">
                <Award size={18} /> Achievements
              </a>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          
          {/* Key Achievements */}
          <section id="achievements" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-gradient-to-br from-purple-500 to-purple-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">$170M</p>
                <p className="text-purple-100">Revenue impact through NLP-powered search optimization at Grainger</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-indigo-500 to-indigo-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">$5.6B</p>
                <p className="text-indigo-100">Platform enablement for title insurance policy issuance</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-pink-500 to-pink-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">HPE-IAPP Award</p>
                <p className="text-pink-100">Privacy Innovation Award (2020) for Data4Good COVID-19 analytics</p>
              </div>
              <div className="p-6 bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl">
                <p className="text-3xl font-bold mb-2">60%</p>
                <p className="text-blue-100">Processing time reduction through AI+OCR for government services</p>
              </div>
            </div>
          </section>

          {/* Experience Section - Expandable */}
          <section id="experience" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Experience</h2>
            <div className="space-y-4">
              {experience.map((exp) => (
                <div 
                  key={exp.id} 
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors"
                >
                  <button
                    onClick={() => toggleExperience(exp.id)}
                    className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                          {expandedExperience === exp.id ? (
                            <ChevronUp className="text-purple-600" size={24} />
                          ) : (
                            <ChevronDown className="text-gray-400" size={24} />
                          )}
                        </div>
                        <p className="text-purple-600 font-semibold">{exp.company}</p>
                        <p className="text-gray-500 text-sm">{exp.location} • {exp.period}</p>
                        <p className="text-gray-700 mt-2">{exp.summary}</p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {expandedExperience === exp.id && (
                    <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                      <h4 className="font-bold text-gray-900 mt-4 mb-3">Key Accomplishments:</h4>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-purple-600 mr-2 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Education Section - Expandable */}
          <section id="education" className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div 
                  key={edu.id} 
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-purple-300 transition-colors"
                >
                  <button
                    onClick={() => toggleEducation(edu.id)}
                    className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex items-start gap-4">
                        <span className="text-3xl">{edu.icon}</span>
                        <div>
                          <div className="flex items-center gap-3">
                            <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                            {expandedEducation === edu.id ? (
                              <ChevronUp className="text-purple-600" size={24} />
                            ) : (
                              <ChevronDown className="text-gray-400" size={24} />
                            )}
                          </div>
                          <p className="text-purple-600 font-semibold">{edu.institution}</p>
                          <p className="text-gray-500 text-sm">{edu.location} • {edu.year}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                  
                  {expandedEducation === edu.id && (
                    <div className="px-6 pb-6 bg-gray-50 border-t border-gray-200">
                      <ul className="space-y-2 mt-4">
                        {edu.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-purple-600 mr-2 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-purple-100 mb-8 text-lg max-w-2xl mx-auto">
              I'm passionate about solving complex product challenges and building organizations that deliver exceptional value.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/resume" 
                className="inline-block px-8 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
              >
                View Full Resume
              </Link>
              <Link 
                href="#contact" 
                className="inline-block px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
              >
                Contact Me
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
