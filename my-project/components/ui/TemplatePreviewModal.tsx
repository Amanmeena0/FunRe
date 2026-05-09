"use client";

import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "./Materialcon";

interface TemplatePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: {
    id: string;
    title: string;
    description: string;
    imageSrc: string;
    badge: string;
    badgeClass: string;
    icon: string;
  } | null;
}

export default function TemplatePreviewModal({ isOpen, onClose, template }: TemplatePreviewModalProps) {
  if (!isOpen || !template) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-8">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden brutalist-card max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white border-2 border-black p-2 hover:bg-primary transition-colors"
          aria-label="Close modal"
        >
          <MaterialIcon icon="close" />
        </button>

        {/* Left: Image Preview */}
        <div className="w-full md:w-[60%] bg-surface-container border-b-4 md:border-b-0 md:border-r-4 border-black relative min-h-75 md:min-h-0 overflow-y-auto">
          <div className="p-8">
            <div className="relative aspect-3/4 w-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
              <Image
                src={template.imageSrc}
                alt={template.title}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right: Template Info */}
        <div className="w-full md:w-[40%] p-8 flex flex-col justify-between bg-white overflow-y-auto">
          <div>
            <div className="flex items-center gap-3 mb-6">
               <div className={`${template.badgeClass} px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]`}>
                 {template.badge}
               </div>
               <MaterialIcon icon={template.icon} className="text-primary text-2xl" />
            </div>

            <h2 className="text-5xl font-black uppercase tracking-tighter leading-none mb-6 font-headline">
              {template.title}
            </h2>
            
            <p className="text-lg font-medium leading-relaxed mb-8 font-body text-gray-700">
              {template.description}
            </p>

            <div className="space-y-4 mb-8">
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="bg-green-100 p-1 border border-black rounded-full">
                   <MaterialIcon icon="check" size={16} />
                 </div>
                 ATS Compatible Layout
               </div>
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="bg-green-100 p-1 border border-black rounded-full">
                   <MaterialIcon icon="check" size={16} />
                 </div>
                 Universal Editor Support
               </div>
               <div className="flex items-center gap-3 font-bold text-sm">
                 <div className="bg-green-100 p-1 border border-black rounded-full">
                   <MaterialIcon icon="check" size={16} />
                 </div>
                 Fully Responsive Design
               </div>
            </div>
          </div>

          <Link
            href={`/editor/${template.id}`}
            className="w-full bg-black text-white py-5 font-black uppercase tracking-widest text-xl border-4 border-black hover:bg-primary transition-all text-center block active:translate-x-1 active:translate-y-1 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Editing
          </Link>
        </div>
      </div>
    </div>
  );
}
