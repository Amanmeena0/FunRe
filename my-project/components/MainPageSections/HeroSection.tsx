import Link from "next/link";

export default function HeroSection() {
  return (
    <section 
      className="px-8 py-20 md:py-32 flex flex-col items-center text-center bg-[#f9f9f9] border-b-4 border-black relative overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#ffd8ea] rounded-full blur-[100px] opacity-40 pointer-events-none" />

      {/* Floating Neobrutalist Badges/Stickers */}
      <div className="relative z-10 w-full max-w-6xl flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <span className="bg-[#fec700] text-black font-black py-2 px-4 border-2 border-black rotate-[-3deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm uppercase tracking-wider">
            ⚠️ RECRUITERS WILL COMPLAIN
          </span>
          <span className="bg-[#00B386] text-white font-black py-2 px-4 border-2 border-black rotate-[2deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm uppercase tracking-wider">
            ✓ 100% ATS COMPATIBLE
          </span>
          <span className="bg-[#ff69c9] text-black font-black py-2 px-4 border-2 border-black rotate-[-1deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-xs md:text-sm uppercase tracking-wider">
            🔥 UNIGNORABLE DESIGNS
          </span>
        </div>

        <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.85] mb-8 font-headline text-[#1b1b1b]">
          Build a resume <br />
          <span className="text-[#ab1f82] italic select-none">that actually</span> <br />
          gets read.
        </h1>
        
        <p className="max-w-2xl text-lg md:text-xl font-medium mb-12 font-body text-gray-800">
          Stop being another white page in the stack. Use aggressive layouts, loud colors,
          and heavy typography to demand attention from hiring managers.
        </p>
        
        <Link
          href="/editor"
          className="bg-[#fec700] text-black text-2xl md:text-4xl font-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(171,31,130,1)] hover:bg-[#ff69c9] hover:shadow-[8px_8px_0px_0px_rgba(254,199,0,1)] hover:-translate-y-1 hover:-translate-x-1 active:translate-x-1 active:translate-y-1 active:shadow-none transition-all uppercase font-headline"
        >
          Start Making a Scene
        </Link>
      </div>
    </section>
  );
}