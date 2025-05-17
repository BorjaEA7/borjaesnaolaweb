
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { ServiceItem } from '@/data/service-items';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  onServiceClick: (service: ServiceItem) => void;
}

export default function ServiceCard({ service, onServiceClick }: ServiceCardProps) {
  return (
    <Card
      className="group flex flex-col h-full shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg cursor-pointer overflow-hidden bg-card text-card-foreground"
      onClick={() => onServiceClick(service)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onServiceClick(service); }}
      aria-label={`View details for ${service.title}`}
    >
      <CardHeader className="items-center p-6">
        <div className="relative w-[150px] h-[150px] mb-4 rounded-full overflow-hidden shadow-md border-4 border-secondary group-hover:border-primary transition-colors">
          <Image
            src={service.imageUrl}
            alt={service.title}
            width={150}
            height={150}
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            data-ai-hint={service.imageHint}
          />
        </div>
        <CardTitle className="text-xl lg:text-2xl font-semibold text-center text-primary font-montserrat">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="p-6 pt-0 flex-grow flex flex-col">
        <p className="text-sm text-foreground/80 mb-4 text-center flex-grow">
          {service.description}
        </p>
        <ul className="space-y-2 text-sm text-foreground/70">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-accent mr-2 mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
