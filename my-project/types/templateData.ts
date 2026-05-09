import { TemplateCardData, FullTemplateCardData } from "./types";

export const CAROUSEL_TEMPLATES: TemplateCardData[] = [
  {
    id: "mark-cafe",
    title: "Mark Cafe",
    description:
      "A playful retro-modern resume with magazine aesthetics, bold typography, and creative branding layouts.",
    imageSrc:
      "https://i.pinimg.com/1200x/2e/d0/f7/2ed0f792f0e4561e21bffaa88d9f50f1.jpg",
    imageAlt:
      "Lo-fi 1990s internet aesthetic with pixelated graphics and vibrant neon colored geometric shapes on a dark screen background",
    badge: "Creative",
    badgeVariant: "retro",
  },
  {
    id: "natural-vibe",
    title: "Natural Vibe",
    description:
      "A clean and modern resume template with a natural color palette and minimalist design.",
    imageSrc:
      "https://i.pinimg.com/1200x/ca/22/c0/ca22c023a21b42dc05670921506a7cc9.jpg",
    imageAlt:
      "Natural and organic aesthetic with earthy tones and simple, clean lines",
    badge: "Minimalist",
    badgeVariant: "green",
  },
  {
    id: "vintage-chic",
    title: "Vintage Chic",
    description:
      "A classic and elegant resume template with a vintage-inspired design and warm color scheme.",
    imageSrc:
      "https://i.pinimg.com/1200x/c0/5a/20/c05a20d6a51a810e92d3bcd7d814e4fd.jpg",
    imageAlt:
      "Vintage-inspired resume template with a warm color scheme and classic design elements",
    badge: "Classic",
    badgeVariant: "greasy",
  }
];

export const GRID_TEMPLATES: FullTemplateCardData[] = [
  {
    id: "mark-cafe",
    title: "Mark Cafe",
    description:
      "A playful retro-modern resume with magazine aesthetics, bold typography, and creative branding layouts.",
    imageSrc: "https://i.pinimg.com/1200x/32/73/ff/3273ffbe5f19a9e956d257524e139071.jpg",
    imageAlt:
      "creative cafe-style resume template with rounded profile image and bold retro typography",
    badge: "Creative",
    badgeClass: "bg-[#fec700] text-black",
    icon: "palette",
  },
  {
    id: "natural-vibe",
    title: "Natural Vibe",
    description:
      "A clean and modern resume template with a natural color palette and minimalist design.",
    imageSrc: "https://i.pinimg.com/736x/f2/ba/24/f2ba2493760f439aa650c4fc83b060b3.jpg",
    imageAlt:
      "Natural and organic aesthetic with earthy tones and simple, clean lines",
    badge: "Minimalist",
    badgeClass: "bg-[#00B386] text-black",
    icon: "eco",
  },
  {
    id: "vintage-chic",
    title: "Vintage Chic",
    description:
      "A classic and elegant resume template with a vintage-inspired design and warm color scheme.",
    imageSrc:
      "https://i.pinimg.com/1200x/9a/2a/5e/9a2a5e4843a777706d8a7f17d7b3483d.jpg",
    imageAlt:
      "Vintage-inspired resume template with a warm color scheme and classic design elements",
    badge: "Classic",
    badgeClass: "bg-[#ab1f82] text-white",
    icon: "history",
  }
];