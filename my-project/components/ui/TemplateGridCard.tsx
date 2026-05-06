import Image from "next/image";
import Link from "next/link";
import MaterialIcon from "../ui/Materialcon";
import { FullTemplateCardData } from "@/lib/types";

interface TemplateGridCardProps {
  template: FullTemplateCardData;
}

export default function TemplateGridCard({ template }: TemplateGridCardProps) {
  return (
    <div className="group flex flex-col bg-white border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all overflow-hidden brutalist-card">
      <div className="aspect-3/4 bg-surface-container overflow-hidden border-b-4 border-black relative">
        <Image
          src={template.imageSrc}
          alt={template.imageAlt}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div
          className={`absolute top-4 left-4 ${template.badgeClass} px-3 py-1 font-black text-xs uppercase border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-10`}
        >
          {template.badge}
        </div>
      </div>
      <div className="p-6 flex flex-col grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-3xl font-black uppercase tracking-tight font-headline">
            {template.title}
          </h3>
          <MaterialIcon icon={template.icon} className="text-primary text-3xl" />
        </div>
        <p className="text-sm font-medium mb-8 grow font-body">
          {template.description}
        </p>
        <Link
          href={`/editor/${template.id}`}
          className="w-full bg-black text-white py-4 font-black uppercase tracking-widest text-lg border-2 border-black hover:bg-primary transition-colors text-center block active:translate-x-0.5 active:translate-y-0.5"
        >
          Select Vibe
        </Link>
      </div>
    </div>
  );
}