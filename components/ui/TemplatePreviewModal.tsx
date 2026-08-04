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
    preset?: string;
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
      <div className="relative w-full max-w-4xl bg-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row overflow-hidden brutalist-card max-h-[90vh]">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-white border-2 border-black p-1.5 hover:bg-[#ff69c9] hover:text-black transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <MaterialIcon icon="close" size={20} />
        </button>

        {/* Left: Image Preview */}
        <div className="w-full md:w-[55%] bg-surface-container border-b-2 md:border-b-0 md:border-r-2 border-black relative min-h-75 md:min-h-0 overflow-y-auto">
          <div className="p-6">
            <div className="relative aspect-3/4 w-full border-2 border-black shadow-[4px_4px_0px_0px_rgba(255,105,201,1)] overflow-hidden">
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
        <div className="w-full md:w-[45%] p-6 flex flex-col justify-between bg-white overflow-y-auto">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
               <div className={`${template.badgeClass} px-2 py-0.5 font-bold text-[10px] uppercase border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]`}>
                 {template.badge}
               </div>
               <div className="text-[#ab1f82]">
                 <MaterialIcon icon={template.icon} className="text-xl" />
               </div>
            </div>

            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter leading-none mb-4 font-headline text-black">
              {template.title}
            </h2>
            
            <p className="text-xs md:text-sm font-body leading-relaxed mb-6 text-gray-700">
              {template.description}
            </p>

            <div className="space-y-3 mb-6">
               <div className="flex items-center gap-2.5 font-bold text-xs text-black">
                 <div className="bg-[#00B386] p-0.5 border border-black rounded-full text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                   <MaterialIcon icon="check" size={12} />
                 </div>
                 ATS Compatible Layout
               </div>
               <div className="flex items-center gap-2.5 font-bold text-xs text-black">
                 <div className="bg-[#00B386] p-0.5 border border-black rounded-full text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                   <MaterialIcon icon="check" size={12} />
                 </div>
                 Universal Editor Support
               </div>
               <div className="flex items-center gap-2.5 font-bold text-xs text-black">
                 <div className="bg-[#00B386] p-0.5 border border-black rounded-full text-white shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center">
                   <MaterialIcon icon="check" size={12} />
                 </div>
                 Fully Responsive Design
               </div>
            </div>
          </div>

          <Link
            href={`/editor/${template.id}${template.preset ? `?preset=${template.preset}` : ""}`}
            className="w-full bg-[#fec700] text-black py-2.5 font-black uppercase tracking-widest text-xs border-2 border-black hover:bg-[#ff69c9] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all text-center block shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
          >
            Start Editing
          </Link>
        </div>
      </div>
    </div>
  );
}
