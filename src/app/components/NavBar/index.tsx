"use client";

import { useSectionContext } from "@/app/context/SectionContext";

export default function NavBar() {
  const { currentSection, goToSection } = useSectionContext();

  const links = [
    { index: 0, label: "home" },
    { index: 1, label: "work" },
    { index: 2, label: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-end gap-3 px-6 md:px-12 py-4 pointer-events-auto w-fit ml-auto">
        {links.map((link) => (
          <button
            key={link.index}
            onClick={() => goToSection(link.index)}
            className={`font-sans text-xs font-bold lowercase tracking-[0.2em] px-4 py-2 transition-colors ${
              currentSection === link.index
                ? "bg-foreground text-background"
                : "bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground"
            }`}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
