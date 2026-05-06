import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="px-8 py-20 flex flex-col items-center text-center bg-white border-b-4 border-black">
      <h1 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.9] mb-8 font-headline">
        Build a resume <br />
        <span className="text-[#ab1f82] italic">that actually</span> <br />
        gets read.
      </h1>
      <p className="max-w-2xl text-xl font-medium mb-12 font-body">
        Stop being another PDF in the pile. Use aggressive layouts, loud colors,
        and high-impact typography to demand attention from recruiters.
      </p>
      <Link
        href="/editor"
        className="bg-[#fec700] text-black text-2xl md:text-4xl font-black px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:bg-[#ff00ff] hover:text-white transition-all transform hover:-translate-y-1 hover:-translate-x-1 active:translate-x-1 active:translate-y-1 active:shadow-none uppercase font-headline"
      >
        Start Making a Scene
      </Link>
    </section>
  );
}