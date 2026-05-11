"use client";

import Image from "next/image";
import { useState } from "react";
import MaterialIcon from "../../ui/Materialcon";
import { ResumeData } from "@/lib/resume/resumeData";

interface ResumeCanvasProps {
  data: ResumeData;
}

export default function VintageChicTemplate({ data }: ResumeCanvasProps) {
  const [zoom, setZoom] = useState(100);
  const { personalInfo, Experience, Education, Skills, Summary, profilePhotoUrl } = data;

  return (
    <section className="hidden lg:flex flex-col grow bg-[#D2B48C] relative overflow-hidden canvas-bg print:flex print:bg-white print:overflow-visible print:p-0">
      {/* Canvas Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20 print:hidden">
        <div className="bg-[#FFF8DC] px-4 py-2 border-2 border-[#5D4037] shadow-[4px_4px_0px_0px_rgba(93,64,55,1)] font-serif font-bold text-xs uppercase flex gap-4 text-[#5D4037]">
          <span>Vintage Chic</span>
          <span className="text-[#8B4513]">{zoom}% Zoom</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 10, 150))}
            aria-label="Zoom in"
            className="p-2 bg-[#FFF8DC] border-2 border-[#5D4037] hover:bg-[#FAEBD7] transition-colors"
          >
            <MaterialIcon icon="zoom_in" className="text-[#5D4037]" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 10, 50))}
            aria-label="Zoom out"
            className="p-2 bg-[#FFF8DC] border-2 border-[#5D4037] hover:bg-[#FAEBD7] transition-colors"
          >
            <MaterialIcon icon="zoom_out" className="text-[#5D4037]" />
          </button>
        </div>
      </div>

      {/* A4 Preview Container */}
      <div className="grow flex items-center justify-center p-12 overflow-auto print:p-0 print:block">
        <div
          className="bg-[#FEF9E7] relative overflow-hidden flex flex-col font-serif text-[#3E2723] p-16 print:shadow-none print:m-0"
          style={{
            width: "210mm",
            height: "297mm",
            transform: `scale(var(--zoom))`,
            transformOrigin: "center center",
            flexShrink: 0,
            border: "20px solid #FFF8DC",
            boxShadow: "inset 0 0 100px rgba(139, 69, 19, 0.1), 12px 12px 0px 0px rgba(62, 39, 35, 1)",
            "--zoom": zoom / 100
          } as React.CSSProperties}
        >
          {/* Decorative Corner Ornaments (Simplified) */}
          <div className="absolute top-4 left-4 text-[#A1887F] opacity-40"><MaterialIcon icon="filter_vintage" size={40} /></div>
          <div className="absolute top-4 right-4 text-[#A1887F] opacity-40 rotate-90"><MaterialIcon icon="filter_vintage" size={40} /></div>
          <div className="absolute bottom-4 left-4 text-[#A1887F] opacity-40 -rotate-90"><MaterialIcon icon="filter_vintage" size={40} /></div>
          <div className="absolute bottom-4 right-4 text-[#A1887F] opacity-40 rotate-180"><MaterialIcon icon="filter_vintage" size={40} /></div>

          {/* Header Section */}
          <header className="flex flex-col items-center mb-12 border-b-2 border-[#5D4037] pb-10">
            <h1 className="text-6xl font-black uppercase tracking-[0.15em] mb-4 text-[#3E2723] text-center">
              {personalInfo.fullName}
            </h1>
            <div className="w-24 h-0.5 bg-[#8B4513] mb-4"></div>
            <p className="text-xl italic font-medium text-[#795548] tracking-widest uppercase">
              {personalInfo.title}
            </p>
          </header>

          <div className="grid grid-cols-12 gap-12 h-full">
            {/* Main Column */}
            <div className="col-span-8 space-y-12">
               {/* Summary/About */}
               <section className="space-y-4">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-[#5D4037] flex items-center gap-3">
                    <span className="w-8 h-px bg-[#A1887F]"></span>
                    Our Story
                    <span className="w-8 h-px bg-[#A1887F]"></span>
                  </h2>
                  <p className="text-sm leading-relaxed text-[#4E342E] indent-8 first-letter:text-4xl first-letter:font-bold first-letter:mr-1 first-letter:float-left first-letter:mt-1">
                    {Summary}
                  </p>
               </section>

               {/* Experience */}
               <section className="space-y-8">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-[#5D4037] flex items-center gap-3">
                    <span className="w-8 h-px bg-[#A1887F]"></span>
                    Professional Journey
                  </h2>
                  <div className="space-y-8">
                    {Experience.map((exp, idx) => (
                      <div key={idx} className="group">
                        <div className="flex justify-between items-baseline mb-2">
                           <h3 className="text-lg font-bold text-[#3E2723] italic underline decoration-[#A1887F] underline-offset-4">{exp.jobTitle}</h3>
                           <span className="text-xs font-bold text-[#8B4513] uppercase tracking-tighter">{exp.dateRange}</span>
                        </div>
                        <p className="text-sm font-black text-[#5D4037] mb-2 uppercase">{exp.companyName}</p>
                        <p className="text-xs text-[#5D4037] leading-relaxed opacity-80">
                          Crafting elegance and delivering excellence with a traditional touch and modern precision.
                        </p>
                      </div>
                    ))}
                  </div>
               </section>

               {/* Education */}
               <section className="space-y-6">
                  <h2 className="text-2xl font-bold uppercase tracking-wider text-[#5D4037] flex items-center gap-3">
                    <span className="w-8 h-px bg-[#A1887F]"></span>
                    Foundations
                  </h2>
                  <div className="grid grid-cols-2 gap-8">
                    {Education.map((edu, idx) => (
                      <div key={idx} className="border-l border-[#D7CCC8] pl-4">
                         <h4 className="font-bold text-sm text-[#3E2723] mb-1">{edu.institution}</h4>
                         <p className="text-xs italic text-[#795548]">{edu.degree}</p>
                         <p className="text-[10px] font-bold text-[#A1887F] mt-1">{edu.dateRange}</p>
                      </div>
                    ))}
                  </div>
               </section>
            </div>

            {/* Side Column */}
            <div className="col-span-4 flex flex-col gap-10">
               {/* Profile Image (Smaller and Framed) */}
               <div className="flex justify-center">
                  <div className="p-2 border-2 border-[#5D4037] bg-white shadow-lg rotate-3 group hover:rotate-0 transition-transform duration-500">
                    <div className="w-40 h-52 bg-[#EFEBE9] relative overflow-hidden grayscale">
                       {profilePhotoUrl ? (
                          <Image 
                            src={profilePhotoUrl} 
                            alt={personalInfo.fullName}
                            fill
                            sizes="160px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <MaterialIcon icon="history_edu" size={60} className="text-[#BCAAA4]" />
                          </div>
                        )}
                    </div>
                  </div>
               </div>

               {/* Contact Box */}
               <div className="bg-[#FFF8DC] border border-[#D7CCC8] p-6 space-y-4 shadow-inner">
                  <h3 className="text-sm font-black text-[#5D4037] uppercase tracking-widest text-center border-b border-[#D7CCC8] pb-2">Reach Out</h3>
                  <div className="space-y-3 text-[10px] font-bold uppercase tracking-tighter">
                    <div className="flex items-center gap-2">
                      <MaterialIcon icon="mail" size={12} className="text-[#8B4513]" />
                      <span className="break-all">{personalInfo.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MaterialIcon icon="call" size={12} className="text-[#8B4513]" />
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MaterialIcon icon="location_on" size={12} className="text-[#8B4513]" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
               </div>

               {/* Skills (Calligraphy Style tags) */}
               <div className="space-y-4">
                  <h3 className="text-sm font-black text-[#5D4037] uppercase tracking-widest text-center border-b border-[#D7CCC8] pb-2">Virtuosity</h3>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {Skills.map((skill, idx) => (
                      <span key={idx} className="text-xs italic text-[#3E2723] border-b border-[#A1887F] px-1">
                        {skill}
                      </span>
                    ))}
                  </div>
               </div>

               {/* Quote/Sign-off */}
               <div className="mt-auto text-center">
                  <MaterialIcon icon="history_edu" size={32} className="text-[#A1887F] opacity-30 mb-2" />
                  <p className="text-[10px] italic font-medium text-[#795548]">Legacy in every stroke.</p>
               </div>
            </div>
          </div>

          {/* Texture Overlay (Simulated) */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/parchment.png')]"></div>
        </div>
      </div>
    </section>
  );
}
