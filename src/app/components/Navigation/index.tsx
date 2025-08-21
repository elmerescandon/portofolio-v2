'use client';

import { motion } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';

interface NavigationProps {
  currentSection: number;
  goToSection: (index: number) => void;
}

export default function Navigation({ currentSection, goToSection }: NavigationProps) {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-b border-border z-50"
    >
      <nav className="w-full mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <motion.div 
          className="font-medium text-base sm:text-lg"
          whileHover={{ scale: 1.05 }}
        >
          Raúl Escandón
        </motion.div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <motion.button
            onClick={() => goToSection(4)}
            className="bg-foreground border border-foreground text-background px-4 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-medium hover:bg-muted hover:border-foreground hover:text-foreground transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's talk
          </motion.button>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}