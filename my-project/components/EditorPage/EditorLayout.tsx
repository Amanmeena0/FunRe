"use client";

import EditorFooter from "./EditorFooter";

interface EditorLayoutProps {
  children: React.ReactNode;
}

/**
 * EditorLayout Component
 * 
 * Provides the page-level layout for the editor page.
 * Manages the split view of form (left) and canvas (right).
 * 
 * Responsible for:
 * - Sidebar navigation (if needed)
 * - Footer
 * - Overall layout structure
 * 
 * Children are rendered in the main content area.
 */
export default function EditorLayout({ children }: EditorLayoutProps) {
  return (
    <div className="bg-background text-on-background overflow-hidden">
      <main className="flex h-screen pb-20 print:p-0 print:h-auto print:block">
        {children}
      </main>

      <EditorFooter />
    </div>
  );
}
