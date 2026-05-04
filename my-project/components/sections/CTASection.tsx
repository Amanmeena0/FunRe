import Link from "next/link";

export default function CTASection() {
  return (
    <section className="bg-primary-container py-32 px-8 flex flex-col items-center text-center">
      <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-black mb-12 font-headline">
        REVOLUTIONIZE <br />
        YOUR CV.
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <Link
          href="/templates"
          className="bg-black text-white font-black text-2xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(255,105,201,1)] hover:-translate-y-1 transition-transform font-headline uppercase"
        >
          CHOOSE A TEMPLATE
        </Link>
        <Link
          href="/examples"
          className="bg-white text-black font-black text-2xl px-12 py-6 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform font-headline uppercase"
        >
          SEE EXAMPLES
        </Link>
      </div>
    </section>
  );
}