import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-12 glass border-t border-white/10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6"
      >
        <div className="flex flex-col items-center">
          {/* Signature Style Name */}
          <div className="text-4xl mb-6 signature-text">
            Penti Rajarshi
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mb-8">
            <a
              href="https://github.com/Rajarshi42"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-accent transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rajarshipenti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl text-gray-400 hover:text-accent transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:rajarshipenti2000@gmail.com"
              className="text-2xl text-gray-400 hover:text-accent transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400">
            <p className="flex items-center gap-2 justify-center mb-2">
              Made with <FaHeart className="text-red-500 animate-pulse" /> by Penti Rajarshi
            </p>
            <p className="text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          {/* Animated Signature */}
          <div className="mt-6 text-sm text-gray-500 font-mono">
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              &lt;/&gt; with passion
            </motion.span>
          </div>
        </div>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-accent to-accentPurple rounded-full flex items-center justify-center text-white text-xl shadow-lg glow-effect z-50"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </footer>
  );
};

export default Footer;
