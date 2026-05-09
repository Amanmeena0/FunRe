"use client";

import Image from "next/image";
import { useState } from "react";
import MaterialIcon from "../../ui/Materialcon";
import { ResumeData } from "@/lib/resume/resumeData";

interface ResumeCanvasProps {
  data: ResumeData;
}

export default function NaturalVibeTemplate({ data }: ResumeCanvasProps) {
  const [zoom, setZoom] = useState(100);
  const { personalInfo, Experience, Education, Skills, Summary, profilePhotoUrl, Projects } = data;

  return (
    <section className="hidden lg:flex flex-col grow bg-[#F0F2F5] relative overflow-hidden canvas-bg">
      {/* Canvas Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <div className="bg-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-xs uppercase flex gap-4">
          <span>Natural Vibe</span>
          <span className="text-primary">{zoom}% Zoom</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 10, 150))}
            aria-label="Zoom in"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors"
          >
            <MaterialIcon icon="zoom_in" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 10, 50))}
            aria-label="Zoom out"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low transition-colors"
          >
            <MaterialIcon icon="zoom_out" />
          </button>
        </div>
      </div>

      {/* A4 Preview Container */}
      <div className="grow flex items-center justify-center p-12 overflow-auto">
        <div
          className="bg-[#FFFFFF] relative overflow-hidden flex flex-col font-sans text-[#2D3748]"
          style={{
            width: "210mm",
            height: "297mm",
            transform: `scale(${zoom / 100})`,
            transformOrigin: "center center",
            flexShrink: 0,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
          }}
        >
          {/* Main Layout - Two Columns */}
          <div className="flex h-full">
            {/* Left Sidebar - Natural Green Theme */}
            <div className="w-[35%] bg-[#E6FFFA] h-full flex flex-col border-r border-[#B2F5EA]">
              {/* Profile Image Section */}
              <div className="p-10 flex flex-col items-center">
                <div className="w-40 h-40 rounded-full border-4 border-[#319795] overflow-hidden bg-[#CBD5E0] relative mb-6 shadow-md">
                  {profilePhotoUrl ? (
                    <Image 
                      src={profilePhotoUrl} 
                      alt={personalInfo.fullName}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                       <MaterialIcon icon="person" size={80} className="text-[#A0AEC0]" />
                    </div>
                  )}
                </div>
                
                <h1 className="text-2xl font-bold text-[#2C7A7B] text-center leading-tight mb-2">
                  {personalInfo.fullName}
                </h1>
                <p className="text-sm font-medium text-[#4FD1C5] uppercase tracking-wider text-center">
                  {personalInfo.title}
                </p>
              </div>

              {/* Contact Information */}
              <div className="px-8 py-6 space-y-4">
                <h2 className="text-xs font-black text-[#285E61] uppercase tracking-[0.2em] border-b-2 border-[#81E6D9] pb-2 mb-4">
                  Contact
                </h2>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MaterialIcon icon="mail" size={16} className="text-[#319795] mt-0.5" />
                    <span className="text-xs font-medium break-all">{personalInfo.email}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MaterialIcon icon="call" size={16} className="text-[#319795] mt-0.5" />
                    <span className="text-xs font-medium">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MaterialIcon icon="location_on" size={16} className="text-[#319795] mt-0.5" />
                    <span className="text-xs font-medium">{personalInfo.location}</span>
                  </div>
                  {personalInfo.website && (
                    <div className="flex items-start gap-3">
                      <MaterialIcon icon="language" size={16} className="text-[#319795] mt-0.5" />
                      <span className="text-xs font-medium break-all">{personalInfo.website.replace(/^https?:\/\//, '')}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills Section */}
              <div className="px-8 py-6 grow">
                <h2 className="text-xs font-black text-[#285E61] uppercase tracking-[0.2em] border-b-2 border-[#81E6D9] pb-2 mb-4">
                  Expertise
                </h2>
                <div className="flex flex-wrap gap-2">
                  {Skills.map((skill, idx) => (
                    <span key={idx} className="bg-[#B2F5EA] text-[#234E52] text-[10px] font-bold px-2 py-1 rounded-md">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Decorative Leaf Pattern Area */}
              <div className="p-8 opacity-10 flex justify-center">
                 <MaterialIcon icon="eco" size={64} className="text-[#2C7A7B]" />
              </div>
            </div>

            {/* Right Main Content */}
            <div className="w-[65%] p-12 flex flex-col gap-10">
              {/* Professional Summary */}
              <section className="space-y-4">
                <div className="flex items-center gap-2">
                   <MaterialIcon icon="person_outline" size={20} className="text-[#319795]" />
                   <h2 className="text-lg font-black text-[#2D3748] uppercase tracking-widest">About Me</h2>
                </div>
                <p className="text-sm leading-relaxed text-[#4A5568] font-medium border-l-4 border-[#81E6D9] pl-6 italic">
                  {Summary}
                </p>
              </section>

              {/* Experience */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                   <MaterialIcon icon="work_outline" size={20} className="text-[#319795]" />
                   <h2 className="text-lg font-black text-[#2D3748] uppercase tracking-widest">Experience</h2>
                </div>
                <div className="space-y-8">
                  {Experience.map((exp, idx) => (
                    <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:bg-[#319795] before:rounded-full">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-[#2D3748] text-base">{exp.jobTitle}</h3>
                        <span className="text-[10px] font-black text-[#4FD1C5] bg-[#E6FFFA] px-2 py-0.5 rounded uppercase tracking-tighter">
                          {exp.dateRange}
                        </span>
                      </div>
                      <p className="text-sm font-bold text-[#319795] mb-2">{exp.companyName}</p>
                      <p className="text-xs text-[#718096] leading-relaxed">
                        Leading teams and developing sustainable solutions with a focus on organic growth and clean architecture.
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section className="space-y-6">
                <div className="flex items-center gap-2">
                   <MaterialIcon icon="school" size={20} className="text-[#319795]" />
                   <h2 className="text-lg font-black text-[#2D3748] uppercase tracking-widest">Education</h2>
                </div>
                <div className="space-y-6">
                  {Education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 before:content-[''] before:absolute before:left-0 before:top-1.5 before:w-2 before:h-2 before:border-2 before:border-[#319795] before:rounded-full">
                      <div className="flex justify-between items-baseline mb-1">
                        <h3 className="font-bold text-[#2D3748] text-sm">{edu.institution}</h3>
                        <span className="text-[10px] font-bold text-[#A0AEC0]">{edu.dateRange}</span>
                      </div>
                      <p className="text-xs font-medium text-[#4A5568]">{edu.degree}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              {Projects && Projects.length > 0 && (
                <section className="space-y-6">
                  <div className="flex items-center gap-2">
                    <MaterialIcon icon="palette" size={20} className="text-[#319795]" />
                    <h2 className="text-lg font-black text-[#2D3748] uppercase tracking-widest">Projects</h2>
                  </div>
                  <div className="grid grid-cols-1 gap-4">
                    {Projects.slice(0, 2).map((project, idx) => (
                      <div key={idx} className="bg-[#F7FAFC] p-4 border border-[#EDF2F7] rounded-lg">
                        <h4 className="font-bold text-sm text-[#2D3748] mb-1">{project.name}</h4>
                        <p className="text-xs text-[#718096] line-clamp-2">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>

          {/* Background watermark icon */}
          <div className="absolute -bottom-20 -right-20 opacity-[0.03] pointer-events-none">
             <MaterialIcon icon="eco" size={400} />
          </div>
        </div>
      </div>
    </section>
  );
}
