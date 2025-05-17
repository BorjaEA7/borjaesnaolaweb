
"use client";

import Image from 'next/image';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { PortfolioItem, GalleryImage } from '@/data/portfolio-items';
import { X } from 'lucide-react';

interface ProjectDetailModalProps {
  project: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-3xl max-h-[90vh] flex flex-col">
        <DialogHeader className="flex-shrink-0">
          <DialogTitle className="text-3xl font-bold text-primary mb-2">{project.title}</DialogTitle>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map(tag => (
                <span 
                  key={tag} 
                  className="text-xs bg-secondary text-secondary-foreground px-2.5 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </DialogHeader>
        
        <div className="flex-grow overflow-y-auto pr-2 space-y-6">
          <DialogDescription className="text-base text-foreground/80 whitespace-pre-line">
            {project.extendedDescription}
          </DialogDescription>

          {project.galleryImages && project.galleryImages.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold text-primary mb-3">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.galleryImages.map((image) => (
                  <div key={image.id} className="aspect-video relative rounded-md overflow-hidden shadow-md">
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={image.hint}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.projectUrl && project.projectUrl !== "#" && (
             <Button asChild variant="outline" className="mt-6 border-primary text-primary hover:bg-primary/5">
                <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    Visit Project Site
                </a>
            </Button>
          )}
        </div>
        
        <DialogClose asChild className="mt-auto flex-shrink-0">
          <Button variant="ghost" size="icon" className="absolute top-4 right-4">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}

    