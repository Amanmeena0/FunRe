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
    <footer className="fixed bottom-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-[#1b1b1b] dark:bg-black border-t-4 border-black">
      <div className="flex items-center gap-6">
        <span className="text-[#fec700] font-headline text-xs font-bold uppercase tracking-widest hidden md:inline">
          © 2024 RESUME RIOT. NO MERCY.
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
          className="bg-[#ba1a1a] text-white px-6 py-2 border-2 border-white font-headline font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
        >
          <MaterialIcon icon="emergency" className="text-sm" />
          Panic Button (Save Draft)
        </button>
        <button
          onClick={handlePrint}
          className="bg-[#fec700] text-black px-6 py-2 border-2 border-black font-headline font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center gap-2"
        >
          <MaterialIcon icon="picture_as_pdf" className="text-sm" />
          Print for the Haters
        </button>
      </div>
    </footer>
  );
}