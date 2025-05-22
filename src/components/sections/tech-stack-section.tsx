"use client";

import { techStackData } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";

export function TechStackSection() {
  return (
    <section id="tech-stack" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl">
          My Tech Stack
        </h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {techStackData.map((tech) => (
            <Card key={tech.id} className="transform p-1 shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardContent className="flex flex-col items-center justify-center space-y-2 p-6 aspect-square">
                <tech.icon className="h-12 w-12 text-accent" />
                <p className="text-sm font-medium text-center text-foreground">{tech.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
