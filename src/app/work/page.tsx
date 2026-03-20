import { projects } from "@/data/projects";

const projectAccents = [
  { title: "text-accent-red", link: "text-accent-red hover:text-accent-brown" },
  { title: "text-accent-blue", link: "text-accent-blue hover:text-accent-green" },
  { title: "text-accent-orange", link: "text-accent-orange hover:text-accent-yellow" },
];

export default function WorkPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <section className="px-6 md:px-12 pt-12 md:pt-24 pb-8">
        <h1 className="font-black text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] lowercase tracking-[0.05em]">
          work
        </h1>
        <p className="font-mono text-sm tracking-[0.2em] lowercase mt-4 text-foreground/50">
          selected projects
        </p>
      </section>

      <div className="px-6 md:px-12">
        {projects.map((project, index) => {
          const accent = projectAccents[index % projectAccents.length];
          return (
            <article key={project.slug} className="py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
              {/* Image */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="aspect-video bg-muted overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center">
                <h2 className={`font-black text-3xl md:text-5xl lowercase tracking-[0.03em] leading-[0.95] ${accent.title}`}>
                  {project.title}
                </h2>
                <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed font-light">
                  {project.description}
                </p>

                <div className="mt-6 space-y-2">
                  {project.contributions.map((contribution, i) => (
                    <p key={i} className="font-mono text-xs md:text-sm text-foreground/70">
                      — {contribution}
                    </p>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-xs lowercase tracking-wider border border-foreground/20 px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 font-mono text-sm lowercase tracking-[0.2em] ${accent.link} transition-colors inline-block w-fit`}
                >
                  view project &rarr;
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
