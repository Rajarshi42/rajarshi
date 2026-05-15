import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaCamera, FaPalette, FaMusic, FaTv, FaLanguage, FaDumbbell } from 'react-icons/fa';
import { GiShuttlecock, GiCricketBat } from 'react-icons/gi';

const Interests = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isHoveredInterests, setIsHoveredInterests] = useState(false);

  const interests = [
    { name: 'Photography', icon: <FaCamera />, color: '#6366f1' },
    { name: 'UI Design', icon: <FaPalette />, color: '#a855f7' },
    { name: 'Badminton', icon: <GiShuttlecock />, color: '#ec4899' },
    { name: 'Cricket', icon: <GiCricketBat />, color: '#3b82f6' },
    { name: 'Fitness', icon: <FaDumbbell />, color: '#ef4444' },
    { name: 'Music', icon: <FaMusic />, color: '#f59e0b' },
    { name: 'Anime', icon: <FaTv />, color: '#10b981' },
  ];

  const languages = [
    { name: 'English', level: 'Fluent' },
    { name: 'Telugu', level: 'Native' },
    { name: 'Hindi', level: 'Fluent' },
    { name: 'Japanese', level: 'Learning' },
  ];

  // Triple the interests array for truly seamless infinite scroll
  const tripleInterests = [...interests, ...interests, ...interests];

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
    <section id="interests" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-accentPurple/10 rounded-full blur-3xl"></div>

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
              Interests & <span className="gradient-text">Languages</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              What I love doing in my free time
            </p>
          </motion.div>

          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Interests - Continuous Infinite Scroll */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-center"
              >
                <span className="gradient-text">Interests</span>
              </motion.h3>
              <div 
                className="overflow-hidden relative"
                onMouseEnter={() => setIsHoveredInterests(true)}
                onMouseLeave={() => setIsHoveredInterests(false)}
              >
                <motion.div
                  className="flex gap-4"
                  animate={{
                    x: [0, -100 * interests.length],
                  }}
                  transition={{
                    x: {
                      repeat: Infinity,
                      repeatType: "loop",
                      duration: isHoveredInterests ? 30 : 15,
                      ease: "linear",
                    },
                  }}
                  style={{ width: 'max-content' }}
                >
                  {tripleInterests.map((interest, index) => (
                    <div
                      key={index}
                      className="glass rounded-xl p-4 flex items-center gap-3 glow-effect"
                      style={{ minWidth: '180px' }}
                    >
                      <div
                        className="text-2xl flex items-center"
                        style={{ color: interest.color }}
                      >
                        {interest.icon}
                      </div>
                      <p className="text-sm font-medium whitespace-nowrap">{interest.name}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Languages - Static Grid Layout */}
            <div>
              <motion.h3
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-center"
              >
                <span className="gradient-text">Languages</span>
              </motion.h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
                {languages.map((language, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass rounded-xl p-4 flex items-center gap-4 glow-effect"
                  >
                    <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-accent text-xl flex-shrink-0">
                      <FaLanguage />
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-base">{language.name}</p>
                      <p className="text-sm text-gray-400">{language.level}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-accent to-accentPurple flex-shrink-0"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;
