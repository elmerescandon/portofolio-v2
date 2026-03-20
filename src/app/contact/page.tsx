import { siteConfig } from "@/data/site";
import { socialLinks } from "@/data/social";
import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20 md:pt-24">
      <section className="px-6 md:px-12 pt-12 md:pt-24 pb-8">
        <h1 className="font-black text-[clamp(2.5rem,8vw,8rem)] leading-[0.9] lowercase tracking-[0.05em]">
          say hello
        </h1>
        <p className="font-mono text-sm tracking-[0.2em] lowercase mt-4 text-foreground/50">
          want to collaborate, talk open source, or just say hi?
        </p>
      </section>

      <section className="px-6 md:px-12 py-12 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-16">
        <ContactForm />

        <div className="flex flex-col justify-start gap-10">
          <div>
            <p className="font-mono text-xs lowercase tracking-[0.3em] mb-3 text-foreground/50">
              email directly
            </p>
            <a
              href={`mailto:${siteConfig.email}`}
              className="font-black text-xl md:text-2xl hover:text-accent-orange transition-colors break-all lowercase"
            >
              {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="font-mono text-xs lowercase tracking-[0.3em] mb-3 text-foreground/50">
              social
            </p>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-black text-xl md:text-2xl lowercase tracking-wide hover:text-accent-brown transition-colors w-fit"
                >
                  {link.name} &rarr;
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
