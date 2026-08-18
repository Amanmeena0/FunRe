"use client";

import Link from "next/link";
import MaterialIcon from "../ui/Materialcon";

export default function EditorFooter() {
  const handleSaveDraft = () => {
    alert("Draft saved! (panic averted)");
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <footer className="fixed bottom-0 left-0 w-full h-14 z-[100] flex justify-between items-center px-8 py-2 bg-[#1b1b1b] dark:bg-black border-t-4 border-black print:hidden">
      <div className="flex items-center gap-6">
        <span className="text-[#fec700] font-headline text-xs font-bold uppercase tracking-widest hidden md:inline">
          © 2024 BODO. NO MERCY.
        </span>
        <div className="flex gap-4">
          {["Privacy", "Terms", "Support"].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-white text-xs font-headline uppercase hover:text-[#fec700] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSaveDraft}
          className="bg-[#ba1a1a] text-white px-4 py-1.5 border-2 border-white font-headline font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MaterialIcon icon="emergency" className="text-xs" />
          Panic Button (Save Draft)
        </button>
        <button
          onClick={handlePrint}
          className="bg-[#fec700] text-black px-4 py-1.5 border-2 border-black font-headline font-black uppercase text-xs shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all flex items-center gap-2 cursor-pointer"
        >
          <MaterialIcon icon="picture_as_pdf" className="text-xs" />
          Print for the Haters
        </button>
      </div>
    </footer>
  );
}