"use client";

import { ResumeData } from "@/lib/resume/resumeData";

interface ProjectsProps {
  data: ResumeData["Projects"];
  onChange: (field: string, value: unknown) => void;
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
      <h3 className="text-2xl font-black font-headline uppercase mb-6 flex items-center gap-3">
        <span className="bg-secondary-container px-2 py-0.5 border-2 border-black text-sm">05</span>
        Projects
      </h3>
      <div className="space-y-6">
        {data.map((proj, index) => (
          <div key={index} className="space-y-4 p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] relative bg-white">
            <button
              onClick={() => removeProject(index)}
              className="absolute -top-3 -right-3 bg-error text-white w-6 h-6 rounded-full border-2 border-black font-bold flex items-center justify-center hover:bg-red-600 transition-colors cursor-pointer text-xs"
            >
              ×
            </button>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Project Name</label>
              <input
                type="text"
                value={proj.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
                placeholder="World Domination App"
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Description</label>
              <textarea
                value={proj.description}
                onChange={(e) => handleChange(index, "description", e.target.value)}
                placeholder="Briefly explain your masterpiece..."
                rows={2}
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-medium placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors resize-none outline-none"
              />
            </div>
            <div className="relative">
              <label className="block font-headline font-bold text-xs uppercase mb-0.5">Link (Optional)</label>
              <input
                type="text"
                value={proj.link}
                onChange={(e) => handleChange(index, "link", e.target.value)}
                placeholder="https://..."
                className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
              />
            </div>
          </div>
        ))}

        <button
          onClick={addProject}
          className="w-full border-2 border-dashed border-black p-4 font-headline font-black text-base uppercase hover:bg-surface-container transition-colors cursor-pointer"
        >
          + Add Another Glory Project
        </button>
      </div>
    </div>
  );
}
