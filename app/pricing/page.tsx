"use client";

import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import MaterialIcon from "@/components/ui/Materialcon";
import Link from "next/link";

const plans = [
  {
    name: "The Cadet",
    price: "$0",
    period: "forever",
    description: "Get started with the basics. Perfect for starting a scene.",
    features: [
      "1 Retro Brutalist Template",
      "Standard PDF Exports",
      "Local Browser Save",
      "Riot Watermark included",
    ],
    buttonText: "Start for Free",
    colorClass: "bg-white",
    shadowClass: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,179,134,1)]",
    popular: false,
  },
  {
    name: "The Rebel",
    price: "$19",
    period: "one-time",
    description: "Full arsenal. Unlock everything you need to obliterate filters.",
    features: [
      "Access all 4+ Premium Templates",
      "Unlimited High-Res PDF Exports",
      "Cloud Database Backup",
      "No Watermark / Ad-Free",
      "Custom Domain hosting",
      "Priority Email Support",
    ],
    buttonText: "Claim Your Arsenal",
    colorClass: "bg-[#fec700]",
    shadowClass: "shadow-[8px_8px_0px_0px_rgba(255,105,201,1)] hover:shadow-[12px_12px_0px_0px_rgba(171,31,130,1)] border-4",
    popular: true,
  },
  {
    name: "The Warlord",
    price: "$49",
    period: "one-time",
    description: "Personal advisory. Have our design leads build it with you.",
    features: [
      "Everything in Rebel tier",
      "30-min live review call",
      "Custom template bespoke tweak",
      "Personalized copywriting assist",
      "1-year hosting validation",
    ],
    buttonText: "Hire a Mercenary",
    colorClass: "bg-white",
    shadowClass: "shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,105,201,1)]",
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <TopNav activePage="pricing" />
      
      <main 
        className="pt-12 px-8 pb-32 relative overflow-hidden bg-[#f9f9f9]"
        style={{
          backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* Glow backdrop */}
        <div className="absolute top-20 right-0 w-[450px] h-[450px] bg-[#ffd8ea] rounded-full blur-[120px] opacity-40 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <div className="mb-20 text-center flex flex-col items-center">
            <span className="bg-[#ff69c9] text-black px-4 py-1.5 font-black text-xs uppercase tracking-widest border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] w-fit mb-6">
              WAR CHEST
            </span>
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9] mt-2 mb-6 font-headline text-black">
              Simple <span className="text-[#ab1f82] italic">Pricing.</span> <br />
              No Merciless Subs.
            </h1>
            <p className="text-xl max-w-xl font-medium leading-relaxed font-body text-gray-800">
              We hate monthly subscriptions. Pay once, own your resume templates forever. Simple as that.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map((plan) => (
              <div 
                key={plan.name} 
                className={`border-4 border-black p-8 transition-all duration-150 flex flex-col justify-between min-h-[600px] relative ${plan.colorClass} ${plan.shadowClass}`}
              >
                {plan.popular && (
                  <span className="absolute top-0 right-6 -translate-y-1/2 bg-[#ff69c9] text-black border-2 border-black text-xs font-black uppercase px-3 py-1 tracking-widest shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                    RECOMMENDED
                  </span>
                )}
                
                <div>
                  <h3 className="text-3xl font-black uppercase font-headline text-black mb-1">
                    {plan.name}
                  </h3>
                  <p className="text-gray-700 text-sm font-body mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="flex items-baseline gap-2 mb-8 border-b-2 border-black pb-6">
                    <span className="text-6xl font-black uppercase font-headline text-black">
                      {plan.price}
                    </span>
                    <span className="text-sm font-mono text-gray-600 font-bold uppercase">
                      / {plan.period}
                    </span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-3 font-bold text-sm text-black">
                        <div className="bg-[#00B386] p-0.5 border border-black rounded-full text-white flex items-center justify-center">
                          <MaterialIcon icon="check" size={14} />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/editor"
                  className={`w-full py-4 border-2 border-black font-black uppercase tracking-widest text-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all text-sm block ${
                    plan.popular 
                      ? "bg-black text-white hover:bg-white hover:text-black" 
                      : "bg-white text-black hover:bg-black hover:text-white"
                  }`}
                >
                  {plan.buttonText}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer fixed={false} />
    </>
  );
}
