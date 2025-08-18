'use client';

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Raul transformed our online presence completely. The new website not only looks amazing but has tripled our online sales. The AI features he built save us hours every day.",
    name: "Sarah Mitchell",
    title: "CEO, RetailFlow Solutions",
    initials: "SM"
  },
  {
    quote: "Working with Raul was a game-changer. He understood our business needs and delivered a solution that exceeded our expectations. The ROI was evident within the first month.",
    name: "David Johnson",
    title: "Founder, TechStart Ventures",
    initials: "DJ"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="flex items-center justify-center h-full">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-12 text-center"
        >
          What Clients Say
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-muted p-8 rounded-lg"
            >
              <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <span className="font-bold">{testimonial.initials}</span>
                </div>
                <div>
                  <div className="font-medium">{testimonial.name}</div>
                  <div className="text-sm text-foreground/70">{testimonial.title}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}