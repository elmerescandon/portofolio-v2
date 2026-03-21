"use client";

import BackgroundEffect from "./components/BackgroundEffect";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import ContactForm from "./components/ContactForm";
import ContributionsSection from "./components/ContributionsSection";
import SectionContainer from "./components/SectionContainer";
import { useSectionContext } from "./context/SectionContext";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={20} />,
  GitHub: <Github size={20} />,
  "Google Scholar": <GraduationCap size={20} />,
};

// Map each swatch to a social link name (null = decorative)
const swatches: { bg: string; social: string | null }[] = [
  { bg: "bg-accent-brown",  social: null },
  { bg: "bg-accent-red",    social: null },
  { bg: "bg-accent-orange", social: null },
  { bg: "bg-accent-yellow", social: null },
  { bg: "bg-accent-green",  social: "Google Scholar" },
  { bg: "bg-accent-blue",   social: "LinkedIn" },
  { bg: "bg-accent-pink",   social: null },
  { bg: "bg-accent-gray",   social: "GitHub" },
];

export default function Home() {
  const { currentSection } = useSectionContext();

  return (
    <SectionContainer>
      {/* Hero Section */}
      <section className="h-full flex flex-col items-center justify-center px-6 md:px-12 text-center relative">
        <BackgroundEffect isVisible={currentSection === 0}>
          <h1 className="font-black leading-[0.95] lowercase tracking-[0.02em]">
            <span className="block text-[clamp(2.5rem,8vw,5rem)]">hi!</span>
            <span className="block text-[clamp(1.6rem,5vw,4rem)] whitespace-nowrap">i&apos;m raul escandón</span>
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-relaxed font-light mt-6 lowercase">
            building technology driven by{" "}
            <span className="text-accent-orange font-medium">curiosity</span>{" "}
            and a desire to{" "}
            <span className="text-accent-green font-medium whitespace-nowrap">reduce inequality</span>.
          </p>

          <div className="grid grid-cols-4 md:grid-cols-8 gap-1.5 mt-6 mx-auto">
            {swatches.map(({ bg, social }) => {
              const link = social ? socialLinks.find((s) => s.name === social) : null;
              if (link) {
                return (
                  <a
                    key={social}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className={`w-11 h-11 ${bg} flex items-center justify-center text-background/70 hover:text-background hover:scale-110 transition-all`}
                  >
                    {socialIcons[link.name]}
                  </a>
                );
              }
              return <div key={bg} className={`w-11 h-11 ${bg}`} />;
            })}
          </div>
        </BackgroundEffect>
      </section>

      <ContributionsSection />

      {/* Contact Section */}
      <section className="h-full bg-background flex flex-col px-6 md:px-12 pt-16 md:pt-20 pb-20 md:pb-16">
        <div className="mb-4 md:mb-8">
          <h2 className="font-black text-[clamp(2rem,6vw,5rem)] leading-[0.9] lowercase tracking-[0.05em]">
            say hello
          </h2>
          <p className="font-mono text-sm tracking-[0.2em] lowercase mt-2 text-foreground/50">
            want to collaborate, talk open source, or just say hi?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 md:flex-1">
          <ContactForm />

          <div className="flex flex-col justify-start">
            <div>
              <p className="font-mono text-xs lowercase tracking-[0.3em] mb-2 text-foreground/50">
                email directly
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="font-black text-lg md:text-xl hover:text-accent-orange transition-colors break-all lowercase"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
