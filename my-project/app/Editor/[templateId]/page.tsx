"use client";

import type { Metadata } from "next";
import { useState } from "react";
import { useParams } from "next/navigation";
import TopNav from "@/components/layout/TopNav";
import EditorLayout from "@/components/layout/EditorLayout";
import EditorForm from "@/components/editor/EditorForm";
import ResumeCanvas from "@/components/editor/ResumeCanvas";
import { ResumeData, defaultResumeData } from "@/lib/resumeTypes";

/**
 * Editor Page - Route: /editor/[templateId]
 * 
 * This is the main editor where users customize their resume
 * for a specific template. The templateId is loaded from the route
 * and used to initialize the editor with template-specific data.
 * 
 * Flow:
 * 1. User selects a template from /templates
 * 2. Router navigates to /editor/[templateId]
 * 3. This page loads, displaying the editor with the selected template
 * 4. User fills out form (EditorForm) and sees live preview (ResumeCanvas)
 * 5. User can export/download when ready
 */
export default function EditorPage() {
  const params = useParams();
  const templateId = params.templateId as string;

  // Initialize resume data - could be enhanced to load template-specific defaults
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData);

  return (
    <EditorLayout>
      <EditorForm data={resumeData} onChange={setResumeData} />
      <ResumeCanvas data={resumeData} templateId={templateId} />
    </EditorLayout>
  );
}
