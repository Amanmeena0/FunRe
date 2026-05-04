import Image from "next/image";
import MaterialIcon from "../ui/Materialcon";

const features = [
  {
    icon: "bolt",
    bgClass: "bg-secondary-container",
    title: "Fast as Hell",
    description: "Generate your draft in under 2 minutes. No fluff.",
    filled: true,
  },
  {
    icon: "security",
    bgClass: "bg-primary-container",
    title: "Zero Tracking",
    description: "Your data is yours. We don't sell your soul to recruiters.",
    filled: true,
  },
];

export default function FeatureSection() {
  return (
    <section className="grid md:grid-cols-2 gap-0 border-y-4 border-black bg-white">
      {/* Left Column */}
      <div className="p-12 md:p-24 border-b-4 md:border-b-0 md:border-r-4 border-black">
        <h2 className="text-5xl md:text-7xl font-black uppercase leading-none mb-8 font-headline">
          Stop <br />
          Asking <br />
          For Permission.
        </h2>
        <p className="text-xl mb-10 font-body">
          We don&apos;t use 1px borders. We don&apos;t use subtle shadows. We
          use Tonal Blocks and 4px heavy outlines because your career is a
          statement, not a secret.
        </p>
        <div className="space-y-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex items-start gap-4">
              <div
                className={`${feature.bgClass} border-2 border-black p-2 shrink-0`}
              >
                <MaterialIcon
                  icon={feature.icon}
                  filled={feature.filled}
                />
              </div>
              <div>
                <span className="font-black uppercase text-lg block font-headline">
                  {feature.title}
                </span>
                <span className="text-sm">{feature.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Testimonial */}
      <div className="bg-[#1b1b1b] relative overflow-hidden flex items-center justify-center p-12">
        <div className="relative z-10 text-white transform rotate-3 bg-primary p-8 border-4 border-black shadow-[12px_12px_0px_0px_rgba(254,199,0,1)] max-w-sm">
          <div className="font-black text-4xl mb-4 font-headline">
            &ldquo;Best career move I ever made. Got 5 interviews in 48
            hours.&rdquo;
          </div>
          <div className="font-label uppercase font-bold tracking-widest">
            — Alex D., Creative Director
          </div>
        </div>
        <div className="absolute top-0 right-0 w-full h-full opacity-20">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxXoWzbU_YmDp34gKP8_LlNrhN_a7JieiZsXx0cKzsYq3nB51UuGcFKMCczLtGLGhe9vBfCmzP_InTliZA6p3cI162sA7BZflOJh2c5lOAZodnGvK0SEWUxgGfHctxUZV2GkjBkAvWq5zDTIJZS0KNiRYKmNkUjFygUgCAYXKb3pAJlaL5s77I2zMLHomvvZaPRKNjzUyNlOXTkXMBxil7P1rb-oAcePmC6FMczhwsqkF8Tj8LepsjfF6V_F4jpThxawfpGwWaFxo"
            alt="Abstract vibrant purple and pink liquid swirl gradient"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}