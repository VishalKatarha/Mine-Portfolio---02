import React, { useEffect, useRef, useState } from 'react';

export default function MouseGlow() {
  const glowRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine cursor pointers
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setIsVisible(true);

    const glow = glowRef.current;
    const ring = cursorRingRef.current;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    // Spotlight glow coordinates
    let glowX = window.innerWidth / 2;
    let glowY = window.innerHeight / 2;

    // Ring follower coordinates
    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Track hover state on interactive links/buttons
    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.tagName === 'INPUT' || 
        target.tagName === 'TEXTAREA' || 
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.cursor-pointer');
      
      setIsHovered(!!isInteractive);
    };

    window.addEventListener('mouseover', handleMouseOver);

    const updatePosition = () => {
      // Lerp spotlight glow
      glowX += (mouseX - glowX) * 0.05;
      glowY += (mouseY - glowY) * 0.05;
      if (glow) {
        glow.style.transform = `translate3d(${glowX - 250}px, ${glowY - 250}px, 0)`;
      }

      // Lerp custom trailing ring
      ringX += (mouseX - ringX) * 0.5;
      ringY += (mouseY - ringY) * 0.5;
      if (ring) {
        // Center alignment offset
        const sizeOffset = isHovered ? 24 : 12;
        ring.style.transform = `translate3d(${ringX - sizeOffset}px, ${ringY - sizeOffset}px, 0)`;
      }

      requestAnimationFrame(updatePosition);
    };

    const animId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isHovered]);

  return (
    <>
      {/* Animated Morphing color gradient mesh blobs (drifting behind glass) */}
      <div className="fixed top-[-15%] left-[-15%] w-[60vw] h-[60vw] rounded-full bg-gradient-to-tr from-purple-800/18 via-pink-700/12 to-transparent blur-[110px] pointer-events-none -z-20 animate-morph" />
      <div className="fixed bottom-[-15%] right-[-15%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-cyan-800/18 via-indigo-700/12 to-transparent blur-[110px] pointer-events-none -z-20 animate-morph-delayed" />
      <div className="fixed top-[30%] right-[10%] w-[45vw] h-[45vw] rounded-full bg-gradient-to-tr from-purple-900/12 via-cyan-800/12 to-transparent blur-[110px] pointer-events-none -z-20 animate-morph" style={{ animationDuration: '28s' }} />
      <div className="fixed bottom-[15%] left-[-10%] w-[40vw] h-[40vw] rounded-full bg-gradient-to-br from-rose-950/18 via-purple-900/12 to-transparent blur-[100px] pointer-events-none -z-20 animate-morph-delayed" style={{ animationDuration: '32s' }} />

      {/* Global Animated Glass backdrop blur overlay (sandwiches the mesh gradient and content) */}
      <div className="fixed inset-0 backdrop-blur-[105px] bg-[#050508]/45 pointer-events-none -z-15" />

      {/* Dynamic mouse spotlight glow (behind glass panels) */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.08)_0%,rgba(6,182,212,0.03)_45%,transparent_75%)] blur-[40px] pointer-events-none -z-10 mix-blend-screen"
        style={{ transform: 'translate3d(-1000px, -1000px, 0)' }}
      />

      {/* Trailing Cursor Follower Ring */}
      {isVisible && (
        <div
          ref={cursorRingRef}
          className={`fixed top-0 left-0 rounded-full border pointer-events-none z-50 transition-all duration-300 custom-cursor-ring ${
            isHovered
              ? 'w-12 h-12 bg-white/5 border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.4)]'
              : 'w-6 h-6 border-white/20'
          }`}
          style={{ transform: 'translate3d(-100px, -100px, 0)' }}
        />
      )}
    </>
  );
}
