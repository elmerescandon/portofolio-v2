'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  goToSection: (index: number) => void;
}

export default function HeroSection({ goToSection }: HeroSectionProps) {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            I build intelligent web applications that  
            <span className="text-foreground font-bold ml-4 rounded-md bg-green-500 px-2">grow your business</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed"
          >
            Full-stack developer and AI solutions expert helping companies increase revenue through 
            high-performance web applications and intelligent automation.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              onClick={() => goToSection(6)}
              className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Free Consultation
            </motion.button>
            <motion.button
              onClick={() => goToSection(1)}
              className="border border-border px-8 py-4 rounded-full font-medium hover:bg-muted transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Case Studies
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}