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
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="font-medium text-lg"
          whileHover={{ scale: 1.05 }}
        >
          Raul Escandon
        </motion.div>
        <div className="hidden md:flex space-x-8 items-center">
          {['Home', 'Work', 'Services', 'About'].map((item, index) => (
            <motion.button
              key={item}
              onClick={() => goToSection(index + 1)}
              className={`text-foreground/70 hover:text-foreground transition-colors ${
                currentSection === index + 1 ? 'text-foreground font-medium' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.button>
          ))}

        </div>
        <motion.button
          onClick={() => goToSection(6)}
          className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Project
        </motion.button>
        {/* <ThemeToggle /> */}
      </nav>
    </motion.header>
  );
}