"use client";

import Image from "next/image";
import { useState } from "react";
import MaterialIcon from "../ui/Materialcon";
import { ResumeData } from "@/lib/resumeTypes";

interface ResumeCanvasProps {
  data: ResumeData;
}

const STICKERS = [
  { icon: "sentiment_very_satisfied", label: "Happy face sticker" },
  { icon: "coffee", label: "Coffee sticker" },
  { icon: "local_fire_department", label: "Fire sticker" },
  { icon: "history_edu", label: "Education sticker" },
  { icon: "auto_awesome", label: "Sparkle sticker" },
];

export default function ResumeCanvas({ data }: ResumeCanvasProps) {
  const [zoom, setZoom] = useState(100);

  const achievements = data.achievements
    .split("\n")
    .filter(Boolean)
    .map((line) => line.trim());

  return (
    <section className="hidden lg:flex flex-col grow bg-surface-container relative overflow-hidden canvas-bg">
      {/* Canvas Controls */}
      <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-20">
        <div className="bg-white px-4 py-2 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-xs uppercase flex gap-4">
          <span>A4 Vertical</span>
          <span className="text-primary">{zoom}% Zoom</span>
          <span className="text-secondary">Template: &quot;The Rebel&quot;</span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setZoom((z) => Math.min(z + 10, 150))}
            aria-label="Zoom in"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low"
          >
            <MaterialIcon icon="zoom_in" />
          </button>
          <button
            onClick={() => setZoom((z) => Math.max(z - 10, 50))}
            aria-label="Zoom out"
            className="p-2 bg-white border-2 border-black hover:bg-surface-container-low"
          >
            <MaterialIcon icon="zoom_out" />
          </button>
        </div>
      </div>

      {/* A4 Preview */}
      <div className="grow flex items-center justify-center p-12">
        <div
          className="bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] relative p-12 overflow-hidden flex flex-col"
          style={{
            width: 595,
            height: 842,
            transform: `scale(${zoom / 100})`,
            transformOrigin: "center center",
          }}
        >
          {/* Resume Content */}
          <div className="grow space-y-8">
            <div>
              <h1 className="text-5xl font-black font-headline uppercase leading-none mb-2">
                {data.name.split(" ")[0]} <br />
                {data.name.split(" ").slice(1).join(" ")}
              </h1>
              <div className="w-24 h-4 bg-primary" />
            </div>
            <div className="space-y-4">
              <h2 className="font-headline font-black uppercase text-xl border-b-2 border-black pb-1">
                Experience
              </h2>
              <div>
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-lg">
                    {data.companyName || "Company Name"}
                  </span>
                  <span className="text-xs font-headline font-bold">
                    {data.dateRange}
                  </span>
                </div>
                <p className="text-sm font-bold text-primary italic">
                  {data.jobTitle || "Your Title"}
                </p>
                <ul className="mt-2 text-xs space-y-1 font-medium">
                  {achievements.length > 0 ? (
                    achievements.map((line, i) => (
                      <li key={i}>• {line}</li>
                    ))
                  ) : (
                    <>
                      <li>
                        • Single-handedly prevented corporate burnout with
                        mandatory desk-dancing.
                      </li>
                      <li>
                        • Optimized workflow by 40% using strictly vibes-based
                        management.
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Coffee Stain */}
          <div className="absolute -bottom-4 -right-4 opacity-30 rotate-12">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBYqm40dZxp4jmufr6urFRMMmWpIXDIE5Ezk2KzmzY_t3-cGSCUE13PowiJtH7Mu0GYDGHShFwAiDl4llJydtFHL2AdepzScB23huTINvNXL-HQpPwRl1fbwJ0tuPTPm83LUd1r3PKHSLS6q5NWMSgX7U-D9s8jLe6KIx2l9A4kHHt_tA6uJbXXK93XOOcMWtGRr7DAKTgSfY829a-Zl9hLnBc_bdHWREybUQF14TGjgswY6DF2t0_HeyFxdN5DGK3mQUX18BGWY2Y"
              alt="Coffee stain decoration"
              width={192}
              height={192}
              className="mix-blend-multiply"
            />
          </div>

          {/* Hand-drawn Arrow */}
          <div className="absolute top-1/2 left-10 -rotate-12">
            <MaterialIcon
              icon="subdirectory_arrow_right"
              className="text-secondary"
              size={96}
              weight={700}
            />
            <span className="absolute top-16 left-2 font-headline font-black text-secondary bg-black text-white px-2 uppercase text-[10px] whitespace-nowrap">
              Hire this human!
            </span>
          </div>

          {/* Ribbon Sticker */}
          <div className="absolute top-12 right-12 rotate-6">
            <div className="bg-[#fec700] border-4 border-black p-4 text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <MaterialIcon icon="military_tech" filled className="text-4xl" />
              <p className="font-headline font-black text-[10px] uppercase leading-tight">
                Employee
                <br />
                of the
                <br />
                Aeon
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticker Drawer */}
      <div className="absolute bottom-6 right-6 flex flex-col items-end gap-4 z-30">
        <div className="bg-white border-4 border-black p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-wrap gap-4 w-64">
          <div className="w-full flex justify-between items-center mb-2">
            <span className="font-headline font-black uppercase text-xs">
              Stickers &amp; Sarcasm
            </span>
            <MaterialIcon icon="expand_more" className="text-sm" />
          </div>
          {STICKERS.map((sticker) => (
            <button
              key={sticker.icon}
              aria-label={sticker.label}
              className="w-12 h-12 bg-surface-container border-2 border-black flex items-center justify-center cursor-move hover:bg-secondary-container transition-colors"
            >
              <MaterialIcon icon={sticker.icon} />
            </button>
          ))}
        </div>
        <button
          aria-label="Add reaction sticker"
          className="bg-primary-container p-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
        >
          <MaterialIcon icon="add_reaction" className="text-white text-3xl" />
        </button>
      </div>
    </section>
  );
}