"use client";

import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";
import Link from "next/link";

const examples = [
  {
    title: "The Hackathon Hero",
    role: "Software Engineer",
    theme: "Retro Terminal",
    description: "Monospace font, neon green styling, and raw layout blocks. Pass ATS filters and look like an expert.",
    colorClass: "bg-[#00B386]",
    views: "1.2k views",
  },
  {
    title: "The Design Dictator",
    role: "UI/UX Designer",
    theme: "Asymmetric Pop",
    description: "Huge headings, bold borders, and vibrant pink blocks. Built to stand out in creative departments.",
    colorClass: "bg-[#ff69c9]",
    views: "2.4k views",
  },
  {
    title: "The Copywriter Chaos",
    role: "Creative Writer",
    theme: "Bold Minimalist",
    description: "High impact typography with sharp red accent colors. Puts copy front and center with maximum authority.",
    colorClass: "bg-[#fec700]",
    views: "980 views",
  },
];

export default function ExamplesPage() {
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
                className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(171,31,130,1)] hover:-translate-y-1.5 hover:-translate-x-0.5 transition-all duration-150 flex flex-col justify-between p-8"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className={`${ex.colorClass} border-2 border-black text-black font-black text-xs px-3 py-1 uppercase shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                      {ex.theme}
                    </span>
                    <span className="text-xs font-mono text-gray-500 flex items-center gap-1">
                      <MaterialIcon icon="visibility" size={14} /> {ex.views}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl font-black uppercase font-headline mb-1 text-black">
                    {ex.title}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-wider text-[#ab1f82] mb-6">
                    — {ex.role}
                  </p>
                  <p className="text-gray-700 font-body text-sm mb-8 leading-relaxed">
                    {ex.description}
                  </p>
                </div>

                <Link
                  href="/templates"
                  className="w-full bg-black text-white hover:bg-[#fec700] hover:text-black py-4 border-2 border-black font-black uppercase tracking-widest text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm"
                >
                  Inspect Template
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
