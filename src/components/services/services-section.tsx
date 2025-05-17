
"use client";

import React, { useState } from 'react';
import ServiceCard from './service-card';
import ServiceDetailModal from './service-detail-modal';
import { serviceItems, type ServiceItem } from '@/data/service-items';

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleServiceClick = (service: ServiceItem) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedService(null), 300); // Delay clearing for animation
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary font-geist-sans">Servicios</h2>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl mx-auto">
            Ofrecemos una gama de servicios diseñados para potenciar tu presencia digital y ayudarte a alcanzar tus objetivos.
          </p>
        </div>

        {serviceItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceItems.map((item) => (
              <ServiceCard
                key={item.id}
                service={item}
                onServiceClick={handleServiceClick}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No hay servicios disponibles en este momento.</p>
          </div>
        )}

        <ServiceDetailModal
          service={selectedService}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    </section>
  );
}
