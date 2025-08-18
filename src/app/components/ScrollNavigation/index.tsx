'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';

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
        <ArrowLeft size={20} strokeWidth={2} />
        </motion.button>
      <motion.button
        onClick={nextSection}
        disabled={currentSection === sectionsLength - 1}
        className="p-3 rounded-full bg-foreground/10 backdrop-blur-sm border border-border disabled:opacity-50 disabled:cursor-not-allowed"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRight size={20} strokeWidth={2} />
      </motion.button>
    </div>
  );
}