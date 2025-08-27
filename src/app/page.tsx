
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
      { name: "C#", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.333 0H22.667C23.403 0 24 0.597 24 1.333V22.667C24 23.403 23.403 24 22.667 24H1.333C0.597 24 0 23.403 0 22.667V1.333C0 0.597 0.597 0 1.333 0H3.333V1.333H1.333V22.667H22.667V1.333H20.667V0H22.667ZM12.335 11.5c-0.736-0.736-1.638-1.104-2.704-1.104-1.063 0-1.966 0.368-2.704 1.104-0.736 0.736-1.104 1.638-1.104 2.704s0.368 1.966 1.104 2.704c0.738 0.736 1.641 1.104 2.704 1.104 1.066 0 1.968-0.368 2.704-1.104 0.736-0.738 1.104-1.641 1.104-2.704s-0.368-1.968-1.104-2.704ZM10.735 12.604c0.43-0.43 0.963-0.645 1.599-0.645s1.17 0.215 1.6 0.645c0.43 0.43 0.645 0.963 0.645 1.599s-0.215 1.17-0.645 1.6c-0.43 0.43-0.963 0.645-1.6 0.645s-1.168-0.215-1.599-0.645c-0.43-0.43-0.645-0.963-0.645-1.6s0.215-1.168 0.645-1.599ZM17.002 6h2.667v2.667h-2.667V6Zm0 9.333h2.667v2.667h-2.667V15.333Z" fill="currentColor"/></svg> },
      { name: ".NET", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.033.406c-3.136 0-6.133 1.34-8.31 3.65-2.02 2.14-3.32 5.09-3.32 8.35v.18c0 3.25 1.3 6.2 3.32 8.35 2.18 2.3 5.17 3.65 8.31 3.65 3.14 0 6.14-1.35 8.31-3.65 2.02-2.15 3.32-5.1 3.32-8.35v-.18c0-3.26-1.3-6.21-3.32-8.35-2.17-2.31-5.17-3.65-8.31-3.65Zm-1.46 6.3h2.92v10.5h-2.92V6.706Zm8.81 0h2.92v1.75h-2.92V6.706Zm0 3.5h2.92v1.75h-2.92v-1.75Zm-5.83 0h2.92v1.75h-2.92v-1.75Zm-2.92 0h2.92v1.75h-2.92v-1.75ZM4.073 10.206h2.92v1.75h-2.92v-1.75Zm12.08 3.5h2.92v1.75h-2.92v-1.75Zm-8.75 0h2.92v1.75h-2.92v-1.75Zm-2.92 0h2.92v1.75H4.483v-1.75Z" fill="currentColor"/></svg> },
      { name: "React", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8Zm-3.5-8c0-1.933 1.567-3.5 3.5-3.5s3.5 1.567 3.5 3.5-1.567 3.5-3.5 3.5-3.5-1.567-3.5-3.5Z" fill="currentColor"/></svg> },
      { name: "SQL Server", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2ZM8 18H6V6h2v12Zm4 0h-2V6h2v12Zm4 0h-2V6h2v12Z" fill="currentColor"/></svg> },
      { name: "Git", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.835 10.45c-2.02-.5-2.02-3.14.05-3.65C21.735 4.3 19.385 3 17 3c-2.39 0-4.73 1.3-5.89 3.8-1.16-2.5-3.5-3.8-5.89-3.8C2.615 3 0.265 4.3 0 6.8c2.07.5 2.07 3.15.05 3.65C1.225 13.2 2.615 15 5.115 15c2.39 0 4.73-1.3 5.89-3.8 1.16 2.5 3.5 3.8 5.89 3.8 2.5 0 3.89-1.8 5-4.55a4.2 4.2 0 0 0-.05-1.15c0 .01-.05.02-.05.02-.37.3-.8.52-1.28.52-1.45 0-2.62-1.18-2.62-2.63s1.17-2.63 2.62-2.63c.48 0 .91.19 1.28.5.01 0 .04.01.05.02a4.22 4.22 0 0 0 .05-1.14Zm-9.84-2.95c-1.45 0-2.62-1.18-2.62-2.63s1.17-2.63 2.62-2.63 2.62 1.18 2.62 2.63-1.17 2.63-2.62 2.63Z" fill="currentColor"/></svg> },
      { name: "Tailwind CSS", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.029 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.334 6.182 14.971 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.539 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.334 13.382 8.971 12 6.001 12z" fill="currentColor"/></svg> },
      { name: "Docker", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.126 12.23c-1.46-3.2-3.88-5.3-6.13-5.3-1.61 0-3.03.73-4.26 2.19l.1.13c1.39.46 2.37 1.76 2.37 3.28 0 1.94-1.58 3.5-3.5 3.5H4.25c-.9 0-1.8.2-2.6.6v2.33c.8.4 1.7.6 2.6.6h10.39c1.78 0 3.29 1.14 3.79 2.81 1.05.2 2.1.2 3.1.2 1.78 0 3.4-.41 4.83-1.33v-2.31c-.3.07-.7.13-1.1.13-1.1 0-2.1-.2-2.9-.6-1.5-3.3-3.9-5.4-6.2-5.4-.4 0-.8.1-1.3.2l.2.2c1.3.4 2.2 1.6 2.2 3.1 0 1.8-1.5 3.3-3.3 3.3H7.5c-1.6 0-3.1-.7-4.2-2.1v2.3c1.1 1.4 2.6 2.1 4.2 2.1h7.4c1.8 0 3.3 1.2 3.9 2.8.9.2 1.8.2 2.7.2 1.8 0 3.5-.4 4.9-1.4v-2.3c-.4.1-1 .2-1.5.2-1 0-2-.2-2.8-.7-1.5-3.3-3.9-5.4-6.2-5.4-.6 0-1.1.1-1.6.3l.1.2c1.4.5 2.3 1.8 2.3 3.4 0 2-1.6 3.6-3.6 3.6H3.3c-1.8 0-3.3-1.6-3.3-3.6V8.63c0-1.5 1-2.9 2.5-3.4.8-.3 1.7-.4 2.5-.4h8.3c1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3h-1.8c-.2 1.2-1.3 2.1-2.5 2.1s-2.3-1-2.5-2.1H5c-2.8 0-5 2.2-5 5v8.74c0 2.8 2.2 5 5 5h3.9c.2-1.2 1.3-2.1 2.5-2.1s2.3.9 2.5 2.1h4.1c.2-1.2 1.3-2.1 2.5-2.1.2 0 .4 0 .6.1.6-2.5 2.8-4.4 5.4-4.4.7 0 1.4.1 2 .4v-2.3c-1.4-.9-3-1.3-4.8-1.3-1.1 0-2.1.2-3.1.6Z" fill="currentColor"/></svg> },
      { name: "Kubernetes", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 6h2v2h-2V8zm0 4h2v2h-2v-2zm-2 2h2v2H9v-2zm4 0h2v2h-2v-2zm-2 4h2v2h-2v-2z" fill="currentColor"/></svg> },
      { name: "Jenkins", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-12h2v8h-2V8zm0 10h2v2h-2v-2z" fill="currentColor"/></svg> },
      { name: "Java", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9h6v2h-4v2.5h4v2h-4v2.5h4v2h-6z" fill="currentColor"/></svg> },
      { name: "Javascript", icon: <svg className="w-10 h-10" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4 14h-2v-2h2v2zm-4-10h-2v10h2V6z" fill="currentColor"/></svg> },
    ];
    
    return (
        <section ref={ref} id="skills" className="scroll-animation py-20 bg-background">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold text-primary mb-12">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
                    {skills.map(skill => (
                        <div key={skill.name} className="flex flex-col items-center justify-center gap-4 p-4 bg-card rounded-lg shadow-lg transform transition-transform hover:scale-110">
                           <div className="w-20 h-20 flex items-center justify-center text-primary">
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
