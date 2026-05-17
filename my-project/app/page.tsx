import TopNav from "@/components/layout/TopNav";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/MainPageSections/HeroSection";
import TemplateCarousel from "@/components/MainPageSections/TemplateCarousel";
import FeatureSection from "@/components/MainPageSections/FeatureSection";
import CTASection from "@/components/MainPageSections/CTASection";

export default function HomePage() {
  return (
    <>
      <TopNav />
      <main >
        <HeroSection />
        <TemplateCarousel />
        <FeatureSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}