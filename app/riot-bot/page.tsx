"use client";

import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";
import Link from "next/link";

const bots = [
  {
    icon: "radar",
    title: "Compatibility Match",
    readTime: "Recruiter Audit",
    description: "Scan your resume against a target job description to find missing keywords and get a direct recruiter compatibility score.",
    badgeClass: "bg-[#ab1f82] text-white",
    path: "/riot-bot/compatibility"
  },
  {
    icon: "document_scanner",
    title: "ATS Score Scanner",
    readTime: "System Audit",
    description: "Analyze your resume's formatting, layout, and structure to ensure it bypasses legacy Applicant Tracking Systems perfectly.",
    badgeClass: "bg-[#00B386] text-black",
    path: "/riot-bot/ats"
  }
];

export default function RiotHubPage() {
  return (
    <>
      <TopNav activePage="riot-bot" />
      
      <main 
        className="pt-8 px-6 pb-20 relative overflow-hidden bg-[#f9f9f9] min-h-screen"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-10">
            <span className="bg-[#ab1f82] text-white px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              RIOT AI TOOLS
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-4 mb-4 font-headline text-black">
              Bot <span className="text-[#ab1f82] italic">Arsenal</span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl">
            {bots.map((bot) => (
              <section 
                key={bot.title} 
                className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(171,31,130,1)] hover:-translate-y-0.5 hover:-translate-x-0.5 transition-all duration-150 flex flex-col justify-between h-full"
              >
                <div className="flex flex-col gap-4 items-start w-full">
                  <div className={`${bot.badgeClass} border-4 border-black p-2.5 shrink-0 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center`}>
                    <MaterialIcon icon={bot.icon} size={24} className="currentColor" />
                  </div>
                  
                  <div className="grow w-full">
                    <div className="flex flex-wrap justify-between items-center gap-2 mb-2">
                      <h3 className="text-2xl md:text-3xl font-black uppercase font-headline text-black">
                        {bot.title}
                      </h3>
                      <span className="text-xs font-mono font-bold bg-gray-100 border border-black px-1.5 py-0.5 uppercase text-black">
                        {bot.readTime}
                      </span>
                    </div>
                    <p className="text-black font-body text-sm md:text-base leading-relaxed">
                      {bot.description}
                    </p>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t-2 border-dashed border-gray-200 w-full">
                  <Link
                    href={bot.path}
                    className="font-black text-sm uppercase tracking-widest text-[#ab1f82] hover:text-[#ff69c9] flex items-center gap-1 font-headline"
                  >
                    Launch Tool <MaterialIcon icon="arrow_forward" size={14} />
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
