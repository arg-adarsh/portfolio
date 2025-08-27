
'use client';
import { useRef } from 'react';
import { Server, Brush, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const WhatIDoSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);
  return (
  <section ref={ref} id="what-i-do" className="scroll-animation py-20 bg-muted/50 min-h-screen flex items-center">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center p-6">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <CardHeader className="p-0">
                <h3 className="text-xl font-bold">Backend Development</h3>
            </CardHeader>
            <CardContent className="mt-2 p-0">
              <p className="text-muted-foreground">
                I build robust and scalable backend systems using C#, Java and .NET Core, with experience in creating microservices and REST APIs.
              </p>
            </CardContent>
          </Card>
           <Card className="text-center p-6">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <Brush className="h-8 w-8 text-primary" />
            </div>
            <CardHeader className="p-0">
                <h3 className="text-xl font-bold">Frontend Development</h3>
            </CardHeader>
            <CardContent className="mt-2 p-0">
              <p className="text-muted-foreground">
                I create modern and responsive user interfaces with React, ensuring a great user experience across devices.
              </p>
            </CardContent>
          </Card>
           <Card className="text-center p-6">
            <div className="mx-auto bg-primary/10 p-4 rounded-full w-fit mb-4">
              <PenTool className="h-8 w-8 text-primary" />
            </div>
            <CardHeader className="p-0">
                <h3 className="text-xl font-bold">System Design & DevOps</h3>
            </CardHeader>
            <CardContent className="mt-2 p-0">
              <p className="text-muted-foreground">
                I design distributed systems and automate deployments with Docker, Kubernetes, and Jenkins to improve efficiency and reduce errors.
              </p>
            </CardContent>
          </Card>
      </div>
    </div>
  </section>
);
}