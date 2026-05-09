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
      <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
        <span className="bg-primary-container p-2 border-2 border-black">04</span>
        Skills
      </h3>
      <div className="space-y-8">
        <div className="relative">
          <label className="block font-headline font-bold text-xs uppercase mb-1">Add a Skill</label>
          <input
            type="text"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addSkill(e.currentTarget.value);
                e.currentTarget.value = "";
              }
            }}
            placeholder="Type and press Enter (e.g., Chaos Management)"
            className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
          />
        </div>
        
        <div className="flex flex-wrap gap-4">
          {data.map((skill, index) => (
            <div
              key={index}
              className="bg-white border-4 border-black px-4 py-2 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex items-center gap-2 group"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="text-error hover:scale-125 transition-transform"
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
