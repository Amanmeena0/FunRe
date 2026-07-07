"use client";

import { useState } from "react";
import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import TemplateGridCard from "@/components/ui/TemplateGridCard";
import TemplatePreviewModal from "@/components/ui/TemplatePreviewModal";
import { GRID_TEMPLATES } from "@/types/templateData";
import { FullTemplateCardData } from "@/types/types";

/**
 * Templates Page - Route: /templates
 * 
 * Displays the full template catalog. Clicking a card opens a preview modal.
 * The modal provides the final bridge to the editor.
 */
export default function TemplatesPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<FullTemplateCardData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectTemplate = (template: FullTemplateCardData) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TopNav activePage="templates" />
      
      <main 
        className="pt-12 px-8 pb-32 relative overflow-hidden bg-[#f9f9f9] bg-[radial-gradient(rgba(0,0,0,0.08)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      >
        {/* Glow Backdrop */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-[#ffd6a5] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="mb-20">
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ARMORY v1.0
              </span>
              <span className="bg-[#fec700] text-black px-3 py-1 font-black text-xs uppercase tracking-widest border-2 border-black rotate-[-1deg] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                ⚠️ SEVERELY ATS TESTED
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mb-6 font-headline text-black">
              Pick Your{" "}
              <span className="text-[#ff69c9] italic">Weapon</span>
            </h1>
            <p className="text-xl max-w-2xl font-medium leading-relaxed font-body text-gray-800">
              Standard resumes are for standard people. Choose a template that
              screams authority and disrupts the hiring manager&apos;s afternoon
              nap.
            </p>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {GRID_TEMPLATES.map((template) => (
              <TemplateGridCard 
                key={template.id} 
                template={template} 
                onSelect={handleSelectTemplate}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Bridge: Template Preview Modal */}
      <TemplatePreviewModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        template={selectedTemplate} 
      />

      <Footer fixed={false} />
    </>
  );
}
