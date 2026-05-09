"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import EditorLayout from "@/components/EditorPage/EditorLayout";
import EditorSideNav from "@/components/EditorPage/EditorsideNav";
import EditorForm from "@/components/EditorPage/EditorForm";
import ResumeMarks from "@/components/ResumeTemplates/shared/markscafe";
import { ResumeData, defaultResumeData } from "@/lib/resume/resumeData";
import { EditorTab } from "@/types/types";

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

      {/* Right Canvas: Live Rendering */}
      <ResumeMarks data={resumeData} />
    </EditorLayout>
  );
}
