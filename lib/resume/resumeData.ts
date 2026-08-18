export interface ResumeData {
  
  // profile section
  profilePhotoUrl?: string;
  personalInfo: {
    fullName: string
    title: string
    email: string
    phone: string
    location: string
    website?: string
    linkedin?: string
    github?: string
  }
  Summary: string;

  // education sections
  Education: { institution: string; degree: string; dateRange: string }[];

  // experience sections
  Experience: { companyName: string; jobTitle: string; dateRange: string }[];

  // project sections
  Projects: { name: string; description: string; link?: string }[];

  // SKills section
  Skills: string[];
  Certifications: string[];
  Activities: string[];
}

export interface ResumeTemplate {
  id: string;
  name: string;
  thumbnail: string;
  component: React.ComponentType<{ data: ResumeData }>;
  metadata?: {
    category?: string;
    description?: string;
    badgeClass?: string;
    badgeVariant?: string;
    icon?: string;
    imageAlt?: string;
    [key: string]: any;
  };
}

// default data for new resumes, can be used as a template for users to fill in their own information
export const defaultResumeData: ResumeData = {
  profilePhotoUrl: "https://i.pravatar.cc/150?img=1",
  personalInfo: {
    fullName: "John Anderson",
    title: "Full Stack Developer",
    email: "john.anderson@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    website: "https://johnanderson.dev",
    linkedin: "https://linkedin.com/in/johnanderson",
    github: "https://github.com/johnanderson"
  },
  Summary:
    "Experienced Full Stack Developer with 5+ years of expertise in building scalable web applications. Proficient in React, Node.js, and cloud technologies. Passionate about clean code and mentoring junior developers.",
  Education: [
    {
      institution: "Stanford University",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2016 - 2020"
    },
    {
      institution: "Coursera",
      degree: "AWS Solutions Architect Associate Certification",
      dateRange: "2021"
    }
  ],
  Experience: [
    {
      companyName: "Tech Innovators Inc.",
      jobTitle: "Senior Full Stack Developer",
      dateRange: "2022 - Present"
    },
    {
      companyName: "Digital Solutions Ltd.",
      jobTitle: "Full Stack Developer",
      dateRange: "2020 - 2022"
    }
  ],
  Projects: [
    {
      name: "E-commerce Platform",
      description: "Built a full-stack e-commerce platform handling 10K+ daily transactions using React, Node.js, and PostgreSQL.",
      link: "https://ecommerce-platform.example.com"
    },
    {
      name: "Real-time Analytics Dashboard",
      description: "Developed real-time dashboard for data visualization using WebSockets and D3.js"
    }
  ],
  Skills: ["React", "Node.js", "TypeScript", "PostgreSQL", "AWS", "Docker", "GraphQL"],
  Certifications: [
    "AWS Solutions Architect Associate",
    "Docker Certified Associate"
  ],
  Activities: [
    "Tech meetup organizer in San Francisco",
    "Open source contributor to React ecosystem"
  ]
};

export const hackathonHeroData: ResumeData = {
  profilePhotoUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200",
  personalInfo: {
    fullName: "Alex Rivera",
    title: "Lead Systems Architect & DevOps",
    email: "alex.rivera@vortexlabs.dev",
    phone: "+1 (555) 765-4321",
    location: "Austin, TX",
    website: "https://alexrivera.io",
    github: "https://github.com/alexrivera-dev"
  },
  Summary:
    "Speed-running backend architectures, containerizing legacy monoliths, and building high-throughput APIs. Veteran of 5+ global hackathons with a focus on cloud-native systems and runtime optimization.",
  Education: [
    {
      institution: "MIT",
      degree: "BS in Computer Science",
      dateRange: "2017 - 2021"
    }
  ],
  Experience: [
    {
      companyName: "Vortex Labs",
      jobTitle: "Principal Systems Architect",
      dateRange: "2023 - Present"
    },
    {
      companyName: "Hacker Rank",
      jobTitle: "Lead DevOps Engineer",
      dateRange: "2021 - 2023"
    }
  ],
  Projects: [
    {
      name: "Bare-Metal K8s Cluster",
      description: "Assembled a 16-node Raspberry Pi home cluster running bare-metal Kubernetes, handling automated load-balancing.",
      link: "https://github.com/alexrivera-dev/pi-cluster"
    },
    {
      name: "WASM Game Engine",
      description: "A 60fps web game engine compiled from Rust to WebAssembly with high performance 2D physics rendering."
    }
  ],
  Skills: ["Rust", "TypeScript", "Go", "Kubernetes", "AWS", "Docker", "WebAssembly", "gRPC", "PostgreSQL"],
  Certifications: [
    "Certified Kubernetes Administrator (CKA)",
    "AWS Solutions Architect Professional"
  ],
  Activities: [
    "Organizer at HackMIT",
    "Active Linux Kernel contributor"
  ]
};

export const designDictatorData: ResumeData = {
  profilePhotoUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
  personalInfo: {
    fullName: "Chloe Vance",
    title: "Avant-Garde UI/UX Architect",
    email: "chloe@hyperglow.design",
    phone: "+1 (555) 890-1234",
    location: "New York, NY",
    website: "https://hyperglow.design",
    linkedin: "https://linkedin.com/in/chloevance"
  },
  Summary:
    "Designing aggressive, loud, and unignorable interfaces that demand action. Specializing in high-contrast layouts, custom motion physics, and design system governance for creative brands.",
  Education: [
    {
      institution: "RISD",
      degree: "BFA in Graphic Design",
      dateRange: "2015 - 2019"
    }
  ],
  Experience: [
    {
      companyName: "HyperGlow Studios",
      jobTitle: "Lead Brand Designer",
      dateRange: "2022 - Present"
    },
    {
      companyName: "Neon Pixel Agency",
      jobTitle: "Senior UI/UX Designer",
      dateRange: "2019 - 2022"
    }
  ],
  Projects: [
    {
      name: "Bodo Style System",
      description: "Architected the original design components and typography scales for the Bodo application.",
      link: "https://figma.com/@resumebodo"
    },
    {
      name: "3D Motion Dashboard",
      description: "Interactive Spline-based 3D workspace showcasing real-time data flow with zero performance lag."
    }
  ],
  Skills: ["Figma", "Webflow", "TailwindCSS", "Framer Motion", "Spline 3D", "Adobe Suite", "Design Systems"],
  Certifications: [
    "Figma Certified Professional",
    "Webflow Expert Partner"
  ],
  Activities: [
    "Figma Community Creator & Template Contributor",
    "Host of the weekly 'Design or Die' Podcast"
  ]
};

export const copywriterChaosData: ResumeData = {
  profilePhotoUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
  personalInfo: {
    fullName: "Marcus Brody",
    title: "Senior Conversion Copywriter",
    email: "marcus@copychaos.com",
    phone: "+1 (555) 345-6789",
    location: "Chicago, IL",
    website: "https://copychaos.com",
    linkedin: "https://linkedin.com/in/marcusbrody"
  },
  Summary:
    "Turning boring product descriptions into high-conversion copy. Crafting headlines that stop the scroll and hook attention instantly. Focused on psychological triggers, copy audit workflows, and direct response optimization.",
  Education: [
    {
      institution: "University of Chicago",
      degree: "BA in English Literature",
      dateRange: "2016 - 2020"
    }
  ],
  Experience: [
    {
      companyName: "Conversion Copy LLC",
      jobTitle: "Senior Copywriter",
      dateRange: "2022 - Present"
    },
    {
      companyName: "The Daily Scroll",
      jobTitle: "Head of Editorial Copy",
      dateRange: "2020 - 2022"
    }
  ],
  Projects: [
    {
      name: "The $10M Funnel Rebuild",
      description: "Rewrote landing page layouts and email sequences for a top SaaS product, boosting overall conversion by 42%.",
      link: "https://copychaos.com/funnel-study"
    },
    {
      name: "Scroll-Stopper Newsletter",
      description: "Launched a weekly advertising newsletter discussing direct-response patterns, growing to 50k+ active subscribers."
    }
  ],
  Skills: ["Direct Response Copy", "SEO Strategy", "Email Marketing", "Funnel Optimization", "A/B Testing", "Psychology"],
  Certifications: [
    "CXL Conversion Optimization Specialist",
    "Copyblogger Certified Writer"
  ],
  Activities: [
    "Writing Mentor at CopyClub Chicago",
    "Guest lecturer at Chicago Ad School"
  ]
};