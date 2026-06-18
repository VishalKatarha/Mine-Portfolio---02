import React, { useState } from 'react';
import { Download, ArrowRight, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Hero() {
  const [emailInput, setEmailInput] = useState('');

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#a855f7', '#ec4899', '#06b6d4']
    });
  };

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    if (!emailInput) return;
    triggerConfetti();

    // Smooth scroll to contact and prefill email or notify
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth',
      });

      // Prefill email in contact form if exists
      const emailField = document.getElementById('email');
      if (emailField) {
        emailField.value = emailInput;
      }
    }
  };



  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden px-6 md:px-12 max-w-7xl mx-auto w-full z-10 text-left"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full mb-16">

        {/* Left Column: PhotoAI Style Form details (span 7) */}
        <div className="lg:col-span-7 flex flex-col justify-center">

          {/* Top Pill Tagline */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/8 w-max mb-8 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="font-inter text-[10px] md:text-xs font-semibold uppercase tracking-wider text-gray-300">
              Now active with MERN & Unity 3D
            </span>
          </div>

          {/* Large Hero Headline */}
          <h1 className="font-sora font-extrabold text-2xl md:text-4xl lg:text-[46px] tracking-tight leading-[1.1] text-white mb-6 uppercase">
            Software<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Engineer</span> <br />
            Game Developer & <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-pink-500 bg-clip-text text-transparent">VFX Artist</span> <br />
            Creative & <span className="bg-gradient-to-r from-pink-400 via-rose-450 to-cyan-400 bg-clip-text text-transparent">Video Technologist</span>
          </h1>

          {/* Subtitle */}
          <p className="font-inter text-sm md:text-base text-gray-400 max-w-xl mb-10 leading-relaxed font-light">
            Hi, I’m Vishal Katarha, a Creative Technologist & Software Engineer skilled in Graphic Designing , Motion graphics , 2D/3D animation , Game Development, 3D Artist , Video Editing , VFX and Full Stack Web Development.

          </p>

          {/* Action buttons inside a bento-style flex container */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full max-w-md">
            {/* Primary Gradient CTA button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                triggerConfetti();
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth',
                  });
                }
              }}
              className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 hover:from-cyan-300 hover:to-pink-400 text-white font-sora font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_10px_20px_rgba(139,92,246,0.15)] cursor-pointer text-sm"
            >
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>Hire Me</span>
            </a>

            {/* Secondary download button */}
            <a
              href="/Vishal_Katarha_Resume.pdf"
              download="Vishal_Katarha_Resume.pdf"
              onClick={triggerConfetti}
              className="flex-1 flex items-center justify-center gap-2 bg-white/4 border border-white/8 hover:bg-white/6 hover:border-white/12 text-white font-sora font-semibold py-4 px-6 rounded-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer text-sm"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>

        </div>

        {/* Right Column: PhotoAI Collage Image Grid (span 5) */}
        <div className="lg:col-span-5 grid grid-cols-12 gap-4 h-[420px] md:h-[500px]">

          {/* Tall Image Cell Left */}
          <div className="col-span-6 h-full overflow-hidden border border-white/8 rounded-3xl bg-purple-950/20 group relative shadow-2xl">
            <img
              src="/projects/web-dev.png"
              alt="Web Development Project"
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
            <div className="absolute bottom-4 left-4 text-left">
              <div className="text-[9px] font-semibold text-cyan-400 uppercase tracking-widest mb-1">Web Apps</div>
              <div className="font-sora text-sm text-white font-bold">Aetherial Core</div>
            </div>
          </div>

          {/* Staggered Right block */}
          <div className="col-span-6 flex flex-col gap-4 h-full">

            {/* Top Right Cell */}
            <div className="h-[48%] overflow-hidden border border-white/8 rounded-3xl bg-pink-950/20 group relative shadow-2xl">
              <img
                src="/projects/game-dev.png"
                alt="Game Development Scene"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 text-left">
                <div className="text-[9px] font-semibold text-pink-400 uppercase tracking-widest mb-1">Real-time 3D</div>
                <div className="font-sora text-sm text-white font-bold">Neo Tokyo</div>
              </div>
            </div>

            {/* Bottom Right Cell */}
            <div className="h-[48%] overflow-hidden border border-white/8 rounded-3xl bg-blue-950/20 group relative shadow-2xl">
              <img
                src="/projects/ui-ux.png"
                alt="UI/UX design card"
                className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-4 left-4 text-left">
                <div className="text-[9px] font-semibold text-blue-400 uppercase tracking-widest mb-1">Mobile UIs</div>
                <div className="font-sora text-sm text-white font-bold">Nova Wallet</div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Small Bento Experience Cards Row */}
      <div className="w-full border-t border-white/5 pt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {[
            { years: '5 Years', role: 'Video Editor', glow: 'glow-pink', icon: '🎬' },
            { years: '3 Years', role: 'Motion Graphic Artist', glow: 'glow-purple', icon: '🎨' },
            { years: '2 Years', role: 'Game Developer & VFX', glow: 'glow-cyan', icon: '🎮' },
            { years: '2 Years', role: 'Web Developer & Ui Ux', glow: 'glow-blue', icon: '⚛️' }
          ].map((item, idx) => (
            <div
              key={idx}
              className={`bento-card ${item.glow} p-5 flex flex-col justify-between text-left group transition-all duration-300 h-28`}
            >
              <div className="flex justify-between items-start">
                <span className="text-xl">{item.icon}</span>
                <span className="text-[10px] font-inter text-gray-500 uppercase tracking-wider font-semibold">Experience</span>
              </div>
              <div>
                <h4 className="font-sora font-extrabold text-lg text-white mb-0.5 leading-none">
                  {item.years}
                </h4>
                <p className="font-inter text-xs text-gray-400 font-light group-hover:text-gray-300 transition-colors">
                  as {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
