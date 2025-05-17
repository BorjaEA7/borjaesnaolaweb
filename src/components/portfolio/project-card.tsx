import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
  projectUrl?: string;
  tags?: string[];
}

export default function ProjectCard({ title, description, imageUrl, imageHint, projectUrl, tags }: ProjectCardProps) {
  return (
    <Card className="group flex flex-col h-full overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out rounded-lg bg-card text-card-foreground">
      <CardHeader className="p-0">
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            width={600}
            height={450}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300 ease-in-out"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="text-2xl font-semibold mb-2 font-montserrat text-primary">{title}</CardTitle>
        <CardDescription className="text-foreground/80 line-clamp-3 font-opensans">{description}</CardDescription>
        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map(tag => (
              <span 
                key={tag} 
                className="text-xs bg-secondary/70 text-secondary-foreground px-2.5 py-1 rounded-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </CardContent>
      {projectUrl && (
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 hover:text-primary">
            <a href={projectUrl} target="_blank" rel="noopener noreferrer">
              View Project <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </CardFooter>
      )}
    </Card>
  );
}
