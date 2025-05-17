import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] w-full flex items-end text-white">
      {/* Background Image */}
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Studio digital creativo"
        layout="fill"
        objectFit="cover"
        className="-z-10"
        data-ai-hint="modern office"
        priority // Good to add for LCP images
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8">
          {/* Text Content - Bottom Left */}
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-montserrat">
              Crafting Digital Experiences
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl text-gray-200 mb-10 md:mb-0">
              We are a creative studio passionate about designing and developing beautiful,
              functional, and user-centric digital solutions. Explore our work and see how
              we can bring your vision to life.
            </p>
          </div>
          
          {/* Button - Bottom Right */}
          <div className="md:w-auto flex md:justify-end w-full">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/80 text-primary-foreground w-full md:w-auto"
            >
              <Link href="/#contact">Contáctanos</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
