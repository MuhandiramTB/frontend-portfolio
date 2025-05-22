
"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Sparkles, Loader2, AlertTriangle } from "lucide-react";
import React, { useEffect, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { suggestProjectIdea, type ProjectIdeaOutput } from "@/ai/flows/project-idea-flow"; // Will create this
import { useToast } from "@/hooks/use-toast";


export function ProjectsSection() {
  const [mounted, setMounted] = useState(false);
  const [isIdeaDialogOpen, setIsIdeaDialogOpen] = useState(false);
  const [generatedIdea, setGeneratedIdea] = useState<ProjectIdeaOutput | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);
  const { toast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); 
    return () => clearTimeout(timer);
  }, []);

  const handleGenerateIdea = async () => {
    setIsGenerating(true);
    setGeneratedIdea(null);
    setGenerationError(null);
    try {
      const idea = await suggestProjectIdea({}); // Pass empty object if no input schema defined for now
      setGeneratedIdea(idea);
    } catch (error) {
      console.error("Failed to generate project idea:", error);
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred.";
      setGenerationError(`Failed to generate idea. ${errorMessage}`);
      toast({
        variant: "destructive",
        title: "Error Generating Idea",
        description: errorMessage,
      });
    } finally {
      setIsGenerating(false);
    }
  };

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
          <Dialog open={isIdeaDialogOpen} onOpenChange={setIsIdeaDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="mt-6 bg-accent text-accent-foreground hover:bg-accent/90 shadow-md">
                <Sparkles className="mr-2 h-5 w-5" />
                Spark a New Project Idea with AI
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
              <DialogHeader>
                <DialogTitle className="flex items-center">
                  <Sparkles className="mr-2 h-6 w-6 text-primary" />
                  AI Project Idea Suggester
                </DialogTitle>
                <DialogDescription>
                  Let AI spark your creativity! Click the button below to generate a unique project idea.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                {isGenerating && (
                  <div className="flex flex-col items-center justify-center space-y-2 p-8 rounded-lg bg-muted/50">
                    <Loader2 className="h-12 w-12 animate-spin text-primary" />
                    <p className="text-muted-foreground">Generating your next big idea...</p>
                  </div>
                )}
                {generationError && (
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-destructive/10 text-destructive border border-destructive/30">
                    <AlertTriangle className="h-8 w-8" />
                    <p className="font-semibold">Oops! Something went wrong.</p>
                    <p className="text-sm text-center">{generationError}</p>
                  </div>
                )}
                {generatedIdea && !isGenerating && (
                  <Card className="shadow-lg animate-global-fade-in-up">
                    <CardHeader>
                      <CardTitle className="text-primary">{generatedIdea.projectName}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{generatedIdea.projectDescription}</p>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">Suggested Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {generatedIdea.suggestedTech.map((tech, idx) => (
                            <Badge key={idx} variant="secondary">{tech}</Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
              <DialogFooter>
                <Button onClick={handleGenerateIdea} disabled={isGenerating} className="w-full sm:w-auto">
                  {isGenerating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Generating...
                    </>
                  ) : generatedIdea ? "Generate Another Idea" : "Generate Idea"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
