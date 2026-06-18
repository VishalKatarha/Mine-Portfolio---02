import React from 'react';
import { motion } from 'framer-motion';
import { Code2, PenTool, Box, Layout, Sparkles } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Development',
      icon: Code2,
      color: 'from-cyan-500 to-blue-500',
      shadowColor: 'glow-cyan',
      textColor: 'text-cyan-400',
      bgGlow: 'bg-cyan-500/5',
      borderColor: 'border-cyan-500/20',
      badgeBg: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
      skills: ['React.js', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Tailwind CSS'],
    },
    {
      title: 'Creative Art & Video',
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
      shadowColor: 'glow-pink',
      textColor: 'text-pink-400',
      bgGlow: 'bg-pink-500/5',
      borderColor: 'border-pink-500/20',
      badgeBg: 'bg-pink-500/10 border-pink-500/30 text-pink-300',
      skills: ['After Effects', 'Premiere Pro', 'Photoshop', 'Illustrator', 'Filmora', 'DaVinci Resolve', 'Final Cut Pro'],
    },
    {
      title: '3D & Game Dev',
      icon: Box,
      color: 'from-purple-500 to-indigo-500',
      shadowColor: 'glow-purple',
      textColor: 'text-purple-400',
      bgGlow: 'bg-purple-500/5',
      borderColor: 'border-purple-500/20',
      badgeBg: 'bg-purple-500/10 border-purple-500/30 text-purple-300',
      skills: ['Blender', 'Maya', 'Substance Painter', 'Unity', 'Unreal Engine'],
    },
    {
      title: 'UI/UX Design',
      icon: Layout,
      color: 'from-blue-500 to-cyan-500',
      shadowColor: 'glow-blue',
      textColor: 'text-blue-400',
      bgGlow: 'bg-blue-500/5',
      borderColor: 'border-blue-500/20',
      badgeBg: 'bg-blue-500/10 border-blue-500/30 text-blue-300',
      skills: ['Figma', 'Framer', 'Spline'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="skills"
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Title */}
      <div className="text-left mb-16 md:mb-20">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 section-heading-gradient">
          Skills Showcase
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
      </div>

      {/* Categories Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
      >
        {categories.map((cat, catIdx) => {
          const Icon = cat.icon;
          return (
            <motion.div
              key={catIdx}
              variants={cardVariants}
              className={`bento-card ${cat.shadowColor} p-6 rounded-[2rem] border ${cat.borderColor} flex flex-col justify-between group relative overflow-hidden`}
            >
              {/* Inner ambient mesh glow */}
              <div className={`absolute -top-10 -right-10 w-24 h-24 rounded-full ${cat.bgGlow} blur-2xl group-hover:scale-150 transition-transform duration-500`} />

              <div>
                {/* Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2.5 rounded-2xl bg-gradient-to-tr ${cat.color} text-white shadow-lg`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-sora font-bold text-base md:text-lg text-white group-hover:text-white transition-colors">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-col gap-3 text-left">
                  {cat.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/3 border border-white/5 hover:bg-white/6 hover:border-white/10 transition-all duration-300 group/item"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 group-hover/item:scale-125 transition-transform" />
                      <span className="font-inter text-xs md:text-sm text-gray-300 group-hover/item:text-white transition-colors font-light">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status indicator badge */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between">
                <span className={`text-[10px] font-inter font-semibold uppercase tracking-wider px-2 py-0.5 rounded-lg border ${cat.badgeBg}`}>
                  Expertise
                </span>
                <Sparkles className="w-3.5 h-3.5 text-gray-600 group-hover:text-gray-400 group-hover:rotate-12 transition-all duration-300" />
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
