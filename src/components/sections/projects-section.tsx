
"use client";

import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          Featured Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projectsData.map((project) => (
            <Card key={project.id} className="flex transform flex-col overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02]">
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={project.name}
                  layout="fill"
                  objectFit="cover"
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
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </Link>
                </Button>
                <Button variant="default" size="sm" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
