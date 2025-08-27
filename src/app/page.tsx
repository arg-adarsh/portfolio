
'use client';
import { Github, Linkedin, Mail, ArrowRight, Server, Brush, PenTool } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef } from 'react';

const Navbar = () => (
  <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
      <a href="/" className="mr-6 flex items-center space-x-2">
        <span className="font-bold sm:inline-block">Adarsh Raj Gautam</span>
      </a>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">Experience</a>
        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</a>
        <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4" />
          </a>
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <a href="https://linkedin.com/in/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="h-4 w-4" />
          </a>
        </Button>
      </nav>
    </div>
  </header>
);

const HeroSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);
    return (
    <section ref={ref} className="scroll-animation container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3] to-[#D247BF] text-transparent bg-clip-text">
              Hello, I'm
            </span>{" "}
            Adarsh
          </h1>{" "}
          <h2 className="inline">
            a Software Engineer
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
         I'm a passionate Software Engineer specializing in building robust and scalable applications. I thrive on solving complex problems and creating efficient, high-quality software.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>

      <div className="z-10">
         <Image 
            src="https://picsum.photos/600/600"
            alt="Adarsh Raj Gautam"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl"
            data-ai-hint="professional portrait"
          />
      </div>
      <div className="absolute h-full max-h-[500px] w-full max-w-[500px] bg-purple-700/50 rounded-full -z-10 blur-3xl" />
    </section>
)};

const WhatIDoSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);
  return (
  <section ref={ref} id="what-i-do" className="scroll-animation py-20 bg-background">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-primary mb-12">What I Do</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Card>
          <CardHeader>
             <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
              <Server className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Backend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">I build robust and scalable backend systems using C# and .NET Core, with experience in creating microservices and REST APIs.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
              <Brush className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>Frontend Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">I create modern and responsive user interfaces with React, ensuring a great user experience across devices.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="mx-auto bg-primary/20 p-4 rounded-full w-fit">
              <PenTool className="h-8 w-8 text-primary" />
            </div>
            <CardTitle>System Design & DevOps</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">I design distributed systems and automate deployments with Docker, Kubernetes, and Jenkins to improve efficiency and reduce errors.</p>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)};

const SkillsSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);

    const skills = [
      { name: "C#", icon: <svg className="w-10 h-10" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#512BD4" d="M64 0A64 64 0 1 0 64 128A64 64 0 1 0 64 0Z"/><path fill="#fff" d="M45.63 72.58h15.28v-3.37H48.4v-11h11.9v-3.38H48.4V43.71h12.51v-3.37H45.02s-.22 35.61.61 35.61l34.85-2.07s-4.63-22.3-4.14-23.23c.48-.93 4.87-2.06 4.87-2.06s-2.03-6.19-2.3-6.81c-.27-.62-4.15-1.5-4.15-1.5s5.27-21.7 5.75-22.64c.49-.94 4.87-2.06 4.87-2.06s-2.92-6.52-3.19-7.14c-.27-.62-4.14-1.5-4.14-1.5S74.3 35.25 75.24 49.3c.94 14.05-2.07 14.28-2.07 14.28s-1.89-6.32-2.31-7.23c-.42-.91-4.9-2.14-4.9-2.14s-2.38-6.1-2.67-6.72c-.29-.62-4.48-1.5-4.48-1.5S64.2 24.31 65.4 49.07c1.2 24.75 8.1 11.2 8.1 11.2s-2.63 6.9-3.09 7.82c-.46.92-5.18 2.14-5.18 2.14s-1.42 6.55-1.74 7.17c-.32.62-4.8 1.5-4.8 1.5s6.18 10.32 7.03 21.06c.85 10.74 2.89 8.13 2.89 8.13s6.17-1.35 6.7-1.77c.53-.42 1.34-3.56 1.34-3.56s7.1-1.77 7.64-1.35c.54.42-3.1 9.4-3.53 10.13c-.43.73-8.8 3.56-9.65 3.56s-25.5-1.28-25.5-1.28"/></svg> },
      { name: ".NET Core", icon: <svg className="w-10 h-10 text-[#512BD4]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M21.49 14.11L13 21.05c-.48.4-1.11.4-1.59 0l-8.63-6.94c-.48-.4-.48-1.03 0-1.43l8.63-6.94c.48-.4 1.11-.4 1.59 0l8.63 6.94c.48.39.48 1.03 0 1.43zM12.44 2v20"/><path d="M12.44 22a1.44 1.44 0 0 1-1.44-1.44V3.44A1.44 1.44 0 0 1 12.44 2a1.42 1.42 0 0 1 .86.27l8.63 6.94a1.44 1.44 0 0 1 0 2.46l-8.63 6.94a1.42 1.42 0 0 1-.86.39zm0-17.89a.44.44 0 0 0-.44.44v16a.44.44 0 0 0 .44.44.42.42 0 0 0 .26-.09l8.63-6.94a.44.44 0 0 0 0-.74L12.7 4.2a.42.42 0 0 0-.26-.09z"/><path d="M19.9 10.69a1.42 1.42 0 0 1 .26 2.07 1.44 1.44 0 0 1-2.06.26l-6-4.75a1.44 1.44 0 1 1 1.8-2.33z"/><path d="M13.29 9.37a.42.42 0 0 0-.52-.08L6.7 14a.44.44 0 1 0 .54.86l6-4.75a.44.44 0 0 0-.49-.7z"/><path d="M12.44 2a1.42 1.42 0 0 1 1.13.56 1.44 1.44 0 0 1-.54 2.06L4.4 9.37A1.44 1.44 0 0 1 2.6 7.28l.26-.21a1.42 1.42 0 0 1 1.14-.56z"/><path d="M3.79 8.42a.44.44 0 0 0 .16-.8L11.5 2.87a.44.44 0 1 0-.32-.82.42.42 0 0 0-.33.16L3.3 7a.44.44 0 0 0 .49 1.42z"/></svg> },
      { name: "React", icon: <svg className="w-10 h-10 text-[#61DAFB]" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M16 32c-4.8 0-9-2.2-12.1-5.8A15.8 15.8 0 0 1 0 16a15.8 15.8 0 0 1 3.9-10.2A16.5 16.5 0 0 1 16 0a16.5 16.5 0 0 1 12.1 5.8A15.8 15.8 0 0 1 32 16a15.8 15.8 0 0 1-3.9 10.2A16.5 16.5 0 0 1 16 32zM16 2.3C9.8 2.3 5 6.2 3.2 11.5c-1 3-1.5 6.2-1.2 9.4.5 4.5 2.8 8.4 6.2 10.8a13.3 13.3 0 0 0 15.5-1.2c3.5-2.8 5.6-7 5.2-11.4-.4-4-2.5-7.7-5.9-10.1A13.8 13.8 0 0 0 16 2.3z"/><path d="M16 8.5a7.4 7.4 0 0 0-7.3 6.2 7.8 7.8 0 0 0 1.2 5.1 7.4 7.4 0 0 0 6.1 3.4 7.4 7.4 0 0 0 7.3-6.2 7.8 7.8 0 0 0-1.2-5.1 7.4 7.4 0 0 0-6.1-3.4zM16 10a5.8 5.8 0 0 1 5.7 4.8 6.1 6.1 0 0 1-1 4A5.8 5.8 0 0 1 16 21a5.8 5.8 0 0 1-5.7-4.8 6.1 6.1 0 0 1 1-4A5.8 5.8 0 0 1 16 10z"/><path d="M16 32c-5 0-9.4-2.4-12.4-6.2a15.8 15.8 0 0 1-2.9-11.6c1.3-6.5 6.3-11.6 12.8-11.9 6.5-.3 12.3 4.2 13.8 10.4a14.2 14.2 0 0 1-2.2 11.2c-2.8 4.2-7.5 7-12.1 8.1zm-10-16c0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10-10 4.5-10 10z"/><path d="M3.2 11.5C1.4 6.2 6.2 2.3 12.5 2.3a13.8 13.8 0 0 1 11.2 5.9c3.4 2.4 5.5 6.1 5.9 10.1.4 4.4-1.7 8.6-5.2 11.4a13.3 13.3 0 0 1-15.5 1.2c-3.4-2.4-5.7-6.3-6.2-10.8a14.5 14.5 0 0 1 1.5-9.4zM16 26c5.5 0 10-4.5 10-10S21.5 6 16 6 6 10.5 6 16s4.5 10 10 10z"/></svg> },
      { name: "SQL Server", icon: <svg className="w-10 h-10" viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F29111" d="M30.8 28.3h66.3v71.4H30.8z"/><path fill="#E15253" d="M29.7 28.3h68.5v8H29.7z"/><path fill="#fff" d="M92.4 87.9c0 2.2-1.8 4-4 4H39.6c-2.2 0-4-1.8-4-4V67.8c0-2.2 1.8-4 4-4h48.8c2.2 0 4 1.8 4 4v20.1zm-4-16.1H39.6c-2.2 0-4 1.8-4 4v4h54.8v-4c0-2.2-1.8-4-4-4zm-44.8 8v4h48.8v-4H39.6zM92.4 49.8c0 2.2-1.8 4-4 4H39.6c-2.2 0-4-1.8-4-4V44c0-2.2 1.8-4 4-4h48.8c2.2 0 4 1.8 4 4v5.8z"/><path fill="#505050" d="M49 59.1h30v2H49zm0 30h30v2H49z"/></svg> },
      { name: "Git", icon: <svg className="w-10 h-10 text-[#F05032]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.78 12.02c-.81-.22-1.33.2-1.33.2s-1.42-2.9-1.57-3.32c-.16-.42-.14-.61.31-1.05s.98-.69.98-.69s-2.45-1.1-4.83-1.38c-.3-.04-.52.28-.52.28s-1.86.3-3.79.3c-1.93 0-3.79-.3-3.79-.3s-.22-.32-.52-.28C5.02 6.37 2.57 7.47 2.57 7.47s.53.25.98.69c.45.44.47.63.31 1.05c-.15.42-1.57 3.32-1.57 3.32s-.52-.42-1.33-.2C.15 12.24 0 12.83 0 13.59c0 2.37 2.26 2.86 2.26 2.86s.78.36.98.8c.2.44.11.96-.28 1.45c-.39.5-.78.78-.78.78s.73 3.37 1.25 4.35c.52.98 1.28 1.17 1.28 1.17s2.72.93 6.29.93c3.57 0 6.29-.93 6.29-.93s.76-.19 1.28-1.17c.52-.98 1.25-4.35 1.25-4.35s-.39-.28-.78-.78c-.39-.49-.48-1.01-.28-1.45c.2-.44.98-.8.98-.8s2.26-.49 2.26-2.86c0-.76-.15-1.35-.92-1.57zm-10.45 5.56c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23zm0-10.45c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23zm6.16 5.22c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23z"/></svg> },
      { name: "Tailwind CSS", icon: <svg className="w-10 h-10 text-[#06B6D4]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2zm.23 13.54c.23 0 .4-.1.52-.3l3.2-3.93c.2-.26.3-.5.3-.8s-.1-.54-.3-.8l-3.2-3.93c-.12-.2-.29-.3-.52-.3-.29 0-.53.16-.7.42-.17.26-.17.58 0 .84l2.25 2.78-2.25 2.78c-.17.26-.17.58 0 .84.17.26.41.42.7.42zm-4.92 0c.23 0 .4-.1.52-.3l3.2-3.93c.2-.26.3-.5.3-.8s-.1-.54-.3-.8L8.03 6.46c-.12-.2-.29-.3-.52-.3-.29 0-.53.16-.7.42-.17.26-.17.58 0 .84L9.06 12l-2.25 2.78c-.17.26-.17.58 0 .84.17.26.41.42.7.42z"/></svg> },
      { name: "Docker", icon: <svg className="w-10 h-10 text-[#2496ED]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M21.9996 11.28C21.9996 9.38 21.3696 7.97 20.2496 7.04C20.0396 6.88 19.6896 6.83 19.3496 6.94C18.0696 6.43 16.6396 6.09 15.1196 6.01C14.9396 5.25 14.6196 4.52 14.1696 3.86C13.6296 3.08 12.8796 2.47 11.9696 2.09C10.5196 1.48 8.8496 1.73 7.6296 2.68C6.9696 3.2 6.5096 3.93 6.2796 4.75C5.5596 4.96 4.9396 5.27 4.3996 5.67C2.9096 6.72 2.4196 8.54 2.8796 10.24C2.9696 10.58 2.8396 10.94 2.5396 11.13C1.0496 12.1 1.0496 14.21 2.5396 15.19C2.8396 15.38 2.9696 15.74 2.8796 16.08C2.3996 17.78 2.8996 19.6 4.3996 20.65C5.8996 21.7 7.9196 21.77 9.5096 20.84C9.7896 20.68 10.1396 20.7 10.4596 20.87C11.5996 21.51 12.9896 21.84 14.4396 21.84C18.6196 21.84 21.9996 18.25 21.9996 14C21.9996 13.04 21.8096 12.12 21.4396 11.28H21.9996zM6 11H10.36M8.18 8.81995H10.36M12.54 8.81995H14.72M12.54 11H16.9M8.18 13.18H10.36M12.54 13.18H14.72M12.54 15.36H14.72"/></svg> },
      { name: "Kubernetes", icon: <svg className="w-10 h-10 text-[#326CE5]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm.27 5.92l-4.99 2.58v1.09l4.99 2.58 4.99-2.58V10.5l-4.99-2.58zM12 4.222l7.778 4.037V15.74l-7.778 4.037-7.778-4.037V8.26L12 4.222z"/></svg> },
      { name: "Jenkins", icon: <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.11-8.312l-2.072.002.003-3.952-1.928.002.003-1.83 1.925-.002.004-1.933 1.912-.003.004 1.933h2.072v1.83h-2.072l-.004 3.952z" fill="currentColor"/><path fillRule="evenodd" clipRule="evenodd" d="M12.11 13.688l-2.072.002.003-3.952-1.928.002.003-1.83 1.925-.002.004-1.933 1.912-.003.004 1.933h2.072v1.83h-2.072l-.004 3.952z" fill="currentColor"/><path d="M12.11 13.688l-2.072.002.003-3.952-1.928.002.003-1.83 1.925-.002.004-1.933 1.912-.003.004 1.933h2.072v1.83h-2.072l-.004 3.952z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg> },
    ];
    
    return (
        <section ref={ref} id="skills" className="scroll-animation py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-primary mb-12">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center justify-center gap-4 p-4 bg-card rounded-lg shadow-lg transform transition-transform hover:scale-110">
                           <div className="w-20 h-20 flex items-center justify-center">
                            {skill.icon}
                           </div>
                           <p className="text-lg font-medium text-foreground">{skill.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const ExperienceSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);
  
    const experiences = [
      {
        company: "Company Name",
        role: "Software Engineer",
        period: "Jan 2022 - Present",
        description: [
          "Developed and maintained web applications using C# and .NET Core, resulting in a 20% improvement in performance.",
          "Collaborated with cross-functional teams to design and implement new features.",
          "Wrote clean, scalable, and well-documented code.",
          "Participated in code reviews to maintain high-quality code standards."
        ]
      },
       {
        company: "Another Company",
        role: "Junior Software Engineer",
        period: "Jun 2020 - Dec 2021",
        description: [
          "Assisted in the development of a new RESTful API.",
          "Fixed bugs and improved application performance.",
          "Gained experience with Agile development methodologies."
        ]
      },
    ];
  
    return (
      <section ref={ref} id="experience" className="scroll-animation py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-4xl font-bold text-primary mb-12">Experience</h2>
          <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
             <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                 <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
                <Card className="bg-card">
                  <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle>{exp.role}</CardTitle>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                    <CardDescription>{exp.company}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                      {exp.description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};


const ProjectsSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);

  return (
    <section ref={ref} id="projects" className="scroll-animation py-20 bg-background">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-4xl font-bold text-primary mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="flex flex-col bg-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Expense Tracker
                            <a href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                        </CardTitle>
                        <CardDescription>React, .NET Core, SQL Server, JWT</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Designed full-stack architecture with React frontend, .NET Core APIs, and SQL Server backend.</li>
                            <li>Implemented secure JWT-based authentication with role-based access control.</li>
                            <li>Built real-time expense insights with interactive charts for financial tracking.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col bg-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Chat App
                            <a href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                        </CardTitle>
                        <CardDescription>React, Firebase</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Built a scalable chat application handling 10,000+ concurrent users.</li>
                            <li>Integrated Firebase Authentication for secure login (99.9% uptime).</li>
                            <li>Enabled group chats and real-time media sharing to boost engagement.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col bg-card hover:shadow-lg transition-shadow">
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Web Set Hun (Team)
                            <a href="https://swanirbhar.in/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><ArrowRight className="w-5 h-5" /></a>
                        </CardTitle>
                        <CardDescription>HTML, CSS, JavaScript</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Collaborated on redesigning and developing homepage of a social initiative website.</li>
                            <li>Enhanced UI/UX with responsive design, animations, and dark mode.</li>
                            <li>Improved performance and engagement via CSS/JavaScript optimizations.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
        </div>
    </section>
)};

const ContactSection = () => {
  const ref = useRef<HTMLElement>(null);
  useScrollAnimation(ref);
  return (
  <section ref={ref} id="contact" className="scroll-animation py-20">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-primary mb-4">Contact Me</h2>
      <p className="text-center text-muted-foreground mb-8">
        Have a project in mind? I'd love to hear from you.
      </p>
      <Card>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input placeholder="First Name" />
              <Input placeholder="Last Name" />
            </div>
            <Input type="email" placeholder="Email" />
            <Textarea placeholder="Your message" />
            <Button type="submit" className="w-full">Send Message</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
)};


const Footer = () => (
    <footer className="py-6 border-t border-border/40">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <p>&copy; {new Date().getFullYear()} Adarsh Raj Gautam. All Rights Reserved.</p>
      </div>
    </footer>
  );
  

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <main className="relative overflow-x-hidden">
        <HeroSection />
        <WhatIDoSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

