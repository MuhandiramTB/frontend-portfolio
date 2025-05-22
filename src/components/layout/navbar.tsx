"use client";

import Link from "next/link";
import { Menu, Home, User, Briefcase, Code2, Wrench, Mail } from "lucide-react";
import { ThemeToggleButton } from "@/components/theme-toggle-button";
import { navItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

const navIcons = {
  home: Home,
  about: User,
  projects: Code2,
  "tech stack": Wrench,
  experience: Briefcase,
  contact: Mail,
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-background/80 shadow-md backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link 
          href="/#home" 
          className="text-2xl font-bold text-primary hover:scale-105 transition-transform duration-200"
        >
          TB Muhandiram
        </Link>
        <nav className="hidden items-center space-x-6 md:flex">
          {navItems.map((item) => {
            const Icon = navIcons[item.name.toLowerCase() as keyof typeof navIcons];
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group flex items-center gap-2 text-sm font-medium text-foreground/80 transition-all hover:text-primary hover:scale-105"
              >
                <Icon className="h-4 w-4 transition-transform group-hover:scale-110" />
                {item.name}
              </Link>
            );
          })}
          <ThemeToggleButton />
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="hover:scale-105 transition-transform">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="animate-in slide-in-from-right duration-300">
              <div className="flex flex-col space-y-4 p-6">
                {navItems.map((item) => {
                  const Icon = navIcons[item.name.toLowerCase() as keyof typeof navIcons];
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex items-center gap-2 text-lg font-medium text-foreground transition-all hover:text-primary hover:translate-x-2"
                    >
                      <Icon className="h-5 w-5 transition-transform group-hover:scale-110" />
                      {item.name}
                    </Link>
                  );
                })}
                <div className="pt-4">
                  <ThemeToggleButton />
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
