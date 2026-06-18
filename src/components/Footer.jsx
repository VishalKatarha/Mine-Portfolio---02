import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative w-full border-t border-white/5 py-12 px-6 md:px-12 mt-20 overflow-hidden bg-[#030014]/40 z-10">
      
      {/* Ambient background blur */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-purple-950/15 blur-[60px] pointer-events-none -z-10 rounded-t-full" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Branding */}
        <div className="flex items-center gap-2 group cursor-pointer" onClick={handleScrollToTop}>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-purple-600 to-pink-500 flex items-center justify-center text-white font-sora font-bold text-sm shadow-[0_0_10px_rgba(139,92,246,0.3)] group-hover:scale-105 transition-transform duration-300">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="font-sora font-semibold text-white tracking-tight">
            VISHAL KATARHA
          </span>
        </div>

        {/* Info */}
        <div className="font-inter text-xs text-gray-500 font-light text-center md:text-left">
          &copy; {new Date().getFullYear()} Vishal Katarha. All rights reserved. Crafted for visual impact.
        </div>

        {/* Back to top button */}
        <button
          onClick={handleScrollToTop}
          className="group flex items-center gap-2 font-sora font-medium text-xs text-gray-400 hover:text-white bg-white/3 hover:bg-white/5 border border-white/5 hover:border-purple-500/30 px-4 py-2.5 rounded-xl transition-all duration-300 shadow-lg cursor-pointer"
        >
          <span>Back to Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>

      </div>
    </footer>
  );
}
