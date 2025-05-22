"use client";

import { techStackData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from 'react';

export function TechStackSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredTech, setHoveredTech] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={`mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: mounted ? '0.2s' : '0s' }}
        >
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {techStackData.map((tech, index) => (
            <Card 
              key={tech.id} 
              className={`group relative transform p-1 shadow-md transition-all duration-300 hover:shadow-xl hover:scale-110 hover:z-10 ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: mounted ? `${0.4 + index * 0.1}s` : '0s' }}
              onMouseEnter={() => setHoveredTech(tech.id)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              <CardContent className="flex flex-col items-center justify-center space-y-2 p-6 aspect-square">
                <div className="relative">
                  <tech.icon className="h-12 w-12 text-accent transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <p className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </p>
                {hoveredTech === tech.id && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-accent rounded-full animate-pulse" />
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
