import { TemplateCardData, FullTemplateCardData } from "./types";
import { REGISTERED_TEMPLATES } from "@/lib/resume/templateRegistry";

/**
 * Templates for the landing page carousel.
 * Derived from the central REGISTERED_TEMPLATES.
 */
export const CAROUSEL_TEMPLATES: TemplateCardData[] = REGISTERED_TEMPLATES.map(t => ({
  id: t.id,
  title: t.name,
  description: t.metadata?.description || "",
  imageSrc: t.thumbnail,
  imageAlt: t.metadata?.imageAlt || t.name,
  badge: t.metadata?.category || "Template",
  badgeVariant: (t.metadata?.badgeVariant as any) || "retro",
}));

/**
 * Templates for the full catalog grid.
 * Derived from the central REGISTERED_TEMPLATES.
 */
export const GRID_TEMPLATES: FullTemplateCardData[] = REGISTERED_TEMPLATES.map(t => ({
  id: t.id,
  title: t.name,
  description: t.metadata?.description || "",
  imageSrc: t.thumbnail,
  imageAlt: t.metadata?.imageAlt || t.name,
  badge: t.metadata?.category || "Template",
  badgeClass: t.metadata?.badgeClass || "bg-black text-white",
  icon: t.metadata?.icon || "description",
}));
