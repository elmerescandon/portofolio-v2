'use client';

import { motion } from 'framer-motion';
import { Linkedin, Github, GraduationCap } from 'lucide-react';

const highlights = [
  { title: "Technical Excellence", description: "Modern frameworks, best practices, and cutting-edge AI" },
  { title: "Business Focus", description: "Every feature built with ROI and user experience in mind" },
  { title: "Proven Results", description: "Track record of delivering projects that drive growth" }
];

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: Linkedin,
    url: 'https://www.linkedin.com/in/elmerescandontufino/', // Replace with your actual LinkedIn URL
  },
  {
    name: 'GitHub',
    icon: Github,
    url: 'https://github.com/elmerescandon', // Replace with your actual GitHub URL
  },
  {
    name: 'Google Scholar',
    icon: GraduationCap,
    url: 'https://scholar.google.com/citations?user=cDpA43kAAAAJ&hl=es&oi=sra', // Replace with your actual Google Scholar URL
  },
];

export default function AboutSection() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {/* Profile Picture */}
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              {/* Placeholder - Replace with actual image */}
              <span>RP</span>
            </div>
          </div>
          
          <h2 className="text-3xl font-bold mb-6">About me</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            I'm a full-stack developer and machine learning engineer with a passion for helping businesses 
            succeed through technology. With expertise in modern web development, AI solutions, and business 
            process optimization, I focus on delivering measurable results that matter to your bottom line.
          </p>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            When you work with me, you're not just getting a developer – you're getting a strategic partner 
            who understands your business goals and knows how to achieve them through smart technology choices.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <h3 className="font-bold mb-2">{item.title}</h3>
              <p className="text-foreground/70 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6">Connect with me</h3>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200 group"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <IconComponent 
                    size={20} 
                    className="text-foreground/70 group-hover:text-foreground transition-colors" 
                  />
                  <span className="text-sm font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}