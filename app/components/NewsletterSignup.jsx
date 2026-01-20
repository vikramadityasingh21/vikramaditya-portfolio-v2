'use client';

import { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/newsletter-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Welcome to Product Thinking! Check your email.');
        setEmail('');
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Failed to subscribe. Please try again later.');
      console.error('Newsletter signup error:', error);
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 md:p-12">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center space-x-3 mb-4">
          <Mail className="text-blue-600" size={24} />
          <h3 className="text-2xl font-bold text-gray-900">Product Thinking</h3>
        </div>
        
        <p className="text-gray-700 mb-6">
          Get weekly insights on product management, strategy, and building high-performing teams. 
          Strategies for modern product leaders.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={status === 'loading' || status === 'success'}
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
            />
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold disabled:bg-gray-400 cursor-pointer"
            >
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="flex items-center space-x-2 text-green-700 bg-green-50 p-3 rounded-lg">
              <Check size={20} />
              <span>{message}</span>
            </div>
          )}

          {status === 'error' && (
            <div className="flex items-center space-x-2 text-red-700 bg-red-50 p-3 rounded-lg">
              <AlertCircle size={20} />
              <span>{message}</span>
            </div>
          )}
        </form>

        <p className="text-sm text-gray-600 mt-4">
          No spam. Unsubscribe anytime.
        </p>
      </div>
    </div>
  );
}
