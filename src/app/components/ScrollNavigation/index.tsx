'use client';

import { motion } from 'framer-motion';

interface ScrollNavigationProps {
  currentSection: number;
  sectionsLength: number;
  nextSection: () => void;
  prevSection: () => void;
}

export default function ScrollNavigation({ 
  currentSection, 
  sectionsLength, 
  nextSection, 
  prevSection 
}: ScrollNavigationProps) {
  return (
    <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-40 flex space-x-4">
      <motion.button
        onClick={prevSection}
        disabled={currentSection === 0}
        className="p-3 rounded-full bg-foreground/10 backdrop-blur-sm border border-border disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
      <motion.button
        onClick={nextSection}
        disabled={currentSection === sectionsLength - 1}
        className="p-3 rounded-full bg-foreground/10 backdrop-blur-sm border border-border disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </motion.button>
    </div>
  );
}