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
    <aside className="hidden lg:flex flex-col h-[calc(100vh-96px-72px)] fixed left-0 top-[96px] w-64 bg-[#f9f9f9] dark:bg-[#1b1b1b] border-r-4 border-black z-40 print:hidden overflow-y-auto justify-between">
      <nav className="grow">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => onTabChange(tab.key)}
              className={`w-full flex items-center gap-4 px-6 py-4 font-medium border-b-2 transition-colors cursor-pointer ${
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

      <div className="p-6 pb-6">
        <button 
          onClick={() => window.print()}
          className="w-full bg-[#fec700] text-black font-black uppercase py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:shadow-none transition-all cursor-pointer font-headline"
        >
          Download PDF
        </button>
      </div>
    </aside>
  );
}