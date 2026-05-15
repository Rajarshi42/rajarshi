import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Mechanical Engineering',
      institution: 'Vaignan Institute of Technology',
      period: '2018 - 2022',
      icon: <FaGraduationCap />,
      color: '#6366f1',
    },
    {
      degree: 'Intermediate',
      field: 'MPC',
      institution: 'Junior College',
      period: '2016 - 2018',
      icon: <FaSchool />,
      color: '#a855f7',
    },
    {
      degree: 'Secondary School Certificate',
      field: 'SSC',
      institution: 'High School',
      period: '2015 - 2016',
      icon: <FaSchool />,
      color: '#ec4899',
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="py-20 relative overflow-hidden">
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
              <span className="gradient-text">Education</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accentPurple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My academic journey and qualifications
            </p>
          </motion.div>

          {/* Education Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass rounded-2xl p-6 glow-effect"
              >
                <div
                  className="w-16 h-16 rounded-full glass flex items-center justify-center text-3xl mb-4 mx-auto"
                  style={{ color: edu.color }}
                >
                  {edu.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-center gradient-text">
                  {edu.degree}
                </h3>
                <p className="text-gray-300 text-center mb-2">{edu.field}</p>
                <p className="text-gray-400 text-center mb-2">{edu.institution}</p>
                <p className="text-sm text-accent text-center font-medium">{edu.period}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
