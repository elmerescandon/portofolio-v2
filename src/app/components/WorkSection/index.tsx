'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink } from "lucide-react";



const projects = [
  {
    title: "Arkangel AI, healthcare transformation",
    description: "Developing in Arkangel AI, a platform for healthcare that assists doctors in diagnosing and treating patients. ",
    results: [
      "Implemented a monitoring system that stores up to 20,000 patients.",
      "Analyzed +34,000 medical records to improve patient care.",
      "Developed a platform that allows doctors to diagnose and treat patients with the help of AI."
    ],
    image: "/images/arkangel.jpg",
    tech: "React • Next.js • Agentic Artificial Intelligence • AWS • Supabase • Stripe",
    url: "https://www.arkangel.ai/"  
  },
  {
    title: "Promart Homepage Enhancement",
    description: "Enhanced Promart Homecenter’s (largest home center store in Peru) website for faster load times and easier navigation.",
    results: [
      "Automated all product inventory processes",
      "Average visit duration increased by 30%",
      "100% accomplishment of the project's goals"
    ],
    image: "/images/promart.jpg",
    tech: "jQuery • Google Cloud Platform • VTEX API & CMS",
    url: "https://www.promart.pe/"  
  },
  {
    title: "Wize E-commerce Platform",
    description: "Built an e-commerce platform for Wize, a Peruvian e-commerce platform of audio products.",
    results: [
      "Fully automated product inventory processes",
      "Integration with Payment and Analytics tools",
    ],
    image: "/images/wize.jpg",
    tech: "Wordpress • WooCommerce • MercadoPago • Mailchimp • Google Analytics",
    url: "https://www.wize.pe/"  
  },
  // {
  //   title: "Analytics Dashboard & Automation",
  //   description: "Created a comprehensive business intelligence dashboard with automated reporting that integrates Google Analytics, Meta Ads, and sales data.",
  //   results: [
  //     "Saved 15 hours/week on reporting",
  //     "Improved decision-making speed by 50%",
  //     "Real-time performance insights"
  //   ],
  //   tech: "Next.js • Google Analytics API • Meta Ads API • AWS"
  // }
];

export default function WorkSection() {
  return (
    <section className="h-full overflow-y-auto custom-scrollbar">

      <div className="max-w-6xl mx-auto px-6 py-12 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
          <p className="text-foreground/70 mb-12 text-lg">Real projects, real results for real businesses</p>
        </motion.div>
        
        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                    <ExternalLink size={20} className="text-accent hover:text-accent-foreground" />
                  </a>
                </div>
                <p className="text-foreground/70 mb-6">{project.description}</p>
                <div className="space-y-3 mb-6">
                  {project.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <div className="text-sm text-foreground/60">{project.tech}</div>
              </div>
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="group relative">
                  <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-background/80 to-muted/50 p-4 shadow-2xl ring-1 ring-border/10 backdrop-blur-sm transition-all duration-500 hover:shadow-3xl hover:ring-border/20">
                    <div className="aspect-video w-full overflow-hidden rounded-xl bg-muted/30">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          width={1280}
                          height={720}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <span className="text-foreground/40">[Project Screenshot Placeholder]</span>
                        </div>
                      )}
                    </div>
                    {/* Elegant overlay gradient */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-background/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    {/* Subtle glow effect */}
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-accent/20 via-primary/10 to-accent/20 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}