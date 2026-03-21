export type ContributionCategory = "work" | "projects" | "academia" | "others";

export interface Project {
  slug: string;
  title: string;
  description: string;
  contributions: string[];
  image: string;
  tech: string[];
  url: string;
  category: ContributionCategory;
}

export interface Paper {
  slug: string;
  title: string;
  authors: string;
  venue: string;
  year: number;
  type: "journal" | "conference" | "preprint" | "book-chapter";
  doi: string;
  citations: number;
  category: "academia";
}

export const projects: Project[] = [
  {
    slug: "arkangel-ai",
    category: "work",
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
    category: "work",
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

  // Projects
  {
    slug: "financy-v2",
    category: "projects",
    title: "Financy v2",
    description:
      "A personal finance tracker for managing expenses, setting monthly budgets, and planning long-term goals, with charts and Google integration.",
    contributions: [],
    image: "",
    tech: ["Next.js", "Supabase", "Recharts", "Google APIs", "Tailwind CSS"],
    url: "https://github.com/elmerescandon/financy-v2",
  },
  {
    slug: "amaru-maki-v2",
    category: "projects",
    title: "Amaru Maki v2",
    description:
      "Second version of an upper-arm wearable device for physical rehabilitation. Improved with higher refresh rate, low-latency wireless communication, and enhanced graphical visualization of joint movement.",
    contributions: [],
    image: "",
    tech: ["C++", "Embedded Systems", "Wireless Communication", "Real-time DSP"],
    url: "https://github.com/elmerescandon/amaru-maki-v2",
  },
];

export const papers: Paper[] = [
  {
    slug: "sofa-score-2025",
    category: "academia",
    title: "From free text to SOFA score: automated reconstruction of sepsis severity from unstructured clinical notes",
    authors: "K. Monsalve, N. Castano-Villegas, E. Escandón, J. Zea, L. Velásquez",
    venue: "medRxiv",
    year: 2025,
    type: "preprint",
    doi: "10.64898/2025.12.17.25342509",
    citations: 0,
  },
  {
    slug: "upper-limb-exoskeleton-2024",
    category: "academia",
    title: "Design of a 4 DoF Active Upper Limb Exoskeleton to Rehabilitate Osteoarthritis Injuries in Elderly",
    authors: "D. Huamanchahua, R. Escandón-Tufino, S. Loayza-Bautista, et al.",
    venue: "Lecture Notes in Electrical Engineering — IOTEC Conference",
    year: 2024,
    type: "book-chapter",
    doi: "10.1007/978-981-97-4780-1_16",
    citations: 1,
  },
  {
    slug: "lower-limb-exoskeleton-2024",
    category: "academia",
    title: "Design of a Lower Limb Exoskeleton Prototype for Patients with Motor Disabilities Using VDI 2206 + Pahl and Beitz Methodology",
    authors: "D. Huamanchahua, R. Escandón-Tufino, R. Aique, C. Vasquez, et al.",
    venue: "Lecture Notes in Electrical Engineering — IOTEC Conference",
    year: 2024,
    type: "book-chapter",
    doi: "10.1007/978-981-97-4780-1_17",
    citations: 0,
  },
  {
    slug: "fuzzy-tcnn-bci-2022",
    category: "academia",
    title: "Fuzzy temporal convolutional neural networks in P300-based Brain–computer interface for smart home interaction",
    authors: "C.F. Vega, J. Quevedo, E. Escandón, M. Kiani, W. Ding, J. Andreu-Perez",
    venue: "Applied Soft Computing, vol. 117, p. 108359",
    year: 2022,
    type: "journal",
    doi: "10.1016/j.asoc.2021.108359",
    citations: 44,
  },
  {
    slug: "semg-fractal-grasping-2020",
    category: "academia",
    title: "Classification of Daily-Life Grasping Activities sEMG Fractal Dimension",
    authors: "E. Escandón, C. Flores",
    venue: "Brazilian Technology Symposium, pp. 870-877 — Springer",
    year: 2020,
    type: "conference",
    doi: "10.1007/978-3-030-75680-2_96",
    citations: 1,
  },
  {
    slug: "semg-clustering-2020",
    category: "academia",
    title: "Clustering of sEMG signals on real-life activities using fractal dimension and self-organizing maps",
    authors: "E.R. Escandón, C. Flores",
    venue: "IEEE Engineering International Research Conference (EIRCON), pp. 1-4",
    year: 2020,
    type: "conference",
    doi: "10.1109/EIRCON51178.2020.9253761",
    citations: 2,
  },
  {
    slug: "gecko-robot-2019",
    category: "academia",
    title: "Task space kinematic control of a gecko-inspired climbing robot with active suction cups",
    authors: "F. García-Cárdenas, E. Escandón, R. Canahuire",
    venue: "IEEE XXVI International Conference on Electronics, Electrical Engineering and Computing (INTERCON), pp. 1-4",
    year: 2019,
    type: "conference",
    doi: "10.1109/INTERCON.2019.8853601",
    citations: 2,
  },
  {
    slug: "minimax-checkers-2018",
    category: "academia",
    title: "Minimax Checkers Playing GUI: A Foundation for AI Applications",
    authors: "E.R. Escandon, J. Campion",
    venue: "IEEE XXV International Conference on Electronics, Electrical Engineering and Computing (INTERCON), pp. 1-4",
    year: 2018,
    type: "conference",
    doi: "10.1109/INTERCON.2018.8526375",
    citations: 11,
  },
];
