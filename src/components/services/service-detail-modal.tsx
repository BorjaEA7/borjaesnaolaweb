
"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ServiceItem } from '@/data/service-items';
import { X, CheckCircle } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  if (!service) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg max-h-[80vh] flex flex-col p-0">
        <DialogClose asChild className="z-50">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-background/70 hover:bg-background/90">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        <div className="flex-grow overflow-y-auto p-6 md:p-8">
          <DialogHeader className="text-center mb-6">
            <div className="relative w-[120px] h-[120px] mb-4 rounded-full overflow-hidden shadow-md mx-auto border-4 border-secondary">
              <Image
                src={service.imageUrl}
                alt={service.title}
                width={120}
                height={120}
                className="object-cover"
                data-ai-hint={service.imageHint}
                priority
              />
            </div>
            <DialogTitle className="text-2xl md:text-3xl font-bold text-primary">
              {service.title}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4">
            <p className="text-base text-foreground/80">
              {service.description}
            </p>
            
            <div>
              <h3 className="text-md font-semibold text-muted-foreground uppercase tracking-wider mb-3">Características Clave:</h3>
              <ul className="space-y-2 text-sm text-foreground/70">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Placeholder for more detailed content in the future */}
            <p className="text-sm text-muted-foreground italic pt-4">
              Más detalles sobre este servicio estarán disponibles próximamente.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
