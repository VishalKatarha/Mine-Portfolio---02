import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MouseGlow from './components/MouseGlow';

function App() {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light-theme');
    } else {
      root.classList.remove('light-theme');
    }
  }, [theme]);

  return (
    <div className="relative min-h-screen animated-gradient-bg text-gray-100 overflow-hidden font-inter selection:bg-purple-500/30 selection:text-white transition-colors duration-500">
      {/* Dynamic Cursor tracking and background radial glows */}
      <MouseGlow />

      {/* Floating Theme Switcher Button */}
      <button
        onClick={toggleTheme}
        className="fixed top-5 right-5 lg:top-6 lg:right-12 z-[100] p-3 rounded-2xl bento-card border border-white/8 text-gray-300 hover:text-white hover:border-purple-500/40 hover:bg-purple-500/10 transition-all duration-300 shadow-2xl flex items-center justify-center bg-white/4 backdrop-blur-md cursor-pointer"
        title={theme === 'dark' ? 'Switch to Light Theme' : 'Switch to Dark Theme'}
      >
        {theme === 'dark' ? (
          <Sun className="w-5 h-5 text-amber-400 animate-spin-slow" />
        ) : (
          <Moon className="w-5 h-5 text-purple-600" />
        )}
      </button>

      {/* Main UI structures */}
      <Navbar />
      
      <main className="relative flex flex-col items-center">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
