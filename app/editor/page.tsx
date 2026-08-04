import { redirect } from "next/navigation";

/**
 * /editor page - Redirects to /templates
 * 
 * Users should not land on /editor directly without selecting a template.
 * This page ensures they start at /templates where they choose a template,
 * which then navigates them to /editor/[templateId]
 */
export default function EditorRedirectPage() {
  redirect("/templates");
}