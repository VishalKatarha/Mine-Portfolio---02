import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Web Development',
    'UI/UX Design',
    'Motion Graphics',
    'Video Editing',
    '3D Visualization',
    'Game Development',
  ];

  const projectsData = [
    {
      id: 1,
      title: 'Web Dev & Designs',
      category: 'Web Development & Ui Ux',
      description: 'Modern, responsive web applications and UI/UX experiences built with React, MERN Stack, Tailwind CSS, and modern frontend technologies.',
      image: '/projects/web-dev.png',
      tags: ['React', 'Tailwind', 'HTML5', 'CSS', 'Framer', 'Figma'],
      liveLink: 'https://youtu.be/a1T4AqQb9p8?si=3WxhethdQdEPCkS-',
      driveLink: 'https://drive.google.com/drive/folders/1NUAZsS0yRqSZ9XyCNmtSlwDz-y8Llpf_?usp=sharing',
      gradient: 'from-cyan-500/10 to-blue-500/10'
    },
    {
      id: 2,
      title: 'Gaming & VFX ',
      category: 'Game Development',
      description: 'Immersive game environments, real-time visual effects, and interactive experiences developed using Unreal Engine, Unity, AR/VR, and 3D workflows.',
      image: '/projects/game-dev.png',
      tags: ['Unity 3D', 'C#', 'Unreal Engine', 'C++'],
      liveLink: 'https://youtube.com/shorts/8GnMqNjEQnk?si=-wLxLhSTnVr2FPZt',
      driveLink: 'https://drive.google.com/drive/folders/1vJ7xdSy6Dyw3keAPXp8wsJhN1b-DpcV-?usp=sharing',
      gradient: 'from-purple-500/10 to-pink-500/10'
    },
    {
      id: 3,
      title: 'Animation & Motion Designs ',
      category: 'Motion Graphics',
      description: 'An abstract cinematic motion graphics video exploring high-speed fluid dynamics, glass refractions, and digital chrome aesthetics.',
      image: '/projects/motion.png',
      tags: ['After Effects', 'Cinema 4D', 'Redshift'],
      liveLink: 'https://youtube.com/shorts/8eD8dcZHKVk?si=fVO1z4Nq8kxGyXoN',
      driveLink: 'https://drive.google.com/drive/folders/1-gLRifGGJhTZQlBjrLcUZ4_VsaLTaGP5?usp=sharing',
      gradient: 'from-pink-500/10 to-rose-500/10'
    },
    {
      id: 4,
      title: '3D Design & Products',
      category: '3D Visualization',
      description: 'Photorealistic 3D modeling, product visualization, texturing, lighting, and rendering using Blender, Maya, and Substance Painter.',
      image: '/projects/three-d.png',
      tags: ['Blender', 'Maya', 'Substance Painter', 'Cycles'],
      liveLink: 'https://youtube.com/shorts/ikYuE5r9Eto?si=SjoRD44zEevsxNIL',
      driveLink: 'https://drive.google.com/drive/folders/1gOBruqx0uCkV9qdzTsVFlczCU3JmxMGa?usp=sharing',
      gradient: 'from-indigo-500/10 to-purple-500/10'
    },
    {
      id: 5,
      title: 'Graphics Designs',
      category: 'Graphics',
      description: 'A premium mobile application flow for cryptocurrency asset management, designed with glowing dark nodes and high readability.',
      image: '/projects/ui-ux.png',
      tags: ['Illustrator', 'Photoshop'],
      liveLink: 'https://www.instagram.com/burnitupp_',
      driveLink: 'https://drive.google.com/drive/folders/1zOoioYDYHPxsvyD8xvLHlP4Wgsi7koSL?usp=sharing',
      gradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      id: 6,
      title: 'Cinematic & Reels Videos',
      category: 'Video Editing',
      description: 'Professional video editing, color grading, transitions, and cinematic reels optimized for social media, advertising, and storytelling.',
      image: '/projects/video.png',
      tags: ['Premiere Pro', 'DaVinci Resolve', 'Final Cut Pro'],
      liveLink: 'https://youtu.be/AwB7nsC9ppw?si=egwtaTDmKgPprH8u',
      driveLink: 'https://drive.google.com/drive/folders/14_NGbyhCB_0cQOBKI1ehVhngaETjTIXd?usp=sharing',
      gradient: 'from-rose-500/10 to-orange-500/10'
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto w-full z-10"
    >
      {/* Title */}
      <div className="text-left mb-12 md:mb-16">
        <h2 className="font-sora font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight mb-4 section-heading-gradient">
          Featured Projects
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-12 justify-start items-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-inter text-xs md:text-sm px-4 py-2.5 rounded-2xl border transition-all duration-300 cursor-pointer ${activeFilter === cat
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 border-purple-500/35 text-white font-medium shadow-[0_10px_20px_rgba(168,85,247,0.15)]'
              : 'bg-white/3 border-white/5 text-gray-400 hover:text-white hover:bg-white/6 hover:border-white/10'
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.45, type: 'spring', stiffness: 90, damping: 15 }}
              className="bento-card glow-border flex flex-col justify-between overflow-hidden group"
            >
              {/* Image Container */}
              <div className="relative aspect-video w-full overflow-hidden p-3 pb-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Visual Type Badge */}
                <div className="absolute top-6 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#050508]/85 border border-white/10 backdrop-blur-sm text-[9px] text-gray-300 font-inter uppercase font-semibold tracking-wider">
                  <Sparkles className="w-3 h-3 text-purple-400 animate-pulse" />
                  <span>{project.category}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 text-left flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-sora font-bold text-lg md:text-xl text-white mb-2.5 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="font-inter text-xs md:text-sm text-gray-400 font-light mb-6 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-inter px-2.5 py-1 rounded-xl bg-white/4 border border-white/6 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-sora font-medium text-xs text-white bg-white/4 border border-white/8 px-4 py-2.5 rounded-xl hover:bg-purple-500/10 hover:border-purple-500/35 transition-all duration-300 cursor-pointer"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      Live Demo
                    </a>
                    <a
                      href={project.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 font-sora font-medium text-xs text-gray-400 hover:text-white px-3 py-2.5 transition-colors duration-300 cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" />
                        <path d="M12 10v6" />
                        <path d="M9 13h6" />
                      </svg>
                      Google Drive
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
