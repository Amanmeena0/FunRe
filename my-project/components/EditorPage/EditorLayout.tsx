"use client";

import TopNav from "../layout/TopNav";
import EditorFooter from "./EditorFooter";

interface EditorLayoutProps {
  children: React.ReactNode;
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="bg-background text-on-background overflow-hidden h-screen flex flex-col print:h-auto print:overflow-visible print:block print:bg-white print:p-0">
      <TopNav variant="editor" />
      
      <main className="flex grow pt-16 pb-14 print:p-0 print:h-auto print:block print:overflow-visible overflow-hidden relative w-full">
        {children}
      </main>

      <EditorFooter />
    </div>
  );
}
