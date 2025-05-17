
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import type { PortfolioItem } from '@/data/portfolio-items'; // Assuming PortfolioItem type is exported

interface ProjectCardProps {
  project: PortfolioItem;
  onProjectClick: (project: PortfolioItem) => void;
}

export default function ProjectCard({ project, onProjectClick }: ProjectCardProps) {
  return (
    <Card 
      className="group relative flex flex-col h-[450px] md:h-[500px] overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg cursor-pointer text-white"
      onClick={() => onProjectClick(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onProjectClick(project);}}
      aria-label={`View details for ${project.title}`}
    >
      <Image
        src={project.imageUrl}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out -z-10"
        data-ai-hint={project.imageHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/90 group-hover:via-black/50 transition-colors duration-300"></div>
      
      <CardContent className="relative z-10 p-6 flex flex-col justify-end h-full mt-auto">
        <div>
          <CardTitle className="text-2xl lg:text-3xl font-semibold mb-2 font-montserrat">{project.title}</CardTitle>
          <CardDescription className="text-gray-200 line-clamp-2 sm:line-clamp-3 font-opensans mb-3">
            {project.description}
          </CardDescription>
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.slice(0, 3).map(tag => ( // Show max 3 tags for brevity
                <span 
                  key={tag} 
                  className="text-xs bg-white/20 backdrop-blur-sm text-white px-2.5 py-1 rounded-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

    