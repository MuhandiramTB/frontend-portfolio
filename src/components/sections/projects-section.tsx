
"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react"; // Removed Sparkles, Loader2, AlertTriangle
import React, { useEffect, useState } from 'react';
// Removed Dialog related imports
// Removed suggestProjectIdea and ProjectIdeaOutput imports
// Removed useToast import

export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  // Removed AI related state variables (isIdeaDialogOpen, generatedIdea, isGenerating, generationError)

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  // Removed handleGenerateIdea function

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
          {/* AI Idea Suggester Dialog and Trigger Button Removed */}
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project, index) => (
            <Card 
              key={project.id} 
              className={`flex transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: mounted ? `${0.4 + index * 0.15}s` : '0s' }}
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill={true}
                  style={{objectFit: "cover"}}
                  data-ai-hint={project.imageAiHint}
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground">{project.name}</CardTitle>
                <CardDescription className="text-muted-foreground h-16 overflow-hidden text-ellipsis">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-end space-x-2 border-t pt-4">
                {project.githubLink && (
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> GitHub
                    </Link>
                  </Button>
                )}
                {project.liveLink && project.liveLink !== '#' && (
                  <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                    <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
