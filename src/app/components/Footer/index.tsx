import { socialLinks } from "@/data/social";
import { Linkedin, Github, GraduationCap } from "lucide-react";

const socialIcons: Record<string, React.ReactNode> = {
  LinkedIn: <Linkedin size={18} />,
  GitHub: <Github size={18} />,
  "Google Scholar": <GraduationCap size={18} />,
};

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 px-6 md:px-12 py-4">
      <div className="flex justify-between items-center">
        <p className="font-mono text-sm tracking-wide">
          &copy; {new Date().getFullYear()} raul escandon
        </p>
        <div className="flex gap-3 bg-foreground/90 backdrop-blur-sm px-4 py-2">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-background hover:text-accent-yellow transition-colors"
            >
              {socialIcons[link.name]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
