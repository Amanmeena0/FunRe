"use client";

import Link from "next/link";
import { GithubNavbarButton } from "./GithubContributionWidget";

interface TopNavProps {
  activePage?: "templates" | "examples" | "guides" | "pricing" | "bodo-bot";
  variant?: "landing" | "editor";
}

export default function TopNav({
  activePage,
  variant = "landing",
}: TopNavProps) {
  const navLinks = [
    { href: "/templates", label: "Templates", key: "templates" as const },
    { href: "/guides", label: "Guides", key: "guides" as const },
    { href: "/bodo-bot", label: "ATS", key: "bodo-bot" as const },
  ];

  const isEditor = variant === "editor";

  // // This useEffect is just for testing the getResumes function and will be removed later
  // useEffect(() => {
  //   async function loadResumes() {
  //     const resumes = await getResumes();
  //     console.log("Fetched Resumes:", resumes);
  //   }
  //   loadResumes();
  // }, []);

  return (
    <nav
      className={`bg-[#f9f9f9] dark:bg-[#1b1b1b] flex justify-between items-center w-full px-8 ${
        isEditor 
          ? "fixed top-0 left-0 h-16 z-[100] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" 
          : "sticky top-0 py-6 z-50"
      } border-b-4 border-black print:hidden`}
    >
      <Link
        href="/"
        className={`font-black uppercase tracking-tighter text-[#1b1b1b] dark:text-[#f9f9f9] hover:text-primary transition-colors ${
          isEditor ? "text-2xl" : "text-4xl"
        }`}
      >
        Bodo
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
        <GithubNavbarButton />
      </div>

      {/* This is button will remove after testing the mock data */}
      {/* <button onClick={saveResume} className="bg-amber-300">Save Resume</button> */}


    </nav>
  );
}