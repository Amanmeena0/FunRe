"use client";

import Image from "next/image";
import MaterialIcon from "./Materialcon";
import { FullTemplateCardData } from "@/types/types";

interface TemplateGridCardProps {
  template: FullTemplateCardData;
  onSelect: (template: FullTemplateCardData) => void;
}

export default function TemplateGridCard({ template, onSelect }: TemplateGridCardProps) {
  return (
    <div 
      onClick={() => onSelect(template)}
      className="group flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,105,201,1)] transition-all duration-150 overflow-hidden brutalist-card cursor-pointer hover:-translate-y-1.5 hover:-translate-x-0.5 hover:shadow-[12px_12px_0px_0px_rgba(254,199,0,1)]"
    >
      <div className="aspect-3/4 bg-surface-container overflow-hidden border-b-4 border-black relative">
        <Image
          src={template.imageSrc}
          alt={template.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute top-4 left-4 ${template.badgeClass} px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10`}
        >
          {template.badge}
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-black uppercase tracking-tight font-headline text-black">
            {template.title}
          </h3>
          <div className="text-[#ab1f82] group-hover:text-[#ff69c9] transition-colors duration-150">
            <MaterialIcon icon={template.icon} className="text-3xl" />
          </div>
        </div>
        <p className="text-sm font-body mb-8 grow text-gray-700">
          {template.description}
        </p>
        <button
          className="w-full bg-black text-white py-4 font-black uppercase tracking-widest text-lg border-2 border-black hover:bg-[#fec700] hover:text-black hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all text-center block active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          Select Vibe
        </button>
      </div>
    </div>
  );
}
