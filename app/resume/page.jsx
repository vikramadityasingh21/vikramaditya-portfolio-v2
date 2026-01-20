'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { Download, Printer, Mail, Linkedin, MapPin, Phone } from 'lucide-react';

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        {/* Header with Actions */}
        <div className="sticky top-16 z-30 bg-white border-b border-gray-200 print:hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-900">Resume</h1>
            <div className="flex gap-3">
              <a
                href="/VikramadityaSinghResume.pdf"
                download
                className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Download size={20} />
                <span className="hidden sm:inline">Download PDF</span>
              </a>
              <button
                onClick={handlePrint}
                className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-200 text-gray-900 rounded-lg hover:bg-gray-300 transition-colors"
              >
                <Printer size={20} />
                <span className="hidden sm:inline">Print</span>
              </button>
            </div>
          </div>
        </div>

        {/* Resume Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 print:py-0">
          <div className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none">
            
            {/* Header Section */}
            <div className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-8 print:bg-purple-700">
              <h1 className="text-4xl font-bold mb-2">VIKRAMADITYA SINGH, MS/MBA</h1>
              <div className="flex flex-wrap gap-4 mt-4 text-purple-100 text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={16} />
                  Toronto, ON
                </span>
                <span className="flex items-center gap-1">
                  <Mail size={16} />
                  vikramaditya@u.northwestern.edu
                </span>
                <span className="flex items-center gap-1">
                  <Phone size={16} />
                  437-383-0784
                </span>
                <span className="flex items-center gap-1">
                  <Linkedin size={16} />
                  linkedin.com/in/singhvikramaditya
                </span>
              </div>
            </div>

            <div className="p-8">
              {/* Profile Summary */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  PROFILE SUMMARY
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Product Leader with 10+ years of experience leading end-to-end product lifecycles across government,
                  financial services, and enterprise technology. Combining a foundation in biotechnology, software
                  engineering, and business management, brings an analytical, systems-thinking approach to product
                  leadership. Proven expertise in AI/ML-powered platforms, data strategy, and platform modernization, with a
                  track record of delivering scalable B2B SaaS solutions and driving digital transformation across complex
                  ecosystems. Skilled in product strategy, cross-functional leadership, and API-first architecture, delivering
                  measurable business outcomes through data-informed decision-making and user-centered design.
                </p>
              </section>

              {/* Key Achievements */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  KEY ACHIEVEMENTS
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">●</span>
                    <span><strong className="text-purple-700">$170M Revenue Impact</strong> | Increased Grainger's e-commerce sales through NLP-powered search optimization & intelligent product boosting across 1.5M SKU catalog, driving 7% organic traffic</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">●</span>
                    <span><strong className="text-purple-700">$5.6B Platform Enablement</strong> | Led 15-person team delivering Document Management System for top-3 title insurer, achieving 40% efficiency gains and 90% user adoption while supporting billions in annual policy issuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">●</span>
                    <span><strong className="text-purple-700">Award-Winning AI Innovation</strong> | Earned HPE-IAPP Privacy Innovation Award (2020) for Data4Good project—privacy-preserving COVID-19 analytics platform using anonymized device data to inform government policy decisions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-600 font-bold mr-2">●</span>
                    <span><strong className="text-purple-700">AI-Powered Government Services</strong> | Championed AI+OCR solution for Ontario's vital events registration, automating data extraction from 50K+ annual paper applications with 60% processing time reduction and $2M+ projected savings</span>
                  </li>
                </ul>
              </section>

              {/* Skills Grid */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  SKILLS & EXPERTISE
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Product</h3>
                    <p className="text-sm text-gray-600">Product Strategy Design, Product Vision Crafting, Roadmapping and Prioritization, Product Discovery & Definition, Agile and SAFe, UAT and Affinity Mapping</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Technical</h3>
                    <p className="text-sm text-gray-600">API Design, Big Data Analytics, Cloud Architecture, AI/ML Applications (NLP, Search), Data Engineering, DevOps (Terraform/CI-CD), ETL/ELT Pipelines</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Platform & Tools</h3>
                    <p className="text-sm text-gray-600">GCP, Google & Adobe Analytics, Jira/Aha/ADO, Kubernetes & Docker, Java, Python, JavaScript, SQL: MySQL, Postgres, BigQuery</p>
                  </div>
                </div>
              </section>

              {/* Work Experience */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  WORK EXPERIENCE
                </h2>

                {/* Job 1 */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Integrated Product Manager (Principal Product Lead)</h3>
                      <p className="text-purple-600 font-semibold">Ministry of Public and Business Service Delivery</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Oct 2024 - Present</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Leading product strategy and cross-ministry digital transformation for two flagship government platforms (Vital Events & Business Experience Program) serving millions of Ontarians</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Defined long-term vision and OKRs aligning product direction for vital events modernization with policy goals</li>
                    <li>• Established product management frameworks across four parallel product teams, reducing cross-dependencies by 60%</li>
                    <li>• Spearheaded API modernization and metadata standardization for legacy systems</li>
                    <li>• Migrated 22 eForms from legacy platform onto new Business eXperience Platform (BXP)</li>
                    <li>• Promoted integration of AI + OCR solution to extract structured data from scanned paper applications</li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Product Manager / Technical Product Manager</h3>
                      <p className="text-purple-600 font-semibold">TheoremOne LLC (Client: FirstAmerican Title)</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Oct 2021 - Jun 2024</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Led product strategy and delivery for Document Management System serving North America's top-3 title insurance company, managing $5.6B in annual policy issuance</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Delivered enterprise DMS serving 500+ underwriters, improving operational efficiency by 40%</li>
                    <li>• Achieved 90% user adoption within first year through dynamic multi-year product strategy</li>
                    <li>• Secured funding for DMS expansion driving $9.8M in account growth</li>
                    <li>• Led globally distributed Agile team of 15 members across three continents</li>
                    <li>• Spearheaded migration from EC2 to Kubernetes-based EKS infrastructure</li>
                  </ul>
                </div>

                {/* Job 3 */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Senior Technical Product Manager</h3>
                      <p className="text-purple-600 font-semibold">TELUS Digital</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Jul 2019 - Oct 2021</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Scaled SEO practice and analytics capabilities by building centralized data platforms serving 200+ stakeholders</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Architected unified SEO/SEM data warehouse on GCP consolidating 12 disconnected data sources</li>
                    <li>• Achieved $2M CAD annual cost savings by developing automated ETL pipelines</li>
                    <li>• Led CEO-monitored Data4Good project providing COVID-19 mobility insights to governments</li>
                    <li>• Earned HPE-IAPP Privacy Innovation Award (2020) for privacy-preserving approach</li>
                  </ul>
                </div>

                {/* Job 4 */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Product Manager</h3>
                      <p className="text-purple-600 font-semibold">Grainger Inc.</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">Mar 2016 - Mar 2017</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Led product strategy for "Search and Select" functionality on Grainger's B2B/B2C e-commerce platform serving 1.5M products</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Increased online sales revenue by $170M USD through NLP-powered search optimization</li>
                    <li>• Drove 7% increase in organic search traffic through Solr search engine optimization</li>
                    <li>• Implemented product boosting algorithm resulting in 14% increase in boosted SKU sales</li>
                  </ul>
                </div>

                {/* Job 5 */}
                <div className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">Sr. Software Developer / Product Owner</h3>
                      <p className="text-purple-600 font-semibold">StateFarm Insurance (via Advansoft International)</p>
                    </div>
                    <span className="text-gray-600 text-sm whitespace-nowrap">May 2014 - Mar 2016</span>
                  </div>
                  <p className="text-gray-600 italic mb-2">Technical Product Owner for DASL platform—REST API backend serving State Farm's mobile apps for 80M+ policyholders</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Delivered $400K savings through proactive monitoring via Splunk dashboard</li>
                    <li>• Coded REST API modules using builder design pattern in Java/J2EE</li>
                  </ul>
                </div>
              </section>

              {/* Education */}
              <section className="mb-8">
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  EDUCATION
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">Master of Business Administration</h3>
                    <p className="text-purple-600">Ivey Business School, Western University</p>
                    <p className="text-sm text-gray-600">2017 - 2018</p>
                    <p className="text-xs text-gray-500 mt-1">Richard Ivey Excellence Award</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">MS in Computer & Information Sciences</h3>
                    <p className="text-purple-600">Knowledge Systems Institute</p>
                    <p className="text-sm text-gray-600">2015 - 2017</p>
                    <p className="text-xs text-gray-500 mt-1">Thesis: ML model for DNA genome analysis</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">MS in Biotechnology</h3>
                    <p className="text-purple-600">Northwestern University</p>
                    <p className="text-sm text-gray-600">2010 - 2012</p>
                    <p className="text-xs text-gray-500 mt-1">McCormick School of Engineering</p>
                  </div>
                  
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h3 className="font-bold text-gray-900">BE in Biotechnology</h3>
                    <p className="text-purple-600">Manipal Institute of Technology</p>
                    <p className="text-sm text-gray-600">2005 - 2009</p>
                  </div>
                </div>
              </section>

              {/* Certifications */}
              <section>
                <h2 className="text-xl font-bold text-purple-700 border-b-2 border-purple-200 pb-2 mb-4">
                  CERTIFICATIONS
                </h2>
                <div className="flex flex-wrap gap-2">
                  {['Product Management Basics (Pendo)', 'Digital Adoption', 'AI for Product Managers', 'Product-Led Certification', 'Product Analytics'].map((cert) => (
                    <span key={cert} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                      {cert}
                    </span>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:shadow-none {
            box-shadow: none !important;
          }
          .print\\:py-0 {
            padding-top: 0 !important;
            padding-bottom: 0 !important;
          }
          header, footer {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
