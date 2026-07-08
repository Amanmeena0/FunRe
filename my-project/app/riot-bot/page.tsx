"use client";

import { useState, useRef, useEffect } from "react";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";

interface Message {
  sender: "bot" | "user";
  text: string;
  timestamp: string;
}

const botReplies: Record<string, string> = {
  default: "I ONLY SUPPORT MAXIMUM IMPACT. USE LARGE FONTS, BRUTAL BORDERS, AND REMOVE ALL ACCIDENTALLY POLITE COPY. ANYTHING ELSE IS WEAKNESS.",
  verbs: "DO NOT WRITE 'RESPONSIBLE FOR' OR 'MANAGED'. USE DOMINANT WORDS: 'DECIMATED LATENCY BY 42%', 'CONQUERED LEGACY INFRASTRUCTURE', OR 'OVERHAULED BRAND ARCHITECTURE'. NO MERCY.",
  colors: "MAGENTA (#ab1f82) WITH SCREAMING YELLOW (#fec700) IS FOR THE BRAVE. GREEN (#00B386) WITH RAW WHITE IS FOR ATS PURITY. CHOOSE AN ATTITUDE, NOT A DECORATION.",
  ats: "MYTH: ATS BOTS CANNOT READ COLUMNS. TRUTH: MODERN PARSERS EXTRACT PLAINTEXT FINE. THE REAL KILLER IS COMPLEX INLINE NESTED TABLES AND UNSEARCHABLE IMAGE-PDF FORMATS. MAKE IT READABLE AND BOLD.",
  creator: "I WAS BORN FROM THE DEPTHS OF THE RESUME RIOT CODEBASE TO DESTROY BORING PDFS. I RUN ON COFFEE, MONOSPACE FONTS, AND ANGER AT GENERIC RESUME BUILDERS."
};

const quickPrompts = [
  { label: "🔥 Heavy Action Verbs", key: "verbs" },
  { label: "🎨 Color Combinations", key: "colors" },
  { label: "🚀 ATS Truths", key: "ats" },
  { label: "🤖 Who built you?", key: "creator" }
];

export default function RiotBotPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "bot",
      text: "WELCOME TO THE RIOT CONTROL ROOM, BUILDER. I AM RIOT BOT. UPLOAD YOUR CURRENT RESUME AND PASTE A TARGET JOB DESCRIPTION IN THE SCANNER TO BENCHMARK YOUR CANDIDACY, OR ASK ME QUESTIONS IN REAL-TIME.\n\n💡 TIP: Type a resume bullet point in the chat (e.g. 'I managed codebase updates') and I will grade its brutality and score it out of 100!",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [riotScore, setRiotScore] = useState<number | null>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Scanner states
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [scanResult, setScanResult] = useState<any | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [dragActive, setDragActive] = useState(false);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

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

      setRiotScore(score); // Update global score

      // Send result summary to chat
      const botResponse: Message = {
        sender: "bot",
        text: `SCAN COMPLETED FOR RESUME: "${uploadedFile.name}".\n\nCOMPATIBILITY SCORE: ${score}%\nVERDICT: ${score < 60 ? "SEVERELY UNDERPOWERED" : "BARELY PASSABLE"}.\n\nYOU ARE MISSING KEYWORDS: ${finalMissing.join(", ")}.\n\nASK ME HOW TO FIX THESE SECTIONS!`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botResponse]);

    }, 2000);
  };

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputText("");
    setIsTyping(true);

    // Analyze input for keyword match or bullet grading
    let replyKey = "default";
    let isResumeBullet = false;
    let copyScore = 30;
    
    const lowerText = textToSend.toLowerCase();

    // Check if user is typing a custom query and not a click prompt
    const isQuickPrompt = quickPrompts.some(p => p.label === textToSend);

    if (!isQuickPrompt && textToSend.split(" ").length > 3) {
      isResumeBullet = true;
      
      // Calculate copy score
      if (/\d+/.test(textToSend)) copyScore += 25; // Has metrics
      
      const powerVerbs = ["overhaul", "decimate", "build", "spearhead", "design", "optimize", "increase", "reduce", "deliver", "launch", "pioneer", "create"];
      if (powerVerbs.some(v => lowerText.includes(v))) copyScore += 25; // Has power verbs
      
      if (textToSend === textToSend.toUpperCase() && textToSend.length > 8) copyScore += 10; // CAPS volume
      if (textToSend.length > 50) copyScore += 10; // Elaborate length
      
      const weakWords = ["assisted", "managed", "helped", "responsible", "handled", "worked on"];
      if (weakWords.some(w => lowerText.includes(w))) copyScore -= 20; // Weak words deduction

      copyScore = Math.max(0, Math.min(100, copyScore));
    }

    if (!isQuickPrompt) {
      if (lowerText.includes("verb") || lowerText.includes("write") || lowerText.includes("word")) {
        replyKey = "verbs";
      } else if (lowerText.includes("color") || lowerText.includes("style") || lowerText.includes("theme")) {
        replyKey = "colors";
      } else if (lowerText.includes("ats") || lowerText.includes("bot") || lowerText.includes("parser")) {
        replyKey = "ats";
      } else if (lowerText.includes("who") || lowerText.includes("creator") || lowerText.includes("build")) {
        replyKey = "creator";
      }
    }

    setTimeout(() => {
      let botText = botReplies[replyKey];

      if (isResumeBullet) {
        setRiotScore(copyScore);
        if (copyScore < 50) {
          botText = `📊 COPY BRUTALITY SCORE: ${copyScore}/100 (WEAK)\n\n❌ VERDICT: This copy is too soft. You used weak/generic verbs or forgot to include metric numbers. Recruiters will ignore it.\n\n🔥 REWRITE TACTIC: Use a dominant action verb (e.g. 'Overhauled' instead of 'Managed') and insert a hard metric percentage or dollar value (e.g. 'reduced latency by 34%').`;
        } else if (copyScore < 80) {
          botText = `📊 COPY BRUTALITY SCORE: ${copyScore}/100 (AVERAGE)\n\n⚠️ VERDICT: Not bad, but we need more volume. The structure is there, but we need metrics scale.\n\n🔥 REWRITE TACTIC: Quantify the size of your team, database query throughput, or project budget to give your impact weight.`;
        } else {
          botText = `📊 COPY BRUTALITY SCORE: ${copyScore}/100 (ELITE REBEL)\n\n🔥 VERDICT: RAW POWER! This is unignorable, metric-dense copy. Strong action verbs, clear impact, zero corporate fluff.\n\n🚀 ACTION: Copy this bullet straight into your resume in the editor!`;
        }
      }

      const botMessage: Message = {
        sender: "bot",
        text: botText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
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
        {/* Backdrop Glow */}
        <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-[#ffd8ea] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Header */}
          <div className="mb-12">
            <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              AI MATCH SCANNER & CHAT
            </span>
          </div>

          {/* Grid Layout: Left Scanner, Right Chat */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Match Scanner */}
            <div className="lg:col-span-6 space-y-6">
              <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-6 brutalist-card">
                <div className="border-b-2 border-black pb-3">
                  <h2 className="text-2xl font-black uppercase font-headline">⚡ MATCH SCANNER</h2>
                  <p className="text-xs font-semibold text-gray-500 uppercase">Audit your application readiness</p>
                </div>
                
                {/* File Upload Zone */}
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

                {/* Job Description Textarea */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-black uppercase tracking-wider text-gray-700">Paste Job Description:</label>
                  <textarea
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    placeholder="PASTE THE TARGET JOB DETAILS HERE..."
                    className="h-32 p-4 border-2 border-black font-body text-sm font-bold bg-[#fafafa] text-black focus:outline-none placeholder-gray-400 focus:border-[#ab1f82]"
                  />
                </div>

                {/* Scan Button */}
                <button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="w-full bg-[#fec700] hover:bg-[#ff69c9] text-black font-black uppercase tracking-widest font-headline py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer block text-center"
                >
                  {isScanning ? "⏳ SCANNING IN PROGRESS..." : "⚡ RUN MATCH SCANNER"}
                </button>
              </div>

              {/* Scan Results Card */}
              {scanResult && (
                <div className="border-4 border-black p-6 bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 brutalist-card">
                  <div className="flex justify-between items-center border-b-2 border-black pb-3">
                    <h3 className="text-xl font-black uppercase font-headline">Audit Results</h3>
                    <span className="bg-[#00B386] text-black text-[10px] font-mono px-2 py-0.5 border border-black uppercase font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)]">Done</span>
                  </div>
                  
                  {/* Score and Verdict */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full border-4 border-black bg-[#ab1f82] flex items-center justify-center text-white font-headline font-black text-xl shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                      {scanResult.score}%
                    </div>
                    <div>
                      <p className="font-black text-sm text-[#ab1f82] uppercase">{scanResult.verdict}</p>
                      <p className="text-[10px] font-bold text-gray-500 uppercase">Recruiter compatibility match</p>
                    </div>
                  </div>

                  {/* Missing Keywords */}
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

                  {/* Action Tips */}
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

            {/* Right Column: Riot Bot Assistant */}
            <div className="lg:col-span-6">
              <div className="border-4 border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col h-[650px] overflow-hidden brutalist-card">
                
                {/* Status Bar */}
                <div className="bg-black text-white px-6 py-3 border-b-4 border-black flex justify-between items-center font-headline font-black uppercase text-xs tracking-wider">
                  <span className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00B386] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00B386]"></span>
                    </span>
                    <span>Riot Bot Assistant</span>
                  </span>
                  <div className="flex items-center gap-3">
                    {riotScore !== null && (
                      <span className="bg-[#ab1f82] text-white px-2.5 py-0.5 border border-white font-mono text-[10px] font-black uppercase tracking-wider shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Riot Score: {riotScore}%
                      </span>
                    )}
                    <span className="text-[#fec700]">Status: Aggressive</span>
                  </div>
                </div>

                {/* Messages Display Area */}
                <div className="flex-1 p-6 overflow-y-auto bg-[#fafafa] space-y-4">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex flex-col max-w-[85%] ${
                        msg.sender === "user" ? "ml-auto items-end" : "mr-auto items-start"
                      }`}
                    >
                      <div
                        className={`p-4 border-2 border-black font-body text-sm font-bold shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] whitespace-pre-line leading-relaxed ${
                          msg.sender === "user"
                            ? "bg-[#ff69c9] text-black"
                            : "bg-[#fec700] text-black"
                        }`}
                      >
                        {msg.text}
                      </div>
                      <span className="text-[9px] font-mono text-gray-400 mt-1 uppercase font-bold">
                        {msg.sender === "user" ? "You" : "Riot Bot"} • {msg.timestamp}
                      </span>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex flex-col items-start mr-auto max-w-[85%]">
                      <div className="p-3 border-2 border-black bg-gray-100 text-gray-600 font-mono text-xs font-bold animate-pulse shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                        Riot Bot is screaming...
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                {/* Quick Prompts Panel */}
                <div className="px-6 py-3 border-t-2 border-black bg-white flex flex-wrap gap-2 items-center">
                  <span className="text-[10px] font-mono font-black uppercase text-gray-500 mr-2">Quick Commands:</span>
                  {quickPrompts.map((prompt) => (
                    <button
                      key={prompt.key}
                      onClick={() => handleSend(prompt.label)}
                      className="bg-white hover:bg-black hover:text-white border border-black px-2.5 py-1 font-headline font-black uppercase text-[10px] tracking-wider transition-colors cursor-pointer select-none"
                    >
                      {prompt.label}
                    </button>
                  ))}
                </div>

                {/* Message Input Area */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSend(inputText);
                  }}
                  className="border-t-4 border-black flex bg-white"
                >
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="TYPE YOUR DEMAND OR QUESTION..."
                    className="flex-1 px-6 py-4 font-body font-bold text-sm bg-white text-black placeholder-gray-400 focus:outline-none border-r-4 border-black"
                  />
                  <button
                    type="submit"
                    className="bg-[#ab1f82] text-white hover:bg-[#ff69c9] hover:text-black px-8 font-headline font-black uppercase tracking-wider text-sm border-0 cursor-pointer active:bg-black transition-colors"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
