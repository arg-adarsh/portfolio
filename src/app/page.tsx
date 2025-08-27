
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
      { name: "C#", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.22 8.33c-.34-.64-1.06-1.04-1.85-1.04h-1.34c-1.31 0-2.37 1-2.37 2.22v4.94c0 1.22 1.06 2.22 2.37 2.22h1.34c.79 0 1.51-.4 1.85-1.04l.1-.21c.23-.49.35-1.04.35-1.61v-2.88c0-.57-.12-1.12-.35-1.61l-.1-.21M13.2 15c-.14.28-.48.55-1.17.55h-1.34c-.65 0-1.18-.47-1.18-1.04v-4.94c0-.57.53-1.04 1.18-1.04h1.34c.69 0 1.03.27 1.17.55l.1.21c.14.3.23.64.23.99v2.88c0 .35-.09.69-.23.99l-.1.21m-9.53-8.81h-2.2v20.96h2.2zM2.49 5.34h2.2V2.12h-2.2z"/></svg> },
      { name: ".NET", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m8 10.5c0 .83-.67 1.5-1.5 1.5h-2.5v2h-2v-2H12v2h-2v-2H8.5c-.83 0-1.5-.67-1.5-1.5v-1c0-.83.67-1.5 1.5-1.5H10v-2h2v2h1.5v-2h2v2h1.5c.83 0 1.5.67 1.5 1.5z"/></svg> },
      { name: "React", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4.07a9.92 9.92 0 0 1 8.79 5.21a.5.5 0 0 1-.44.72H18a.5.5 0 0 1-.49-.36a8 8 0 0 0-15 0a.5.5 0 0 1-.49.36h-2.3a.5.5 0 0 1-.44-.72A9.92 9.92 0 0 1 12 4.07m0-2.07a12 12 0 0 0-11.18 7.21a2.5 2.5 0 0 0 2.22 3.59H5.5a2.5 2.5 0 0 0 2.45-1.84a6 6 0 0 1 8.1 0A2.5 2.5 0 0 0 18.5 13h2.44a2.5 2.5 0 0 0 2.22-3.59A12 12 0 0 0 12 2m8.79 9.72a.5.5 0 0 1 .44.72A9.92 9.92 0 0 1 12 19.93a9.92 9.92 0 0 1-8.79-5.21a.5.5 0 0 1 .44-.72H6a.5.5 0 0 1 .49.36a8 8 0 0 0 15 0a.5.5 0 0 1 .49-.36h2.3m-1.15 2.87a2.5 2.5 0 0 0-2.22-3.59H18.5a2.5 2.5 0 0 0-2.45 1.84a6 6 0 0 1-8.1 0A2.5 2.5 0 0 0 5.5 11H3.06a2.5 2.5 0 0 0-2.22 3.59A12 12 0 0 0 12 22a12 12 0 0 0 11.18-7.21M12 8a4 4 0 1 0 4 4a4 4 0 0 0-4-4"/></svg> },
      { name: "SQL Server", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2M9 18H7v-6h2zm4 0h-2v-6h2zm4 0h-2v-6h2zM12 4c1.93 0 3.5 1.57 3.5 3.5S13.93 11 12 11s-3.5-1.57-3.5-3.5S10.07 4 12 4"/></svg> },
      { name: "Git", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M22.78 12.02c-.81-.22-1.33.2-1.33.2s-1.42-2.9-1.57-3.32c-.16-.42-.14-.61.31-1.05s.98-.69.98-.69s-2.45-1.1-4.83-1.38c-.3-.04-.52.28-.52.28s-1.86.3-3.79.3c-1.93 0-3.79-.3-3.79-.3s-.22-.32-.52-.28C5.02 6.37 2.57 7.47 2.57 7.47s.53.25.98.69c.45.44.47.63.31 1.05c-.15.42-1.57 3.32-1.57 3.32s-.52-.42-1.33-.2C.15 12.24 0 12.83 0 13.59c0 2.37 2.26 2.86 2.26 2.86s.78.36.98.8c.2.44.11.96-.28 1.45c-.39.5-.78.78-.78.78s.73 3.37 1.25 4.35c.52.98 1.28 1.17 1.28 1.17s2.72.93 6.29.93c3.57 0 6.29-.93 6.29-.93s.76-.19 1.28-1.17c.52-.98 1.25-4.35 1.25-4.35s-.39-.28-.78-.78c-.39-.49-.48-1.01-.28-1.45c.2-.44.98-.8.98-.8s2.26-.49 2.26-2.86c0-.76-.15-1.35-.92-1.57m-10.45 5.56c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23m0-10.45c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23m6.16 5.22c-.68 0-1.23-.55-1.23-1.23s.55-1.23 1.23-1.23s1.23.55 1.23 1.23s-.55 1.23-1.23 1.23"/></svg> },
      { name: "Tailwind CSS", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.029 12 18.001 12c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.334 6.182 14.971 4.8 12.001 4.8m-6 7.2c-3.2 0-5.2 1.6-6 4.8c1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624c1.177 1.194 2.539 2.576 5.512 2.576c3.2 0 5.2-1.6 6-4.8c-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.334 13.382 8.971 12 6.001 12"/></svg> },
      { name: "Docker", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21.9 8.95c-.34-3.54-2.2-6.53-4.82-8.31a.5.5 0 0 0-.58.07L8.9 6.85c-.07.06-.1.14-.1.23V8c0 .28.22.5.5.5h1.2v-.95l6.5-4.55c1.47 1.1 2.53 2.76 2.88 4.7l-7.08 4.9V7.5a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v2.96L2.9 6.85a.5.5 0 0 0-.57-.07c-2.63 1.78-4.48 4.77-4.82 8.32L10 22.8V22c0-1.04.86-1.9 1.9-1.9c1.04 0 1.9.86 1.9 1.9v.8l10.5-12.75l-2.4-1.2zM8.5 2h-1v2h1zm-2 0h-1v2h1zm-2 0h-1v2h1zm-2 0H1.45L1.5 2h1zM6.5 5h-1v2h1zm-2 0h-1v2h1zm2-3h-1v2h1z"/></svg> },
      { name: "Kubernetes", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m5.79 14.54l-3.46-1.59l-3.46 1.59l-.8-4.22l-2.1-1.39l2.84-2.84l1.39-2.1l4.22.8l1.59-3.46l1.59 3.46l4.22-.8l1.39 2.1l2.84 2.84l-2.1 1.39zM12 8a4 4 0 1 0 0 8a4 4 0 0 0 0-8"/></svg> },
      { name: "Jenkins", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m-1-12h2v8h-2zm0 10h2v2h-2z"/></svg> },
      { name: "Java", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M4 2h16v2h-2v10h-2V4h-2v12h-2V4h-2v12h-2V4H6v10H4zm14 18v-6h-6v6zm-2-2h-2v-2h2z"/></svg> },
      { name: "Javascript", icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M14.5 13.5h-5v-1h5m0 3h-5v-1h5m-5-5v-1h5v1zm10-7H4.5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h15a2 2 0 0 0 2-2V6.5a2 2 0 0 0-2-2"/></svg> },
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
