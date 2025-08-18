'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: "300%", label: "Average conversion increase" },
  { value: "50%", label: "Reduction in manual work" },
  { value: "2-4 weeks", label: "Typical project delivery" }
];

export default function ResultsSection() {
  return (
    <section className="flex items-center justify-center h-full bg-muted">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12"
        >
          Proven Results for Growing Businesses
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-foreground/70">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}