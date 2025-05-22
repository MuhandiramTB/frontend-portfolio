
"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import React, { useEffect, useState } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // Avoid hydration mismatch by not rendering animations server-side

  return (
    <section id="home" className="relative flex h-screen min-h-[600px] w-full flex-col items-center justify-center bg-gradient-to-br from-background to-secondary/50 px-4 text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02] animate-pan-grid"></div>
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
          100% { background-position: 2rem 2rem; } /* Pan one grid cell size */
        }
      `}</style>
      <div className="relative z-10 space-y-6">
        <h1 className="animate-fade-in-up text-5xl font-extrabold tracking-tight text-primary sm:text-6xl md:text-7xl" style={{ animationDelay: '0.2s' }}>
          TB [LastName]
        </h1>
        <p className="animate-fade-in-up text-xl font-medium text-foreground/90 sm:text-2xl md:text-3xl" style={{ animationDelay: '0.4s' }}>
          Frontend Web Developer
        </p>
        <p className="animate-fade-in-up mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl" style={{ animationDelay: '0.6s' }}>
          Building scalable web apps with MERN & Firebase.
        </p>
        <div className="animate-fade-in-up flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4" style={{ animationDelay: '0.8s' }}>
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg transition-transform hover:scale-105">
            <Link href="/#projects">View Projects</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg transition-transform hover:scale-105">
            <Link href="/#contact">Contact Me</Link>
          </Button>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-8 w-8 text-primary/50" />
      </div>
    </section>
  );
}
