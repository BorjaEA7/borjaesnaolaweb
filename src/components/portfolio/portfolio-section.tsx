
"use client";

import React, { useState, useMemo } from 'react';
import ProjectCard from './project-card';
import ProjectDetailModal from './project-detail-modal';
import { portfolioItems, type PortfolioItem } from '@/data/portfolio-items';
import { Button } from '@/components/ui/button';
import { Tag } from 'lucide-react';

export default function PortfolioSection() {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    portfolioItems.forEach(item => {
      item.tags?.forEach(tag => tagsSet.add(tag));
    });
    return Array.from(tagsSet).sort();
  }, []);

  const filteredProjects = useMemo(() => {
    if (!activeTag) {
      return portfolioItems;
    }
    return portfolioItems.filter(item => item.tags?.includes(activeTag));
  }, [activeTag]);

  const handleProjectClick = (project: PortfolioItem) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing selectedProject to allow modal to animate out
    setTimeout(() => setSelectedProject(null), 300); 
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary font-geist-sans">Our Recent Work</h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
          Discover a selection of projects that showcase our passion for creativity and technical excellence.
        </p>
      </div>

      {allTags.length > 0 && (
        <div className="mb-10 flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4">
           <Button
            variant={!activeTag ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveTag(null)}
            className={`transition-all duration-200 ${!activeTag ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/5'}`}
          >
            All Projects
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeTag === tag ? 'default' : 'outline'}
              size="sm"
              onClick={() => setActiveTag(tag)}
              className={`transition-all duration-200 ${activeTag === tag ? 'bg-primary text-primary-foreground' : 'border-primary text-primary hover:bg-primary/5'}`}
            >
              <Tag className="mr-2 h-4 w-4 opacity-80" /> {tag}
            </Button>
          ))}
        </div>
      )}

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <ProjectCard
              key={item.id}
              project={item}
              onProjectClick={handleProjectClick}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-xl text-muted-foreground">No projects found for the selected tag.</p>
        </div>
      )}

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}

    