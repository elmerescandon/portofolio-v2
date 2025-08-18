'use client';

import { motion } from 'framer-motion';

interface SectionIndicatorsProps {
  sections: string[];
  currentSection: number;
  goToSection: (index: number) => void;
}

export default function SectionIndicators({ sections, currentSection, goToSection }: SectionIndicatorsProps) {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 space-y-3">
      {sections.map((_, index) => (
        <motion.button
          key={index}
          onClick={() => goToSection(index)}
          className={`w-3 h-3 rounded-full border-2 border-foreground/30 transition-colors ${
            currentSection === index ? 'bg-foreground' : 'bg-transparent'
          }`}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        />
      ))}
    </div>
  );
}