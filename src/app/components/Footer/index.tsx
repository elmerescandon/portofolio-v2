import { socialLinks } from "@/data/social";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={20} />,
  GitHub: <Github size={20} />,
  "Google Scholar": <GraduationCap size={20} />,
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-3 md:py-4">
      <div className="flex justify-between items-center">
        <p className="font-mono text-xs md:text-sm tracking-wide">
          &copy; {new Date().getFullYear()} raul escandon
        </p>
        <nav aria-label="Social links" className="flex gap-1 bg-foreground/90 backdrop-blur-sm px-2 py-1 md:px-4 md:py-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center text-background hover:text-accent-yellow transition-colors"
            >
              {socialIcons[link.name]}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
