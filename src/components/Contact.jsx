import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setStatus('sending');

    // Simulate network latency
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Trigger success confetti explosion
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.65 },
        colors: ['#8b5cf6', '#ec4899', '#06b6d4']
      });
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Title */}
      <div className="text-left mb-16 md:mb-20">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 section-heading-gradient">
          Get in Touch
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch text-left">

        {/* Left Column: Contact Cards & Info Bento (span 5) */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <div className="bento-card p-8 flex flex-col gap-8 flex-grow">
            <div>
              <h3 className="font-sora font-bold text-xl text-white mb-2">
                Let's Collaborate
              </h3>
              <p className="font-inter text-xs md:text-sm text-gray-400 font-light leading-relaxed">
                Have a project design in mind or want to discuss full stack development integration? Reach out, and let's craft something premium together.
              </p>
            </div>

            {/* Info Items */}
            <div className="flex flex-col gap-6">

              {/* Phones */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Call / WhatsApp</div>
                  <div className="flex flex-col">
                    <a href="tel:+916262630843" className="font-sora text-sm md:text-base text-white hover:text-cyan-300 transition-colors font-medium">
                      +91 62626 30843
                    </a>
                    <a href="tel:+917000335643" className="font-sora text-sm md:text-base text-white hover:text-cyan-300 transition-colors font-medium">
                      +91 70003 35643
                    </a>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-400 group-hover:scale-110 transition-transform duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Email Me</div>
                  <a href="mailto:kartikkatarha@gmail.com" className="font-sora text-sm md:text-base text-white hover:text-purple-300 transition-colors font-medium">
                    kartikkatarha@gmail.com
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/25 text-pink-400 group-hover:scale-110 transition-transform duration-500">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Instagram</div>
                  <a href="https://instagram.com/burnitupp_" target="_blank" rel="noopener noreferrer" className="font-sora text-sm md:text-base text-white hover:text-pink-300 transition-colors font-medium">
                    @burnitupp_
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group">
                <div className="p-3.5 rounded-2xl bg-pink-500/10 border border-pink-500/25 text-pink-400 group-hover:scale-110 transition-transform duration-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-1">Location</div>
                  <div className="font-sora text-sm md:text-base text-white font-medium">
                    Jabalpur, Madhya Pradesh, India
                  </div>
                </div>
              </div>
            </div>

            {/* Social Link block */}
            <div className="pt-6 border-t border-white/5">
              <div className="text-xs text-gray-500 font-inter uppercase tracking-wider mb-4">Follow My Channels</div>
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/VishalKatarha"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/4 border border-white/6 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 hover:shadow-[0_0_15px_rgba(139,92,246,0.15)] transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/vishal-katarha-4b8422298
"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/4 border border-white/6 text-gray-300 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
                <a
                  href="https://instagram.com/burnitupp_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/4 border border-white/6 text-gray-300 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(236,72,153,0.15)] transition-all duration-300 cursor-pointer"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Right Column Bento Stack: Maps & Contact Form (span 7) */}
        <div className="lg:col-span-7 flex flex-col gap-6">

          {/* Top Right: Google Maps Bento Card */}
          <div className="bento-card p-3 overflow-hidden h-[220px] md:h-[260px] relative group">
            <iframe
              src="https://maps.google.com/maps?q=Jabalpur,%20Madhya%20Pradesh,%20India&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0 dark-map shadow-2xl"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
            {/* Visual glow indicator overlays */}
            <div className="absolute top-6 right-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050508]/85 border border-white/10 backdrop-blur-sm text-[9px] text-gray-300 font-inter">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-ping shadow-[0_0_8px_#ec4899]" />
              <span>HQ: Jabalpur, India</span>
            </div>
          </div>

          {/* Bottom Right: Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bento-card p-8 md:p-10 flex flex-col gap-6 w-full relative"
          >
            {status === 'success' && (
              <div className="absolute inset-0 bg-[#050508]/90 backdrop-blur-md rounded-[2rem] flex flex-col items-center justify-center text-center p-8 z-20 animate-fade-in">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-6 shadow-[0_0_20px_rgba(16,185,129,0.35)] animate-bounce">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="font-sora font-extrabold text-2xl text-white mb-2">Message Dispatched!</h3>
                <p className="font-inter text-gray-300 text-sm max-w-sm leading-relaxed mb-6 font-light">
                  Thank you, Vishal will get back to you shortly to discuss collaboration opportunities.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="bg-white/4 border border-white/8 hover:bg-white/6 text-white font-sora text-sm px-6 py-3 rounded-xl transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-sora text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Full Name <span className="text-pink-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Vishal Katarha"
                  className="bg-white/3 border border-white/6 rounded-2xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/4 transition-all focus:ring-1 focus:ring-purple-500/20"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-sora text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Email Address <span className="text-pink-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. vishal@example.com"
                  className="bg-white/3 border border-white/6 rounded-2xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-cyan-500/50 focus:bg-white/4 transition-all focus:ring-1 focus:ring-cyan-500/20"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className="font-sora text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Project Collaboration Offer"
                className="bg-white/3 border border-white/6 rounded-2xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-pink-500/50 focus:bg-white/4 transition-all focus:ring-1 focus:ring-pink-500/20"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2 flex-grow">
              <label htmlFor="message" className="font-sora text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Message Description <span className="text-pink-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                placeholder="Write your message detail here..."
                className="bg-white/3 border border-white/6 rounded-2xl px-4 py-3 font-inter text-sm text-white focus:outline-none focus:border-purple-500/50 focus:bg-white/4 transition-all focus:ring-1 focus:ring-purple-500/20 resize-none min-h-[100px]"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-sora font-semibold py-3.5 rounded-2xl transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] shadow-[0_10px_20px_rgba(139,92,246,0.15)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            >
              {status === 'sending' ? (
                <>
                  <div className="w-5 h-5 rounded-full border-2 border-white/35 border-t-white animate-spin" />
                  <span>Dispatching Message...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
