import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              variants={itemVariants}
              className="text-accent text-lg mb-4 font-medium"
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              Penti Rajarshi
            </motion.h1>

            <motion.div variants={itemVariants} className="mb-6">
              <TypeAnimation
                sequence={[
                  'React Developer',
                  2000,
                  'Frontend Engineer',
                  2000,
                  'UI Enthusiast',
                  2000,
                  'Problem Solver',
                  2000,
                ]}
                wrapper="h2"
                speed={50}
                className="text-3xl md:text-5xl font-bold gradient-text"
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-lg md:text-xl mb-8 max-w-2xl"
            >
              Building modern, scalable, and interactive web experiences with passion and precision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Link to="projects" smooth={true} duration={500}>
                <button className="magnetic-btn px-8 py-4 bg-gradient-to-r from-accent to-accentPurple rounded-full text-white font-semibold glow-effect">
                  View Projects
                </button>
              </Link>
              <a href="/rajarshiResume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="magnetic-btn px-8 py-4 glass rounded-full text-white font-semibold hover:bg-white/10 transition-all">
                  View Resume
                </button>
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div
              variants={itemVariants}
              className="flex gap-6 justify-center lg:justify-start"
            >
              <a
                href="https://github.com/pentirajarshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-accent transition-colors glow-effect p-3 rounded-full glass"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/pentirajarshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-accent transition-colors glow-effect p-3 rounded-full glass"
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:pentirajarshi@example.com"
                className="text-3xl text-gray-400 hover:text-accent transition-colors glow-effect p-3 rounded-full glass"
              >
                <FaEnvelope />
              </a>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            variants={itemVariants}
            className="flex-1 relative"
          >
            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-full max-w-md mx-auto"
            >
              {/* Profile Image with Glow Effect */}
              <div className="relative w-80 h-80 mx-auto rounded-full overflow-hidden glass glow-effect border-4 border-accent/30">
                <img
                  src="/svg.svg"
                  alt="Penti Rajarshi"
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-accent/20 to-transparent"></div>
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-10 -left-10 glass p-4 rounded-lg glow-effect"
              >
                <span className="text-2xl">⚛️</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 -right-10 glass p-4 rounded-lg glow-effect"
              >
                <span className="text-2xl">😁</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute bottom-20 -left-5 glass p-4 rounded-lg glow-effect"
              >
                <span className="text-2xl">😎</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                className="absolute bottom-10 -right-10 glass p-4 rounded-lg glow-effect"
              >
                <span className="text-2xl">☮️</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-accent rounded-full mt-2"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
