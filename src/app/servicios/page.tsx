
import ServicesSection from '@/components/services/services-section';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function ServiciosPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">Nuestros Servicios</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Descubre cómo podemos ayudarte a transformar tus ideas en realidades digitales impactantes. 
          Explora nuestros servicios detallados a continuación.
        </p>
      </div>
      
      {/* Re-using the ServicesSection component for consistency */}
      <ServicesSection />

      <div className="mt-16 text-center">
        <p className="text-xl text-foreground/90 mb-6">
          ¿Listo para empezar tu próximo proyecto o tienes alguna pregunta?
        </p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="/contacto">Contáctanos</Link>
        </Button>
      </div>
    </div>
  );
}
