"use client";

import { ResumeData } from "@/lib/resume/resumeData";
import MaterialIcon from "../../ui/Materialcon";

interface ProfileSectionProps {
  data: ResumeData["personalInfo"];
  summary: string;
  profilePhotoUrl?: string;
  onChange: (field: string, value: unknown) => void;
}

export default function ProfileSection({ data, summary, profilePhotoUrl, onChange }: ProfileSectionProps) {
  const handleChange = (field: keyof ResumeData["personalInfo"], value: string) => {
    onChange("personalInfo", { ...data, [field]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image size should be less than 2MB!");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange("profilePhotoUrl", reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    onChange("profilePhotoUrl", "");
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-2xl font-black font-headline uppercase mb-6 flex items-center gap-3">
          <span className="bg-primary-container px-2 py-0.5 border-2 border-black text-sm">01</span>
          Identity
        </h3>

        {/* Profile Image Uploader */}
        <div className="flex items-center gap-6 mb-8 p-4 border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <div className="relative w-20 h-20 border-2 border-black bg-surface-container-high overflow-hidden flex items-center justify-center shrink-0">
            {profilePhotoUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={profilePhotoUrl}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <MaterialIcon icon="person" className="text-black/40 text-4xl" />
            )}
          </div>
          <div className="space-y-2 grow">
            <span className="block font-headline font-bold text-xs uppercase">Profile Photo</span>
            <div className="flex flex-wrap gap-2">
              <label className="bg-[#fec700] hover:bg-[#ff69c9] text-black font-black uppercase text-[10px] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer inline-block">
                Upload Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                />
              </label>
              {profilePhotoUrl && (
                <button
                  type="button"
                  onClick={handleRemoveImage}
                  className="bg-error text-white font-black uppercase text-[10px] px-3 py-1.5 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all cursor-pointer"
                >
                  Remove
                </button>
              )}
            </div>
            <div className="mt-2 flex flex-col gap-1">
              <span className="block text-[9px] font-bold text-black/60 uppercase">Or Paste/Edit Image URL</span>
              <input
                type="text"
                value={profilePhotoUrl?.startsWith("data:") ? "[Local Image File]" : (profilePhotoUrl || "")}
                onChange={(e) => {
                  const val = e.target.value;
                  onChange("profilePhotoUrl", val === "[Local Image File]" ? profilePhotoUrl : val);
                }}
                placeholder="https://example.com/avatar.jpg"
                className="w-full bg-white border-2 border-black text-xs font-bold px-2 py-1.5 outline-none shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] focus:border-[#ff69c9] focus:shadow-none transition-all placeholder:text-black/30"
              />
            </div>
            <span className="block text-[9px] font-bold text-black/60 uppercase">Max size 2MB (JPG/PNG) or any web URL</span>
          </div>
        </div>
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
