"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react"; 
import MaterialIcon from "../ui/Materialcon";
import { CAROUSEL_TEMPLATES } from "@/types/templateData";
import { TemplateCardData } from "@/types/types";

const badgeStyles: Record<TemplateCardData["badgeVariant"], string> = {
  retro: "bg-[#fec700] border-2 border-black text-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  greasy: "bg-[#ab1f82] text-white border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
  legacy: "bg-black text-white border-2 border-white shadow-[2px_2px_0px_0px_rgba(255,255,255,1)]",
  green: "bg-[#00B386] text-black border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
};

export default function TemplateCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -480 : 480,
        behavior: "smooth",
      });
    }
  };

  return (
    <section 
      className="py-20 bg-[#1b1b1b] border-t-4 border-black overflow-hidden relative"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Decorative Blur */}
      <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#ab1f82] rounded-full blur-[80px] opacity-25 pointer-events-none" />

      <div className="px-8 mb-12 flex justify-between items-end relative z-10">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 font-headline text-white">
            Choose Your Weapon
          </h2>
          <p className="font-label uppercase tracking-widest text-[#fec700] font-bold">
            Unconventional &amp; Unignorable
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 border-2 border-black flex items-center justify-center bg-white text-black hover:bg-[#ff69c9] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <MaterialIcon icon="arrow_back" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 border-2 border-black flex items-center justify-center bg-white text-black hover:bg-[#fec700] active:translate-x-0.5 active:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] cursor-pointer"
          >
            <MaterialIcon icon="arrow_forward" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="horizontal-scroll flex gap-8 px-8 overflow-x-auto pb-12 relative z-10"
      >
        {CAROUSEL_TEMPLATES.map((template) => (
          <div
            key={template.id}
            className="flex-none w-80 md:w-112.5 border-4 border-black bg-white group cursor-pointer shadow-[8px_8px_0px_0px_rgba(255,105,201,1)] hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(254,199,0,1)] transition-all duration-150"
          >
            <div className="h-64 border-b-4 border-black overflow-hidden relative">
              <Image
                src={template.imageSrc}
                alt={template.imageAlt}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                sizes="(max-width: 768px) 320px, 450px"
              />
              <div
                className={`absolute top-4 left-4 ${badgeStyles[template.badgeVariant]} px-3 py-1 font-black text-xs uppercase tracking-widest z-10`}
              >
                {template.badge}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-3xl font-black uppercase mb-2 font-headline text-black">
                {template.title}
              </h3>
              <p className="font-body text-sm mb-6 text-gray-700">{template.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/editor/${template.id}`}
                  className="bg-black text-white px-5 py-2.5 text-xs font-black uppercase tracking-wider border-2 border-black hover:bg-[#fec700] hover:text-black hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all"
                >
                  Preview Template
                </Link>
                <div className="text-black group-hover:text-[#ff69c9] transition-colors duration-150">
                  <MaterialIcon icon="open_in_new" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}