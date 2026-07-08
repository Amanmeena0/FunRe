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
    description: "Optimize your layout structure for applicant tracking parsers. Get access to the best ATS score analyzer and FAANG resume templates.",
    badgeClass: "bg-[#00B386]",
  },
  {
    icon: "military_tech",
    title: "Get Hired: The Unwritten Rules",
    readTime: "5 min read",
    description: "Write quantifiable impact bullets, learn when to put experience first, and obtain the best free course credentials to level up your resume.",
    badgeClass: "bg-[#ff69c9]",
  },
  {
    icon: "mail",
    title: "Cover Letter Blueprint",
    readTime: "4 min read",
    description: "Construct an unignorable cover letter layout in 3 simple sections, and browse official Overleaf cover letter galleries.",
    badgeClass: "bg-[#fec700]",
  },
  {
    icon: "trending_up",
    title: "Current Hot Skills",
    readTime: "5 min read",
    description: "Discover tech skills in extremely high demand: AI engineering (agents, memory, prompt engineering), machine learning stacks, computer vision, MLOps, and future architectural patterns.",
    badgeClass: "bg-[#00d2ff] text-black",
  },
  {
    icon: "terminal",
    title: "Interview Prep Kit",
    readTime: "6 min read",
    description: "Ace your upcoming technical interviews. Explore curated roadmaps and quick prep guidelines for DSA, System Design, and AI engineering.",
    badgeClass: "bg-[#ffd6a5] text-black",
  },
];

export default function GuidesPage() {
  return (
    <>
      <TopNav activePage="guides" />
      
      <main 
        className="pt-8 px-6 pb-20 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Glow backdrop */}
        <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-[#ffd6a5] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-10">
            <span className="bg-[#ab1f82] text-white px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              RIOTEER HANDBOOK
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-4 mb-4 font-headline text-black">
              Battle <span className="text-[#00B386] italic">Guides</span>
            </h1>
          </div>

          {/* Guides List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
            {guides.map((guide, idx) => (
              <section 
                key={guide.title} 
                className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,179,134,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className={`${guide.badgeClass} border-4 border-black p-2.5 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] text-black flex items-center justify-center`}>
                    <MaterialIcon icon={guide.icon} size={24} className="text-black" />
                  </div>
                  
                  <div className="grow w-full">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-2xl md:text-3xl font-black uppercase font-headline text-black">
                        {idx + 1}. {guide.title}
                      </h3>
                      <span className="text-xs font-mono font-bold bg-gray-100 border border-black px-1.5 py-0.5 uppercase text-black">
                        {guide.readTime}
                      </span>
                    </div>
                    <p className="text-black font-body text-sm md:text-base leading-relaxed">
                      {guide.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200 w-full">
                  <Link
                    href={`/guides/${idx}`}
                    className="font-black text-sm uppercase tracking-widest text-[#ab1f82] hover:text-[#ff69c9] flex items-center gap-1 font-headline"
                  >
                    Read full guide <MaterialIcon icon="arrow_forward" size={14} />
                  </Link>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
