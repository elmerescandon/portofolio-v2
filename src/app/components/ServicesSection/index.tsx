'use client';

import { motion } from 'framer-motion';

const services = [
  {
    title: "Enhanced Web Development",
    description: "High-performance websites and applications with intelligent features that convert visitors into customers and streamline your operations.",
    features: ["Custom web applications", "E-commerce optimization", "Performance optimization", "Mobile-first design"]
  },
  {
    title: "AI-Powered Solutions",
    description: "Intelligent automation and personalized experiences that reduce manual work and improve customer satisfaction.",
    features: ["Smart chatbots & assistants", "Automated workflows", "Personalized recommendations", "Intelligent data analysis"]
  },
  {
    title: "Business Integration",
    description: "Seamless integration with your existing tools and platforms to create unified, efficient business processes.",
    features: ["CRM & marketing automation", "Analytics & reporting", "Payment processing", "Third-party integrations"]
  }
];

export default function ServicesSection() {
  return (
    <section className="h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">How I Help Your Business Grow</h2>
          <p className="text-foreground/70 text-base sm:text-lg max-w-2xl mx-auto">
            Strategic technology solutions that deliver measurable business value
          </p>
        </motion.div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-background p-6 sm:p-8 rounded-lg border border-border"
            >
              <h3 className="text-lg sm:text-xl font-bold mb-4">{service.title}</h3>
              <p className="text-foreground/70 mb-6 text-sm sm:text-base leading-relaxed">{service.description}</p>
              <ul className="space-y-2 text-sm">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}