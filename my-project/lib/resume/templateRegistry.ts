import { ResumeData } from "./resumeTypes";

export interface Resume {
  id: string;
  user_id: string;
  title: string;
  template_id: string;
  resume_data: ResumeData;
  created_at: string;
  updated_at: string;
}

export const MOCK_RESUMES: Resume[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: "550e8400-e29b-41d4-a716-446655440101",
    title: "John's Full Stack Resume",
    template_id: "modern",
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-20T14:30:00Z",
    resume_data: {
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
    }
  },
];


export function getMockResumes(): Resume[] {
  return MOCK_RESUMES;
}

export function getMockResumeById(id: string): Resume | undefined {
  return MOCK_RESUMES.find(resume => resume.id === id);
}

