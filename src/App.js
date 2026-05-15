import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Loader from './components/Loader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SectionIndicator from './components/SectionIndicator';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {loading && <Loader />}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <SectionIndicator />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Interests />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
