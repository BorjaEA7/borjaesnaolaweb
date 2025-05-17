
import ContactSection from '@/components/contact/contact-section';
import { siteConfig } from '@/config/site';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contacto - ${siteConfig.name}`,
  description: `Ponte en contacto con ${siteConfig.name} para hablar sobre tu próximo proyecto o resolver tus dudas.`,
};

export default function ContactoPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4 font-montserrat">Contáctanos</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Estamos listos para escuchar sobre tu proyecto y ayudarte a alcanzar tus objetivos digitales.
          Utiliza el formulario o contáctanos directamente.
        </p>
      </div>
      
      <ContactSection />

    </div>
  );
}
