"use client";

import Link from "next/link";
import { socialLinks } from "@/lib/data";
import React from 'react';

export function Footer() {
  const [currentYear, setCurrentYear] = React.useState(new Date().getFullYear());

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  
  return (
    <footer className="bg-muted py-8 text-muted-foreground">
      <div className="container mx-auto flex flex-col items-center justify-between px-4 md:flex-row md:px-6">
        <p className="text-sm">
          &copy; {currentYear} TB [LastName]. All rights reserved.
        </p>
        <div className="mt-4 flex space-x-4 md:mt-0">
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-primary"
              aria-label={link.name}
            >
              <link.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
