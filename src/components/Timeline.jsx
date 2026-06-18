import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

export default function Timeline() {
  const experienceData = [
    {
      role: 'Full Stack MERN Developer, Web & UI/UX Designer',
      company: 'Self-Employed / Remote',
      period: '2 Years (2025 - Present)',
      description: 'Engineering frontend and backend web interfaces by utilizing HTML, CSS, JavaScript, ReactJS, React Three Fiber, ThreeJS, Framer Motion, Node.js, MySQL, MongoDB, TailwindCSS, Figma, Framer, and Spline 3D.',
    },
    {
      role: 'Game Developer, VFX/FX Artist, Game UI/UX & 3D Designer',
      company: 'Freelance & Contract',
      period: '2 Years (2025 - 2026)',
      description: 'Developing mechanics, shaders, models, baked maps, and AR/VR systems using Blender, Maya, Substance Painter, Unreal Engine with Blueprints, Unity Engine with AR-VR & C#, and Python.',
    },
    {
      role: 'Video Editor & Animation Artist',
      company: 'Karamchand Studio (Jabalpur)',
      period: '3 Years (2024 - 2026)',
      description: 'Performed video post-production, advanced composting, animations, and sound design using Adobe Premiere Pro, After Effects, DaVinci Resolve, and Filmora.',
    },
    {
      role: 'Motion Graphic Designer & Graphic Designer',
      company: 'CV Salon (Jabalpur)',
      period: '3 Years (2022 - 2024)',
      description: 'Designed motion art, promotional concepts, and layouts using Adobe After Effects, Photoshop, Illustrator, and Premiere Pro.',
    },

  ];

  const educationData = [
    {
      degree: 'PGDCA (Post Graduate Diploma in Computer Applications)',
      institution: 'Makhan Lal Chaturvedi National University',
      period: '2021',
      description: 'Detailed study of computer languages, databases, and application scripts.',
    },
    {
      degree: 'Bachelor of Commerce (Computer Applications)',
      institution: 'Rani Durgavati Vishwavidyalaya (RDVV), Jabalpur',
      period: '2019',
      description: 'Integrated commerce studies with computer systems, networking, and software application logic.',
    },
    {
      degree: 'Higher Secondary School (12th)',
      institution: 'M.P. Board',
      period: '2016',
      description: 'Focus on science and mathematics fundamentals.',
    },
    {
      degree: 'Secondary School (10th)',
      institution: 'M.P. Board',
      period: '2014',
      description: 'General high school foundation.',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 90, damping: 14 },
    },
  };

  return (
    <section
      id="experience"
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* Experience Column */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="text-left mb-12 flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-purple-500/10 border border-purple-500/25 text-purple-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-sora font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                Work Experience
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-1.5" />
            </div>
          </div>

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border-l border-white/8 pl-6 md:pl-8 flex flex-col gap-8 text-left"
          >
            {experienceData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative group"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-2.5 w-4.5 h-4.5 rounded-full bg-[#050508] border-2 border-purple-500 flex items-center justify-center timeline-dot group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(168,85,247,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                </div>

                {/* Bento card content */}
                <div className="bento-card hover:border-purple-500/20 p-6 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-sora font-bold text-base md:text-lg text-white group-hover:text-purple-300 transition-colors">
                      {item.role}
                    </h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/4 border border-white/6 text-[10px] text-gray-400 font-inter">
                      <Calendar className="w-3 h-3 text-purple-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="text-xs font-inter font-medium text-purple-400 uppercase tracking-wider mb-4">
                    {item.company}
                  </div>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education Column */}
        <div className="flex flex-col">
          {/* Header */}
          <div className="text-left mb-12 flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-400">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-sora font-extrabold text-2xl md:text-3xl text-white tracking-tight">
                Education Journey
              </h2>
              <div className="w-12 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mt-1.5" />
            </div>
          </div>

          {/* Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative border-l border-white/8 pl-6 md:pl-8 flex flex-col gap-8 text-left"
          >
            {educationData.map((item, idx) => (
              <motion.div
                key={idx}
                variants={rightItemVariants}
                className="relative group"
              >
                {/* Glowing Node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-2.5 w-4.5 h-4.5 rounded-full bg-[#050508] border-2 border-cyan-500 flex items-center justify-center timeline-dot group-hover:scale-125 transition-transform duration-300 shadow-[0_0_12px_rgba(6,182,212,0.5)]">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                </div>

                {/* Bento card content */}
                <div className="bento-card hover:border-cyan-500/20 p-6 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <h3 className="font-sora font-bold text-base md:text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {item.degree}
                    </h3>
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/4 border border-white/6 text-[10px] text-gray-400 font-inter">
                      <Calendar className="w-3 h-3 text-cyan-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>
                  <div className="text-xs font-inter font-medium text-cyan-400 uppercase tracking-wider mb-4">
                    {item.institution}
                  </div>
                  <p className="font-inter text-xs md:text-sm text-gray-400 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
