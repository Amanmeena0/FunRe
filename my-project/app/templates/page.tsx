"use client";

import { useState } from "react";
import TopNav from "@/components/layout/TopNav";
import EditorSideNav from "@/components/layout/EditorsideNav";
import EditorForm from "@/components/sections/EditorForm";
import ResumeCanvas from "@/components/sections/ResumeCanvas";
import EditorFooter from "@/components/layout/EditorFooter";
import { ResumeData, defaultResumeData } from "@/lib/resumeTypes";

type EditorTab = "identity" | "experience" | "education" | "skills" | "finish";

export default function EditorPage() {
  const [activeTab, setActiveTab] = useState<EditorTab>("experience");
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  return (
    <div className="bg-background text-on-background overflow-hidden">
      <TopNav variant="editor" />

      <main className="flex h-screen pt-25 pb-20">
        <EditorSideNav
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab as EditorTab)}
        />
        <EditorForm data={resumeData} onChange={setResumeData} />
        <ResumeCanvas data={resumeData} />
      </main>

      <EditorFooter />
    </div>
  );
}