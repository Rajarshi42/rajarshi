import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaGitAlt, FaGithub } from 'react-icons/fa';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skills = [
    { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
    { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
    { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
    { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
    { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7952B3' },
    { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
    { name: 'GitHub', icon: <FaGithub />, color: '' },
    { name: 'C#', icon: <span className="text-5xl font-bold">#</span>, color: '#239120' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-accentPurple/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-xl p-6 text-center glow-effect"
              >
                <div
                  className="text-6xl mb-4 mx-auto flex items-center justify-center"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </motion.div>
            ))}
          </div>

          {/* Floating Tech Keywords */}
          <motion.div
            variants={containerVariants}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {['Responsive Design', 'UI/UX', 'REST APIs', 'Version Control', 'Agile', 'Problem Solving'].map((keyword, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass px-6 py-3 rounded-full text-sm font-medium text-gray-300 glow-effect"
              >
                {keyword}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
