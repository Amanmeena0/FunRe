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
      className="group flex flex-col bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,105,201,1)] transition-all duration-150 overflow-hidden brutalist-card cursor-pointer hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[6px_6px_0px_0px_rgba(254,199,0,1)]"
    >
      <div className="aspect-3/4 bg-surface-container overflow-hidden border-b-2 border-black relative">
        <Image
          src={template.imageSrc}
          alt={template.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute top-3 left-3 ${template.badgeClass} px-2 py-0.5 font-bold text-[10px] uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10`}
        >
          {template.badge}
        </div>
      </div>
      <div className="p-4 flex flex-col grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-black uppercase tracking-tight font-headline text-black">
            {template.title}
          </h3>
          <div className="text-[#ab1f82] group-hover:text-[#ff69c9] transition-colors duration-150 shrink-0">
            <MaterialIcon icon={template.icon} className="text-xl" />
          </div>
        </div>
        <p className="text-xs font-body mb-4 grow text-gray-700 leading-relaxed">
          {template.description}
        </p>
        <button
          className="w-full bg-black text-white py-2 font-black uppercase tracking-widest text-xs border-2 border-black hover:bg-[#fec700] hover:text-black hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all text-center block active:translate-x-0 active:translate-y-0 active:shadow-none"
        >
          Select Vibe
        </button>
      </div>
    </div>
  );
}
