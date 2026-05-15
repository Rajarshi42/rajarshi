import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { label: 'Experience', value: '2+', suffix: 'Years' },
    { label: 'Projects', value: '15+', suffix: 'Completed' },
    { label: 'Technologies', value: '10+', suffix: 'Mastered' },
    { label: 'Learning', value: '∞', suffix: 'Journey' },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="min-h-screen flex items-center py-20 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Title */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            {/* Left - Image/Avatar */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative w-full max-w-sm mx-auto">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-2xl p-6 glow-effect"
                >
                  <div className="aspect-square rounded-xl bg-gradient-to-br from-accent to-accentPurple flex items-center justify-center">
                    <span className="text-8xl">👨‍💻</span>
                  </div>
                </motion.div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accentPurple/20 rounded-full blur-2xl"></div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Frontend Developer & <span className="gradient-text">React Specialist</span>
              </h3>
              
              <div className="space-y-3 text-gray-400 text-base md:text-lg leading-relaxed">
                <p>
                  I'm a passionate Frontend Developer with expertise in building responsive, 
                  scalable, and user-friendly web applications. With a strong foundation in 
                  <span className="text-accent font-semibold"> HTML, CSS, JavaScript, and React.js</span>, 
                  I transform ideas into elegant digital experiences.
                </p>
                
                <p>
                  My experience includes developing responsive web applications from Figma designs, 
                  creating reusable UI components, and implementing scalable frontend architectures.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center glow-effect"
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-400">{stat.suffix}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
