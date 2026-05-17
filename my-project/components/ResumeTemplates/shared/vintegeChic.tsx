"use client";

import Image from "next/image";
import { useState } from "react";
import MaterialIcon from "../../ui/Materialcon";
import { ResumeData } from "@/lib/resume/resumeData";
import CanvasWrapper from "../../EditorPage/CanvasWrapper";

interface ResumeCanvasProps {
  data: ResumeData;
}

export default function VintageChicTemplate({ data }: ResumeCanvasProps) {
  const [zoom, setZoom] = useState(100);
  const { personalInfo, Experience, Education, Skills, Summary, profilePhotoUrl } = data;

  return (
    <CanvasWrapper 
      templateName="Vintage Chic" 
      zoom={zoom} 
      setZoom={setZoom}
      controlsColor="text-black"
      controlsBg="bg-[#F5EEDC]"
      shadowColor="#000"
      canvasBgClass="bg-[#e5e5e5]"
    >
      <div
        className="font-sans relative overflow-hidden flex flex-col p-0 print:shadow-none print:m-0"
        style={{
          width: "210mm",
          height: "297mm",
          flexShrink: 0,
        } as React.CSSProperties}
      >
        <style dangerouslySetInnerHTML={{
          __html: `
          @import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@400;500;600;700&display=swap');
          
          .vintage-chic-wrapper {
            font-family: 'Inter', sans-serif;
            background-color: #F5EEDC;
            border: 4px solid #000;
            position: relative;
            box-shadow: 10px 10px 0px #000;
            height: 100%;
            display: flex;
            flex-direction: column;
          }
          .heading-font {
            font-family: 'Archivo Black', sans-serif;
          }
          .texture-bg {
              position: absolute;
              top: 0; left: 0; right: 0; bottom: 0;
              background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
              pointer-events: none;
              z-index: 0;
          }
          .content-wrapper {
              position: relative;
              z-index: 1;
              display: flex;
              flex-direction: column;
              height: 100%;
          }
          .section-badge {
              background-color: #7A1A1A;
              color: white;
              font-family: 'Archivo Black', sans-serif;
              padding: 0.5rem 1.5rem;
              border-radius: 9999px;
              border: 2px solid #000;
              box-shadow: 4px 4px 0px #000;
              display: inline-block;
              text-transform: uppercase;
              letter-spacing: 0.05em;
          }
          .polaroid {
              background: white;
              padding: 1rem 1rem 3rem 1rem;
              border: 2px solid #000;
              box-shadow: 6px 6px 0px #000;
              position: relative;
          }
          .ticker {
              background-color: #000;
              color: white;
              font-family: 'Archivo Black', sans-serif;
              font-weight: 900;
              font-size: 0.875rem;
              overflow: hidden;
              white-space: nowrap;
              padding: 0.25rem 0;
              display: flex;
              gap: 2rem;
              border-top: 2px solid #000;
              border-bottom: 2px solid #000;
          }
          .ticker span {
              text-transform: uppercase;
              letter-spacing: 0.1em;
          }
          .progress-bar-container {
              border: 3px solid #000;
              height: 1.5rem;
              width: 100%;
              background-color: #111;
          }
          .progress-bar-fill {
              height: 100%;
              background-color: #00E676;
              border-right: 3px solid #000;
          }
          `
        }} />

        <div className="vintage-chic-wrapper">
          <div className="texture-bg"></div>
          <div className="content-wrapper">
            {/* Header Section */}
            <header className="bg-[#7A1A1A] border-b-4 border-black py-4 shrink-0">
              <h1 className="heading-font text-5xl md:text-7xl text-black text-center uppercase tracking-wider">Portfolio</h1>
            </header>
            
            <div className="ticker shrink-0">
              <span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span>
            </div>

            {/* Hero Section */}
            <section className="p-6 md:p-10 relative shrink-0">
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border-2 border-black bg-[#8B2626] flex items-center justify-center shadow-[2px_2px_0px_#000] overflow-hidden">
                <svg className="w-12 h-12 text-[#F4EFE6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                </svg>
              </div>

              <div className="flex flex-col md:flex-row gap-8 items-start mt-4">
                {/* Profile Picture */}
                <div className="w-full md:w-1/3 relative shrink-0 z-10">
                  <div className="polaroid">
                    <div className="relative w-full aspect-square border border-gray-200">
                       {profilePhotoUrl ? (
                        <Image alt={personalInfo.fullName} className="object-cover" src={profilePhotoUrl} fill sizes="(max-width: 768px) 100vw, 33vw" />
                       ) : (
                         <div className="w-full h-full bg-gray-200 flex items-center justify-center">No Image</div>
                       )}
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-5 bg-[#7A1A1A] text-white px-4 py-1.5 rounded-lg border-2 border-black font-serif font-bold shadow-[3px_3px_0px_#000] rotate-[-5deg]">
                    Lets Do It
                  </div>
                  <div className="absolute -bottom-8 -left-4 w-14 h-14 bg-yellow-400 rounded-full border-2 border-black shadow-[2px_2px_0px_#000] flex items-center justify-center rotate-[-15deg]">
                    <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line>
                    </svg>
                  </div>
                </div>

                {/* Bio & Contact */}
                <div className="w-full md:w-2/3">
                  <h2 className="heading-font text-5xl md:text-6xl font-black mb-4 text-black uppercase">{personalInfo.fullName}</h2>
                  <p className="text-black leading-relaxed font-medium mb-8 text-justify line-clamp-4">
                    {Summary || "Passionate professional dedicated to fostering positive environments and driving organizational success. Expertise in various functions, including strategic planning and performance management."}
                  </p>
                  
                  {/* Contact Links */}
                  <div className="flex flex-wrap gap-6 justify-between mt-8 text-sm font-bold text-black text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs">Phone</span>
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-yellow-200 flex items-center justify-center mb-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                      <span>{personalInfo.phone}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs">Location</span>
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-pink-200 flex items-center justify-center mb-1">
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                        </svg>
                      </div>
                      <span className="truncate max-w-25">{personalInfo.location || "City"}</span>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-xs">E-mail</span>
                      <div className="w-10 h-10 rounded-full border-2 border-black bg-green-200 flex items-center justify-center mb-1">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                      </div>
                      <span className="truncate max-w-37.5">{personalInfo.email}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 p-8 md:p-12 border-t border-black grow">
              
              {/* Left Column */}
              <div className="flex flex-col gap-16">
                
                {/* Experience Section */}
                <section>
                  <div className="mb-6">
                    <span className="section-badge text-xl">Experience</span>
                  </div>
                  <div className="flex flex-col gap-6">
                    {Experience.slice(0,3).map((exp, idx) => (
                      <div key={idx}>
                        <p className="italic text-sm mb-1">{exp.dateRange}</p>
                        <h3 className="heading-font text-xl text-black">{exp.jobTitle}</h3>
                        <p className="font-bold text-black">{exp.companyName}</p>
                        <p className="text-sm">Full Time</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Education Section */}
                <section>
                  <div className="mb-6">
                    <span className="section-badge text-xl">Education</span>
                  </div>
                  <div className="flex flex-col gap-4">
                     {Education.slice(0,2).map((edu, idx) => (
                      <div key={idx}>
                        <p className="italic text-sm mb-1">{edu.dateRange}</p>
                        <h3 className="heading-font text-xl text-black">{edu.institution}</h3>
                        <p className="font-bold text-black">{edu.degree}</p>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              {/* Right Column */}
              <div className="flex flex-col gap-10">
                
                {/* Skills Section */}
                <section>
                  <div className="mb-6 text-center md:text-left">
                    <span className="section-badge text-xl">Skills</span>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-black font-medium">
                    <ul className="list-disc list-inside">
                      {Skills.slice(0, 5).map((skill, i) => (
                        <li key={i} className="truncate">{skill}</li>
                      ))}
                    </ul>
                    {Skills.length > 5 && (
                      <ul className="list-disc list-inside">
                        {Skills.slice(5, 10).map((skill, i) => (
                          <li key={i} className="truncate">{skill}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </section>

                {/* Tools Section (Static as per design) */}
                <section>
                  <div className="mb-6 text-center md:text-left">
                    <span className="section-badge text-xl">Tools</span>
                  </div>
                  <div className="flex gap-4 items-center justify-center md:justify-start">
                    <div className="w-14 h-14 bg-[#3B0000] rounded-2xl border-2 border-black flex items-center justify-center font-bold text-2xl text-[#FF9A00] shadow-[2px_2px_0px_#000]">Ai</div>
                    <div className="w-14 h-14 bg-[#001D3D] rounded-2xl border-2 border-black flex items-center justify-center font-bold text-2xl text-[#31A8FF] shadow-[2px_2px_0px_#000]">Ps</div>
                    <div className="w-14 h-14 bg-[#2E004F] rounded-2xl border-2 border-black flex items-center justify-center font-bold text-2xl text-[#E2A6FF] shadow-[2px_2px_0px_#000]">Pr</div>
                    <div className="w-14 h-14 bg-white rounded-2xl border-2 border-black flex items-center justify-center shadow-[2px_2px_0px_#000]">
                      <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 2L2 12l10 10 10-10L12 2z"></path><path d="M8 12l4-4 4 4-4 4-4-4z"></path></svg>
                    </div>
                  </div>
                </section>

                {/* Language Section (Static representation) */}
                <section>
                  <div className="mb-6 text-center md:text-left">
                    <span className="section-badge text-xl">Language</span>
                  </div>
                  <div className="flex flex-col gap-4 font-bold text-black text-lg">
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span>Bahasa</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '90%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span>English</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '75%' }}></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-[100px_1fr] items-center gap-4">
                      <span>Mandarin</span>
                      <div className="progress-bar-container">
                        <div className="progress-bar-fill" style={{ width: '40%' }}></div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* Footer Section */}
            <div className="ticker mt-auto shrink-0">
              <span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span><span>Portfolio</span>
            </div>
            
          </div>
        </div>
      </div>
    </CanvasWrapper>
  );
}
