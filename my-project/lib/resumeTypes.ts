export interface ResumeData {
  name: string;
  companyName: string;
  jobTitle: string;
  achievements: string;
  institution: string;
  dateRange: string;
}

export const defaultResumeData: ResumeData = {
  name: "Max Disruptor",
  companyName: "Global Hegemony Inc.",
  jobTitle: "Chief Chaos Officer",
  achievements:
    "Single-handedly prevented corporate burnout with mandatory desk-dancing.\nOptimized workflow by 40% using strictly vibes-based management.",
  institution: "",
  dateRange: "2020 - PRES",
};