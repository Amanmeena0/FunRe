export interface ResumeData {
  name: string;
  Contacts: { email: string; phone: string; website?: string };
  summary?: string;
  Education?: { institution: string; degree: string; dateRange: string };
  skills?: string[];
  experience?: { companyName: string; jobTitle: string; dateRange: string }[];
  projects?: { name: string; description: string; link?: string }[];
  "Achievements & Awards": string;
  "Extra Curriculars"?: string[];
}

export const defaultResumeData: ResumeData = {
  name: "Max Disruptor",
  Contacts: {
    email: "max.disruptor@example.com",
    phone: "+1 (555) 123-4567",
    website: "https://maxdisruptor.com"
  },
  summary:
    "Visionary leader with a knack for turning chaos into opportunity. Expert in unconventional strategies and disruptive innovation. Passionate about creating work environments that thrive on unpredictability and fun.",
  Education: {
    institution: "DTU",
    degree: "Bachelor of Science in Chaos Studies",
    dateRange: "2020 - PRES"
  },
  skills: ["Chaos Management", "Disruptive Innovation", "Vibes-Based Leadership"],
  experience: [
    {
      companyName: "Global Hegemony Inc.",
      jobTitle: "Chief Chaos Officer",
      dateRange: "2020 - PRES"
    }
  ],
  "Achievements & Awards":
    "Single-handedly prevented corporate burnout with mandatory desk-dancing.\nOptimized workflow by 40% using strictly vibes-based management.",
  projects: [
    {
      name: "Chaos Theory Implementation",
      description: "Led the implementation of chaos theory principles in a corporate environment, resulting in increased employee engagement and productivity."
    }
  ],
  "Extra Curriculars": [
    "Founder of the 'Disruptors Anonymous' support group for unconventional thinkers.",
    "Host of the 'Vibes & Chaos' podcast, exploring the intersection of fun and productivity in the workplace."
  ] 
};