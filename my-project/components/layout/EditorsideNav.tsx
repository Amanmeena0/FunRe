"use client";
import MaterialIcon from "../ui/Materialcon";

type EditorTab = "identity" | "experience" | "education" | "skills" | "finish";

interface SideNavProps {
  activeTab: EditorTab;
  onTabChange: (tab: EditorTab) => void;
}

const tabs: { key: EditorTab; label: string; icon: string }[] = [
  { key: "identity", label: "Identity", icon: "person" },
  { key: "experience", label: "Experience", icon: "work" },
  { key: "education", label: "Education", icon: "school" },
  { key: "skills", label: "Skills", icon: "construction" },
  { key: "finish", label: "Finish", icon: "check_circle" },
];

export default function EditorSideNav({ activeTab, onTabChange }: SideNavProps) {
  return (
    <aside className="hidden lg:flex flex-col h-[calc(100vh-180px)] fixed left-0 top-24 w-64 bg-[#f9f9f9] dark:bg-[#1b1b1b] border-r-4 border-black z-40">
      <div className="px-6 py-8 border-b-4 border-black">
        <h2 className="text-xl font-bold uppercase font-headline">EDITOR</h2>
        <p className="text-xs uppercase tracking-widest opacity-60">
          Draft v1.0
        </p>
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
                  ? "bg-[#ff69C9] text-black font-black border-black"
                  : "text-[#1b1b1b] dark:text-[#f9f9f9] hover:bg-[#fec700] hover:text-black border-black/10"
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

      <div className="p-6">
        <button className="w-full bg-[#fec700] text-black font-black uppercase py-4 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
          Download PDF
        </button>
      </div>
    </aside>
  );
}