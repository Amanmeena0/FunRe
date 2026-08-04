import { defaultResumeData, ResumeData } from "./resumeData";
import ResumeMarks from "@/components/ResumeTemplates/shared/markscafe";
import NaturalVibeTemplate from "@/components/ResumeTemplates/Natural/natural_vibe";
import VintageChicTemplate from "@/components/ResumeTemplates/shared/vintegeChic";

/**
 * HEAVY LAYER: FullTemplateConfig
 * This interface includes the actual React component and is used only
 * in the Preview Modal and Editor system.
 */
export interface FullTemplateConfig {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  component: React.ComponentType<{ data: ResumeData }>;
  badge: string;
  badgeClass: string;
  icon: string;
}

export interface Resume {
  id: string;
  user_id: string;
  title: string;
  template_id: string;
  resume_data: ResumeData;
  created_at: string;
  updated_at: string;
}

/**
 * HEAVY LAYER REGISTRY
 * Maps template IDs to their heavy configurations (including components).
 */
export const FULL_TEMPLATE_REGISTRY: Record<string, FullTemplateConfig> = {
  "mark-cafe": {
    id: "mark-cafe",
    name: "Mark Cafe",
    description: "A playful retro-modern resume with magazine aesthetics, bold typography, and creative branding layouts.",
    thumbnail: "/Mark.png",
    component: ResumeMarks,
    badge: "Creative",
    badgeClass: "bg-[#fec700] text-black",
    icon: "palette",
  },
  "natural-vibe": {
    id: "natural-vibe",
    name: "Natural Vibe",
    description: "A clean and modern resume template with a natural color palette and minimalist design.",
    thumbnail: "/NatralVibe.png",
    component: NaturalVibeTemplate,
    badge: "Minimalist",
    badgeClass: "bg-[#00B386] text-black",
    icon: "eco",
  },
  "vintage-chic": {
    id: "vintage-chic",
    name: "Vintage Chic",
    description: "A classic and elegant resume template with a vintage-inspired design and warm color scheme.",
    thumbnail: "/portfolio.png",
    component: VintageChicTemplate,
    badge: "Classic",
    badgeClass: "bg-[#ab1f82] text-white",
    icon: "history",
  },
};

export const getFullTemplateById = (id: string): FullTemplateConfig | undefined => {
  return FULL_TEMPLATE_REGISTRY[id];
};

export const getDefaultFullTemplate = (): FullTemplateConfig => {
  return FULL_TEMPLATE_REGISTRY["mark-cafe"];
};

// Mock Resumes (Legacy/Testing)
export const MOCK_RESUMES: Resume[] = [
  {
    id: "550e8400-e29b-41d4-a716-446655440001",
    user_id: "550e8400-e29b-41d4-a716-446655440101",
    title: "John's Full Stack Resume",
    template_id: "mark-cafe",
    resume_data: defaultResumeData,
    created_at: "2024-01-15T10:00:00Z",
    updated_at: "2024-01-20T14:30:00Z",
  },
];
