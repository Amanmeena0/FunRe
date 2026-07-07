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

  const { personalInfo, Experience, Education, Skills, Summary, profilePhotoUrl } = data;

  return (
    <CanvasWrapper
      templateName="Mark Cafe"
      zoom={zoom}
      setZoom={setZoom}
      controlsColor="text-primary"
      canvasBgClass="bg-surface-container"
    >
      <div
        className="bg-[#f5f2e8] border-2 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative overflow-hidden flex flex-col font-mono text-[#1b1b1b] print:shadow-none print:m-0 w-[210mm] h-[297mm] shrink-0">

        {/* Top Header Section */}
        <div className="flex justify-center items-center pt-10 pb-6 px-12 border-b-2 border-black">
          <div className="flex items-center gap-4">
            <MaterialIcon icon="auto_awesome" size={32} />
            <h1 className="text-6xl font-black font-headline tracking-widest uppercase">
              RESUME
            </h1>
            <MaterialIcon icon="auto_awesome" size={32} />
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
        <div className="flex gap-12 p-12">
          {/* Left: Profile Image */}
          <div className="relative shrink-0">
            {/* Sparkle Icons around image */}
            <div className="absolute -top-4 -left-4 text-black rotate-45">
              <MaterialIcon icon="auto_awesome" size={32} />
            </div>
            <div className="absolute -bottom-4 -right-4 text-black -rotate-12">
              <MaterialIcon icon="auto_awesome" size={32} />
            </div>

            <div className="w-56 h-56 rounded-full border-8 border-[#138A45] overflow-hidden bg-[#e5e7eb] relative">
              {profilePhotoUrl ? (
                <Image
                  src={profilePhotoUrl}
                  alt={personalInfo.fullName}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-200">
                  <MaterialIcon icon="person" size={120} className="text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Right: Bio & Contact */}
          <div className="grow space-y-4">
            <h2 className="text-5xl font-black font-headline">Hi There</h2>
            <p className="text-sm leading-relaxed font-medium">
              {Summary || `My Name is ${personalInfo.fullName}, I have dedicated my career to fostering positive workplace environments, enhancing employee relations, and driving organizational success. My expertise spans various HR functions, including talent acquisition, employee development, performance management, and strategic planning.`}
            </p>

            <div className="pt-4 space-y-3">
              <h3 className="font-black font-headline uppercase text-lg tracking-widest">FIND ME</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-[#f59e0b] p-1 border-2 border-black rounded-full">
                    <MaterialIcon icon="alternate_email" size={16} weight={700} />
                  </div>
                  <span className="text-sm font-bold">{personalInfo.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#f59e0b] p-1 border-2 border-black rounded-full">
                    <MaterialIcon icon="account_circle" size={16} weight={700} />
                  </div>
                  <span className="text-sm font-bold">@{personalInfo.fullName.toLowerCase().replace(" ", "")}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-[#f59e0b] p-1 border-2 border-black rounded-full">
                    <MaterialIcon icon="call" size={16} weight={700} />
                  </div>
                  <span className="text-sm font-bold">{personalInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Column Section */}
        <div className="flex grow px-12 pb-12 gap-12">
          {/* Left Column: Experience & Education */}
          <div className="w-[55%] space-y-10">
            {/* Experience */}
            <div className="space-y-6">
              <div className="inline-block bg-[#10b981] border-2 border-black px-8 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-xl text-white tracking-widest">EXPERIENCE</h3>
              </div>

              <div className="space-y-6">
                {Experience.map((exp, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs italic font-medium opacity-60">{exp.dateRange}</p>
                    <h4 className="font-black text-lg leading-tight">{exp.jobTitle}</h4>
                    <p className="text-sm font-bold">{exp.companyName}</p>
                    <p className="text-xs opacity-70">Tangerang Selatan - Full Time</p>
                  </div>
                ))}
                {Experience.length === 0 && (
                  <div className="space-y-1">
                    <p className="text-xs italic font-medium opacity-60">May 2022 - present</p>
                    <h4 className="font-black text-lg leading-tight">Assistant Manager</h4>
                    <p className="text-sm font-bold">PT. Sinar Jaya</p>
                    <p className="text-xs opacity-70">Tangerang Selatan - Full Time</p>
                  </div>
                )}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-6">
              <div className="inline-block bg-[#10b981] border-2 border-black px-8 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-xl text-white tracking-widest">EDUCATION</h3>
              </div>

              <div className="space-y-4">
                {Education.map((edu, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xs italic font-medium opacity-60">{edu.dateRange}</p>
                    <h4 className="font-black text-lg leading-tight">{edu.institution}</h4>
                    <p className="text-sm font-bold">{edu.degree}</p>
                    <p className="text-xs opacity-70">GPA 3.7/4.0</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Personal & Technical Skills */}
          <div className="w-[45%] space-y-10">
            {/* Personal Skills */}
            <div className="space-y-6">
              <div className="inline-block bg-[#10b981] border-2 border-black px-8 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-xl text-white tracking-widest">PERSONAL SKILLS</h3>
              </div>

              <ul className="space-y-2 list-disc pl-5 font-bold">
                <li>Negotiation</li>
                <li>Digital Marketing</li>
                <li>Market Analysis</li>
                <li>SEO Optimization</li>
                <li>Team Leading</li>
              </ul>
            </div>

            {/* Technical Skills */}
            <div className="space-y-6">
              <div className="inline-block bg-[#10b981] border-2 border-black px-8 py-2 rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <h3 className="font-black font-headline uppercase text-xl text-white tracking-widest">TECHNICAL SKILLS</h3>
              </div>

              {/* Grid of tool icons */}
              <div className="grid grid-cols-4 gap-3 pt-2">
                <div className="bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <Image src="https://www.vectorlogo.zone/logos/canva/canva-icon.svg" width={32} height={32} alt="Canva" />
                </div>
                <div className="bg-[#00005b] border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <span className="text-white font-black text-xl">Pr</span>
                </div>
                <div className="bg-[#001e36] border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <span className="text-[#31a8ff] font-black text-xl">Ps</span>
                </div>
                <div className="bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <MaterialIcon icon="unfold_more" />
                </div>
                <div className="bg-white border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <MaterialIcon icon="table_chart" className="text-green-600" />
                </div>
                <div className="bg-[#2d002d] border-2 border-black rounded-lg p-2 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] aspect-square flex items-center justify-center">
                  <span className="text-[#ff33ff] font-black text-xl">Id</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorations */}
        {/* Bottom Left Stamp */}
        <div className="absolute bottom-8 left-8 w-24 h-24 rounded-full border-4 border-black flex items-center justify-center p-2 rotate-12 bg-white">
          <div className="border-2 border-dashed border-black rounded-full w-full h-full flex flex-col items-center justify-center">
            <span className="text-[8px] font-black uppercase">Cafe 7</span>
            <span className="text-2xl font-black">7</span>
            <span className="text-[8px] font-black uppercase">Dream</span>
          </div>
        </div>

        {/* Bottom Right Blob */}
        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#1b1b1b] rounded-full" />
      </div>
    </CanvasWrapper>
  );
}
