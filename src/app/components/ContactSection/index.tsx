'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { toast } from 'sonner';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', company: '', message: '' });
        toast.success('Message sent successfully! I\'ll get back to you soon.');
      } else {
        setSubmitStatus('error');
        toast.error('Failed to send message. Please try again or email me directly.');
      }
    } catch (error) {
      setSubmitStatus('error');
      toast.error('Failed to send message. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section className="h-full overflow-y-auto custom-scrollbar">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-lg sm:text-xl text-foreground/70">
            Let's discuss how intelligent web solutions can transform your operations
          </p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-muted rounded-lg max-w-2xl mx-auto p-6 sm:p-8"
        >
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name" 
                required
                className="w-full p-3 sm:p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm sm:text-base"
              />
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email" 
                required
                className="w-full p-3 sm:p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm sm:text-base"
              />
            </div>
            <input 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company Name" 
              className="w-full p-3 sm:p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm sm:text-base"
            />
            <textarea 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project and business goals..." 
              rows={4}
              required
              className="w-full p-3 sm:p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20 text-sm sm:text-base resize-none"
            ></textarea>
            
            {/* {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-700"
              >
                Message sent successfully! I'll get back to you soon.
              </motion.div>
            )}
            
            {submitStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 border border-red-300 rounded-lg text-red-700"
              >
                Failed to send message. Please try again or email me directly.
              </motion.div>
            )} */}
            
            <motion.button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-foreground border border-foreground text-background p-3 sm:p-4 rounded-lg font-medium hover:bg-muted hover:border-foreground hover:text-foreground transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6 sm:mt-8"
        >
          <div className="flex flex-col sm:flex-row justify-center items-center gap-1 sm:gap-2">
            <p className="text-foreground/70 text-sm sm:text-base">Prefer to reach out directly? Email me at</p>
            <a href="mailto:elmer.escandontufino@gmail.com" className="text-foreground hover:text-accent transition-colors underline cursor-pointer text-sm sm:text-base">
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