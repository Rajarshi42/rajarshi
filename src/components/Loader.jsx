import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary"
    >
      <div className="text-center">
        <div className="loader mx-auto mb-4"></div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-light tracking-wider gradient-text"
        >
          Loading Experience...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loader;
