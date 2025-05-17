import Hero from "@/components/layout/hero";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import AboutMeSection from "@/components/about/about-me-section";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-28">
      <Hero />
      <PortfolioSection />
      <AboutMeSection />
      {/* You can add more sections here like Services, etc. */}
    </div>
  );
}
