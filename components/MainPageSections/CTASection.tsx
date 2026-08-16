import Link from "next/link";

export default function CTASection() {
  return (
    <section 
      className="bg-[#1b1b1b] min-h-[calc(100vh-152px)] px-8 py-16 md:py-24 flex flex-col items-center justify-center text-center relative overflow-hidden border-t-4 border-black"
      style={{
        backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
        backgroundSize: "24px 24px",
      }}
    >
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ab1f82] rounded-full blur-[120px] opacity-25 pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-4xl">
        <span className="bg-[#fec700] text-black font-black px-4 py-1.5 border-2 border-black text-sm uppercase tracking-widest mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          JOIN THE BODO
        </span>
        
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-white mb-6 font-headline leading-none">
          REVOLUTIONIZE <br />
          <span className="text-[#ff69c9] italic">YOUR CV.</span>
        </h2>
        
        <p className="text-lg md:text-xl max-w-xl text-gray-300 mb-12 font-body font-medium">
          Stop blending into the recruiter&apos;s trash bin. Build a resume that screams authority and gets you interviews.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6 w-full sm:w-auto justify-center">
          <Link
            href="/templates"
            className="bg-[#fec700] text-black font-black text-2xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,105,201,1)] hover:-translate-y-1 hover:-translate-x-1 hover:shadow-[12px_12px_0px_0px_rgba(255,105,201,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all font-headline uppercase"
          >
            CHOOSE A TEMPLATE
          </Link>
        </div>
      </div>
    </section>
  );
}