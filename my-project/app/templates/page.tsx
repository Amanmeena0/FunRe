import type { Metadata } from "next";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import TemplateGridCard from "@/components/ui/TemplateGridCard";
import { GRID_TEMPLATES } from "@/lib/templateData";

export const metadata: Metadata = {
  title: "Resume Riot | Pick Your Weapon — Templates",
  description:
    "Choose a resume template that screams authority and disrupts the hiring manager's afternoon nap.",
};

/**
 * Templates Page - Route: /templates
 * 
 * Displays the full template catalog where users can browse and select
 * a template to use for their resume. After selection, they navigate to
 * /editor/[templateId] where they can customize their resume.
 */
export default function TemplatesPage() {
  return (
    <>
      <TopNav activePage="templates" />
      <main className="pt-40 px-8 max-w-7xl mx-auto pb-32">
        {/* Hero Section */}
        <div className="mb-20">
          <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 font-headline">
            Pick Your{" "}
            <span className="text-primary italic">Weapon</span>
          </h1>
          <p className="text-xl max-w-2xl font-medium leading-relaxed font-body">
            Standard resumes are for standard people. Choose a template that
            screams authority and disrupts the hiring manager&apos;s afternoon
            nap.
          </p>
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {GRID_TEMPLATES.map((template) => (
            <TemplateGridCard key={template.id} template={template} />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}