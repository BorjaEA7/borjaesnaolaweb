
"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { ServiceItem, LogoItem } from '@/data/service-items';
import { X, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect, useCallback } from 'react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const LOGOS_TO_SHOW = 3; // Number of logos visible at once
const AUTOSCROLL_INTERVAL = 5000; // Milliseconds

export default function ServiceDetailModal({ service, isOpen, onClose }: ServiceDetailModalProps) {
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  const safeLogoGallery = service?.logoGallery || [];

  const nextLogo = useCallback(() => {
    setCurrentLogoIndex((prevIndex) =>
      safeLogoGallery.length > 0 ? (prevIndex + 1) % safeLogoGallery.length : 0
    );
  }, [safeLogoGallery.length]);

  const prevLogo = () => {
    setCurrentLogoIndex((prevIndex) =>
      safeLogoGallery.length > 0 ? (prevIndex - 1 + safeLogoGallery.length) % safeLogoGallery.length : 0
    );
  };

  useEffect(() => {
    if (!isOpen || safeLogoGallery.length <= LOGOS_TO_SHOW) return;

    const timer = setInterval(nextLogo, AUTOSCROLL_INTERVAL);
    return () => clearInterval(timer);
  }, [isOpen, nextLogo, safeLogoGallery.length]);

  if (!service) return null;

  const visibleLogos: LogoItem[] = [];
  if (safeLogoGallery.length > 0) {
    for (let i = 0; i < LOGOS_TO_SHOW; i++) {
      visibleLogos.push(safeLogoGallery[(currentLogoIndex + i) % safeLogoGallery.length]);
    }
  }
  
  const canScroll = safeLogoGallery.length > LOGOS_TO_SHOW;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] flex flex-col p-0">
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

          <div className="space-y-6">
            <p className="text-base text-foreground/80 whitespace-pre-line">
              {service.extendedDescription}
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

            {safeLogoGallery.length > 0 && (
              <div className="pt-6 border-t border-border">
                <h3 className="text-xl font-semibold text-primary mb-4 text-center">Tecnologías y Herramientas</h3>
                <div className="relative flex items-center justify-center">
                  {canScroll && (
                    <Button variant="outline" size="icon" onClick={prevLogo} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 shrink-0">
                      <ChevronLeft className="h-6 w-6" />
                      <span className="sr-only">Previous Logos</span>
                    </Button>
                  )}
                  <div className="flex space-x-4 overflow-hidden justify-center px-12">
                    {visibleLogos.map((logo) => (
                      <div key={logo.id} className="flex flex-col items-center text-center p-2">
                        <div className="relative w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] mb-2 rounded-md overflow-hidden bg-muted/50 flex items-center justify-center p-2 shadow-sm">
                          <Image
                            src={logo.url}
                            alt={logo.alt}
                            width={100}
                            height={100}
                            className="object-contain"
                            data-ai-hint={logo.hint}
                          />
                        </div>
                         <p className="text-xs text-muted-foreground truncate w-24">{logo.alt}</p>
                      </div>
                    ))}
                  </div>
                   {canScroll && (
                    <Button variant="outline" size="icon" onClick={nextLogo} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-10 w-10 shrink-0">
                      <ChevronRight className="h-6 w-6" />
                      <span className="sr-only">Next Logos</span>
                    </Button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
