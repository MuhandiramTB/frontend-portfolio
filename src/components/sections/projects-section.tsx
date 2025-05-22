"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import React, { useEffect, useState } from 'react';

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="projects" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={`mb-12 text-center ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: mounted ? '0.2s' : '0s' }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Featured Projects
          </h2>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group relative flex transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: mounted ? `${0.4 + index * 0.15}s` : '0s' }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative h-60 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill={true}
                  style={{objectFit: "cover"}}
                  data-ai-hint={project.imageAiHint}
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground h-16 overflow-hidden text-ellipsis group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="text-xs transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                <a 
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground h-9 px-3 transition-all duration-300 hover:scale-105"
                >
                  <Github className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  GitHub
                </a>
                <a 
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-accent text-accent-foreground hover:bg-accent/90 h-9 px-3 transition-all duration-300 hover:scale-105"
                >
                  <ExternalLink className="mr-2 h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  View Demo
                </a>
              </CardFooter>
              {hoveredProject === project.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent animate-pulse" />
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
