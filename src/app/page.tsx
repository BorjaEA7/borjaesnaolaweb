
import Hero from "@/components/layout/hero";
import PortfolioSection from "@/components/portfolio/portfolio-section";
import AboutMeSection from "@/components/about/about-me-section";
import ServicesSection from "@/components/services/services-section";
import ContactSection from "@/components/contact/contact-section";

export default function Home() {
  return (
    <div className="space-y-12">
      <Hero />
      <PortfolioSection />
      <AboutMeSection />
      <ServicesSection />
      <ContactSection />
    </div>
  );
}
