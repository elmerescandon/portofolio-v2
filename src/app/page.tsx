"use client";

import BackgroundEffect from "./components/BackgroundEffect";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import ContactForm from "./components/ContactForm";
import SectionContainer from "./components/SectionContainer";
import { useSectionContext } from "./context/SectionContext";

const projectAccents = [
  { title: "text-accent-red", link: "text-accent-red hover:text-accent-brown" },
  { title: "text-accent-blue", link: "text-accent-blue hover:text-accent-green" },
  { title: "text-accent-orange", link: "text-accent-orange hover:text-accent-yellow" },
];

export default function Home() {
  const { currentSection } = useSectionContext();

  return (
    <SectionContainer>
      {/* Hero Section */}
      <section className="h-full flex flex-col items-center justify-center px-6 md:px-12 text-center relative">
        <BackgroundEffect isVisible={currentSection === 0}>
          <h1 className="font-black text-[clamp(2rem,6vw,5rem)] leading-[0.9] lowercase tracking-[0.02em]">
            hi, i&apos;m raul
          </h1>

          <p className="max-w-lg text-base md:text-lg leading-relaxed font-light mt-6 lowercase">
            and i <span className="text-accent-green font-medium">build</span> things that create a{" "}
            <span className="text-accent-blue font-medium">better place</span>
          </p>

          <div className="flex gap-2 mt-6 justify-center">
            <div className="w-8 h-8 bg-accent-brown" />
            <div className="w-8 h-8 bg-accent-red" />
            <div className="w-8 h-8 bg-accent-orange" />
            <div className="w-8 h-8 bg-accent-yellow" />
            <div className="w-8 h-8 bg-accent-green" />
            <div className="w-8 h-8 bg-accent-blue" />
            <div className="w-8 h-8 bg-accent-pink" />
            <div className="w-8 h-8 bg-accent-gray" />
          </div>
        </BackgroundEffect>
      </section>

      {/* Work Section */}
      <section className="h-full bg-background flex flex-col px-6 md:px-12 pt-16 md:pt-20 pb-16">
        <div className="mb-6 md:mb-8">
          <h2 className="font-black text-[clamp(2rem,6vw,5rem)] leading-[0.9] lowercase tracking-[0.05em]">
            work
          </h2>
          <p className="font-mono text-sm tracking-[0.2em] lowercase mt-2 text-foreground/50">
            selected projects
          </p>
        </div>

        <div className="flex-1 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => {
            const accent = projectAccents[index % projectAccents.length];
            return (
              <a
                key={project.slug}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between"
              >
                <div>
                  <h3 className={`font-black text-xl md:text-2xl lowercase tracking-[0.03em] leading-[0.95] ${accent.title} group-hover:opacity-70 transition-opacity`}>
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed font-light line-clamp-3">
                    {project.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.slice(0, 4).map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] lowercase tracking-wider border border-foreground/20 px-1.5 py-0.5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <p className={`mt-3 font-mono text-xs lowercase tracking-[0.2em] ${accent.link} transition-colors`}>
                  view project &rarr;
                </p>
              </a>
            );
          })}
        </div>
      </section>

      {/* Contact Section */}
      <section className="h-full bg-background flex flex-col px-6 md:px-12 pt-16 md:pt-20 pb-16">
        <div className="mb-6 md:mb-8">
          <h2 className="font-black text-[clamp(2rem,6vw,5rem)] leading-[0.9] lowercase tracking-[0.05em]">
            say hello
          </h2>
          <p className="font-mono text-sm tracking-[0.2em] lowercase mt-2 text-foreground/50">
            want to collaborate, talk open source, or just say hi?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-1">
          <ContactForm />

          <div className="flex flex-col justify-start gap-8">
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

            <div>
              <p className="font-mono text-xs lowercase tracking-[0.3em] mb-2 text-foreground/50">
                social
              </p>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-black text-lg md:text-xl lowercase tracking-wide hover:text-accent-brown transition-colors w-fit"
                  >
                    {link.name} &rarr;
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SectionContainer>
  );
}
