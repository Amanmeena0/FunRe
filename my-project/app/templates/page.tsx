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
            <TemplateGridCard 
              key={template.id} 
              template={template} 
              onSelect={handleSelectTemplate}
            />
          ))}
        </div>
      </main>

      {/* Bridge: Template Preview Modal */}
      <TemplatePreviewModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        template={selectedTemplate} 
      />

      <Footer />
    </>
  );
}
