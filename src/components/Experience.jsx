import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaBriefcase, FaCode, FaTasks } from 'react-icons/fa';

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: 'Web Developer Intern',
      company: 'Soulax Software Pvt Ltd',
      period: '2023 - 2024',
      icon: <FaCode />,
      responsibilities: [
        'Developed responsive web pages from Figma designs with pixel-perfect accuracy',
        'Implemented reusable UI components using React.js and modern JavaScript',
        'Collaborated with senior developers to optimize code quality and performance',
        'Worked on chatbot integration using WebSocket technology',
        'Participated in code reviews and agile development processes',
      ],
      color: '#6366f1',
    },
    {
      title: 'Process Executive',
      company: 'Cognizant',
      period: '2022 - 2023',
      icon: <FaTasks />,
      responsibilities: [
        'Managed workflow-driven projects with high efficiency and accuracy',
        'Achieved 98%+ accuracy in content moderation tasks',
        'Conducted onboarding and training sessions for new team members',
        'Collaborated with cross-functional teams to improve processes',
        'Maintained detailed documentation and quality standards',
      ],
      color: '#a855f7',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Work <span className="gradient-text">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accentPurple transform md:-translate-x-1/2"></div>

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative mb-16 last:mb-0"
              >
                <div className="flex items-start md:items-center">
                  {/* Timeline Icon - On the line, with arrow pointing to card */}
                  <div
                    className={`absolute ${
                      index % 2 === 0 
                        ? 'left-8 md:left-1/2 md:-translate-x-1/2' 
                        : 'left-8 md:left-1/2 md:-translate-x-1/2'
                    } w-16 h-16 rounded-full glass flex items-center justify-center text-2xl z-10 glow-effect`}
                    style={{ color: exp.color }}
                  >
                    {exp.icon}
                  </div>

                  {/* Arrow pointing to card */}
                  <div
                    className={`hidden md:block absolute top-6 ${
                      index % 2 === 0 
                        ? 'left-[calc(50%+2rem)] w-8 h-0.5 bg-gradient-to-r from-accent to-transparent' 
                        : 'right-[calc(50%+2rem)] w-8 h-0.5 bg-gradient-to-l from-accent to-transparent'
                    }`}
                  />

                  {/* Content Card */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className={`ml-28 md:ml-0 glass rounded-xl p-6 glow-effect w-full ${
                      index % 2 === 0 
                        ? 'md:w-[calc(50%-5rem)] md:mr-auto' 
                        : 'md:w-[calc(50%-5rem)] md:ml-auto'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold gradient-text">{exp.title}</h3>
                      <FaBriefcase className="text-accent text-xl" />
                    </div>
                    
                    <div className="mb-4">
                      <p className="text-xl font-semibold text-white">{exp.company}</p>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>

                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ delay: index * 0.3 + idx * 0.1 }}
                          className="flex items-start text-gray-400"
                        >
                          <span className="text-accent mr-2 mt-1">▹</span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
