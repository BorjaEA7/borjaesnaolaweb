
import Hero from "@/components/layout/hero";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import AboutMeSection from "@/components/about/about-me-section";
import ServicesSection from "@/components/services/services-section";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28">
      <Hero />
      <PortfolioSection />
      <AboutMeSection />
      <ServicesSection />
      {/* You can add more sections here */}
    </div>
  );
}
