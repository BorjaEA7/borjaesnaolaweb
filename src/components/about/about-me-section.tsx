
"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Quote, Linkedin, Palette, Code, TerminalSquare, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const AboutMeSection: React.FC = () => {
  const [animatedQuote, setAnimatedQuote] = useState('');
  const fullQuote = "“Design is not just what it looks like and feels like. Design is how it works.”";
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartAnimation(true);
          observer.unobserve(entry.target);
        }
      },
      {
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(quoteRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (startAnimation) {
      let index = 0;
      const intervalId = setInterval(() => {
        setAnimatedQuote((prev) => prev + fullQuote[index]);
        index++;
        if (index === fullQuote.length -1) {
          clearInterval(intervalId);
        }
      }, 50); 
      return () => clearInterval(intervalId);
    }
  }, [startAnimation, fullQuote]);

  const skills = [
    {
      icon: Palette,
      title: "Diseño UI/UX",
      description: "Creación de interfaces intuitivas y atractivas centradas en la experiencia del usuario.",
    },
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description: "Transformación de diseños en código interactivo y responsivo con las últimas tecnologías web.",
    },
    {
      icon: TerminalSquare,
      title: "Desarrollo Backend",
      description: "Construcción de la lógica de servidor robusta y escalable para potenciar aplicaciones web.",
    },
    {
      icon: BarChart3,
      title: "Estrategia Digital",
      description: "Asesoramiento y planificación para alcanzar objetivos de negocio a través de soluciones digitales.",
    }
  ];

  return (
    <section id="about-me" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start"> {/* Changed items-center to items-start */}
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none rounded-lg overflow-hidden shadow-xl group">
              <Image
                src="https://placehold.co/400x500.png"
                alt="[Tu Nombre] - Professional Portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
                className="object-cover"
                data-ai-hint="portrait person"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
              <div className="absolute top-0 left-0 p-4 md:p-6 text-white">
                <h3 className="text-2xl lg:text-3xl font-semibold font-montserrat">[Tu Nombre Completo]</h3>
                <p className="text-md lg:text-lg font-opensans text-gray-200">[Tu Puesto de Trabajo]</p>
              </div>
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 font-montserrat">
              Sobre Mí
            </h2>
            <p className="text-lg text-foreground/80 mb-6">
              Hola, soy [Tu Nombre], un apasionado diseñador y desarrollador con la misión de crear
              experiencias digitales que no solo sean visualmente atractivas, sino también intuitivas
              y eficientes. Con [X] años de experiencia en la industria, he tenido el privilegio de
              trabajar en una amplia gama de proyectos, desde startups innovadoras hasta empresas consolidadas.
            </p>
            <p className="text-lg text-foreground/80 mb-8">
              Mi enfoque se centra en la colaboración y la comprensión profunda de las necesidades de mis clientes
              para transformar sus ideas en realidades digitales impactantes. Creo firmemente en el poder del
              diseño para resolver problemas y comunicar mensajes de manera efectiva.
            </p>

            <div className="space-y-6 mb-10">
              <div className="p-6 border-l-4 border-accent bg-secondary/30 rounded-r-lg shadow-sm">
                <Quote className="h-8 w-8 text-accent mb-2 opacity-70" />
                <p ref={quoteRef} className="text-xl italic text-foreground/90 font-medium min-h-[3em]">
                  {animatedQuote}
                  {!startAnimation && <span className="opacity-0">{fullQuote}</span>}
                </p>
              </div>

              <blockquote className="p-4 border-l-4 border-primary/50 bg-muted/50 rounded-r-lg">
                <p className="text-md italic text-foreground/70">
                  "La simplicidad es la máxima sofisticación." – Leonardo da Vinci
                </p>
              </blockquote>
            </div>
            
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/5">
              <Link href="https://www.linkedin.com/in/borja-esnaola/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                Descubre más sobre mí y conecta conmigo.
              </Link>
            </Button>
          </div>
        </div>

        {/* Highlighted Skills Section */}
        <div className="mt-16 md:mt-20">
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-8 md:mb-12 text-center font-montserrat">
            Mis Competencias Destacadas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-card text-card-foreground shadow-sm border border-border/70">
                <CardHeader className="items-center text-center pt-6 pb-3">
                  <skill.icon className="h-10 w-10 text-accent mb-3" />
                  <CardTitle className="text-lg font-semibold font-montserrat text-primary/90">{skill.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center pb-6 px-4">
                  <p className="text-sm text-foreground/75">
                    {skill.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
