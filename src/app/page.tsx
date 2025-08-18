'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Navigation from './components/Navigation';
import SectionIndicators from './components/SectionIndicators';
import ScrollNavigation from './components/ScrollNavigation';
import HeroSection from './components/HeroSection';
import ResultsSection from './components/ResultsSection';
import WorkSection from './components/WorkSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

const sections = [
  'hero',
  'results', 
  'work',
  'services',
  'testimonials',
  'about',
  'contact'
];

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);

  const nextSection = () => {
    setCurrentSection(prev => prev < sections.length - 1 ? prev + 1 : prev);
  };

  const prevSection = () => {
    setCurrentSection(prev => prev > 0 ? prev - 1 : prev);
  };

  const goToSection = (index: number) => {
    setCurrentSection(index);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 0:
        return <HeroSection goToSection={goToSection} />;
      case 1:
        return <ResultsSection />;
      case 2:
        return <WorkSection />;
      case 3:
        return <ServicesSection />;
      case 4:
        return <TestimonialsSection />;
      case 5:
        return <AboutSection />;
      case 6:
        return <ContactSection />;
      default:
        return <HeroSection goToSection={goToSection} />;
    }
  };

  return (
    <div className="h-screen overflow-hidden bg-background text-foreground">
      <Navigation currentSection={currentSection} goToSection={goToSection} />
      
      {/* <SectionIndicators 
        sections={sections} 
        currentSection={currentSection} 
        goToSection={goToSection} 
      /> */}

      <ScrollNavigation
        currentSection={currentSection}
        sectionsLength={sections.length}
        nextSection={nextSection}
        prevSection={prevSection}
      />

      {/* Main Content Container */}
      <div className="h-full pt-20 relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSection}
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 0, opacity: 0 }}
            transition={{ 
              type: "inertia", 
              stiffness: 100, 
              damping: 10,
              opacity: { duration: 0.2 }
            }}
            className="h-full overflow-y-auto custom-scrollbar"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
