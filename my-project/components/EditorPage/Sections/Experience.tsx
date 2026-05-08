"use client";

import { ResumeData } from "@/lib/resume/resumeTypes";

interface ExperienceProps {
  data: ResumeData["Experience"];
  onChange: (field: string, value: unknown) => void;
}

export default function ExperienceSection({ data, onChange }: ExperienceProps) {
  const handleChange = (index: number, field: keyof ResumeData["Experience"][0], value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange("Experience", newData);
  };

  const addExperience = () => {
    onChange("Experience", [...data, { companyName: "", jobTitle: "", dateRange: "" }]);
  };

  const removeExperience = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange("Experience", newData);
  };

  return (
    <div>
      <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
        <span className="bg-[#ff69C9] p-2 border-2 border-black">02</span>
        Experience
      </h3>
      <div className="space-y-12">
        {data.map((exp, index) => (
          <div key={index} className="space-y-6 p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
            <button
              onClick={() => removeExperience(index)}
              className="absolute -top-4 -right-4 bg-error text-white w-8 h-8 rounded-full border-2 border-black font-bold flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ×
            </button>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Company Name</label>
              <input
                type="text"
                value={exp.companyName}
                onChange={(e) => handleChange(index, "companyName", e.target.value)}
                placeholder="Global Hegemony Inc."
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Job Title</label>
              <input
                type="text"
                value={exp.jobTitle}
                onChange={(e) => handleChange(index, "jobTitle", e.target.value)}
                placeholder="Chief Chaos Officer"
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Date Range</label>
              <input
                type="text"
                value={exp.dateRange}
                onChange={(e) => handleChange(index, "dateRange", e.target.value)}
                placeholder="2020 - Present"
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-lg font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addExperience}
          className="w-full border-4 border-dashed border-black p-6 font-headline font-black text-xl uppercase hover:bg-surface-container transition-colors"
        >
          + Add Another Soul-Crushing Chapter
        </button>
      </div>
    </div>
  );
}
