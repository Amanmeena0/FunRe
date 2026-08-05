"use client";

import { useState, useRef } from "react";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import MaterialIcon from "@/components/ui/Materialcon";

export default function CompatibilityScannerPage() {
  // Scanner states
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert("PLEASE UPLOAD A RESUME FILE FIRST!");
      return;
    }
    if (!jobDescription.trim()) {
      alert("PLEASE PASTE A JOB DESCRIPTION!");
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    // Simulate scanning delay
    setTimeout(() => {
      const jdWords = jobDescription.toLowerCase();
      const possibleKeywords = [
        "React", "Next.js", "TypeScript", "Node.js", "Kubernetes", "Docker", "AWS", 
        "Figma", "Webflow", "SEO", "Copywriting", "Direct Response", "A/B Testing", 
        "PostgreSQL", "GraphQL", "Python", "Rust", "Project Management"
      ];
      
      const missingKeywords = possibleKeywords.filter(
        keyword => jdWords.includes(keyword.toLowerCase()) && Math.random() > 0.45
      );

      const finalMissing = missingKeywords.length > 0 
        ? missingKeywords 
        : ["System Architecture", "Performance Optimization", "Scalability"];

      const score = Math.floor(Math.random() * 41) + 40; // 40% - 80%

      setIsScanning(false);
      setScanResult({
        score,
        verdict: score < 60 ? "🚨 DANGER: SEVERELY UNDERPOWERED" : "⚠️ WARNING: BARELY PASSABLE",
        missingKeywords: finalMissing,
        tips: [
          "Replace weak verbs ('managed', 'assisted') with high-impact achievements.",
          "Add metrics to your experience bullets (e.g. percentages, dollars saved).",
          "Include a dedicated 'Certifications' section to validate your claims."
        ]
      });
    }, 2000);
  };

  return (
    <>
      <TopNav activePage="riot-bot" />
      
      <main 
        className="pt-12 px-8 pb-32 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#ffd8ea] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <Link href="/riot-bot" className="inline-flex items-center gap-1 font-bold text-sm uppercase mb-8 hover:text-[#ab1f82] transition-colors">
            <MaterialIcon icon="arrow_back" size={16} /> Back to Hub
          </Link>

          <div className="mb-12 text-center">
            <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              AI MATCH SCANNER
            </span>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 brutalist-card">
              <div className="border-b-2 border-black pb-3">
                <h2 className="text-2xl font-black uppercase font-headline">⚡ COMPATIBILITY SCANNER</h2>
                <p className="text-xs font-semibold text-gray-500 uppercase">Audit your application readiness</p>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700">Upload Current Resume:</label>
                <div 
                  onClick={() => fileInputRef.current?.click()}
                  onDragEnter={handleDrag}
                  onDragOver={handleDrag}
                  onDragLeave={handleDrag}
                  onDrop={handleDrop}
                  className={`border-4 border-dashed p-6 text-center cursor-pointer transition-colors relative ${
                    dragActive ? "border-[#ff69c9] bg-[#fdf2f8]" : "border-black bg-[#fafafa] hover:bg-[#fefce8]"
                  }`}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    className="hidden" 
                    onChange={(e) => {
                      if (e.target.files && e.target.files[0]) {
                        setUploadedFile(e.target.files[0]);
                      }
                    }}
                    accept=".pdf,.doc,.docx,.txt"
                  />
                  <span className="material-symbols-outlined text-4xl mb-2 text-black select-none">cloud_upload</span>
                  <p className="font-bold text-sm text-black uppercase">
                    {uploadedFile ? `📄 ${uploadedFile.name}` : "DRAG & DROP RESUME OR CLICK TO UPLOAD"}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-1">SUPPORTED FORMATS: PDF, DOCX, TXT</p>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-black uppercase tracking-wider text-gray-700">Paste Job Description:</label>
                <textarea
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="PASTE THE TARGET JOB DETAILS HERE..."
                  className="h-32 p-4 border-2 border-black font-body text-sm font-bold bg-[#fafafa] text-black focus:outline-none placeholder-gray-400 focus:border-[#ab1f82]"
                />
              </div>

              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-[#fec700] hover:bg-[#ff69c9] text-black font-black uppercase tracking-widest font-headline py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer block text-center"
              >
                {isScanning ? "⏳ SCANNING IN PROGRESS..." : "⚡ RUN MATCH SCANNER"}
              </button>
            </div>

            {scanResult && (
              <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 brutalist-card">
                <div className="flex justify-between items-center border-b-2 border-black pb-3">
                  <h3 className="text-xl font-black uppercase font-headline">Audit Results</h3>
                  <span className="bg-[#00B386] text-black text-[10px] font-mono px-2 py-0.5 border border-black uppercase font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">Done</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-black bg-[#ab1f82] flex items-center justify-center text-white font-headline font-black text-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    {scanResult.score}%
                  </div>
                  <div>
                    <p className="font-black text-sm text-[#ab1f82] uppercase">{scanResult.verdict}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">Recruiter compatibility match</p>
                  </div>
                </div>

                <div className="space-y-1">
                  <p className="text-xs font-black uppercase tracking-wider text-gray-700">Missing Keywords in Resume:</p>
                  <div className="flex flex-wrap gap-1.5">
                    {scanResult.missingKeywords.map((kw: string) => (
                      <span key={kw} className="bg-red-100 text-red-800 text-[10px] font-bold px-2 py-0.5 border border-red-300 rounded-sm font-mono">
                        -{kw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <p className="text-xs font-black uppercase tracking-wider text-gray-700">Action Plan to Beat the Bots:</p>
                  <ul className="list-decimal pl-4 space-y-1 text-[11px] font-bold text-black/90">
                    {scanResult.tips.map((tip: string, idx: number) => (
                      <li key={idx}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
