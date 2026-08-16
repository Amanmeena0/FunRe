"use client";

import { useState } from "react";
import Image from "next/image";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";
import TemplatePreviewModal from "@/components/ui/TemplatePreviewModal";

const examples = [
  {
    id: "natural-vibe",
    preset: "hackathon",
    title: "The Hackathon Hero",
    role: "Software Engineer",
    theme: "Retro Terminal",
    description: "Monospace font, neon green styling, and raw layout blocks. Pass ATS filters and look like an expert.",
    colorClass: "bg-[#00B386]",
    badgeClass: "bg-[#00B386] text-black",
    views: "1.2k views",
    imageSrc: "https://i.pinimg.com/736x/f2/ba/24/f2ba2493760f439aa650c4fc83b060b3.jpg",
    imageAlt: "Minimalist natural vibe software engineer resume layout",
    icon: "eco",
  },
  {
    id: "mark-cafe",
    preset: "design",
    title: "The Design Dictator",
    role: "UI/UX Designer",
    theme: "Asymmetric Pop",
    description: "Huge headings, bold borders, and vibrant pink blocks. Built to stand out in creative departments.",
    colorClass: "bg-[#ff69c9]",
    badgeClass: "bg-[#fec700] text-black",
    views: "2.4k views",
    imageSrc: "https://i.pinimg.com/1200x/32/73/ff/3273ffbe5f19a9e956d257524e139071.jpg",
    imageAlt: "Creative cafe style design resume layout",
    icon: "palette",
  },
  {
    id: "vintage-chic",
    preset: "copywriter",
    title: "The Copywriter Chaos",
    role: "Creative Writer",
    theme: "Bold Minimalist",
    description: "High impact typography with sharp red accent colors. Puts copy front and center with maximum authority.",
    colorClass: "bg-[#fec700]",
    badgeClass: "bg-[#ab1f82] text-white",
    views: "980 views",
    imageSrc: "https://i.pinimg.com/1200x/9a/2a/5e/9a2a5e4843a777706d8a7f17d7b3483d.jpg",
    imageAlt: "Classic elegant vintage writer resume layout",
    icon: "history",
  },
];

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState<any | null>(null);

  const modalTemplate = selectedExample ? {
    id: selectedExample.id,
    title: selectedExample.title,
    description: selectedExample.description,
    imageSrc: selectedExample.imageSrc,
    badge: selectedExample.theme,
    badgeClass: selectedExample.badgeClass,
    icon: selectedExample.icon,
    preset: selectedExample.preset
  } : null;

  return (
    <>
      <TopNav activePage="examples" />
      
      <main 
        className="pt-12 px-8 pb-32 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Glow backdrop */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-20">
            <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              INSPIRATION BOARD
            </span>
            <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-6 mb-6 font-headline text-black">
              Rebel <span className="text-[#ff69c9] italic">Gallery</span>
            </h1>
            <p className="text-xl max-w-2xl font-medium leading-relaxed font-body text-gray-800">
              See how other builders broke the boring PDF rules, bypassed screening bots, and landed interviews in record time.
            </p>
          </div>

          {/* Examples Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {examples.map((ex) => (
              <div 
                key={ex.title} 
                className="group flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(171,31,130,1)] hover:-translate-y-1.5 hover:-translate-x-0.5 transition-all duration-150 overflow-hidden brutalist-card cursor-pointer"
                onClick={() => setSelectedExample(ex)}
              >
                {/* Image Section */}
                <div className="aspect-3/4 bg-surface-container overflow-hidden border-b-4 border-black relative">
                  <Image
                    src={ex.imageSrc}
                    alt={ex.imageAlt}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div
                    className={`absolute top-4 left-4 ${ex.badgeClass} px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10`}
                  >
                    {ex.theme}
                  </div>
                </div>

                {/* Details Section */}
                <div className="p-6 flex flex-col grow justify-between">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-3xl font-black uppercase font-headline mb-1 text-black">
                        {ex.title}
                      </h3>
                      <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                        <MaterialIcon icon="visibility" size={14} /> {ex.views}
                      </span>
                    </div>
                    <p className="text-sm font-bold uppercase tracking-wider text-[#ab1f82] mb-4">
                      — {ex.role}
                    </p>
                    <p className="text-gray-700 font-body text-sm mb-6 leading-relaxed">
                      {ex.description}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedExample(ex);
                    }}
                    className="w-full bg-black text-white hover:bg-[#fec700] hover:text-black py-4 border-2 border-black font-black uppercase tracking-widest text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm block cursor-pointer"
                  >
                    Inspect Example
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <TemplatePreviewModal 
        isOpen={!!selectedExample} 
        onClose={() => setSelectedExample(null)} 
        template={modalTemplate} 
      />

      <Footer fixed={true} />
    </>
  );
}
