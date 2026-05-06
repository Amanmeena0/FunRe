export interface ResumeData {
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
  summary?: string;
  Education?: { institution: string; degree: string; dateRange: string };
  experience?: { companyName: string; jobTitle: string; dateRange: string }[];
  projects?: { name: string; description: string; link?: string }[];
  skills?: string[];
  Certifications?: string[];
  Activities?: string[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    fullName: "Max Disruptor",
    title: "Chief Chaos Officer",
    email: "max.disruptor@example.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  summary:
    "Visionary leader with a knack for turning chaos into opportunity. Expert in unconventional strategies and disruptive innovation. Passionate about creating work environments that thrive on unpredictability and fun.",
  Education: {
    institution: "DTU",
    degree: "Bachelor of Science in Chaos Studies",
    dateRange: "2020 - PRES"
  },
  experience: [
    {
      companyName: "Global Hegemony Inc.",
      jobTitle: "Chief Chaos Officer",
      dateRange: "2020 - PRES"
    }
  ],
  projects: [
    {
      name: "Chaos Theory Implementation",
      description: "Led the implementation of chaos theory principles in a corporate environment, resulting in increased employee engagement and productivity."
    }
  ],
  skills: ["Chaos Management", "Disruptive Innovation", "Vibes-Based Leadership"],
  Certifications: [
    "Certified Chaos Management Professional"
  ],
  Activities: [
    "Volunteer at the 'Chaos for Charity' event"
  ],    
  
};