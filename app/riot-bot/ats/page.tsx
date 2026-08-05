"use client";

import { useState, useRef } from "react";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import MaterialIcon from "@/components/ui/Materialcon";

export default function AtsScannerPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
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

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!uploadedFile) {
      alert("PLEASE UPLOAD A RESUME FILE FIRST!");
      return;
    }

    setIsScanning(true);
    setScanResult(null);

    try {
      const formData = new FormData();
      formData.append("file", uploadedFile); // Backend should expect 'file'

      // You might need to adjust this URL depending on your backend endpoint route
      const response = await fetch("http://localhost:8000/scan", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("API response was not ok");
      }

      const data = await response.json();
      
      setIsScanning(false);
      setScanResult({
        score: data.score || 0,
        readability: data.readability || "UNKNOWN",
        formatting: data.formatting || "UNKNOWN",
        issues: data.issues || ["No specific issues detected or structure not fully parsed."]
      });
    } catch (error) {
      console.error("Scanning Error:", error);
      setIsScanning(false);
      alert("FAILED TO CONNECT TO BACKEND API. IS IT RUNNING ON PORT 8000?");
    }
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
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#d8f0ff] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          <Link href="/riot-bot" className="inline-flex items-center gap-1 font-bold text-sm uppercase mb-8 hover:text-[#00B386] transition-colors">
            <MaterialIcon icon="arrow_back" size={16} /> Back to Hub
          </Link>

          <div className="mb-12 text-center">
            <span className="bg-[#00B386] text-black px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              ATS SCORE SCANNER
            </span>
          </div>

          <div className="max-w-2xl mx-auto space-y-6">
            <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 brutalist-card">
              <div className="border-b-2 border-black pb-3">
                <h2 className="text-2xl font-black uppercase font-headline">🤖 ATS SCANNER</h2>
                <p className="text-xs font-semibold text-gray-500 uppercase">Audit your resume readability</p>
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
                    dragActive ? "border-[#00B386] bg-[#e6fff7]" : "border-black bg-[#fafafa] hover:bg-[#fefce8]"
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
                  <span className="material-symbols-outlined text-4xl mb-2 text-black select-none">document_scanner</span>
                  <p className="font-bold text-sm text-black uppercase">
                    {uploadedFile ? `📄 ${uploadedFile.name}` : "DRAG & DROP RESUME OR CLICK TO UPLOAD"}
                  </p>
                  <p className="text-[10px] text-gray-500 font-mono mt-1">SUPPORTED FORMATS: PDF, DOCX, TXT</p>
                </div>
              </div>

              <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-[#00B386] hover:bg-[#00e6ac] text-black font-black uppercase tracking-widest font-headline py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer block text-center"
              >
                {isScanning ? "⏳ ANALYZING STRUCTURE..." : "🤖 RUN ATS SCAN"}
              </button>
            </div>

            {scanResult && (
              <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 brutalist-card">
                <div className="flex justify-between items-center border-b-2 border-black pb-3">
                  <h3 className="text-xl font-black uppercase font-headline">Parse Results</h3>
                  <span className="bg-[#00B386] text-black text-[10px] font-mono px-2 py-0.5 border border-black uppercase font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">Parsed</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full border-4 border-black bg-[#00B386] flex items-center justify-center text-black font-headline font-black text-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                    {scanResult.score}%
                  </div>
                  <div>
                    <p className="font-black text-sm text-black uppercase">READABILITY: {scanResult.readability}</p>
                    <p className="text-[10px] font-bold text-gray-500 uppercase">System parsing rate</p>
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <p className="text-xs font-black uppercase tracking-wider text-gray-700">Formatting Issues Detected:</p>
                  <ul className="list-decimal pl-4 space-y-1 text-[11px] font-bold text-black/90">
                    {scanResult.issues.map((issue: string, idx: number) => (
                      <li key={idx}>{issue}</li>
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
