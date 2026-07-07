"use client";

import TopNav from "../layout/TopNav";
import EditorFooter from "./EditorFooter";

interface EditorLayoutProps {
  children: React.ReactNode;
}

export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="bg-background text-on-background overflow-hidden h-screen flex flex-col">
      <TopNav variant="editor" />
      
      <main className="flex grow pt-[96px] pb-[72px] print:p-0 print:h-auto print:block overflow-hidden relative w-full">
        {children}
      </main>

      <EditorFooter />
    </div>
  );
}
