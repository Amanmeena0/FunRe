"use client";

import { useState } from "react";
import { ResumeData } from "@/lib/resume/resumeData";
import { EditorTab } from "@/types/types";
import ProfileSection from "./Sections/ProfileSection";
import ExperienceSection from "./Sections/Experience";
import EducationSection from "./Sections/Education";
import SkillsSection from "./Sections/Skills";
import ProjectsSection from "./Sections/Projects";

interface EditorFormProps {
  data: ResumeData;
  onChange: (data: ResumeData) => void;
  activeTab: EditorTab;
}

export default function EditorForm({ data, onChange, activeTab }: EditorFormProps) {
  const [sassLevel, setSassLevel] = useState(99);

  const handleSectionChange = (field: string, value: unknown) => {
    onChange({ ...data, [field]: value });
  };

  return (
    <section className="w-full lg:w-[35%] max-w-lg ml-0 lg:ml-56 bg-surface-container-lowest border-r-4 border-black overflow-y-auto px-6 py-6 custom-scrollbar print:hidden">
      <div className="max-w-xl mx-auto space-y-6">
        {activeTab === "Profile" && (
          <ProfileSection
            data={data.personalInfo}
            summary={data.Summary}
            profilePhotoUrl={data.profilePhotoUrl}
            onChange={handleSectionChange}
          />
        )}

        {activeTab === "experience" && (
          <ExperienceSection
            data={data.Experience}
            onChange={handleSectionChange}
          />
        )}

        {activeTab === "education" && (
          <EducationSection
            data={data.Education}
            onChange={handleSectionChange}
          />
        )}

        {activeTab === "skills" && (
          <SkillsSection
            data={data.Skills}
            onChange={handleSectionChange}
          />
        )}

        {activeTab === "projects" && (
          <ProjectsSection
            data={data.Projects}
            onChange={handleSectionChange}
          />
        )}

        {activeTab === "finish" && (
          <div className="text-center space-y-8 py-12">
            <h3 className="text-4xl font-black font-headline uppercase">You&apos;re Done!</h3>
            <p className="text-xl font-medium">Your resume is ready for the world (or the bin).</p>
            <div className="bg-secondary-container p-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <div className="flex justify-between items-end mb-4">
                <h4 className="font-headline font-black text-2xl uppercase italic">
                  Sass Level
                </h4>
                <span className="text-4xl font-black text-on-secondary-container">
                  {sassLevel}%
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={sassLevel}
                onChange={(e) => setSassLevel(Number(e.target.value))}
                className="w-full h-4 bg-white border-2 border-black appearance-none slider-riot cursor-pointer"
                aria-label="Sass level"
              />
              <p className="mt-4 text-xs font-bold uppercase opacity-80 text-left">
                Warning: High levels of sass may result in immediate employment or
                restraining orders.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
