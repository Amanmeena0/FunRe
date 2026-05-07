import { createClient } from "@/lib/supabase/client";
import { MOCK_RESUMES } from "./templateRegistry";

export async function saveResume() {
  const supabase = createClient();

  const formattedResumes = MOCK_RESUMES.map((resume, index) => ({
    title: `Resume ${index + 1}`,
    template_id: "template-1",
    resume_data: resume,
  }));

  const { data, error } = await supabase
    .from("resumes")
    .insert(formattedResumes)
    .select();

  if (error) {
    console.error("SUPABASE ERROR:", error);
    return;
  }

  console.log(data);
  console.log("Resume saved successfully!");
}

export async function getResumes() {
  const supabase = createClient();
  const { data, error } = await supabase.from("resumes").select("*");

  if (error) {
    console.error("SUPABASE ERROR:", error);
    return [];
  }
  
  return data;
}