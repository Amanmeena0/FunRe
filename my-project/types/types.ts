export interface TemplateCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  badgeVariant: "retro" | "greasy" | "legacy" | "green";
}

export interface FullTemplateCardData {
  id: TemplateCardData["id"];
  title: TemplateCardData["title"];
  description: TemplateCardData["description"];
  imageSrc: string;
  imageAlt: string;
  badge: TemplateCardData["badge"];
  badgeClass: string;
  icon: string;
}

export type EditorTab = "Profile" | "experience" | "education" | "skills" | "projects" | "finish";