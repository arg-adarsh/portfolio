
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
      { name: "C#", icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#9B4F96" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/><path fill="#68217A" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/><path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/></svg> },
      { name: ".NET", icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#623697"><path d="M61.195 0h4.953c12.918.535 25.688 4.89 36.043 12.676 9.809 7.289 17.473 17.437 21.727 28.906 2.441 6.387 3.664 13.18 4.082 19.992v4.211c-.414 11.293-3.664 22.52-9.73 32.082-6.801 10.895-16.922 19.73-28.727 24.828A64.399 64.399 0 0165.082 128h-2.144c-11.735-.191-23.41-3.66-33.297-9.992-11.196-7.113-20.114-17.785-25.028-30.117C1.891 81.19.441 74.02 0 66.812v-4.957c.504-14.39 5.953-28.609 15.41-39.496C23.168 13.31 33.5 6.48 44.887 2.937 50.172 1.27 55.676.41 61.195 0M25.191 37.523c-.03 12.153-.011 24.305-.011 36.454 1.43.011 2.86.011 4.293.011-.075-10.433.101-20.863-.106-31.293.48.907.918 1.84 1.465 2.707C37.035 54.91 43.105 64.5 49.309 74c1.738-.023 3.476-.023 5.214.004-.003-12.16-.007-24.32.004-36.48a308.076 308.076 0 00-4.25-.012c.075 10.32-.136 20.64.125 30.949-6.507-10.352-13.101-20.645-19.695-30.945a370.85 370.85 0 00-5.516.007m38.844-.011c-.129 12.16-.004 24.32-.047 36.476 6.469-.015 12.938.024 19.41-.02a83.36 83.36 0 01.024-3.952c-5.012-.016-10.027.007-15.043-.02-.074-4.21-.004-8.426-.04-12.637 4.395-.078 8.79.012 13.18-.047-.011-1.277-.011-2.554-.019-3.832-4.387.141-8.773-.054-13.164.012.012-4.023.02-8.05.02-12.078 4.699 0 9.398-.02 14.093.012-.008-1.301 0-2.606.016-3.906-6.145-.016-12.29-.008-18.43-.008m22.602.054c.004 1.266.004 2.528.008 3.79 3.488-.04 6.972.109 10.46.035-.023 10.863.004 21.718-.011 32.574 1.46.043 2.93.035 4.39-.09-.12-5.992.118-11.988-.156-17.977.067-2.699-.07-5.394.117-8.09.106-2.14-.277-4.277-.035-6.417 3.516.047 7.035.015 10.55.015a59.774 59.774 0 01.075-3.832c-8.469-.105-16.937-.094-25.398-.008M13.55 69.094c-1.977.91-2.106 4.023-.149 5.027 1.72 1.18 4.305-.371 4.227-2.41.133-2.004-2.29-3.688-4.078-2.617m29.23 15.289c-4.277 3.469-4.226 11.195.5 14.25 2.668 1.695 6.102 1.344 8.922.215.012-.621.027-1.239.05-1.86-2.671 1.395-6.41 1.68-8.675-.61-2.965-3.237-2.297-9.269 1.613-11.476 2.211-1.164 4.907-.824 7.086.239-.007-.66-.004-1.32 0-1.98-3.097-1.099-6.922-1.04-9.496 1.222m17.207 2.71c-1.89.22-3.758 1.22-4.633 2.966-1.253 2.496-1.109 5.867.864 7.96 2.035 2.297 5.945 2.32 8.18.297 2.425-2.308 2.699-6.468.757-9.164-1.148-1.629-3.273-2.183-5.168-2.058m17.887 2.722c-1.66 2.883-1.332 7.25 1.598 9.211 2.183 1.22 4.933.832 7.074-.308-.004-.617.004-1.235.031-1.848-1.687 1.07-3.937 1.856-5.812.777-1.309-.722-1.704-2.257-1.914-3.625 2.875-.039 5.746-.082 8.625-.074-.075-1.828-.118-3.894-1.45-5.308-2.199-2.43-6.644-1.657-8.152 1.175m-8.414-2.336v12.008c.652 0 1.312 0 1.973.004.023-2.195-.04-4.394.023-6.594.016-1.27.527-2.558 1.484-3.414.801-.605 1.883-.27 2.801-.246-.012-.636-.02-1.27-.023-1.902-1.793-.398-3.336.652-4.242 2.117-.02-.633-.04-1.266-.051-1.894-.656-.024-1.313-.051-1.965-.079zm0 0"/><path d="M58.758 89.223c1.652-.805 4.023-.41 4.945 1.3 1.05 1.887 1.027 4.383-.137 6.211-1.52 2.286-5.527 1.786-6.523-.742-1.008-2.258-.617-5.484 1.715-6.77zm0 0M79.04 92.414c.046-1.574 1.144-3.137 2.726-3.48.976-.164 2.097.007 2.773.793.672.714.813 1.714.98 2.64-2.16.012-4.32-.031-6.48.047zm0 0"/></g></svg> },
      { name: "React", icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg> },
      { name: "SQL Server", icon: <svg className="w-10 h-10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"> <path fill="#d1d1d1" d="M51.395 24.879c-27.422 0-49.649-3.832-49.649-8.535v92.261c0 4.727 22.227 8.536 49.649 8.536 27.421 0 49.648-3.832 49.648-8.536V16.29c0 4.758-22.227 8.59-49.648 8.59Zm0 0"/> <path fill="#adadad" d="M1.746 16.29v92.315c0 4.727 22.227 8.536 49.649 8.536V24.879c-27.422 0-49.649-3.832-49.649-8.59Zm92.317 4.405v92.262c4.425-1.277 6.98-2.777 6.98-4.375V16.289c0 1.633-2.547 3.106-6.98 4.406Zm0 0"/> <path fill="#939699" d="M101.043 16.313c0-4.723-22.23-8.555-49.648-8.555-27.422 0-49.649 3.832-49.649 8.555 0 4.726 22.227 8.558 49.649 8.558 27.417 0 49.648-3.832 49.648-8.558ZM1.746 74.332c0 4.727 22.227 8.535 49.649 8.535 27.421 0 49.648-3.832 49.648-8.535v6.984c0 4.723-22.227 8.532-49.648 8.532-27.422 0-49.649-3.832-49.649-8.532Zm0-30.75c0 4.723 22.227 8.535 49.649 8.535 27.421 0 49.648-3.836 49.648-8.535v6.98c0 4.727-22.227 8.536-49.648 8.536-27.422 0-49.649-3.832-49.649-8.535Zm0 0"/> <path fill="#ecedf0" d="M126.64 93.09c0 16.281-13.195 29.48-29.476 29.48s-29.48-13.199-29.48-29.48 13.199-29.477 29.48-29.477 29.477 13.196 29.477 29.477Zm0 0"/> <path fill="#3faa00" d="M123.004 93.09c0 14.273-11.57 25.84-25.84 25.84-14.273 0-25.84-11.567-25.84-25.84 0-14.27 11.567-25.84 25.84-25.84 14.27 0 25.84 11.57 25.84 25.84Zm0 0"/> <path fill="#fff" d="m88.063 105.906 24.027-13.87-24.028-13.872Zm0 0"/></svg> },
      { name: "Git", icon: <img src="https://techicons.dev/icons/git.svg" alt="Git" className="w-10 h-10" /> },
      { name: "Tailwind CSS", icon: <img src="https://techicons.dev/icons/tailwindcss.svg" alt="Tailwind CSS" className="w-10 h-10" /> },
      { name: "Docker", icon: <img src="https://techicons.dev/icons/docker.svg" alt="Docker" className="w-10 h-10" /> },
      { name: "Kubernetes", icon: <img src="https://techicons.dev/icons/kubernetes.svg" alt="Kubernetes" className="w-10 h-10" /> },
      { name: "Jenkins", icon: <img src="https://techicons.dev/icons/jenkins.svg" alt="Jenkins" className="w-10 h-10" /> },
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
