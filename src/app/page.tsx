import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <header className="sticky top-0 bg-background/80 backdrop-blur-sm border-b border-border z-50">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-lg">Raul Escandon</div>
          <div className="hidden md:flex space-x-8">
            <a href="#work" className="text-foreground/70 hover:text-foreground transition-colors">Work</a>
            <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors">Services</a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors">About</a>
          </div>
          <a 
            href="#contact" 
            className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-medium hover:bg-accent transition-colors"
          >
            Start Project
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            I build intelligent web applications that 
            <span className="text-accent"> grow your business</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/70 mb-8 leading-relaxed">
            Full-stack developer and AI solutions expert helping companies increase revenue through 
            high-performance web applications and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-accent transition-colors text-center"
            >
              Get Free Consultation
            </a>
            <a 
              href="#work" 
              className="border border-border px-8 py-4 rounded-full font-medium hover:bg-muted transition-colors text-center"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="bg-muted py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Proven Results for Growing Businesses</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">300%</div>
              <div className="text-foreground/70">Average conversion increase</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">50%</div>
              <div className="text-foreground/70">Reduction in manual work</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">2-4 weeks</div>
              <div className="text-foreground/70">Typical project delivery</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-4">Featured Work</h2>
        <p className="text-foreground/70 mb-12 text-lg">Real projects, real results for real businesses</p>
        
        <div className="space-y-16">
          {/* Project 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">E-commerce Platform Optimization</h3>
              <p className="text-foreground/70 mb-6">
                Redesigned and optimized an online retail platform, implementing intelligent product recommendations 
                and automated inventory management system.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Increased sales by 240% in 3 months</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Reduced cart abandonment by 60%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Automated 80% of inventory tasks</span>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                Next.js • TypeScript • Supabase • AI Recommendations
              </div>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <span className="text-foreground/40">[Project Screenshot Placeholder]</span>
            </div>
          </div>

          {/* Project 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:order-2">
              <h3 className="text-2xl font-bold mb-4">AI Customer Support Chatbot</h3>
              <p className="text-foreground/70 mb-6">
                Built an intelligent chatbot that handles customer inquiries, processes orders, 
                and integrates with existing CRM systems for seamless customer experience.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Reduced support tickets by 70%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>24/7 customer support availability</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Improved customer satisfaction by 45%</span>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                React • OpenAI API • Firebase • HubSpot Integration
              </div>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center lg:order-1">
              <span className="text-foreground/40">[Project Screenshot Placeholder]</span>
            </div>
          </div>

          {/* Project 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Analytics Dashboard & Automation</h3>
              <p className="text-foreground/70 mb-6">
                Created a comprehensive business intelligence dashboard with automated reporting 
                that integrates Google Analytics, Meta Ads, and sales data.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Saved 15 hours/week on reporting</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Improved decision-making speed by 50%</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Real-time performance insights</span>
                </div>
              </div>
              <div className="text-sm text-foreground/60">
                Next.js • Google Analytics API • Meta Ads API • AWS
              </div>
            </div>
            <div className="bg-muted rounded-lg h-80 flex items-center justify-center">
              <span className="text-foreground/40">[Project Screenshot Placeholder]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-muted py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">How I Help Your Business Grow</h2>
          <p className="text-foreground/70 mb-12 text-lg text-center max-w-2xl mx-auto">
            Strategic technology solutions that deliver measurable business value
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Enhanced Web Development</h3>
              <p className="text-foreground/70 mb-6">
                High-performance websites and applications with intelligent features that convert 
                visitors into customers and streamline your operations.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Custom web applications</li>
                <li>• E-commerce optimization</li>
                <li>• Performance optimization</li>
                <li>• Mobile-first design</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">AI-Powered Solutions</h3>
              <p className="text-foreground/70 mb-6">
                Intelligent automation and personalized experiences that reduce manual work 
                and improve customer satisfaction.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• Smart chatbots & assistants</li>
                <li>• Automated workflows</li>
                <li>• Personalized recommendations</li>
                <li>• Intelligent data analysis</li>
              </ul>
            </div>
            
            <div className="bg-background p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Business Integration</h3>
              <p className="text-foreground/70 mb-6">
                Seamless integration with your existing tools and platforms to create 
                unified, efficient business processes.
              </p>
              <ul className="space-y-2 text-sm">
                <li>• CRM & marketing automation</li>
                <li>• Analytics & reporting</li>
                <li>• Payment processing</li>
                <li>• Third-party integrations</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-muted p-8 rounded-lg">
            <p className="text-lg mb-6 italic">
              "Raul transformed our online presence completely. The new website not only looks amazing 
              but has tripled our online sales. The AI features he built save us hours every day."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="font-bold">SM</span>
              </div>
              <div>
                <div className="font-medium">Sarah Mitchell</div>
                <div className="text-sm text-foreground/70">CEO, RetailFlow Solutions</div>
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-8 rounded-lg">
            <p className="text-lg mb-6 italic">
              "Working with Raul was a game-changer. He understood our business needs and delivered 
              a solution that exceeded our expectations. The ROI was evident within the first month."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <span className="font-bold">DJ</span>
              </div>
              <div>
                <div className="font-medium">David Johnson</div>
                <div className="text-sm text-foreground/70">Founder, TechStart Ventures</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-muted py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">About Raul</h2>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            I'm a full-stack developer and machine learning engineer with a passion for helping businesses 
            succeed through technology. With expertise in modern web development, AI solutions, and business 
            process optimization, I focus on delivering measurable results that matter to your bottom line.
          </p>
          <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
            When you work with me, you're not just getting a developer – you're getting a strategic partner 
            who understands your business goals and knows how to achieve them through smart technology choices.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <h3 className="font-bold mb-2">Technical Excellence</h3>
              <p className="text-foreground/70 text-sm">Modern frameworks, best practices, and cutting-edge AI</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Business Focus</h3>
              <p className="text-foreground/70 text-sm">Every feature built with ROI and user experience in mind</p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Proven Results</h3>
              <p className="text-foreground/70 text-sm">Track record of delivering projects that drive growth</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl text-foreground/70">
            Let's discuss how intelligent web solutions can transform your operations
          </p>
        </div>
        
        <div className="bg-muted p-8 rounded-lg max-w-2xl mx-auto">
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
              className="w-full p-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent/20"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-foreground text-background p-4 rounded-lg font-medium hover:bg-accent transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-foreground/70 mb-4">Prefer to reach out directly?</p>
          <div className="flex justify-center gap-8">
            <a href="mailto:hello@raulescandon.com" className="text-foreground hover:text-accent transition-colors">
              hello@raulescandon.com
            </a>
            <a href="tel:+1234567890" className="text-foreground hover:text-accent transition-colors">
              +1 (234) 567-8900
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="font-medium text-lg mb-4">Raul Escandon</div>
            <div className="flex justify-center gap-6">
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">LinkedIn</a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">GitHub</a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Twitter</a>
            </div>
          </div>
          <div className="text-foreground/60 text-sm">
            © 2024 Raul Escandon. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
