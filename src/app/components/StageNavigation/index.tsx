import React from 'react';

interface StageNavigationProps {
  currentSection: number;
  sections: string[];
  goToSection: (index: number) => void;
}

const StageNavigation: React.FC<StageNavigationProps> = ({
  currentSection,
  sections,
  goToSection,
}) => {
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden md:block">
      <div className="flex flex-col gap-3">
        {sections.map((section, index) => (
          <button
            key={section}
            type="button"
            className={`flex items-center gap-3 text-left transition-all duration-300 hover:text-foreground group ${
              currentSection === index 
                ? 'text-foreground font-bold' 
                : 'text-muted-foreground font-normal'
            }`}
            onClick={() => goToSection(index)}
            aria-label={`Go to ${section} section`}
          >
            <span className={`h-px bg-current transition-all duration-300 ${
              currentSection === index 
                ? 'w-10 opacity-100' 
                : 'w-6 opacity-60 group-hover:opacity-100'
            }`} />
            <span className="capitalize text-sm tracking-wide">
              {section}
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default StageNavigation;

