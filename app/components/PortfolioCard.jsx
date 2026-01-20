'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function PortfolioCard({ 
  id, 
  title, 
  outcome, 
  role, 
  timeline, 
  summary, 
  category,
  slug,
  featured = false 
}) {
  return (
    <Link href={`/portfolio/${slug}`}>
      <div className={`group cursor-pointer h-full ${featured ? 'md:col-span-2' : ''}`}>
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-6 h-full border border-gray-100 hover:border-blue-300">
          
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
              category === 'Featured' 
                ? 'bg-blue-100 text-blue-700' 
                : 'bg-gray-100 text-gray-700'
            }`}>
              {category}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-700 text-sm mb-6 line-clamp-2">
            {summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 py-4 border-t border-b border-gray-200">
            
            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Key Outcome
              </p>
              <p className="text-gray-900 font-bold text-sm">
                {outcome}
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                My Role
              </p>
              <p className="text-gray-900 font-bold text-sm">
                {role}
              </p>
            </div>

            <div className="md:col-span-2">
              <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-1">
                Timeline
              </p>
              <p className="text-gray-900 font-bold text-sm">
                {timeline}
              </p>
            </div>
          </div>

          <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
            <span>View Case Study</span>
            <ArrowRight size={18} className="ml-2" />
          </div>
        </div>
      </div>
    </Link>
  );
}
