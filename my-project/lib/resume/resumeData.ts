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