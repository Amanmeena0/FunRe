"use client";

import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";
import Link from "next/link";

const guides = [
  {
    icon: "psychology",
    title: "ATS Bypass: Fact vs Fiction",
    readTime: "4 min read",
    description: "How to structure your resume layout so that AI parsers extract your information cleanly, without sacrificing your aesthetic style.",
    badgeClass: "bg-[#00B386]",
  },
  {
    icon: "palette",
    title: "Colors That Get You Hired",
    readTime: "6 min read",
    description: "The psychology of high-contrast design. Discover why recruiters spend 3x more time looking at high-energy color layouts.",
    badgeClass: "bg-[#ff69c9]",
  },
  {
    icon: "edit_note",
    title: "Write Like a Dictator",
    readTime: "5 min read",
    description: "Stop using weak verbs like 'assisted' or 'managed.' Learn how to write high-impact resume copy that demands immediate respect.",
    badgeClass: "bg-[#fec700]",
  },
];

export default function GuidesPage() {
  return (
    <>
      <TopNav activePage="guides" />
      
      <main 
        className="pt-12 px-8 pb-32 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Glow backdrop */}
        <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-[#ffd6a5] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-20">
            <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              RIOTEER HANDBOOK
            </span>
            <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-6 mb-6 font-headline text-black">
              Battle <span className="text-[#00B386] italic">Guides</span>
            </h1>
            <p className="text-xl max-w-2xl font-medium leading-relaxed font-body text-gray-800">
              Read the manual. Apply the tactics. Crush the corporate competition with these highly-researched guide files.
            </p>
          </div>

          {/* Guides List */}
          <div className="space-y-8 max-w-4xl">
            {guides.map((guide, idx) => (
              <div 
                key={guide.title} 
                className="border-4 border-black bg-white p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,179,134,1)] hover:-translate-y-1 hover:-translate-x-0.5 transition-all duration-150 flex flex-col md:flex-row gap-6 items-start"
              >
                <div className={`${guide.badgeClass} border-4 border-black p-4 shrink-0 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black flex items-center justify-center`}>
                  <MaterialIcon icon={guide.icon} size={36} className="text-black" />
                </div>
                
                <div className="grow">
                  <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                    <h3 className="text-3xl font-black uppercase font-headline text-black">
                      {idx + 1}. {guide.title}
                    </h3>
                    <span className="text-xs font-mono font-bold bg-gray-100 border border-black px-2 py-1 uppercase text-black">
                      {guide.readTime}
                    </span>
                  </div>
                  <p className="text-gray-700 font-body text-base mb-6 leading-relaxed">
                    {guide.description}
                  </p>
                  
                  <Link
                    href={`/guides/${idx}`}
                    className="font-black text-sm uppercase tracking-widest text-[#ab1f82] hover:text-[#ff69c9] flex items-center gap-1 font-headline"
                  >
                    Read full guide <MaterialIcon icon="arrow_forward" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
