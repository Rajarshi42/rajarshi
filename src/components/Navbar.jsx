import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Detect active section
      const scrollPosition = window.scrollY + 100;
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'interests', 'contact'];
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'About', to: 'about' },
    { name: 'Skills', to: 'skills' },
    { name: 'Experience', to: 'experience' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <>
      {/* Simple Clean Navbar - Only show on hero/home page */}
      {activeSection === 'hero' && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.5 }}
          className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
            scrolled ? 'glass py-4' : 'bg-transparent py-6'
          }`}
        >
          <div className="container mx-auto px-6">
            <div className="flex items-center justify-between">
              {/* Logo */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-bold"
              >
                <span className="gradient-text">Penti</span>
                <span className="text-white ml-1">Rajarshi</span>
              </motion.div>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center gap-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    smooth={true}
                    offset={0}
                    duration={500}
                    className="cursor-pointer relative group"
                  >
                    <span className={`transition-colors ${
                      activeSection === item.to ? 'text-accent' : 'text-gray-300 hover:text-white'
                    }`}>
                      {item.name}
                    </span>
                    {activeSection === item.to && (
                      <motion.div
                        layoutId="underline"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-accentPurple"
                      />
                    )}
                  </Link>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="/rajarshiResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-accent to-accentPurple rounded-lg text-white font-medium"
              >
                Resume
              </motion.a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-white text-2xl"
              >
                {mobileMenuOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </motion.nav>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-20 left-0 right-0 z-30 md:hidden glass mx-6 rounded-xl p-6"
        >
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              smooth={true}
              offset={0}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3 text-gray-300 hover:text-white transition-colors cursor-pointer border-b border-white/10 last:border-0"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/rajarshiResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 px-6 py-3 bg-gradient-to-r from-accent to-accentPurple rounded-lg text-white font-medium text-center"
          >
            View Resume
          </a>
        </motion.div>
      )}
    </>


  );
};

export default Navbar;
