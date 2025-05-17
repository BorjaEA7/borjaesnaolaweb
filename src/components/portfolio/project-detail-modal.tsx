
"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { PortfolioItem, GalleryImage } from '@/data/portfolio-items';
import { X, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const heroImgSrc = project.heroImageUrl || (project.galleryImages && project.galleryImages.length > 0 ? project.galleryImages[0].url : "https://placehold.co/1200x600.png");
  const heroImgAlt = project.title + " hero image";
  const heroImgHint = project.heroImageHint || (project.galleryImages && project.galleryImages.length > 0 ? project.galleryImages[0].hint : "project image");

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-4xl max-h-[90vh] flex flex-col p-0">
        <DialogClose asChild className="z-50">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4 bg-background/70 hover:bg-background/90">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>

        <div className="flex-grow overflow-y-auto">
          {/* Hero Section */}
          <DialogHeader className="relative p-0">
            <div className="aspect-[16/7] md:aspect-[16/6] w-full relative overflow-hidden">
              <Image
                src={heroImgSrc}
                alt={heroImgAlt}
                fill
                className="object-cover"
                data-ai-hint={heroImgHint}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
            </div>
            <div className="absolute bottom-0 left-0 p-6 md:p-8 text-white w-full">
              <DialogTitle className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-md">
                {project.title}
              </DialogTitle>
              {project.tags && project.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-sm border-none"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </DialogHeader>

          {/* Main Content Area */}
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column: Extended Description */}
            <div className="md:col-span-2 space-y-4">
              <p className="text-base text-foreground/80 whitespace-pre-line">
                {project.extendedDescription}
              </p>
            </div>

            {/* Right Column: Metadata */}
            <div className="md:col-span-1 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Servicios</h3>
                <ul className="space-y-1">
                  {project.services.map(service => (
                    <li key={service} className="text-sm text-foreground">{service}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Cliente</h3>
                <p className="text-sm text-foreground">{project.client}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Año</h3>
                <p className="text-sm text-foreground">{project.year}</p>
              </div>
              {project.projectUrl && project.projectUrl !== "#" && (
                 <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5">
                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                        Visit Project Site <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                </Button>
              )}
            </div>
          </div>

          {/* Gallery Section */}
          {project.galleryImages && project.galleryImages.length > 0 && (
            <div className="p-6 md:p-8 border-t border-border">
              <h3 className="text-2xl font-semibold text-primary mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {project.galleryImages.map((image) => (
                  <div key={image.id} className="aspect-video relative rounded-md overflow-hidden shadow-md group">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      data-ai-hint={image.hint}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
