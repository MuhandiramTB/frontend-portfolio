
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { socialLinks } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React, { useEffect, useState } from 'react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export function ContactSection() {
  const { toast } = useToast();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // In a real app, you'd send this data to a backend (e.g., Firebase, email service)
    console.log(values);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    form.reset();
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <h2 
          className={`mb-12 text-center text-3xl font-bold tracking-tight text-primary sm:text-4xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
          style={{ animationDelay: mounted ? '0.2s' : '0s' }}
        >
          Get In Touch
        </h2>
        <div className="grid gap-12 md:grid-cols-2">
          <Card 
            className={`shadow-xl ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: mounted ? '0.4s' : '0s' }}
          >
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Your message..." className="min-h-[120px]" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Send Message
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          <div 
            className={`space-y-8 ${mounted ? 'animate-global-fade-in-up' : 'opacity-0'}`}
            style={{ animationDelay: mounted ? '0.6s' : '0s' }}
          >
             <Card className="shadow-xl">
                <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-foreground">Connect with me</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground mb-6">
                        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out through my social channels.
                    </p>
                    <div className="space-y-4">
                    {socialLinks.map((link) => (
                        <Button key={link.name} variant="outline" className="w-full justify-start text-left" asChild>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                            <link.icon className="mr-3 h-5 w-5 text-primary" />
                            {link.name}
                        </Link>
                        </Button>
                    ))}
                    </div>
                </CardContent>
             </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
