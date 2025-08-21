'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="flex items-center justify-start h-full">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-foreground/70">
            Let's discuss how intelligent web solutions can transform your operations
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-muted rounded-lg max-w-2xl mx-auto p-8"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Your Name" 
                className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
              />
            </div>
            <input 
              type="text" 
              placeholder="Company Name" 
              className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
            />
            <textarea 
              placeholder="Tell me about your project and business goals..." 
              rows={5}
              required
              className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
            ></textarea>
            <motion.button 
              type="submit" 
              className="w-full bg-foreground text-background p-4 rounded-lg font-medium hover:bg-accent transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-4"
        >
          <div className="flex justify-center gap-2">
            <p className="text-foreground/70 mb-4">Prefer to reach out directly? Email me at</p>
            <a href="mailto:elmer.escandontufino@gmail.com" className="text-foreground hover:text-accent transition-colors underline cursor-pointer">
              elmer.escandontufino@gmail.com
            </a>
            {/* <a href="tel:+525533123456" className="text-foreground hover:text-accent transition-colors">
              +52 55 3312 3456
            </a> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}