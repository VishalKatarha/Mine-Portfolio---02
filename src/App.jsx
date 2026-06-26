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

      {/* Main UI structures */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <main className="relative flex flex-col items-center">
        <Hero />
        <Skills />
        <Projects />
        <Timeline />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}

export default App;
