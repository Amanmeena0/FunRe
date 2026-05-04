"use client";

import Link from "next/link";

interface TopNavProps {
  activePage?: "templates" | "examples" | "guides" | "pricing";
  variant?: "landing" | "editor";
}

export default function TopNav({
  activePage,
  variant = "landing",
}: TopNavProps) {
  const navLinks = [
    { href: "/templates", label: "Templates", key: "templates" as const },
    { href: "/examples", label: "Examples", key: "examples" as const },
    { href: "/guides", label: "Guides", key: "guides" as const },
    { href: "/pricing", label: "Pricing", key: "pricing" as const },
  ];

  const isEditor = variant === "editor";

  return (
    <nav
      className={`bg-[#f9f9f9] dark:bg-[#1b1b1b] flex justify-between items-center w-full px-8 py-6 ${
        isEditor ? "fixed top-0 z-100" : "docked full-width top-0"
      } border-b-4 border-black ${
        isEditor ? "shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]" : ""
      } z-50`}
    >
      <Link
        href="/"
        className="text-4xl font-black uppercase tracking-tighter text-[#1b1b1b] dark:text-[#f9f9f9] hover:text-primary transition-colors"
      >
        Resume Riot
      </Link>

      <div className="hidden md:flex gap-8 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            href={link.href}
            className={
              activePage === link.key
                ? "text-[#ab1f82] dark:text-[#ff69C9] underline decoration-4 underline-offset-8 font-bold font-label uppercase text-sm tracking-widest"
                : "text-[#1b1b1b] dark:text-[#f9f9f9] font-bold font-label uppercase text-sm tracking-widest hover:bg-[#fec700] hover:text-black transition-colors duration-100 px-2 py-1"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/editor"
        className="bg-primary text-white font-black px-6 py-3 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all uppercase font-label hover:bg-[#890066]"
      >
        Create Resume
      </Link>
    </nav>
  );
}