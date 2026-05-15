import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaHome, FaUser, FaCode, FaBriefcase, FaProjectDiagram, FaGraduationCap, FaHeart, FaEnvelope } from 'react-icons/fa';

const SectionIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSection, setHoveredSection] = useState(null);

  const sections = [
    { name: 'Home', id: 'hero', icon: <FaHome /> },
    { name: 'About', id: 'about', icon: <FaUser /> },
    { name: 'Skills', id: 'skills', icon: <FaCode /> },
    { name: 'Experience', id: 'experience', icon: <FaBriefcase /> },
    { name: 'Projects', id: 'projects', icon: <FaProjectDiagram /> },
    { name: 'Education', id: 'education', icon: <FaGraduationCap /> },
    { name: 'Interests', id: 'interests', icon: <FaHeart /> },
    { name: 'Contact', id: 'contact', icon: <FaEnvelope /> },
  ];

  // Listen to scroll events to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      {/* Only show dots when NOT on hero section */}
      {activeSection !== 'hero' && (
        <div className="flex flex-col gap-0">
          {sections.map((section, index) => (
            <Link
              key={index}
              to={section.id}
              smooth={true}
              offset={0}
              duration={500}
              className="cursor-pointer relative group flex items-center justify-end h-8"
              onMouseEnter={() => setHoveredSection(section.id)}
              onMouseLeave={() => setHoveredSection(null)}
            >
              {/* Show label on hover or when active */}
              {(activeSection === section.id || hoveredSection === section.id) && (
                <div className="absolute right-6 glass px-3 py-1.5 rounded-full flex items-center gap-2">
                  <div className="text-accent text-sm flex items-center">
                    {section.icon}
                  </div>
                  <span className="text-xs font-medium whitespace-nowrap">
                    {section.name}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/20 to-accentPurple/20 blur-md -z-10" />
                </div>
              )}
              
              {/* Dot indicator */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-accent to-accentPurple shadow-lg shadow-accent/50 scale-125'
                    : 'bg-gray-500 group-hover:bg-gray-400'
                }`}
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SectionIndicator;
