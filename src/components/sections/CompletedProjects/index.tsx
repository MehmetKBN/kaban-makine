'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '@/data/projects';

export const CompletedProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container-custom">
        <h2 className="heading-2 text-foreground mb-12">Tamamlanan Projeler</h2>
        
        <div className="relative max-w-4xl mx-auto space-y-8">
          {/* Slider */}
          <div className="overflow-hidden relative h-[400px] bg-card rounded-lg border border-border">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col md:flex-row"
              >
                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-48 md:h-full">
                  <Image
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {projects[currentIndex].category && (
                    <span className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {projects[currentIndex].category}
                    </span>
                  )}
                </div>

                {/* Content Section */}
                <div className="w-full md:w-1/2 p-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-foreground">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-foreground/80 text-sm">
                      {projects[currentIndex].description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    {projects[currentIndex].date && (
                      <p className="text-muted-foreground text-sm">
                        {new Date(projects[currentIndex].date).toLocaleDateString('tr-TR', {
                          year: 'numeric',
                          month: 'long'
                        })}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={prevSlide}
              className="group flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
              aria-label="Önceki proje"
            >
              <span className="hidden sm:inline">Önceki</span>
            </button>

            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-primary w-6' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  aria-label={`Proje ${index + 1}'e git`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="group flex items-center gap-2 text-sm font-medium text-foreground/60 hover:text-primary transition-colors"
              aria-label="Sonraki proje"
            >
              <span className="hidden sm:inline">Sonraki</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}; 