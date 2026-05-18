"use client";
import MaterialIcon from "../ui/Materialcon";
import { EditorTab } from "@/types/types";

interface SideNavProps {
  activeTab: EditorTab;
  onTabChange: (tab: EditorTab) => void;
}

const tabs: { key: EditorTab; label: string; icon: string }[] = [
  { key: "Profile", label: "Profile", icon: "person" },
  { key: "education", label: "Education", icon: "school" },
  { key: "experience", label: "Experience", icon: "work" },
  { key: "projects", label: "Projects", icon: "folder" },
  { key: "skills", label: "Skills", icon: "construction" },
  { key: "finish", label: "Finish", icon: "check_circle" },
];

export default function EditorSideNav({ activeTab, onTabChange }: SideNavProps) {
  return (
    <aside className="hidden lg:flex flex-col h-screen fixed left-0 top-0 w-64 bg-[#f9f9f9] dark:bg-[#1b1b1b] border-r-4 border-black z-40 print:hidden">
      <div className="px-6 py-10 border-b-4 border-black bg-[#fec700]">
        <h1 className="text-2xl font-black uppercase font-headline leading-tight tracking-tighter text-black">
          RESUME <br /> RIOT
        </h1>
        <div className="mt-2 flex items-center gap-2">
          <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
          <p className="text-[10px] font-black uppercase tracking-widest text-black">
            EDITOR MODE
          </p>
        </div>
      </div>

      <nav className="grow">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`w-full flex items-center gap-4 px-6 py-4 font-medium border-b-2 transition-colors ${
                isActive
                  ? "bg-[#ff69C9] text-black font-black border-y-2 border-black"
                  : "text-[#1b1b1b] dark:text-[#f9f9f9] hover:bg-[#fec700] hover:text-black border-b-2 border-black/10"
              }`}
            >
              <MaterialIcon
                icon={tab.icon}
                filled={isActive}
              />
              <span className="font-headline uppercase text-sm">
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      <div className="p-6 pb-24">
        <button 
          onClick={() => window.print()}
          className="w-full bg-[#fec700] text-black font-black uppercase py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
        >
          Download PDF
        </button>
      </div>
    </aside>
  );
}