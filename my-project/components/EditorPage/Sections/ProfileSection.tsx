"use client";

import { ResumeData } from "@/lib/resume/resumeData";

interface ProfileSectionProps {
  data: ResumeData["personalInfo"];
  summary: string;
  onChange: (field: string, value: unknown) => void;
}

export default function ProfileSection({ data, summary, onChange }: ProfileSectionProps) {
  const handleChange = (field: keyof ResumeData["personalInfo"], value: string) => {
    onChange("personalInfo", { ...data, [field]: value });
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-black font-headline uppercase mb-6 flex items-center gap-3">
          <span className="bg-primary-container px-2 py-0.5 border-2 border-black text-sm">01</span>
          Identity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-0.5">Full Name</label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="John Doe"
              className="w-full bg-transparent border-0 border-b-[3px] border-black p-0 py-1 text-lg font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-0.5">Professional Title</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Full Stack Wizard"
              className="w-full bg-transparent border-0 border-b-[3px] border-black p-0 py-1 text-lg font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <label className="block font-headline font-bold text-xs uppercase mb-0.5">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <label className="block font-headline font-bold text-xs uppercase mb-0.5">Phone</label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+1 234 567 890"
              className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
            />
          </div>
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-0.5">Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="New York, NY"
              className="w-full bg-transparent border-0 border-b-2 border-black p-0 py-1 text-sm font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black font-headline uppercase mb-3">Summary</h3>
        <textarea
          value={summary}
          onChange={(e) => onChange("Summary", e.target.value)}
          placeholder="Tell your story..."
          rows={3}
          className="w-full bg-transparent border-2 border-black p-3 text-sm font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors resize-none outline-none shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]"
        />
      </div>
    </div>
  );
}
