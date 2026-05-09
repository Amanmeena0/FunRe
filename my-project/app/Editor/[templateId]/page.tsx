"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import EditorLayout from "@/components/EditorPage/EditorLayout";
import EditorSideNav from "@/components/EditorPage/EditorsideNav";
import EditorForm from "@/components/EditorPage/EditorForm";
import { ResumeData, defaultResumeData } from "@/lib/resume/resumeData";
import { getFullTemplateById, getDefaultFullTemplate } from "@/lib/resume/templateRegistry";
import { EditorTab } from "@/types/types";

export default function EditorPage() {
  const { templateId } = useParams();
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);
  const [activeTab, setActiveTab] = useState<EditorTab>("Profile");

  // HEAVY LAYER: Load template config including the component
  const templateConfig = getFullTemplateById(templateId as string) || getDefaultFullTemplate();
  const TemplateComponent = templateConfig.component;

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

      {/* Right Canvas: Live Rendering via Heavy Layer component */}
      <TemplateComponent data={resumeData} />
    </EditorLayout>
  );
}
