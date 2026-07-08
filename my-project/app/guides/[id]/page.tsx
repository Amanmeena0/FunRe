"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";

const guideDetails = [
  {
    id: 0,
    title: "ATS Bypass: Fact vs Fiction",
    subtitle: "HOW TO BEAT THE ALGORITHMS",
    badge: "ATS Strategy",
    badgeClass: "bg-[#00B386] text-black",
    readTime: "4 min read",
    content: (
      <div className="space-y-8 font-body">
        <section className="space-y-4">
          <h2 className="text-3xl font-black uppercase font-headline text-black">
            The Truth About Applicant Tracking Systems
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Many websites tell you to remove all colors, columns, and custom styling to pass ATS filters. <strong>This is fiction.</strong> Modern ATS parsers are sophisticated enough to extract plain text from styled layouts. What actually matters is your document's semantic structure, font standards, and header formatting.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black uppercase font-headline text-black">
            How to Guarantee a 100% Score
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-800">
            <li>Ensure text is highlightable and readable (never upload scan PDFs).</li>
            <li>Use clear, standard headings like "Experience", "Education", and "Skills".</li>
            <li>Avoid inserting key details inside complex nested tables or graphics.</li>
          </ul>
        </section>

        <div className="bg-[#ffd8ea] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <h4 className="text-xl font-black uppercase font-headline text-[#ab1f82]">
            🛠️ ATS Validation Tool
          </h4>
          <p className="text-sm font-medium text-black">
            Test how a parser actually parses your resume. Use this open-source hiring agent validator to benchmark your ATS performance:
          </p>
          <Link
            href="https://github.com/interviewstreet/hiring-agent"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ab1f82] text-white border-2 border-black py-3 px-6 font-black font-headline uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <span>GitHub Hiring Agent</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>

        <div className="bg-[#fec700] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 text-black">
          <h4 className="text-xl font-black uppercase font-headline text-black">
            📄 Standard FAANG Layout
          </h4>
          <p className="text-sm font-medium text-black/90">
            Looking for a classical, ultra-safe FAANG style LaTeX layout? Use the official Overleaf template used by top engineering candidates:
          </p>
          <Link
            href="https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-black text-white border-2 border-black py-3 px-6 font-black font-headline uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_rgba(254,199,0,1)] hover:bg-white hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <span>Overleaf FAANG Template</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "Get Hired: The Unwritten Rules",
    subtitle: "THE UNWRITTEN RULES OF RECRUITMENT",
    badge: "Hiring Rules",
    badgeClass: "bg-[#ff69c9] text-black",
    readTime: "5 min read",
    content: (
      <div className="space-y-8 font-body">
        <section className="space-y-4">
          <h2 className="text-3xl font-black uppercase font-headline text-black">
            How to Make Recruiters Call You Back
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Landing interviews is about high signal density. Recruiters scan resumes in less than 7 seconds. If your achievements look like a copy-paste job description, they will bin it.
          </p>
        </section>

        <section className="border-l-4 border-black pl-6 py-2 space-y-3">
          <h3 className="text-xl font-black uppercase font-headline text-[#ab1f82]">
            📈 Rule 1: Always Be Quantifiable
          </h3>
          <p className="text-gray-800 text-base">
            Never write "Responsible for managing codebase changes." Instead write: <strong className="text-black bg-[#ffd8ea] px-1">"Refactored monolith architecture, reducing deployment latency by 34% and cutting server costs by $12k/yr."</strong> Use metrics, timeframes, and currencies.
          </p>
        </section>

        <section className="border-l-4 border-black pl-6 py-2 space-y-3">
          <h3 className="text-xl font-black uppercase font-headline text-[#00B386]">
            🧹 Rule 2: Cut Out the Fluff (No Unnecessary Details)
          </h3>
          <p className="text-gray-800 text-base">
            Keep layout order relevant to your career level:
          </p>
          <div className="bg-[#f0fff4] border-2 border-[#00B386] p-4 text-sm font-semibold text-black space-y-1">
            <p>🎓 <strong>Recent Graduate:</strong> Put <strong>Education first</strong>, followed by Projects and Experience.</p>
            <p>💼 <strong>Experienced Professional (2+ yrs):</strong> Put <strong>Experience first</strong>. Education goes at the very bottom.</p>
          </div>
        </section>

        <section className="border-l-4 border-black pl-6 py-2 space-y-3">
          <h3 className="text-xl font-black uppercase font-headline text-[#fec700]">
            🏅 Rule 3: Upgrade with Certifications
          </h3>
          <p className="text-gray-800 text-base">
            If you have credentials or certificates, put them in a dedicated section. They validate skill sets without taking up experience space.
          </p>
        </section>

        <div className="bg-white border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-6">
          <div>
            <h4 className="text-xl font-black uppercase font-headline text-black">
              🎓 Free Courses & Certifications
            </h4>
            <p className="text-sm font-medium text-gray-700 mt-1">
              Add credible badges to your resume using these free education platforms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="https://www.linkedin.com/learning/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#fec700] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 transition-all font-headline font-black text-xs uppercase"
            >
              <span>LinkedIn Learning</span>
              <span className="text-[10px] text-black/70 font-semibold mt-1">⭐ Best Option</span>
            </Link>

            <Link
              href="https://anthropic.skilljar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#ab1f82] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 transition-all font-headline font-black text-xs uppercase"
            >
              <span>ClaudeSkills</span>
              <span className="text-[10px] text-white/80 mt-1">Developer Badges</span>
            </Link>

            <Link
              href="https://learntube.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#00B386] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fec700] hover:text-black hover:-translate-y-0.5 transition-all font-headline font-black text-xs uppercase"
            >
              <span>LearnTube AI</span>
              <span className="text-[10px] text-white/80 mt-1">Free Courses</span>
            </Link>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Cover Letter Blueprint",
    subtitle: "WRITE A COVER LETTER THAT ACTUALLY GETS READ",
    badge: "Cover Letter",
    badgeClass: "bg-[#fec700] text-black",
    readTime: "4 min read",
    content: (
      <div className="space-y-8 font-body">
        <section className="space-y-4">
          <h2 className="text-3xl font-black uppercase font-headline text-black">
            The Anatomy of a High-Impact Cover Letter
          </h2>
          <p className="text-gray-800 text-lg leading-relaxed">
            Stop copy-pasting standard online cover letters. Recruiters spot template text immediately. A great cover letter should be concise, structured, and customized to show how your experience perfectly overlaps with the company's biggest challenges.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-black uppercase font-headline text-black">
            The Three-Step Layout
          </h3>
          <div className="space-y-4">
            <div className="bg-white border-2 border-black p-4">
              <span className="bg-[#ab1f82] text-white px-2 py-0.5 text-xs font-black uppercase">1. The Hook</span>
              <p className="text-sm mt-2 text-gray-800">State exactly why you want to work at this specific company and name an achievement that proves your speed and capability.</p>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <span className="bg-[#00B386] text-black px-2 py-0.5 text-xs font-black uppercase">2. The Proof</span>
              <p className="text-sm mt-2 text-gray-800">Quantify one of your main projects and explain how that solution maps to their current roadmap.</p>
            </div>
            <div className="bg-white border-2 border-black p-4">
              <span className="bg-[#fec700] text-black px-2 py-0.5 text-xs font-black uppercase">3. The Close</span>
              <p className="text-sm mt-2 text-gray-800">A clear, confident call to action for a sync or short discussion. No begging.</p>
            </div>
          </div>
        </section>

        <div className="bg-[#ffffd4] border-4 border-black p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 text-black">
          <h4 className="text-xl font-black uppercase font-headline text-black">
            ✉️ Overleaf Cover Letter Templates
          </h4>
          <p className="text-sm font-medium text-black/90">
            Browse clean, recruiter-approved LaTeX styles to structure your letter with absolute authority:
          </p>
          <Link
            href="https://www.overleaf.com/gallery/tagged/cover-letter"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#fec700] text-black border-2 border-black py-3 px-6 font-black font-headline uppercase text-sm tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <span>Browse Overleaf Cover Letters</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </Link>
        </div>
      </div>
    )
  }
];

export default function GuideDetailPage() {
  const params = useParams();
  const router = useRouter();
  
  const idStr = params.id as string;
  const guideId = parseInt(idStr, 10);
  const guide = guideDetails.find((g) => g.id === guideId);

  if (!guide) {
    return (
      <>
        <TopNav />
        <main className="min-h-screen pt-20 px-8 pb-32 flex flex-col items-center justify-center text-center font-body bg-[#f9f9f9]">
          <h1 className="text-5xl font-black uppercase font-headline mb-4">Guide Not Found</h1>
          <button
            onClick={() => router.push("/guides")}
            className="bg-[#ab1f82] text-white border-2 border-black px-6 py-2 font-black font-label uppercase text-sm shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black transition-all cursor-pointer"
          >
            Back to Guides
          </button>
        </main>
        <Footer fixed={true} />
      </>
    );
  }

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
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#ffd6a5] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Back Link */}
          <button
            onClick={() => router.push("/guides")}
            className="flex items-center gap-1.5 font-black text-sm uppercase tracking-widest text-[#ab1f82] hover:text-[#ff69c9] transition-colors mb-12 font-headline cursor-pointer select-none"
          >
            <span className="material-symbols-outlined text-sm font-black">arrow_back</span>
            Back to Guides
          </button>

          {/* Header */}
          <div className="mb-12 border-b-4 border-black pb-8">
            <span className={`inline-block ${guide.badgeClass} px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mb-6`}>
              {guide.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-4 font-headline text-black">
              {guide.title}
            </h1>
            <div className="flex justify-between items-center text-xs font-mono font-bold text-gray-500 uppercase">
              <span>{guide.subtitle}</span>
              <span className="bg-gray-100 border border-black px-2 py-1">{guide.readTime}</span>
            </div>
          </div>

          {/* Render Guide Content */}
          <div className="bg-white border-4 border-black p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            {guide.content}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
