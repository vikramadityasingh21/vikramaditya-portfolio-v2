'use client';

import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Mail, Linkedin, MessageCircle, Send, 
  MapPin, Clock, CheckCircle
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact details - UPDATE THESE WITH YOUR ACTUAL INFO
  const contactInfo = {
    email: 'vikramaditya@example.com',
    whatsapp: '+14165550123',
    linkedin: 'https://linkedin.com/in/vikramadityasingh',
    location: 'Toronto, ON, Canada',
    availability: 'Usually responds within 24-48 hours'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Website Contact');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleDirectEmail = () => {
    window.location.href = `mailto:${contactInfo.email}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent('Hi Vikramaditya, I found your website and wanted to connect!');
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleLinkedInClick = () => {
    window.open(contactInfo.linkedin, '_blank');
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 py-12 md:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Contact Me
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Whether you're looking for product leadership, interested in collaboration, 
                or want to discuss AI strategy and product management - I'd love to hear from you.
              </p>
              <div className="flex items-center gap-4 text-gray-600">
                <span className="flex items-center gap-2">
                  <MapPin size={18} />
                  {contactInfo.location}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={18} />
                  {contactInfo.availability}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
                
                {isSubmitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Email Client Opened!</h3>
                    <p className="text-gray-600 mb-4">
                      Your message has been prepared in your email client. 
                      Just hit send to complete your message.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-purple-600 hover:text-purple-700 font-medium"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all"
                        placeholder="What's this about?"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all resize-none"
                        placeholder="Tell me what's on your mind..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin">⏳</span>
                          Opening Email...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              {/* Contact Options */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Ways to Connect</h2>
                
                <div className="space-y-4">
                  {/* Email */}
                  <button
                    onClick={handleDirectEmail}
                    className="w-full flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors group text-left"
                  >
                    <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">Email</h3>
                      <p className="text-gray-600">{contactInfo.email}</p>
                      <p className="text-sm text-purple-600">Click to open email client</p>
                    </div>
                  </button>

                  {/* WhatsApp */}
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-green-50 transition-colors group text-left"
                  >
                    <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">WhatsApp</h3>
                      <p className="text-gray-600">Quick chat or voice message</p>
                      <p className="text-sm text-green-600">Click to open WhatsApp</p>
                    </div>
                  </button>

                  {/* LinkedIn */}
                  <button
                    onClick={handleLinkedInClick}
                    className="w-full flex items-center gap-4 p-6 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors group text-left"
                  >
                    <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">LinkedIn</h3>
                      <p className="text-gray-600">Professional network connection</p>
                      <p className="text-sm text-blue-600">Click to view profile</p>
                    </div>
                  </button>
                </div>

                {/* Info Box */}
                <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-100">
                  <h3 className="font-bold text-gray-900 mb-3">What I Can Help With</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Product leadership & strategy consulting
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      AI product development guidance
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Digital transformation advisory
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Team building & organizational design
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-600 mt-1">•</span>
                      Speaking engagements & workshops
                    </li>
                  </ul>
                </div>

                {/* Response Time */}
                <div className="mt-6 flex items-center gap-3 text-gray-600">
                  <Clock size={18} />
                  <span>Typical response time: 24-48 hours</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-purple-600 to-purple-800 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Looking for my background?
            </h2>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Check out my resume for a detailed overview of my experience and qualifications.
            </p>
            <a 
              href="/resume"
              className="inline-block px-6 py-3 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-colors"
            >
              View Resume
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
