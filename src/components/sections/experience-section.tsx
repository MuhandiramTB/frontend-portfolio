
"use client";

import { experienceData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Briefcase, School, Code } from "lucide-react";
import React, { useEffect, useState } from 'react';

const iconMap = {
  internship: School,
  freelance: Briefcase,
  "open-source": Code,
};

export function ExperienceSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={`mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: mounted ? '0.2s' : '0s' }}
        >
          Experience & Contributions
        </h2>
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-border before:content-[''] md:before:mx-auto md:before:ml-0">
          {experienceData.map((item, index) => {
            const IconComponent = iconMap[item.type];
            return (
              <div 
                key={item.id} 
                className={`relative flex items-start md:grid md:grid-cols-[1fr_auto_1fr] md:gap-x-8 ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: mounted ? `${0.4 + index * 0.2}s` : '0s' }}
              >
                <div className={`flex items-center justify-start ${index % 2 === 0 ? 'md:order-1 md:col-start-1' : 'md:order-3 md:col-start-3 md:text-right'}`}>
                  {/* Empty div for spacing on alternating sides or content if needed */}
                </div>
                <div className="z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md md:order-2 md:col-start-2">
                  <IconComponent className="h-5 w-5" />
                </div>
                <Card className={`ml-8 w-full shadow-lg md:ml-0 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${index % 2 === 0 ? 'md:order-3 md:col-start-3' : 'md:order-1 md:col-start-1'}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-foreground">{item.role}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {item.company} | {item.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80">{item.description}</p>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
