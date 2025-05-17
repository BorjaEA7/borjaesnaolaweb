import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-background to-secondary/30 rounded-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 font-geist-sans">
          Crafting Digital Experiences
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80 mb-10">
          We are a creative studio passionate about designing and developing beautiful,
          functional, and user-centric digital solutions. Explore our work and see how
          we can bring your vision to life.
        </p>
        <div className="space-x-4">
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <Link href="/#portfolio">View Portfolio</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
            <Link href="/contact" aria-disabled="true" tabIndex={-1}>Get In Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
