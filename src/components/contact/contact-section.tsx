
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left Column: Text Content */}
        <div className="space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-montserrat">
            Hablemos de tu proyecto
          </h2>
          <p className="text-lg text-foreground/80">
            Si tienes una idea en mente, una consulta o simplemente quieres saludar, no dudes en ponerte en contacto. Estoy aquí para ayudarte a transformar tus conceptos en realidades digitales impactantes.
          </p>
          <p className="text-lg text-foreground/80">
            Completa el formulario o utiliza los datos de contacto directo. ¡Espero con ansias saber de ti!
          </p>
          <div className="space-y-4 pt-4">
            <div>
              <h3 className="text-md font-semibold text-primary mb-1">CORREO ELECTRÓNICO</h3>
              <Link href="mailto:info@zaguanestudio.com" className="text-lg text-foreground hover:text-primary transition-colors flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                info@zaguanestudio.com
              </Link>
            </div>
            <div>
              <h3 className="text-md font-semibold text-primary mb-1">TELÉFONO</h3>
              <Link href="tel:+34688660143" className="text-lg text-foreground hover:text-primary transition-colors flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                &#40;+34&#41; 688 660 143
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column: Form Placeholder */}
        <div className="bg-card p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-primary mb-6 text-center font-montserrat">Envíanos un mensaje</h3>
          <div className="text-center text-muted-foreground text-lg border-2 border-dashed border-border rounded-md p-12 min-h-[200px] flex items-center justify-center">
            <p>Embebed form here</p>
          </div>
          {/* You can add a note about response time or privacy if needed */}
          <p className="text-xs text-muted-foreground mt-6 text-center">
            Responderemos a tu mensaje lo antes posible. Tu información está segura con nosotros.
          </p>
        </div>
      </div>
    </section>
  );
}
