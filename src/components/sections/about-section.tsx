"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from 'react';

export function AboutSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100); // Slight delay to ensure CSS is ready
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={`mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '0.2s' }}
        >
          About Me
        </h2>
        <Card 
          className={`overflow-hidden shadow-xl md:mx-auto md:max-w-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`} 
          style={{ animationDelay: '0.4s' }}
        >
          <div className="md:flex">
            <div className="md:w-1/3">
              <Image
                src="https://placehold.co/400x400.png"
                alt="TB Muhandiram"
                width={400}
                height={400}
                className="h-full w-full object-cover"
                data-ai-hint="professional portrait"
              />
            </div>
            <div className="md:w-2/3">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground">Hello, I&apos;m TB Muhandiram</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I am a passionate Frontend Web Developer with a knack for creating intuitive, dynamic, and user-friendly web applications. My journey in web development has been driven by a constant curiosity and a love for problem-solving.
                </p>
                <p>
                  I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and have extensive experience with Firebase, allowing me to build robust and scalable full-stack solutions. My core strength lies in translating complex requirements into elegant frontend interfaces that provide seamless user experiences.
                </p>
                <p>
                  I thrive in collaborative environments and am always eager to learn new technologies and methodologies to enhance my skill set. Let&apos;s build something amazing together!
                </p>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
