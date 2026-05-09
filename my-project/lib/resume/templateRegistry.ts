import { defaultResumeData, ResumeData } from "./resumeData";

export interface Resume {
  id: string;
  user_id: string;
  title: string;
  template_id: string;
  resume_data: ResumeData;
  created_at: string;
  updated_at: string;
}

// This is mock data for testing purposes and will be replaced with real data from the database later
export const MOCK_RESUMES: Resume[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: "550e8400-e29b-41d4-a716-446655440101",
    title: "John's Full Stack Resume",
    template_id: "modern",
    resume_data: defaultResumeData,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-20T14:30:00Z",
  },
];


export function getMockResumes(): Resume[] {
  return MOCK_RESUMES;
}

export function getMockResumeById(id: string): Resume | undefined {
  return MOCK_RESUMES.find(resume => resume.id === id);
}

