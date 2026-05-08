"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import EditorLayout from "@/components/EditorPage/EditorLayout";
import EditorSideNav from "@/components/EditorPage/EditorsideNav";
import EditorForm from "@/components/EditorPage/EditorForm";
import { ResumeData, defaultResumeData } from "@/lib/resume/resumeTypes";

type EditorTab = "Profile" | "education" | "experience" | "skills" | "projects" | "finish";

export default function EditorPage() {
  const { templateId } = useParams();
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [activeTab, setActiveTab] = useState<EditorTab>("Profile");

  const handleDataChange = (newData: ResumeData) => {
    setResumeData(newData);
  };

  const handleTabChange = (tab: EditorTab) => {
    setActiveTab(tab);
  };

  return (
    <EditorLayout>
      <EditorSideNav activeTab={activeTab} onTabChange={handleTabChange} />
      
      <EditorForm data={resumeData} onChange={handleDataChange} activeTab={activeTab} />

      {/* Right Canvas: Live Rendering (Blank for now) */}
      <section className="hidden lg:flex flex-col grow bg-surface-container relative overflow-hidden canvas-bg">
        <div className="grow flex items-center justify-center p-12">
          {/* Resume Preview will go here */}
        </div>
      </section>
    </EditorLayout>
  );
}
