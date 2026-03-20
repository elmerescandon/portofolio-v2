export interface Project {
  slug: string;
  title: string;
  description: string;
  contributions: string[];
  image: string;
  tech: string[];
  url: string;
}

export const projects: Project[] = [
  {
    slug: "arkangel-ai",
    title: "Arkangel AI",
    description:
      "I helped build a healthcare platform that uses AI to assist doctors in diagnosing and treating patients. Working at the intersection of machine learning and medicine taught me how technology can directly improve lives.",
    contributions: [
      "Built a monitoring system handling 20,000+ patients",
      "Analyzed 34,000+ medical records to improve care outcomes",
      "Developed an AI-powered diagnosis assistance platform",
    ],
    image: "/images/arkangel.jpg",
    tech: ["React", "Next.js", "Agentic AI", "AWS", "Supabase", "Stripe"],
    url: "https://www.arkangel.ai/",
  },
  {
    slug: "promart",
    title: "Promart Homecenter",
    description:
      "I optimized the digital experience for Peru's largest home improvement store, making it faster and easier for millions of people to find what they need.",
    contributions: [
      "Automated all product inventory processes",
      "Increased average visit duration by 30%",
      "Delivered 100% of project goals on schedule",
    ],
    image: "/images/promart.jpg",
    tech: ["jQuery", "Google Cloud Platform", "VTEX API", "VTEX CMS"],
    url: "https://www.promart.pe/",
  },
  {
    slug: "wize",
    title: "Wize Audio",
    description:
      "I built an e-commerce platform from scratch for a Peruvian audio products company, connecting people with the gear they love.",
    contributions: [
      "Fully automated product inventory management",
      "Integrated payment processing and analytics",
    ],
    image: "/images/wize.jpg",
    tech: [
      "WordPress",
      "WooCommerce",
      "MercadoPago",
      "Mailchimp",
      "Google Analytics",
    ],
    url: "https://www.wize.pe/",
  },
];
