import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TemplateCarousel from "@/components/sections/TemplateCarousel";
import FeatureSection from "@/components/sections/FeatureSection";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main className="pt-24 pb-20">
        <HeroSection />
        <TemplateCarousel />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}