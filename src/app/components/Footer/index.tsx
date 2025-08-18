'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed bottom-0 left-0 right-0 border-t border-border bg-background/80 backdrop-blur-sm py-4 z-30"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-sm text-foreground/60">
          © 2024 Raul Escandon
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">LinkedIn</a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">GitHub</a>
          <a href="#" className="text-foreground/60 hover:text-foreground transition-colors text-sm">Twitter</a>
        </div>
      </div>
    </motion.footer>
  );
}