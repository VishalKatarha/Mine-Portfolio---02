import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Compass, Layers, Milestone } from 'lucide-react';

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 90,
        damping: 14,
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Title */}
      <div className="text-left mb-16 md:mb-20">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 section-heading-gradient">
          About Me
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
      </div>

      {/* Content Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch"
      >
        {/* Main narrative block */}
        <motion.div
          variants={itemVariants}
          className="lg:col-span-7 bento-card p-8 md:p-12 text-left flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center gap-2 text-purple-400 mb-6 font-sora text-xs font-semibold tracking-wider uppercase">
              <Compass className="w-4 h-4 animate-spin-slow" />
              Creative Horizon
            </div>
            
            <h3 className="font-sora font-bold text-2xl md:text-3xl text-white mb-6 leading-snug">
              Designing interfaces, coding complex logic, and mapping real-time virtual worlds.
            </h3>
            
            <div className="font-inter text-gray-300 font-light space-y-5 leading-relaxed text-sm md:text-base">
              <p>
                My professional journey thrives on the synthesis of technical engineering and visual creation. As a developer and motion designer, I construct solutions that don't just solve business objectives but capture attention through premium fluid motion.
              </p>
              <p>
                Whether building responsive, interactive, and responsive React applications, modeling custom 3D mechanical components in Blender, or composing multi-track video projects, I maintain a laser focus on optimization, pixel alignment, and user interaction.
              </p>
              <p>
                I thrive in fast-paced environments where standard templates are rejected in favor of bespoke creative solutions. My ultimate goal is to generate digital assets and interfaces that establish new standards of premium quality.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-400 flex items-center justify-center text-white font-sora font-bold text-sm shadow-md">
              VK
            </div>
            <div>
              <div className="text-white font-sora text-sm font-medium">Vishal Katarha</div>
              <div className="text-gray-400 font-inter text-xs font-light">Full Stack & Game Technologist</div>
            </div>
          </div>
        </motion.div>

        {/* Quick highlight cards */}
        <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
          <motion.div
            variants={itemVariants}
            className="bento-card hover:border-purple-500/35 p-6 md:p-8 text-left group"
          >
            <div className="p-3 rounded-2xl bg-purple-500/10 border border-purple-500/25 w-max mb-5 text-purple-400 group-hover:scale-110 transition-transform duration-500">
              <Code2 className="w-5 h-5" />
            </div>
            <h4 className="font-sora font-bold text-lg text-white mb-2 group-hover:text-purple-300 transition-colors">
              Full Stack Engineering
            </h4>
            <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              Designing scalable backends with Node.js and database models combined with premium interactive state containers in React and Tailwind.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bento-card hover:border-pink-500/35 p-6 md:p-8 text-left group"
          >
            <div className="p-3 rounded-2xl bg-pink-500/10 border border-pink-500/25 w-max mb-5 text-pink-400 group-hover:scale-110 transition-transform duration-500">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="font-sora font-bold text-lg text-white mb-2 group-hover:text-pink-300 transition-colors">
              Creative Production
            </h4>
            <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              Crafting premium post-production visuals, kinetic typography, and motion overlays in After Effects, Premiere Pro, and Photoshop.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bento-card hover:border-cyan-500/35 p-6 md:p-8 text-left group"
          >
            <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 w-max mb-5 text-cyan-400 group-hover:scale-110 transition-transform duration-500">
              <Milestone className="w-5 h-5" />
            </div>
            <h4 className="font-sora font-bold text-lg text-white mb-2 group-hover:text-cyan-300 transition-colors">
              3D & Game Logic
            </h4>
            <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed font-light">
              Developing physics simulations, game levels, custom shaders, and modular mechanics in Unity and Unreal Engine 5.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
