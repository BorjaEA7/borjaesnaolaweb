
"use client";

import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import { Quote } from 'lucide-react';

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
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    if (quoteRef.current) {
      observer.observe(quoteRef.current);
    }

    return () => {
      if (quoteRef.current) {
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
      }, 50); // Adjust typing speed here (milliseconds)
      return () => clearInterval(intervalId);
    }
  }, [startAnimation, fullQuote]);

  return (
    <section id="about-me" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="relative aspect-[4/5] w-full max-w-sm mx-auto md:max-w-none rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://placehold.co/400x500.png"
                alt="Your Name - Professional Portrait"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 40vw, 400px"
                className="object-cover"
                data-ai-hint="portrait person"
              />
            </div>
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6 font-geist-sans">
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

            <div className="space-y-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
