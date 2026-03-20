"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "home" },
    { href: "/work", label: "work" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-end gap-3 px-6 md:px-12 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-sans text-xs font-bold lowercase tracking-[0.2em] px-4 py-2 transition-colors ${
              pathname === link.href
                ? "bg-foreground text-background"
                : "bg-foreground/80 backdrop-blur-sm text-background hover:bg-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
