"use client";

import { useState } from "react";
import Link from "next/link";
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
        className="pt-8 px-6 pb-20 relative overflow-hidden bg-[#f9f9f9] bg-[radial-gradient(rgba(0,0,0,0.08)_1.5px,transparent_1.5px)] [background-size:24px_24px]"
      >
        {/* Glow Backdrop */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        <div className="absolute bottom-20 left-0 w-[350px] h-[350px] bg-[#ffd6a5] rounded-full blur-[100px] opacity-35 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hero Section */}
          <div className="mb-10">
            <div className="flex flex-wrap gap-2.5 mb-4">
              <span className="bg-[#ab1f82] text-white px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest border-2 border-black shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                ARMORY v1.0
              </span>
              <span className="bg-[#fec700] text-black px-2 py-0.5 font-bold text-[10px] uppercase tracking-widest border-2 border-black rotate-[-1deg] shadow-[1.5px_1.5px_0px_0px_rgba(0,0,0,1)]">
                ⚠️ SEVERELY ATS TESTED
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-4 font-headline text-black">
              Pick Your{" "}
              <span className="text-[#ff69c9] italic">Weapon</span>
            </h1>

            {/* Standard FAANG Redirect Banner */}
            <div className="mt-6 p-4 bg-[#eeeeee] border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-w-xl font-body text-xs font-bold flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-black">
              <div className="space-y-0.5">
                <p className="text-sm uppercase font-black font-headline">💼 Not in the mood for fun?</p>
                <p className="text-[11px] font-semibold text-gray-700">Need a classic, boring, standard FAANG format instead?</p>
              </div>
              <Link
                href="https://www.overleaf.com/latex/templates/faangpath-simple-template/npsfpdqnxmbc/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-black text-white hover:bg-[#fec700] hover:text-black px-3 py-1.5 border-2 border-black font-black uppercase tracking-wider text-[10px] shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all shrink-0 text-center select-none"
              >
                Go there instead
              </Link>
            </div>
          </div>

          {/* Template Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      <Footer fixed={true} />
    </>
  );
}
