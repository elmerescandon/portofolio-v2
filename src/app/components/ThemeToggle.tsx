'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="w-10 h-10 bg-background border-2 border-border rounded-xl flex items-center justify-center transition-all duration-300 hover:bg-muted hover:border-foreground/20 focus:outline-none focus:ring-2 focus:ring-foreground/50 focus:ring-offset-2 focus:ring-offset-background shadow-md hover:shadow-lg"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.02 }}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <motion.div
        animate={{
          rotate: theme === 'dark' ? 360 : 0,
          scale: [1, 0.8, 1],
        }}
        transition={{ 
          duration: 0.3,
          scale: { duration: 0.2 }
        }}
        className="text-foreground"
      >
        {theme === 'light' ? (
          <Sun size={20} strokeWidth={2.5} />
        ) : (
          <Moon size={20} strokeWidth={2.5} />
        )}
      </motion.div>
    </motion.button>
  );
}