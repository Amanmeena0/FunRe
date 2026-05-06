"use client";

import { useState } from "react";
import { ResumeData } from "@/lib/resumeTypes";

interface EditorFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
}

export default function EditorForm({ data, onChange }: EditorFormProps) {
  const [sassLevel, setSassLevel] = useState(99);

  const update = (field: keyof ResumeData, value: string) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="w-full lg:w-[40%] ml-0 lg:ml-64 bg-surface-container-lowest border-r-4 border-black overflow-y-auto px-8 py-12">
      <div className="max-w-xl mx-auto space-y-12">

        {/* Experience Section */}
        <div>
          <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
            <span className="bg-[#ff69C9] p-2 border-2 border-black">01</span>
            Experience
          </h3>
          <div className="space-y-10">
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">
                Company Name
              </label>
              <input
                type="text"
                value={data.companyName}
                onChange={(e) => update("companyName", e.target.value)}
                placeholder="Global Hegemony Inc."
                className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-2xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">
                Your Title
              </label>
              <input
                type="text"
                value={data.jobTitle}
                onChange={(e) => update("jobTitle", e.target.value)}
                placeholder="Chief Chaos Officer"
                className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-2xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">
                Bragging Rights
              </label>
              <textarea
                value={data.achievements}
                onChange={(e) => update("achievements", e.target.value)}
                placeholder="I once saved a server by unplugging the toaster."
                rows={3}
                className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-xl font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary-container transition-colors resize-none outline-none"
              />
            </div>
          </div>
        </div>

        {/* Sass Level Slider */}
        <div className="bg-secondary-container p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <div className="flex justify-between items-end mb-4">
            <h4 className="font-headline font-black text-2xl uppercase italic">
              Sass Level
            </h4>
            <span className="text-4xl font-black text-on-secondary-container">
              {sassLevel}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={sassLevel}
            onChange={(e) => setSassLevel(Number(e.target.value))}
            className="w-full slider-riot"
            aria-label="Sass level"
          />
          <p className="mt-4 text-xs font-bold uppercase opacity-80">
            Warning: High levels of sass may result in immediate employment or
            restraining orders.
          </p>
        </div>

        {/* Education Section */}
        <div>
          <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
            <span className="bg-secondary-container p-2 border-2 border-black">
              02
            </span>
            Education
          </h3>
          <div className="space-y-10">
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">
                Institution
              </label>
              <input
                type="text"
                value={data.institution}
                onChange={(e) => update("institution", e.target.value)}
                placeholder="University of Hard Knocks"
                className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-2xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        </div>

        <div className="pt-8">
          <button className="w-full border-4 border-dashed border-black p-6 font-headline font-black text-xl uppercase hover:bg-surface-container transition-colors">
            + Add Another Soul-Crushing Chapter
          </button>
        </div>
      </div>
    </section>
  );
}