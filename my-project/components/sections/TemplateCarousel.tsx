"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import MaterialIcon from "../ui/Materialcon";
import { CAROUSEL_TEMPLATES } from "@/lib/templateData";
import { TemplateCardData } from "@/lib/types";

const badgeStyles: Record<TemplateCardData["badgeVariant"], string> = {
  retro: "bg-[#fec700] border-2 border-black text-black",
  greasy: "bg-[#ab1f82] text-white border-2 border-black",
  legacy: "bg-black text-white border-2 border-white",
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
    <section className="py-20 bg-surface-container-low overflow-hidden">
      <div className="px-8 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-5xl font-black uppercase tracking-tighter mb-2 font-headline">
            Wacky Templates
          </h2>
          <p className="font-label uppercase tracking-widest text-primary font-bold">
            Unconventional &amp; Unignorable
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => scroll("left")}
            aria-label="Scroll left"
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-secondary-container transition-colors"
          >
            <MaterialIcon icon="arrow_back" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Scroll right"
            className="w-12 h-12 border-2 border-black flex items-center justify-center hover:bg-secondary-container transition-colors"
          >
            <MaterialIcon icon="arrow_forward" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="horizontal-scroll flex gap-8 px-8 overflow-x-auto pb-12"
      >
        {CAROUSEL_TEMPLATES.map((template) => (
          <div
            key={template.id}
            className="flex-none w-80 md:w-112.5 border-4 border-black bg-white group cursor-pointer shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform"
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
              <h3 className="text-3xl font-black uppercase mb-2 font-headline">
                {template.title}
              </h3>
              <p className="font-body text-sm mb-6">{template.description}</p>
              <div className="flex justify-between items-center">
                <Link
                  href={`/templates/${template.id}`}
                  className="font-label font-bold uppercase text-primary underline decoration-2 underline-offset-4"
                >
                  Preview Template
                </Link>
                <MaterialIcon icon="open_in_new" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}