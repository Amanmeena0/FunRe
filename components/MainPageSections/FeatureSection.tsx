import Image from "next/image";
import MaterialIcon from "../ui/Materialcon";

const features = [
  {
    icon: "bolt",
    bgClass: "bg-[#fec700]",
    title: "Fast as Hell",
    description: "Generate your draft in under 2 minutes. No fluff.",
    filled: true,
  },
  {
    icon: "security",
    bgClass: "bg-[#ff69c9]",
    title: "Zero Tracking",
    description: "Your data is yours. We don't sell your soul to recruiters.",
    filled: true,
  },
  {
    icon: "psychology",
    bgClass: "bg-[#00B386]",
    title: "ATS-Destroyer",
    description: "Engineered to pass AI bots while locking human attention.",
    filled: true,
  },
  {
    icon: "download",
    bgClass: "bg-[#00d2ff]",
    title: "Raw Export",
    description: "High-resolution PDFs or host your resume online with custom domains.",
    filled: true,
  },
];

export default function FeatureSection() {
  return (
    <section className="border-t-4 border-black bg-white">
      {/* Manifesto Banner */}
      <div className="border-b-4 border-black bg-[#fec700] py-4 px-6 text-center font-headline uppercase font-black tracking-wider text-base md:text-lg text-black">
        ⚡ RESUME BODO MANIFESTO • BUILT TO BE SEEN • NO MORE BORING TEMPLATES ⚡
      </div>

      <div className="grid lg:grid-cols-2 gap-0 border-b-4 border-black">
        {/* Left Column: Manifesto & Feature Cards */}
        <div className="p-8 md:p-16 flex flex-col justify-center border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white">
          <span className="bg-[#ab1f82] text-white px-3 py-1 font-black text-xs uppercase tracking-widest w-fit mb-6 border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
            THE BODO WAY
          </span>
          <h2 className="text-4xl md:text-6xl font-black uppercase leading-[0.95] mb-6 font-headline text-black">
            Stop Asking <br />
            For Permission.
          </h2>
          <p className="text-lg md:text-xl text-gray-800 mb-10 font-body max-w-xl">
            We don&apos;t use 1px borders. We don&apos;t use subtle shadows. We
            use Tonal Blocks and 4px heavy outlines because your career is a
            statement, not a secret.
          </p>

          {/* 2x2 Feature Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="border-4 border-black bg-white p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all duration-150"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${feature.bgClass} border-2 border-black p-1.5 shrink-0 flex items-center justify-center`}>
                    <MaterialIcon
                      icon={feature.icon}
                      filled={feature.filled}
                      size={20}
                    />
                  </div>
                  <span className="font-black uppercase text-lg block font-headline text-black">
                    {feature.title}
                  </span>
                </div>
                <p className="text-sm font-body text-gray-700 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: High Fidelity Testimonial and Preview */}
        <div className="bg-[#1b1b1b] relative overflow-hidden flex flex-col justify-center items-center p-8 md:p-16 min-h-[500px]">
          {/* Custom Terminal Card Mockup */}
          <div className="relative z-10 w-full max-w-md border-4 border-black bg-black text-white shadow-[12px_12px_0px_0px_rgba(254,199,0,1)] overflow-hidden font-mono">
            {/* Terminal Header */}
            <div className="bg-[#2d2d2d] px-4 py-3 border-b-4 border-black flex justify-between items-center">
              <div className="flex gap-2">
                <div className="w-3.5 h-3.5 rounded-full bg-[#ff5f56]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#ffbd2e]" />
                <div className="w-3.5 h-3.5 rounded-full bg-[#27c93f]" />
              </div>
              <div className="text-xs uppercase font-bold text-gray-400">
                alex_d_feedback.sh
              </div>
              <div className="w-10" />
            </div>

            {/* Terminal Content */}
            <div className="p-6 space-y-4 text-sm">
              <div className="flex gap-2">
                <span className="text-[#00d2ff]">$</span>
                <span>npx run-resume --template=brutalist-bodo</span>
              </div>
              <div className="text-gray-400">
                ⚡ Initializing layout parsing... <br />
                🔥 Formatting with extreme contrast... <br />
                🚀 Outputting attention-grabbing PDF...
              </div>
              <div className="text-[#00B386] font-bold">
                ✓ STATUS: Success. Recruitment filters obliterated.
              </div>
              <div className="border-t-2 border-gray-800 my-4 pt-4">
                <p className="text-lg md:text-xl font-headline font-black uppercase text-[#ff69c9] tracking-tight leading-snug">
                  &ldquo;Best career move I ever made. Got 5 interviews in 48 hours.&rdquo;
                </p>
              </div>
              <div className="text-right text-[#fec700] font-bold text-xs uppercase tracking-widest">
                — Alex D., Creative Director
              </div>
            </div>
          </div>

          {/* Background image decoration */}
          <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXoWzbU_YmDp34gKP8_LlNrhN_a7JieiZsXx0cKzsYq3nB51UuGcFKMCczLtGLGhe9vBfCmzP_InTliZA6p3cI162sA7BZflOJh2c5lOAZodnGvK0SEWUxgGfHctxUZV2GkjBkAvWq5zDTIJZS0KNiRYKmNkUjFygUgCAYXKb3pAJlaL5s77I2zMLHomvvZaPRKNjzUyNlOXTkXMBxil7P1rb-oAcePmC6FMczhwsqkF8Tj8LepsjfF6V_F4jpThxawfpGwWaFxo"
              alt="Abstract vibrant purple and pink liquid swirl gradient"
              fill
              className="object-cover"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 80vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}