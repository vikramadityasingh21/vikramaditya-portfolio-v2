'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent('Newsletter Subscription Request');
    const body = encodeURIComponent(`
New Newsletter Subscription
---------------------------

Name: ${name}
Email: ${email}
Date: ${new Date().toLocaleString()}

Please add this subscriber to the Systems Thinking Newsletter mailing list.
    `.trim());
    
    const mailtoLink = `mailto:vikramaditya@u.northwestern.edu?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    setStatus('success');
    
    setTimeout(() => {
      setEmail('');
      setName('');
      setStatus('idle');
    }, 3000);
  };

  return (
    <section id="newsletter" className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>

            <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Systems Thinking Newsletter
            </h2>
            <p className="text-slate-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              Bi-weekly insights on AI-first product leadership, team topologies, and navigating 
              complexity in regulated environments.
            </p>

            {status === 'success' ? (
              <div className="bg-green-50 border border-green-300 rounded-lg p-6 max-w-md mx-auto">
                <div className="flex items-center gap-3 text-green-700">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="font-semibold">Thanks! Your email client should open to confirm subscription.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  required
                  className="w-full px-6 py-4 rounded-lg border-2 border-slate-200 focus:border-purple-500 focus:outline-none text-slate-900"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            )}

            <p className="text-slate-500 text-sm mt-6">
              No spam ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}