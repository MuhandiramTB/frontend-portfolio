"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <section id="home" className="relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/50 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02] animate-pan-grid"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/80"></div>
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
                            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 2rem 2rem;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-pan-grid {
          animation: panGrid 30s linear infinite;
        }
        @keyframes panGrid {
          0% { background-position: 0% 0%; }
          100% { background-position: 2rem 2rem; }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
      <div className="relative z-10 space-y-6">
        <div className="animate-float">
          <h1 className="animate-fade-in-up text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl" style={{ animationDelay: '0.2s' }}>
            TB Muhandiram
          </h1>
          <p className="animate-fade-in-up text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl" style={{ animationDelay: '0.4s' }}>
            Frontend Web Developer
          </p>
        </div>
        <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: '0.6s' }}>
          Building scalable web apps with MERN & Firebase.
        </p>
        <div className="animate-fade-in-up flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <Link href="/#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-all hover:scale-105 hover:shadow-xl">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
        <div className="animate-fade-in-up flex justify-center space-x-6 pt-8" style={{ animationDelay: '1s' }}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </div>
      
    </section>
  );
}
