"use client";

import Image from "next/image";
import { useState } from "react";
import MaterialIcon from "../../ui/Materialcon";
import { ResumeData } from "@/lib/resume/resumeData";
import CanvasWrapper from "../../EditorPage/CanvasWrapper";

interface ResumeCanvasProps {
  data: ResumeData;
}

export default function ResumeMarks({ data }: ResumeCanvasProps) {
  const [zoom, setZoom] = useState(100);

  const { personalInfo, Experience, Education, Skills, Summary, profilePhotoUrl, Projects } = data;

  return (
    <CanvasWrapper
      templateName="Mark Cafe"
      zoom={zoom}
      setZoom={setZoom}
      controlsColor="text-primary"
      canvasBgClass="bg-surface-container"
    >
      <div
        className="bg-[#f5f2e8] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col font-mo text-[#1b1b1b] print:shadow-none print:m-0 w-[210mm] min-h-[297mm] shrink-0">

        {/* Top Header Section */}
        <div className="flex justify-center items-center pt-6 pb-4 px-8 border-b-2 border-black">
          <div className="flex items-center gap-3">
            <MaterialIcon icon="auto_awesome" size={24} />
            <h1 className="text-5xl font-black font-headline tracking-widest uppercase">
              RESUME
            </h1>
            <MaterialIcon icon="auto_awesome" size={24} />
          </div>
        </div>

        {/* Sub-header banner */}
        <div className="relative flex border-b-2 border-black">
          <div className="flex py-2 px-10 font-black uppercase text-sm">
            {personalInfo.title}
          </div>

          <div className="flex-1 py-2 px-18 font-black uppercase text-sm">
            {personalInfo.title}
          </div>

          {/* Floating Logo */}
          <div className="absolute py-14 -end-22 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-40 h-20 bg-[#f59e0b] border-2 border-black rounded-[100%] flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] rotate-12">

            <span className="text-center text-4xl font-black font-headline text-[#138A45] tracking-tighter">
              🍉 <br />
              MARK
            </span>

            <span className="py-0 text-[10px] font-bold uppercase">
              Cafe 7 Dream
            </span>
          </div>
        </div>

        {/* Profile Section */}
        <div className="flex gap-8 px-8 py-6">
          {/* Left Column: Profile Image & Info Badge */}
          <div className="flex flex-col gap-6 shrink-0 select-none">
            {/* Profile Image */}
            <div className="relative">
              {/* Sparkle Icons around image */}
              <div className="absolute -top-6 -left-6 text-[#f59e0b] rotate-45 animate-pulse z-10">
                <MaterialIcon icon="auto_awesome" size={36} />
              </div>
              <div className="absolute -bottom-6 -right-6 text-[#10b981] -rotate-12 animate-pulse z-10">
                <MaterialIcon icon="auto_awesome" size={36} />
              </div>

              {/* Sticker Badges */}
              <div className="absolute -bottom-2 -left-2 bg-[#fec700] border-2 border-black px-2 py-0.5 text-[8px] font-black uppercase rotate-6 shadow-[2px_2px_0px_rgba(0,0,0,1)] tracking-widest z-25">
                VERIFIED
              </div>

              <div className="w-56 h-56 border-4 border-black bg-white rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-3deg] transition-transform hover:rotate-0 duration-300 overflow-hidden relative">
                {profilePhotoUrl ? (
                  <Image
                    src={profilePhotoUrl}
                    alt={personalInfo.fullName}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#10b981]/10">
                    <MaterialIcon icon="person" size={120} className="text-[#10b981]" />
                  </div>
                )}
              </div>
            </div>

            {/* Passport/Location Card */}
            <div className="w-56 bg-white border-3 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] text-[#1b1b1b] relative overflow-hidden rotate-[1.5deg] hover:rotate-0 transition-transform duration-200">
              {/* Decorative side barcode */}
              <div className="absolute top-0 right-0 h-full w-4 bg-[#1b1b1b] flex flex-col justify-around py-2 select-none opacity-20">
                <div className="h-0.5 w-full bg-white"></div>
                <div className="h-1.5 w-full bg-white"></div>
                <div className="h-1 w-full bg-white"></div>
                <div className="h-0.5 w-full bg-white"></div>
                <div className="h-1 w-full bg-white"></div>
              </div>

              <div className="space-y-3">
                {/* Location */}
                <div className="space-y-1">
                  <span className="text-[9px] font-black uppercase text-[#138A45] tracking-widest">
                    BASE STATION
                  </span>
                  <div className="flex items-center gap-1.5">
                    <MaterialIcon icon="location_on" size={14} className="text-black" />
                    <span className="text-xs font-black truncate max-w-[150px]">
                      {personalInfo.location || "Earth"}
                    </span>
                  </div>
                </div>

                {/* Social Channels */}
                <div className="space-y-2 pt-1 border-t-2 border-dashed border-black/30">
                  <span className="text-[9px] font-black uppercase text-[#138A45] tracking-widest">
                    CHANNELS
                  </span>
                  <div className="flex flex-col gap-1.5">
                    {/* LinkedIn */}
                    {personalInfo.linkedin ? (
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 hover:text-[#2563eb] text-black"
                      >
                        <MaterialIcon icon="link" size={12} />
                        <span className="text-[10px] font-bold underline truncate max-w-[160px]">
                          LinkedIn
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-black/45">
                        <MaterialIcon icon="link" size={12} />
                        <span className="text-[10px] font-medium italic">No LinkedIn</span>
                      </div>
                    )}

                    {/* GitHub */}
                    {personalInfo.github ? (
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 hover:text-emerald-600 text-black"
                      >
                        <MaterialIcon icon="code" size={12} />
                        <span className="text-[10px] font-bold underline truncate max-w-[160px]">
                          GitHub
                        </span>
                      </a>
                    ) : (
                      <div className="flex items-center gap-1.5 text-black/45">
                        <MaterialIcon icon="code" size={12} />
                        <span className="text-[10px] font-medium italic">No GitHub</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Bio & Contact */}
          <div className="grow space-y-4">
            <div className="inline-block bg-[#138A45] text-white border-3 border-black px-6 py-2 shadow-[6px_6px_0px_rgba(0,0,0,1)] -rotate-1 mb-2">
              <h2 className="text-4xl font-black font-headline tracking-widest uppercase">
                HI THERE!
              </h2>
            </div>

            <div className="bg-white border-3 border-black p-5 shadow-[6px_6px_0px_rgba(0,0,0,1)] relative overflow-hidden">
              {/* Tiny decorative design dots */}
              <div className="absolute top-2 right-2 flex gap-1 opacity-20">
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
              </div>
              <p className="text-xs leading-relaxed font-bold text-gray-800">
                {Summary || `My Name is ${personalInfo.fullName}, I have dedicated my career to fostering positive workplace environments, enhancing employee relations, and driving organizational success. My expertise spans various HR functions, including talent acquisition, employee development, performance management, and strategic planning.`}
              </p>
            </div>

            <div className="pt-4 space-y-3">
              <h3 className="font-black font-headline uppercase text-sm tracking-[0.2em] text-[#1b1b1b] flex items-center gap-2">
                <MaterialIcon icon="connect_without_contact" size={18} />
                FIND ME
              </h3>
              <div className="flex flex-wrap gap-4">
                {/* Email Pill */}
                <div className="flex items-center gap-2 bg-[#f59e0b] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg">
                  <div className="bg-white p-0.5 border border-black rounded-full shrink-0">
                    <MaterialIcon icon="alternate_email" size={14} weight={700} />
                  </div>
                  <span className="text-xs font-black truncate max-w-[150px]" title={personalInfo.email}>
                    {personalInfo.email}
                  </span>
                </div>

                {/* Username Pill */}
                <div className="flex items-center gap-2 bg-[#10b981] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg">
                  <div className="bg-white p-0.5 border border-black rounded-full shrink-0">
                    <MaterialIcon icon="account_circle" size={14} weight={700} />
                  </div>
                  <span className="text-xs font-black truncate max-w-[150px]">
                    @{personalInfo.fullName.toLowerCase().replace(/\s+/g, "")}
                  </span>
                </div>

                {/* Phone Pill */}
                <div className="flex items-center gap-2 bg-[#38bdf8] border-2 border-black px-4 py-2 shadow-[4px_4px_0px_rgba(0,0,0,1)] rounded-lg">
                  <div className="bg-white p-0.5 border border-black rounded-full shrink-0">
                    <MaterialIcon icon="call" size={14} weight={700} />
                  </div>
                  <span className="text-xs font-black">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="flex grow px-8 pb-8 gap-8">
          {/* Left Column: Experience, Education & Projects */}
          <div className="w-[55%] space-y-6">
            {/* Experience */}
            <div className="space-y-4">
              <div className="inline-block bg-[#10b981] border-2 border-black px-6 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-base text-white tracking-widest">EXPERIENCE</h3>
              </div>

              <div className="space-y-3">
                {Experience.map((exp, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-3.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] relative overflow-hidden space-y-1 break-inside-avoid">
                    {/* Decorative vertical badge line */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981]"></div>
                    <div className="pl-1.5">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[9px] font-black uppercase text-[#10b981] bg-[#10b981]/5 px-1.5 py-0.5 border border-[#10b981]/20 rounded">
                          {exp.dateRange}
                        </span>
                      </div>
                      <h4 className="font-black text-sm leading-tight text-[#1b1b1b]">{exp.jobTitle}</h4>
                      <p className="text-[11px] font-black text-gray-600 flex items-center gap-1">
                        <MaterialIcon icon="business" size={10} />
                        {exp.companyName}
                      </p>
                    </div>
                  </div>
                ))}
                {Experience.length === 0 && (
                  <div className="bg-white border-2 border-black p-3.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] relative overflow-hidden space-y-1 break-inside-avoid">
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#10b981]"></div>
                    <div className="pl-1.5">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[9px] font-black uppercase text-[#10b981] bg-[#10b981]/5 px-1.5 py-0.5 border border-[#10b981]/20 rounded">
                          2022 - Present
                        </span>
                      </div>
                      <h4 className="font-black text-sm leading-tight text-[#1b1b1b]">Lead Product Developer</h4>
                      <p className="text-[11px] font-black text-gray-600 flex items-center gap-1">
                        <MaterialIcon icon="business" size={10} />
                        Design Studio
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-4">
              <div className="inline-block bg-[#10b981] border-2 border-black px-6 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-base text-white tracking-widest">EDUCATION</h3>
              </div>

              <div className="space-y-3">
                {Education.map((edu, idx) => (
                  <div key={idx} className="bg-white border-2 border-black p-3.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] relative overflow-hidden space-y-1 break-inside-avoid">
                    {/* Decorative vertical badge line */}
                    <div className="absolute top-0 left-0 w-1.5 h-full bg-[#f59e0b]"></div>
                    <div className="pl-1.5">
                      <div className="flex justify-between items-center mb-0.5">
                        <span className="text-[9px] font-black uppercase text-[#f59e0b] bg-[#f59e0b]/5 px-1.5 py-0.5 border border-[#f59e0b]/20 rounded">
                          {edu.dateRange}
                        </span>
                      </div>
                      <h4 className="font-black text-sm leading-tight text-[#1b1b1b]">{edu.institution}</h4>
                      <p className="text-[11px] font-black text-gray-600 flex items-center gap-1">
                        <MaterialIcon icon="school" size={10} />
                        {edu.degree}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>


          </div>

          {/* Right Column: Skills & Tools */}
          <div className="w-[45%] space-y-6">
            {/* Skills */}
            <div className="space-y-4 break-inside-avoid">
              <div className="inline-block bg-[#10b981] border-2 border-black px-6 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-base text-white tracking-widest">SKILLS</h3>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-1">
                {Skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-2 border-black px-2.5 py-1 shadow-[2px_2px_0px_rgba(0,0,0,1)] text-[10px] font-black uppercase rotate-[1deg] hover:rotate-0 hover:bg-[#fed7aa] transition-all cursor-default"
                  >
                    {skill}
                  </div>
                ))}

              </div>
              {/* Projects */}
              {Projects && Projects.length > 0 && (
                <div className="space-y-4">
                  <div className="inline-block bg-[#10b981] border-2 border-black px-6 py-1.5 rounded-full shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]">
                    <h3 className="font-black font-headline uppercase text-base text-white tracking-widest">PROJECTS</h3>
                  </div>

                  <div className="space-y-3">
                    {Projects.map((proj, idx) => (
                      <div key={idx} className="bg-white border-2 border-black p-3.5 shadow-[3px_3px_0px_rgba(0,0,0,1)] relative overflow-hidden space-y-1 break-inside-avoid">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#38bdf8]"></div>
                        <div className="pl-1.5">
                          <div className="flex justify-between items-center mb-0.5">
                            <h4 className="font-black text-sm leading-tight text-[#1b1b1b]">{proj.name}</h4>
                            {proj.link && (
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-[9px] font-black underline hover:text-[#38bdf8] flex items-center gap-0.5"
                              >
                                <MaterialIcon icon="open_in_new" size={10} />
                                Link
                              </a>
                            )}
                          </div>
                          <p className="text-xs font-medium text-gray-700 leading-relaxed">{proj.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Decorations */}
        {/* Bottom Left Stamp */}
        <div className="absolute -bottom-8 -left-8 w-24 h-24 rounded-full border-4 border-black flex items-center justify-center p-2 rotate-12 bg-white">
          <div className="border-2 border-dashed border-black rounded-full w-full h-full flex flex-col items-center justify-center">
            <span className="text-[8px] font-black uppercase">Cafe 7</span>
            <span className="text-2xl font-black">7</span>
            <span className="text-[8px] font-black uppercase">Dream</span>
          </div>
        </div>
      </div>
    </CanvasWrapper>
  );
}
