"use client";

import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";

export default function BodoHubPage() {
  return (
    <>
      <TopNav activePage="bodo-bot" />
      
      <main 
        className="pt-8 px-6 pb-20 relative overflow-hidden bg-[#f9f9f9] min-h-screen"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute top-20 left-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center">
          <div className="mb-10">
            <span className="bg-[#ab1f82] text-white px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
              BODO AI TOOLS
            </span>
            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mt-4 mb-4 font-headline text-black">
              ATS <span className="text-[#ab1f82] italic">Arsenal</span>
            </h1>
          </div>

          <div className="bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] p-6 md:p-8 max-w-2xl flex flex-col items-center">
            <h2 className="text-2xl font-bold uppercase tracking-tight mb-4 text-[#111111]">Open Source ATS Scorer</h2>
            <p className="text-lg mb-6 leading-relaxed text-[#111111]">
              We have open-sourced our core ATS scoring engine. Bodo ATS Scorer is a robust tool designed to help developers and recruiters evaluate resumes against job descriptions with high precision.
            </p>
            <a 
              href="https://github.com/RexxLudwig/Bodo-ats-scorer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#FFC107] text-[#111111] font-bold uppercase tracking-wide border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] px-6 py-3 hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </main>

      <Footer fixed={true} />
    </>
  );
}
