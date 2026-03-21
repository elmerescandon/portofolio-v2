"use client";

import { useSectionContext } from "@/app/context/SectionContext";
import { Home, Briefcase, Mail } from "lucide-react";

export default function NavBar() {
  const { currentSection, goToSection } = useSectionContext();

  const links = [
    { index: 0, label: "home", icon: <Home size={16} /> },
    { index: 1, label: "work", icon: <Briefcase size={16} /> },
    { index: 2, label: "contact", icon: <Mail size={16} /> },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-end gap-2 md:gap-3 px-6 md:px-12 py-4 pointer-events-auto w-fit ml-auto">
        {links.map((link) => (
          <button
            key={link.index}
            onClick={() => goToSection(link.index)}
            aria-label={link.label}
            className={`font-sans text-xs font-bold lowercase tracking-[0.2em] min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0 flex items-center justify-center md:px-4 md:py-2 transition-colors ${
              currentSection === link.index
                ? "bg-foreground text-background"
                : "bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground"
            }`}
          >
            <span className="md:hidden">{link.icon}</span>
            <span className="hidden md:inline">{link.label}</span>
          </button>
        ))}
      </nav>
    </header>
  );
}
