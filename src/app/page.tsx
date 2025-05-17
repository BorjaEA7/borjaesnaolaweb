import Hero from "@/components/layout/hero";
import PortfolioSection from "@/components/portfolio/portfolio-section";

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-20">
      <Hero />
      <PortfolioSection />
      {/* You can add more sections here like About, Services, etc. */}
    </div>
  );
}
