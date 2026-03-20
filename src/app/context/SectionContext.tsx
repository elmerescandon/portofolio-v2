"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface SectionContextType {
  currentSection: number;
  goToSection: (index: number) => void;
  totalSections: number;
}

const SectionContext = createContext<SectionContextType | null>(null);

export function SectionProvider({
  children,
  totalSections = 3,
}: {
  children: ReactNode;
  totalSections?: number;
}) {
  const [currentSection, setCurrentSection] = useState(0);

  const goToSection = useCallback(
    (index: number) => {
      if (index >= 0 && index < totalSections) {
        setCurrentSection(index);
      }
    },
    [totalSections]
  );

  return (
    <SectionContext.Provider value={{ currentSection, goToSection, totalSections }}>
      {children}
    </SectionContext.Provider>
  );
}

export function useSectionContext() {
  const context = useContext(SectionContext);
  if (!context) {
    throw new Error("useSectionContext must be used within a SectionProvider");
  }
  return context;
}
