'use client';

import { motion } from 'framer-motion';

const highlights = [
  { title: "Technical Excellence", description: "Modern frameworks, best practices, and cutting-edge AI" },
  { title: "Business Focus", description: "Every feature built with ROI and user experience in mind" },
  { title: "Proven Results", description: "Track record of delivering projects that drive growth" }
];

export default function AboutSection() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
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
      </div>
    </section>
  );
}