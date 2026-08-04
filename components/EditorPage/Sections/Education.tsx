"use client";

import { ResumeData } from "@/lib/resume/resumeData";

interface EducationProps {
  data: ResumeData["Education"];
  onChange: (field: string, value: unknown) => void;
}

export default function EducationSection({ data, onChange }: EducationProps) {
  const handleChange = (index: number, field: keyof ResumeData["Education"][0], value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange("Education", newData);
  };

  const addEducation = () => {
    onChange("Education", [...data, { institution: "", degree: "", dateRange: "" }]);
  };

  const removeEducation = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange("Education", newData);
  };

  return (
    <div>
      <h3 className="text-2xl font-black font-headline uppercase mb-6 flex items-center gap-3">
        <span className="bg-secondary-container px-2 py-0.5 border-2 border-black text-sm">03</span>
        Education
      </h3>
      <div className="space-y-6">
        {data.map((edu, index) => (
          <div key={index} className="space-y-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative bg-white">
            <button
              onClick={() => removeEducation(index)}
              className="absolute -top-3 -right-3 bg-error text-white w-6 h-6 rounded-full border-2 border-black font-bold flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-xs"
            >
              ×
            </button>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Institution</label>
              <input
                type="text"
                value={edu.institution || ""}
                onChange={(e) => handleChange(index, "institution", e.target.value)}
                placeholder="University of Hard Knocks"
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Degree</label>
              <input
                type="text"
                value={edu.degree || ""}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                placeholder="Master of Survival"
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Date Range</label>
              <input
                type="text"
                value={edu.dateRange || ""}
                onChange={(e) => handleChange(index, "dateRange", e.target.value)}
                placeholder="2016 - 2020"
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addEducation}
          className="w-full border-2 border-dashed border-black p-4 font-headline font-black text-base uppercase hover:bg-surface-container transition-colors cursor-pointer"
        >
          + Add Academic Baggage
        </button>
      </div>
    </div>
  );
}
