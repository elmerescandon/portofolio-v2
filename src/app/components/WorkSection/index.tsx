'use client';

import { motion } from 'framer-motion';


const projects = [
  {
    title: "E-commerce Platform Optimization",
    description: "Redesigned and optimized an online retail platform, implementing intelligent product recommendations and automated inventory management system.",
    results: [
      "Increased sales by 240% in 3 months",
      "Reduced cart abandonment by 60%",
      "Automated 80% of inventory tasks"
    ],
    tech: "Next.js • TypeScript • Supabase • AI Recommendations"
  },
  {
    title: "AI Customer Support Chatbot",
    description: "Built an intelligent chatbot that handles customer inquiries, processes orders, and integrates with existing CRM systems for seamless customer experience.",
    results: [
      "Reduced support tickets by 70%",
      "24/7 customer support availability",
      "Improved customer satisfaction by 45%"
    ],
    tech: "React • OpenAI API • Firebase • HubSpot Integration"
  },
  {
    title: "Analytics Dashboard & Automation",
    description: "Created a comprehensive business intelligence dashboard with automated reporting that integrates Google Analytics, Meta Ads, and sales data.",
    results: [
      "Saved 15 hours/week on reporting",
      "Improved decision-making speed by 50%",
      "Real-time performance insights"
    ],
    tech: "Next.js • Google Analytics API • Meta Ads API • AWS"
  }
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
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
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
              <div className={`bg-muted rounded-lg h-80 flex items-center justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-foreground/40">[Project Screenshot Placeholder]</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}