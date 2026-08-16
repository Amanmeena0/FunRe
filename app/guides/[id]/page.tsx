"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";

const guideDetails = [
  {
    id: 0,
    title: "Get Hired: The Unwritten Rules",
    subtitle: "THE UNWRITTEN RULES OF RECRUITMENT",
    badge: "Hiring Rules",
    badgeClass: "bg-[#ff69c9] text-black",
    readTime: "5 min read",
    content: (
      <div className="space-y-6 font-body">
        <section className="space-y-2">
          <h2 className="text-xl md:text-2xl font-black uppercase font-headline text-black">
            How to Make Recruiters Call You Back
          </h2>
          <p className="text-black text-base md:text-lg leading-relaxed">
            Landing interviews is about high signal density. Recruiters scan resumes in less than 7 seconds. If your achievements look like a copy-paste job description, they will bin it.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <section className="border-l-4 border-black pl-4 py-1 space-y-2">
            <h3 className="text-base md:text-lg font-black uppercase font-headline text-[#ab1f82]">
              📈 Rule 1: Be Quantifiable
            </h3>
            <p className="text-black text-sm md:text-base">
              Never write "Responsible for codebase changes." Instead: <strong className="text-black bg-[#ffd8ea] px-1">"Refactored monolith, reducing deployment latency by 34%."</strong> Use metrics.
            </p>
          </section>

          <section className="border-l-4 border-black pl-4 py-1 space-y-2">
            <h3 className="text-base md:text-lg font-black uppercase font-headline text-[#00B386]">
              🧹 Rule 2: Cut the Fluff
            </h3>
            <p className="text-black text-sm md:text-base">
              Keep layout order relevant to your career level:
            </p>
            <div className="bg-[#f0fff4] border border-[#00B386] p-2.5 text-xs font-bold text-black space-y-1">
              <p>🎓 <strong>Grads:</strong> Education first, then experience.</p>
              <p>💼 <strong>Pros (2+ yrs):</strong> Experience first. Education bottom.</p>
            </div>
          </section>

          <section className="border-l-4 border-black pl-4 py-1 space-y-2">
            <h3 className="text-base md:text-lg font-black uppercase font-headline text-[#fec700]">
              🏅 Rule 3: Upgrade with Certs
            </h3>
            <p className="text-black text-sm md:text-base">
              If you have credentials or certificates, put them in a dedicated section. They validate skill sets efficiently.
            </p>
          </section>
        </div>

        <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
          <div>
            <h4 className="text-base md:text-lg font-black uppercase font-headline text-black">
              🎓 Free Courses & Certifications
            </h4>
            <p className="text-sm font-bold text-black mt-1">
              Add credible badges to your resume using these free education platforms:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="https://www.linkedin.com/learning/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#fec700] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 transition-all font-headline font-black text-sm uppercase"
            >
              <span>LinkedIn Learning</span>
              <span className="text-xs text-black font-bold mt-1">⭐ Best Option</span>
            </Link>

            <Link
              href="https://anthropic.skilljar.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#ab1f82] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 transition-all font-headline font-black text-sm uppercase"
            >
              <span>ClaudeSkills</span>
              <span className="text-xs text-white font-bold mt-1">Developer Badges</span>
            </Link>

            <Link
              href="https://learntube.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center text-center p-4 bg-[#00B386] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fec700] hover:text-black hover:-translate-y-0.5 transition-all font-headline font-black text-sm uppercase"
            >
              <span>LearnTube AI</span>
              <span className="text-xs text-white font-bold mt-1">Free Courses</span>
            </Link>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: "ATS Bypass: Fact vs Fiction",
    subtitle: "HOW TO BEAT THE ALGORITHMS",
    badge: "ATS Strategy",
    badgeClass: "bg-[#00B386] text-black",
    readTime: "4 min read",
    content: (
      <div className="space-y-6 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black uppercase font-headline text-black">
              The Truth About Applicant Tracking Systems
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed">
              Many websites tell you to remove all colors, columns, and custom styling to pass ATS filters. <strong>This is fiction.</strong> Modern ATS parsers are sophisticated enough to extract plain text from styled layouts. What actually matters is your document's semantic structure, font standards, and header formatting.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg md:text-xl font-black uppercase font-headline text-black">
              How to Guarantee a 100% Score
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-black text-sm md:text-base">
              <li>Ensure text is highlightable and readable (never upload scan PDFs).</li>
              <li>Use clear, standard headings like "Experience", "Education", and "Skills".</li>
              <li>Avoid inserting key details inside complex nested tables or graphics.</li>
            </ul>
          </section>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-[#ffd8ea] border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="space-y-3">
              <h4 className="text-lg font-black uppercase font-headline text-[#ab1f82]">
                🛠️ ATS Validation Tool
              </h4>
              <p className="text-sm font-semibold text-black leading-relaxed">
                Test how a parser actually parses your resume. Use this open-source hiring agent validator to benchmark your ATS performance:
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/interviewstreet/hiring-agent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#ab1f82] text-white border-2 border-black py-2 px-4 font-black font-headline uppercase text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer w-full justify-center"
              >
                <span>GitHub Hiring Agent</span>
                <span className="material-symbols-outlined text-sm font-bold">open_in_new</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#fec700] border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-3">
              <h4 className="text-lg font-black uppercase font-headline text-black">
                📄 Standard FAANG Layout
              </h4>
              <p className="text-sm font-semibold text-black leading-relaxed">
                Looking for a classical, ultra-safe FAANG style LaTeX layout? Use the official Overleaf template used by top engineering candidates:
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black text-white border-2 border-black py-2 px-4 font-black font-headline uppercase text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(254,199,0,1)] hover:bg-white hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer w-full justify-center"
              >
                <span>Overleaf FAANG Template</span>
                <span className="material-symbols-outlined text-sm font-bold">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "Current Hot Skills",
    subtitle: "DOMINATE THE JOB MARKET",
    badge: "In-Demand Skills",
    badgeClass: "bg-[#00d2ff] text-black",
    readTime: "5 min read",
    content: (
      <div className="space-y-6 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <section className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black uppercase font-headline text-black">
              In-Demand Tech Skills
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed">
              The job market moves fast, and staying competitive means aligning your portfolio with what top teams are actively hiring for. Focus on these high-leverage domains:
            </p>
          </section>

          <div className="bg-[#ffd6a5] border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-black">
            <div className="space-y-2">
              <h4 className="text-base font-black uppercase font-headline text-black flex items-center gap-1.5">
                🚀 Future Skills to Watch
              </h4>
              <p className="text-xs md:text-sm text-black leading-normal">
                Keep an eye on emerging paradigms. Early adoption of these architectural styles will differentiate your engineering profile:
              </p>
              <div className="bg-white/60 p-2.5 border border-black text-xs font-mono font-bold text-black space-y-1 mt-1">
                <p>🔀 <strong>Loop Engineering:</strong> State-machine agentic loops that auto-correct errors.</p>
                <p>📦 <strong>RAG-less Architecture:</strong> Highly compressed contextual models reducing DB dependency.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#ffd8ea] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between">
            <div className="space-y-2">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase">Core Skill</span>
              <h4 className="text-lg font-black uppercase font-headline text-black mt-1">🤖 AI Engineer</h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                LLM orchestration, agent workflows, prompt/content engineering, memory engineering, harness engineering, and RAG architectures.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/stars/Amanmeena0/lists/ai-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black text-white border-2 border-black py-2 px-3 font-black font-headline uppercase text-xs tracking-wider shadow-[2px_2px_0px_0px_rgba(255,105,201,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer w-full justify-center font-bold"
              >
                <span>AI Stack Repository List</span>
                <span className="material-symbols-outlined text-[14px] font-bold">open_in_new</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#fec700] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-2">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase">Core Skill</span>
              <h4 className="text-lg font-black uppercase font-headline text-black mt-1">📈 ML Engineer</h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                Scale data pipelines, design feature stores, write custom model training workflows, and optimize model inference pipelines.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/stars/Amanmeena0/lists/ml-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black text-white border-2 border-black py-2 px-3 font-black font-headline uppercase text-xs tracking-wider shadow-[2px_2px_0px_0px_rgba(254,199,0,1)] hover:bg-white hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer w-full justify-center font-bold"
              >
                <span>ML Stack Repository List</span>
                <span className="material-symbols-outlined text-[14px] font-bold">open_in_new</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#e6fffa] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-2">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase">Specialized</span>
              <h4 className="text-lg font-black uppercase font-headline text-black mt-1">🧠 Deep Learning</h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                Deep neural network deployment, computer vision pipelines, and building deep models utilizing PyTorch framework.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="https://github.com/mrdbourke/pytorch-deep-learning"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-black text-white border-2 border-black py-2 px-2 font-black font-headline uppercase text-[10px] tracking-tight shadow-[2px_2px_0px_0px_rgba(0,179,134,1)] hover:bg-[#00B386] hover:text-white hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer justify-center text-center leading-none font-bold"
              >
                <span>PyTorch Book</span>
                <span className="material-symbols-outlined text-[12px] font-bold">open_in_new</span>
              </Link>
              <Link
                href="https://www.mldl.study/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-black text-white border-2 border-black py-2 px-2 font-black font-headline uppercase text-[10px] tracking-tight shadow-[2px_2px_0px_0px_rgba(0,179,134,1)] hover:bg-[#00B386] hover:text-white hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer justify-center text-center leading-none font-bold"
              >
                <span>ML/DL Study</span>
                <span className="material-symbols-outlined text-[12px] font-bold">open_in_new</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#f0fff4] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-2">
              <span className="bg-black text-white px-2 py-0.5 text-[10px] font-black uppercase">Infrastructure</span>
              <h4 className="text-lg font-black uppercase font-headline text-black mt-1">☁️ Cloud & MLOps</h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                Scale infrastructure, manage containers, monitor orchestration models, and build automated CI/CD for ML deployments.
              </p>
            </div>
            <div className="h-9 mt-4 flex items-center justify-center border border-dashed border-gray-400 text-xs text-gray-600 font-mono font-bold uppercase select-none bg-white/50">
              ⚡ MLOps In Demand
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Cover Letter Blueprint",
    subtitle: "WRITE A COVER LETTER THAT ACTUALLY GETS READ",
    badge: "Cover Letter",
    badgeClass: "bg-[#fec700] text-black",
    readTime: "4 min read",
    content: (
      <div className="space-y-6 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black uppercase font-headline text-black">
              The Anatomy of a High-Impact Cover Letter
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed">
              Stop copy-pasting standard online cover letters. Recruiters spot template text immediately. A great cover letter should be concise, structured, and customized to show how your experience perfectly overlaps with the company's biggest challenges.
            </p>
          </section>

          <section className="space-y-2">
            <h3 className="text-lg md:text-xl font-black uppercase font-headline text-black">
              The Three-Step Layout
            </h3>
            <div className="space-y-2.5">
              <div className="bg-white border-2 border-black p-3 flex items-start gap-2">
                <span className="bg-[#ab1f82] text-white px-2 py-0.5 text-[10px] font-black uppercase shrink-0">1. Hook</span>
                <p className="text-xs md:text-sm text-black leading-normal">State exactly why you want to work at this specific company and name an achievement that proves your speed.</p>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-start gap-2">
                <span className="bg-[#00B386] text-black px-2 py-0.5 text-[10px] font-black uppercase shrink-0">2. Proof</span>
                <p className="text-xs md:text-sm text-black leading-normal">Quantify one of your main projects and explain how that solution maps to their current roadmap.</p>
              </div>
              <div className="bg-white border-2 border-black p-3 flex items-start gap-2">
                <span className="bg-[#fec700] text-black px-2 py-0.5 text-[10px] font-black uppercase shrink-0">3. Close</span>
                <p className="text-xs md:text-sm text-black leading-normal">A clear, confident call to action for a sync or short discussion. No begging.</p>
              </div>
            </div>
          </section>
        </div>

        <div className="bg-[#ffffd4] border-4 border-black p-5 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] text-black">
          <div className="space-y-3">
            <h4 className="text-lg font-black uppercase font-headline text-black">
              ✉️ Overleaf Cover Letter Templates
            </h4>
            <p className="text-sm font-semibold text-black leading-relaxed">
              Browse clean, recruiter-approved LaTeX styles to structure your letter with absolute authority:
            </p>
          </div>
          <div className="mt-4">
            <Link
              href="https://www.overleaf.com/gallery/tagged/cover-letter"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-[#fec700] text-black border-2 border-black py-2 px-4 font-black font-headline uppercase text-sm tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
            >
              <span>Browse Overleaf Cover Letters</span>
              <span className="material-symbols-outlined text-base font-bold">open_in_new</span>
            </Link>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "Interview Prep Kit",
    subtitle: "CRUSH YOUR NEXT TECHNICAL SCREEN",
    badge: "Interview Prep",
    badgeClass: "bg-[#ffd6a5] text-black",
    readTime: "6 min read",
    content: (
      <div className="space-y-6 font-body">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <section className="space-y-2">
            <h2 className="text-xl md:text-2xl font-black uppercase font-headline text-black">
              The Ultimate Interview Roadmap
            </h2>
            <p className="text-black text-base md:text-lg leading-relaxed">
              Interviews are tests of confidence and structured problem-solving. Use these optimized pathways to prepare rapidly and thoroughly:
            </p>
          </section>

          <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-3">
            <h4 className="text-base font-black uppercase font-headline text-[#ab1f82]">
              💻 Data Structures & Algorithms
            </h4>
            <p className="text-xs md:text-sm text-black leading-normal font-medium">
              Focus on high-yield, structured curriculums that teach core patterns rather than memorizing random questions:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
              <Link
                href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-or-dsa-playlist/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center p-2.5 bg-[#e6fffa] text-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00B386] hover:text-white hover:-translate-y-0.5 transition-all font-headline font-black text-xs uppercase"
              >
                <span>Striver Sheet</span>
              </Link>

              <Link
                href="https://neetcode.io/practice"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center p-2.5 bg-[#ffd8ea] text-black border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 transition-all font-headline font-black text-xs uppercase"
              >
                <span>75 Hard Prep</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#fec700] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-2">
              <h4 className="text-base font-black uppercase font-headline text-black">
                🏗️ System Design
              </h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                Master load balancers, caching, sharding, databases, and microservices architecture.
              </p>
            </div>
            <div className="mt-4">
              <Link
                href="https://github.com/stars/Amanmeena0/lists/system-desgin"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-black text-white border-2 border-black py-2 px-3 font-black font-headline uppercase text-xs tracking-wider shadow-[2px_2px_0px_0px_rgba(254,199,0,1)] hover:bg-white hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer w-full justify-center font-bold"
              >
                <span>System Design Resources</span>
                <span className="material-symbols-outlined text-xs font-bold">open_in_new</span>
              </Link>
            </div>
          </div>

          <div className="bg-[#ffd8ea] border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col justify-between text-black">
            <div className="space-y-2">
              <h4 className="text-base font-black uppercase font-headline text-[#ab1f82]">
                🤖 AI Engineering
              </h4>
              <p className="text-sm text-black leading-relaxed font-medium">
                Prepare for agent architectures, neural network foundations, prompt optimization, and system integration.
              </p>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <Link
                href="https://github.com/stars/Amanmeena0/lists/ai-stack"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-black text-white border-2 border-black py-2 px-2 font-black font-headline uppercase text-[10px] tracking-tight shadow-[2px_2px_0px_0px_rgba(255,105,201,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer justify-center text-center leading-none font-bold"
              >
                <span>AI Stack list</span>
                <span className="material-symbols-outlined text-[12px] font-bold">open_in_new</span>
              </Link>
              <Link
                href="https://www.mldl.study/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 bg-black text-white border-2 border-black py-2 px-2 font-black font-headline uppercase text-[10px] tracking-tight shadow-[2px_2px_0px_0px_rgba(255,105,201,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer justify-center text-center leading-none font-bold"
              >
                <span>ML/DL Roadmap</span>
                <span className="material-symbols-outlined text-[12px] font-bold">open_in_new</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

const guideTakeaways = [
  "Optimize resume signal density, cut out fluff, prioritize experience layout, and back up claims with verified credentials.",
  "Bypass automated applicant filters using proper semantic document structure, standard headers, and highlightable text formats.",
  "Focus on high-leverage skills: AI engineering agent architectures, ML data pipelines, PyTorch networks, and Cloud MLOps.",
  "Construct a highly targeted three-section cover letter designed to hook recruiters, provide proof, and close confidently.",
  "Prepare for technical screenings systematically using curated DSA sheets, System Design concepts, and AI stack roadmaps."
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
        <main className="min-h-screen pt-12 px-6 pb-20 flex flex-col items-center justify-center text-center font-body bg-[#f9f9f9]">
          <h1 className="text-3xl font-black uppercase font-headline mb-3">Guide Not Found</h1>
          <button
            onClick={() => router.push("/guides")}
            className="bg-[#ab1f82] text-white border-2 border-black px-4 py-1.5 font-black font-label uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black transition-all cursor-pointer"
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
        className="pt-8 px-2 sm:px-4 md:px-6 pb-20 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Glow backdrops */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#ffd6a5] rounded-full blur-[100px] opacity-35 pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-[300px] h-[300px] bg-[#00B386] rounded-full blur-[120px] opacity-20 pointer-events-none" />

        <div className="max-w-[1440px] mx-auto relative z-10">
          {/* Back Link */}
          <button
            onClick={() => router.push("/guides")}
            className="flex items-center gap-1 font-black text-xs uppercase tracking-widest text-[#ab1f82] hover:text-[#ff69c9] transition-colors mb-8 font-headline cursor-pointer select-none group"
          >
            <span className="material-symbols-outlined text-xs font-black group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Back to All Guides
          </button>

          {/* Two-Column Responsive Layout */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            
            {/* Left Column: Interactive Sidebar (32% width) */}
            <aside className="w-full lg:w-[32%] space-y-6 lg:sticky lg:top-24 h-fit">
              
              {/* Main Badge Card */}
              <div className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden">
                <div 
                  className="absolute top-0 right-0 w-16 h-16 pointer-events-none opacity-10" 
                  style={{
                    backgroundImage: "repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)",
                    backgroundSize: "8px 8px"
                  }}
                />
                
                <span className={`inline-block ${guide.badgeClass} px-2 py-0.5 font-bold text-[9px] uppercase tracking-widest border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)] mb-4`}>
                  {guide.badge}
                </span>
                
                <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-[0.95] mb-3 font-headline text-black">
                  {guide.title}
                </h1>
                
                <p className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-wider mb-4 border-b-2 border-black pb-2">
                  {guide.subtitle}
                </p>

                <div className="flex justify-between items-center text-[10px] font-mono font-bold text-black uppercase bg-gray-100 border-2 border-black px-2 py-1.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <span>EST. READ TIME</span>
                  <span className="bg-[#fec700] border border-black px-1.5 py-0.5">{guide.readTime}</span>
                </div>
              </div>

              {/* Key Takeaways Box */}
              <div className="border-4 border-black bg-[#ffd8ea] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-base uppercase tracking-widest text-[#ab1f82] mb-3 font-headline">
                  💡 CORE OBJECTIVE
                </h3>
                <p className="text-sm text-black leading-relaxed font-bold">
                  {guideTakeaways[guideId] || "Learn the best practices to optimize your professional profiles and secure job opportunities."}
                </p>
              </div>

              {/* Handbook Index */}
              <div className="border-4 border-black bg-white p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black text-base uppercase tracking-widest text-black mb-4 border-b-2 border-black pb-2 font-headline">
                  HANDBOOK INDEX
                </h3>
                <nav className="flex flex-col gap-3">
                  {guideDetails.map((g) => {
                    const isActive = g.id === guideId;
                    return (
                      <Link
                        key={g.id}
                        href={`/guides/${g.id}`}
                        className={`block border-2 border-black p-3 transition-all duration-150 select-none ${
                          isActive
                            ? `${g.badgeClass} shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] -translate-x-0.5 -translate-y-0.5`
                            : "bg-white hover:bg-gray-100 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-0.5 hover:-translate-y-0.5"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-black">0{g.id + 1}.</span>
                          <span className="font-headline font-black text-xs md:text-sm uppercase tracking-tight truncate grow">
                            {g.title.split(":")[0]}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </nav>
              </div>

            </aside>

            {/* Right Column: Guide Content (68% width) */}
            <div className="w-full lg:w-[68%] space-y-6">
              
              {/* Render Guide Content */}
              <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {guide.content}
              </div>

              {/* Bottom Navigation Buttons */}
              <div className="flex flex-wrap justify-between items-center gap-4 bg-white border-4 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <button
                  onClick={() => router.push("/guides")}
                  className="bg-white text-black border-2 border-black py-2 px-4 font-black font-headline uppercase text-[10px] tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer flex items-center gap-1.5 font-bold"
                >
                  <span className="material-symbols-outlined text-xs font-black">arrow_back</span>
                  Handbook Home
                </button>
                
                <div className="flex gap-3">
                  {guideId > 0 && (
                    <button
                      onClick={() => router.push(`/guides/${guideId - 1}`)}
                      className="bg-white text-black border-2 border-black py-2 px-4 font-black font-headline uppercase text-[10px] tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00B386] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    >
                      Prev Guide
                    </button>
                  )}
                  {guideId < guideDetails.length - 1 && (
                    <button
                      onClick={() => router.push(`/guides/${guideId + 1}`)}
                      className="bg-[#ab1f82] text-white border-2 border-black py-2 px-4 font-black font-headline uppercase text-[10px] tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
                    >
                      Next Guide
                    </button>
                  )}
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer fixed={true} />
    </>
  );
}
