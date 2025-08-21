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
    <section className="h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left side - Title and Description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:order-1"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6">About me</h2>
            <p className="text-base sm:text-lg text-foreground/70 mb-6 leading-relaxed">
              I'm a full-stack developer and machine learning engineer with a passion for helping businesses 
              succeed through technology. With expertise in modern web development, AI solutions, and business 
              process optimization, I focus on delivering measurable results that matter to your bottom line.
            </p>
            <p className="text-base sm:text-lg text-foreground/70 leading-relaxed">
              When you work with me, you're not just getting a developer – you're getting a strategic partner 
              who understands your business goals and knows how to achieve them through smart technology choices.
            </p>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:order-2 flex justify-center"
          >
            <div className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              <img
                src="/profile.jpg"
                alt="Profile picture"
                width={1000}
                height={1000}
                className="w-56 h-56 sm:w-64 sm:h-64 lg:w-80 lg:h-80 rounded-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
        
        {/* Highlights Section */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-12 lg:mt-16">
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center sm:text-left"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm sm:text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-4 lg:mt-6 max-lg:mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Connect with me</h3>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-foreground/5 hover:bg-foreground/10 transition-colors duration-200 group w-full sm:w-auto justify-center sm:justify-start"
                  aria-label={`Visit my ${social.name} profile`}
                >
                  <IconComponent 
                    size={20} 
                    className="text-foreground/70 group-hover:text-foreground transition-colors" 
                  />
                  <span className="text-base font-medium text-foreground/70 group-hover:text-foreground transition-colors">
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