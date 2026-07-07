"use client";

import { ResumeData } from "@/lib/resume/resumeData";

interface SkillsProps {
  data: ResumeData["Skills"];
  onChange: (field: string, value: unknown) => void;
}

export default function SkillsSection({ data, onChange }: SkillsProps) {
  const addSkill = (skill: string) => {
    if (skill.trim() && !data.includes(skill)) {
      onChange("Skills", [...data, skill]);
    }
  };

  const removeSkill = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange("Skills", newData);
  };

  return (
    <div>
      <h3 className="text-2xl font-black font-headline uppercase mb-6 flex items-center gap-3">
        <span className="bg-primary-container px-2 py-0.5 border-2 border-black text-sm">04</span>
        Skills
      </h3>
      <div className="space-y-6">
        <div className="relative">
          <label className="block font-headline font-bold text-xs uppercase mb-0.5">Add a Skill</label>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addSkill(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
            placeholder="Type and press Enter (e.g., Chaos Management)"
            className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
          />
        </div>
        
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <div
              key={index}
              className="bg-white border-2 border-black px-3 py-1 font-black uppercase text-xs shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="text-error hover:scale-125 transition-transform cursor-pointer"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
