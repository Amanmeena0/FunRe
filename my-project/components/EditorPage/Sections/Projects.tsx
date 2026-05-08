"use client";

import { ResumeData } from "@/lib/resume/resumeTypes";

interface ProjectsProps {
  data: ResumeData["Projects"];
  onChange: (field: string, value: any) => void;
}

export default function ProjectsSection({ data, onChange }: ProjectsProps) {
  const handleChange = (index: number, field: keyof ResumeData["Projects"][0], value: string) => {
    const newData = [...data];
    newData[index] = { ...newData[index], [field]: value };
    onChange("Projects", newData);
  };

  const addProject = () => {
    onChange("Projects", [...data, { name: "", description: "", link: "" }]);
  };

  const removeProject = (index: number) => {
    const newData = data.filter((_, i) => i !== index);
    onChange("Projects", newData);
  };

  return (
    <div>
      <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
        <span className="bg-secondary-container p-2 border-2 border-black">05</span>
        Projects
      </h3>
      <div className="space-y-12">
        {data.map((proj, index) => (
          <div key={index} className="space-y-6 p-6 border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] relative">
            <button
              onClick={() => removeProject(index)}
              className="absolute -top-4 -right-4 bg-error text-white w-8 h-8 rounded-full border-2 border-black font-bold flex items-center justify-center hover:bg-red-600 transition-colors"
            >
              ×
            </button>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Project Name</label>
              <input
                type="text"
                value={proj.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="World Domination App"
                className="w-full bg-transparent border-0 border-b-[4px] border-black p-0 py-2 text-xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Description</label>
              <textarea
                value={proj.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Briefly explain your masterpiece..."
                rows={2}
                className="w-full bg-transparent border-0 border-b-[4px] border-black p-0 py-2 text-lg font-medium placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors resize-none outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-1">Link (Optional)</label>
              <input
                type="text"
                value={proj.link}
                onChange={(e) => handleChange(index, "link", e.target.value)}
                placeholder="https://..."
                className="w-full bg-transparent border-0 border-b-[4px] border-black p-0 py-2 text-lg font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addProject}
          className="w-full border-4 border-dashed border-black p-6 font-headline font-black text-xl uppercase hover:bg-surface-container transition-colors"
        >
          + Add Another Glory Project
        </button>
      </div>
    </div>
  );
}
