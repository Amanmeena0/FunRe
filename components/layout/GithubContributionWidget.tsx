"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MaterialIcon from "../ui/Materialcon";

export function GithubFloatingWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="fixed bottom-16 right-6 z-50 print:hidden font-body" ref={widgetRef}>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-14 h-14 bg-[#ab1f82] hover:bg-[#ff69c9] text-white border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer relative"
        title="GitHub Contribution & Help"
      >
        {isOpen ? (
          <span className="material-symbols-outlined text-2xl select-none">close</span>
        ) : (
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        )}
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div className="absolute bottom-18 right-0 w-80 md:w-96 bg-[#f9f9f9] border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] animate-in fade-in slide-in-from-bottom-2 duration-150 z-50">
          {/* Header */}
          <div className="bg-[#ab1f82] text-white px-4 py-3 border-b-4 border-black flex justify-between items-center font-headline font-black uppercase text-sm tracking-wider">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-lg">emergency</span>
              <span>Help & Contribute</span>
            </span>
            <button 
              onClick={() => setIsOpen(false)} 
              className="hover:text-[#fec700] transition-colors cursor-pointer flex items-center"
            >
              <span className="material-symbols-outlined text-lg select-none">close</span>
            </button>
          </div>

          {/* Body */}
          <div className="p-5 flex flex-col gap-4">
            <p className="text-xs md:text-sm font-medium text-gray-800 leading-relaxed font-body">
              Resume Bodo is open source! Help us make resume designs louder and bolder, or get assistance if you run into issues.
            </p>

            <div className="flex flex-col gap-3">
              {/* Contribution Link */}
              <Link
                href="https://github.com/Amanmeena0/FunRe/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-3 bg-[#fec700] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                <div className="flex items-center gap-2 font-headline font-black text-sm uppercase">
                  <span>🛠️ Open Contributions</span>
                  <span className="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </div>
                <span className="text-[11px] font-medium text-black/80 mt-1">
                  Help build features, template styles, or fix outstanding issues.
                </span>
              </Link>

              {/* Ask for help Link */}
              <Link
                href="https://github.com/Amanmeena0/FunRe/issues/new"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-3 bg-[#00B386] text-white border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#fec700] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
              >
                <div className="flex items-center gap-2 font-headline font-black text-sm uppercase">
                  <span>💬 Ask for Help</span>
                  <span className="material-symbols-outlined text-xs group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
                </div>
                <span className="text-[11px] font-medium text-white/80 group-hover:text-black/80 mt-1">
                  Report bugs, request support, or ask questions about the code.
                </span>
              </Link>

              {/* GitHub Repo link */}
              <Link
                href="https://github.com/Amanmeena0/FunRe"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-3 bg-[#ff69c9] text-black border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#00B386] hover:text-white hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all font-headline font-black text-xs uppercase"
              >
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                  </svg>
                  <span>Star Repo on GitHub</span>
                </span>
                <span className="material-symbols-outlined text-sm select-none">grade</span>
              </Link>
            </div>

            <div className="text-[10px] text-gray-500 font-mono text-center pt-1 border-t border-black/10">
              Amanmeena0/FunRe
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function GithubNavbarButton() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative font-body" ref={dropdownRef}>
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center gap-2 bg-[#ab1f82] text-white border-2 border-black py-1.5 px-3 font-bold font-label uppercase text-xs tracking-wider shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff69c9] hover:text-black hover:-translate-y-0.5 hover:-translate-x-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer select-none"
      >
        <svg height="14" width="14" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
        </svg>
        <span>GitHub</span>
        <span className="material-symbols-outlined text-xs select-none">
          {isDropdownOpen ? "arrow_drop_up" : "arrow_drop_down"}
        </span>
      </button>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50 animate-in fade-in slide-in-from-top-1 duration-100">
          <div className="p-3 bg-[#ab1f82] text-white border-b-2 border-black font-headline font-black uppercase text-[10px] tracking-wider flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs">emergency</span>
            <span>Help & Contribute</span>
          </div>
          <div className="flex flex-col">
            <Link
              href="https://github.com/Amanmeena0/FunRe/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 font-headline font-black text-xs uppercase text-black hover:bg-[#fec700] hover:text-black border-b-2 border-black transition-colors"
            >
              <span>🛠️ Open Contributions</span>
              <span className="material-symbols-outlined text-sm select-none">open_in_new</span>
            </Link>
            <Link
              href="https://github.com/Amanmeena0/FunRe/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 font-headline font-black text-xs uppercase text-black hover:bg-[#00B386] hover:text-white border-b-2 border-black transition-colors"
            >
              <span>💬 Ask for Help</span>
              <span className="material-symbols-outlined text-sm select-none">open_in_new</span>
            </Link>
            <Link
              href="https://github.com/Amanmeena0/FunRe"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-3 font-headline font-black text-xs uppercase text-black hover:bg-[#ff69c9] hover:text-black transition-colors"
            >
              <span>⭐️ Star Repo</span>
              <span className="material-symbols-outlined text-sm select-none">grade</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
