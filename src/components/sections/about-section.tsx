"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Coffee, Rocket } from "lucide-react";
import React, { useEffect, useState } from 'react';

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={`mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: mounted ? '0.2s' : '0s' }}
        >
          About Me
        </h2>
        <Card 
          className={`overflow-hidden shadow-xl md:mx-auto md:max-w-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'} transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`} 
          style={{ animationDelay: mounted ? '0.4s' : '0s' }}
        >
          <div className="md:flex">
            <div className="md:w-1/3 relative group">
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="https://cdn.pixabay.com/photo/2016/11/29/09/38/adult-1868750_640.jpg"
                alt="TB Muhandiram"
                width={400}
                height={400}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint="professional headshot developer"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Hello, I&apos;m TB Muhandiram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-muted-foreground">
                <p className="leading-relaxed">
                  I am a passionate Frontend Web Developer with a knack for creating intuitive, dynamic, and user-friendly web applications. My journey in web development has been driven by a constant curiosity and a love for problem-solving.
                </p>
                <p className="leading-relaxed">
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with Firebase and Genkit for AI-powered features. This allows me to build robust and scalable full-stack solutions. My core strength lies in translating complex requirements into elegant frontend interfaces that provide seamless user experiences.
                </p>
                <p className="leading-relaxed">
                  I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skill set. Let&apos;s build something amazing together!
                </p>
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Code2 className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Clean Code</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">Fast Delivery</span>
                  </div>
                  <div className="flex flex-col items-center space-y-2 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                    <Coffee className="h-6 w-6 text-primary" />
                    <span className="text-sm font-medium">24/7 Support</span>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
