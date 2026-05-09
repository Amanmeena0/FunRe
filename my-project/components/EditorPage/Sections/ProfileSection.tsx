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
    <div className="space-y-12">
      <div>
        <h3 className="text-4xl font-black font-headline uppercase mb-8 flex items-center gap-3">
          <span className="bg-primary-container p-2 border-2 border-black">01</span>
          Identity
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-1">Full Name</label>
            <input
              type="text"
              value={data.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              placeholder="John Doe"
              className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-2xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-1">Professional Title</label>
            <input
              type="text"
              value={data.title}
              onChange={(e) => handleChange("title", e.target.value)}
              placeholder="Full Stack Wizard"
              className="w-full bg-transparent border-0 border-b-[6px] border-black p-0 py-2 text-2xl font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <label className="block font-headline font-bold text-xs uppercase mb-1">Email</label>
            <input
              type="email"
              value={data.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@example.com"
              className="w-full bg-transparent border-0 border-b-4 border-black p-0 py-2 text-lg font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
          <div className="relative">
            <label className="block font-headline font-bold text-xs uppercase mb-1">Phone</label>
            <input
              type="text"
              value={data.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+1 234 567 890"
              className="w-full bg-transparent border-0 border-b-4 border-black p-0 py-2 text-lg font-bold placeholder:opacity-20 focus:ring-0 focus:border-secondary transition-colors outline-none"
            />
          </div>
          <div className="relative col-span-2">
            <label className="block font-headline font-bold text-xs uppercase mb-1">Location</label>
            <input
              type="text"
              value={data.location}
              onChange={(e) => handleChange("location", e.target.value)}
              placeholder="New York, NY"
              className="w-full bg-transparent border-0 border-b-4 border-black p-0 py-2 text-lg font-bold placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-black font-headline uppercase mb-4">Summary</h3>
        <textarea
          value={summary}
          onChange={(e) => onChange("Summary", e.target.value)}
          placeholder="Tell your story..."
          rows={4}
          className="w-full bg-transparent border-4 border-black p-4 text-lg font-medium placeholder:opacity-20 focus:ring-0 focus:border-primary transition-colors resize-none outline-none shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
        />
      </div>
    </div>
  );
}
