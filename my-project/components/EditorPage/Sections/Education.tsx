"use client";

import { ResumeData } from "@/lib/resume/resumeTypes";

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
      <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
        <span className="bg-secondary-container p-2 border-2 border-black">03</span>
        Education
      </h3>
      <div className="space-y-12">
        {data.map((edu, index) => (
          <div key={index} className="space-y-6 p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
            <button
              onClick={() => removeEducation(index)}
              className="absolute -top-4 -right-4 bg-error text-white w-8 h-8 rounded-full border-2 border-black font-bold flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ×
            </button>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Institution</label>
              <input
                type="text"
                value={edu.institution}
                onChange={(e) => handleChange(index, "institution", e.target.value)}
                placeholder="University of Hard Knocks"
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Degree</label>
              <input
                type="text"
                value={edu.degree}
                onChange={(e) => handleChange(index, "degree", e.target.value)}
                placeholder="Master of Survival"
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Date Range</label>
              <input
                type="text"
                value={edu.dateRange}
                onChange={(e) => handleChange(index, "dateRange", e.target.value)}
                placeholder="2016 - 2020"
                className="w-full bg-transparent border-0 border-b-4  border-black p-0 py-2 text-lg font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addEducation}
          className="w-full border-4 border-dashed border-black p-6 font-headline font-black text-xl uppercase hover:bg-surface-container transition-colors"
        >
          + Add Academic Baggage
        </button>
      </div>
    </div>
  );
}
