export interface TemplateCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  badgeVariant: "retro" | "greasy" | "legacy";
}

export interface FullTemplateCardData {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  badge: string;
  badgeClass: string;
  icon: string;
}