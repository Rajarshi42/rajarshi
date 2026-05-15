import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flippedCards, setFlippedCards] = useState({});

  const handlePortfolioDemoClick = (e) => {
    e.preventDefault();
    alert("You're already viewing this portfolio! 🎉");
  };

  const toggleCardFlip = (index) => {
    setFlippedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio website showcasing my work and skills with smooth animations and interactive elements.',
      image: '🎨',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/pentirajarshi/portfolio',
      demo: 'https://pentirajarshi.com',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: 'Restaurant Website',
      description: 'A fully responsive restaurant website with online menu, reservation system, and beautiful UI/UX design.',
      image: '🍽️',
      tech: ['HTML', 'CSS', 'React', 'Framer motion'],
      github: 'https://github.com/Rajarshi42/Dwarakas',
      demo: 'https://dwarakas.vercel.app/',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      title: 'Dispatch Rasta',
      description: 'A peer-to-peer parcel delivery platform connecting travelers with senders for quick, affordable delivery of mini parcels and items.',
      image: '📦',
      tech: ['React', 'Node.js', 'MongoDB', 'Express'],
      github: '#',
      demo: '#',
      gradient: 'from-green-500 to-teal-500',
      isPlanning: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-accentPurple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A showcase of my recent work and personal projects
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] cursor-pointer"
                style={{ perspective: '1000px', minHeight: '400px' }}
                onClick={() => toggleCardFlip(index)}
              >
                <motion.div
                  className="relative w-full h-full"
                  animate={{ rotateY: flippedCards[index] ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front of Card */}
                  <div
                    className="absolute w-full h-full glass rounded-xl overflow-hidden glow-effect"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    {/* Project Image/Icon */}
                    <div className={`relative h-32 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                      <div className="text-6xl">
                        {project.image}
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-lg font-bold gradient-text">
                          {project.title}
                        </h3>
                        {project.isPlanning && (
                          <span className="inline-block px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 font-medium whitespace-nowrap">
                            Under Planning
                          </span>
                        )}
                      </div>
                      <p className="text-gray-400 text-sm mb-3 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tech.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs rounded-full glass text-accent font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2">
                        {project.isPlanning ? (
                          // Planning projects - Disabled buttons
                          <>
                            <button
                              disabled
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 py-2 text-sm text-center glass rounded-lg opacity-50 cursor-not-allowed font-medium flex items-center justify-center gap-1.5"
                            >
                              <FaGithub /> Code
                            </button>
                            <button
                              disabled
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 py-2 text-sm text-center bg-gradient-to-r from-accent to-accentPurple rounded-lg opacity-50 cursor-not-allowed font-medium flex items-center justify-center gap-1.5"
                            >
                              <FaExternalLinkAlt /> Demo
                            </button>
                          </>
                        ) : (
                          <>
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => e.stopPropagation()}
                              className="flex-1 py-2 text-sm text-center glass rounded-lg hover:bg-white/10 transition-all font-medium flex items-center justify-center gap-1.5"
                            >
                              <FaGithub /> Code
                            </a>
                            {index === 0 ? (
                              // Personal Portfolio - Show alert instead of opening link
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handlePortfolioDemoClick(e);
                                }}
                                className="flex-1 py-2 text-sm text-center bg-gradient-to-r from-accent to-accentPurple rounded-lg hover:opacity-90 transition-all font-medium flex items-center justify-center gap-1.5"
                              >
                                <FaExternalLinkAlt /> Demo
                              </button>
                            ) : (
                              // Other projects - Open link normally
                              <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex-1 py-2 text-sm text-center bg-gradient-to-r from-accent to-accentPurple rounded-lg hover:opacity-90 transition-all font-medium flex items-center justify-center gap-1.5"
                              >
                                <FaExternalLinkAlt /> Demo
                              </a>
                            )}
                          </>
                        )}
                      </div>

                      <p className="text-xs text-gray-500 text-center mt-3">Click to see full description </p>
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div
                    className="absolute w-full h-full glass rounded-xl p-8 flex flex-col justify-center items-center glow-effect"
                    style={{ 
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)'
                    }}
                  >
                    <div className="flex items-center gap-2 mb-6">
                      <h3 className="text-2xl font-bold gradient-text text-center">
                        {project.title}
                      </h3>
                      {project.isPlanning && (
                        <span className="inline-block px-2 py-1 text-xs rounded-full bg-yellow-500/20 text-yellow-400 font-medium whitespace-nowrap">
                          Under Planning
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 text-base leading-relaxed text-center">
                      {project.description}
                    </p>
                    <p className="text-xs text-gray-500 text-center mt-auto pt-6">Click to flip back</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
