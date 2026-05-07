import { createClient } from "@/lib/supabase/client";
// import { Resume } from "./templateRegistry";
import { MOCK_RESUMES } from "./templateRegistry";


export async function saveResume() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("resumes")
    .insert(MOCK_RESUMES)
    .select();

  if (error) {
    console.error(error);
    return;
  }

  console.log(data);
  console.log("Resume saved successfully!");
}