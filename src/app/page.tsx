
'use client';
import { Github, Linkedin, Mail, ArrowRight, Server, Brush, PenTool, Menu, X } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef, useState } from 'react';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaJenkins, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss, SiKubernetes, SiJavascript, SiFirebase, SiRabbitmq } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";
import { VscJson } from "react-icons/vsc";
import { GoGear } from "react-icons/go";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    return (
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold sm:inline-block">Adarsh Raj Gautam</span>
          </a>
          <nav className="hidden md:flex items-center gap-4 text-sm lg:gap-6">
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience">Experience</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</a>
            <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            <Button variant="outline" size="icon" asChild>
                <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                </a>
            </Button>
             <Button variant="outline" size="icon" asChild>
                <a href="https://linkedin.com/in/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                </a>
            </Button>
          </nav>
          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
        {isOpen && (
            <div className="md:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
                <nav className="container flex flex-col items-center gap-4 py-4 text-sm">
                    <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
                    <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                    <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                    <div className="flex gap-4 mt-2">
                        <Button variant="outline" size="icon" asChild>
                            <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                                <Github className="h-4 w-4" />
                            </a>
                        </Button>
                         <Button variant="outline" size="icon" asChild>
                            <a href="https://linkedin.com/in/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <Linkedin className="h-4 w-4" />
                            </a>
                        </Button>
                    </div>
                </nav>
            </div>
        )}
      </header>
    );
};

const HeroSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);
    return (
    <section ref={ref} className="scroll-animation container grid lg:grid-cols-2 place-items-center gap-10 lg:min-h-screen py-20 md:py-32">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-6xl font-bold">
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
          <Button className="w-full md:w-1/3" asChild><a href="#contact">Contact Me</a></Button>
          <Button variant="outline" className="w-full md:w-1/3" asChild>
              <a href="/Adarsh_Raj_Gautam_Resume.pdf" download>Download CV</a>
          </Button>
        </div>
      </div>

      <div className="z-10 order-first lg:order-last">
         <Image 
            src="https://picsum.photos/800/800"
            alt="Adarsh Raj Gautam"
            width={800}
            height={800}
            className="rounded-lg shadow-2xl w-full max-w-[400px] lg:max-w-[600px]"
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
  <section ref={ref} id="what-i-do" className="scroll-animation py-20 bg-muted/50">
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
)};

const SkillsSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);

    const skills = [
      { name: "React", icon: <FaReact size={32} /> },
      { name: "JavaScript", icon: <SiJavascript size={32} /> },
      { name: "HTML5", icon: <FaHtml5 size={32} /> },
      { name: "CSS3", icon: <FaCss3Alt size={32} /> },
      { name: "Firebase", icon: <SiFirebase size={32} /> },
      { name: "C#", icon: (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="32" height="32" fill="currentColor">
            <path d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
            <path d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
            <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
          </svg>
        ) 
      },
      { name: ".NET Core", icon: <SiDotnet size={32} /> },
      { name: "Java", icon: <FaJava size={32} /> },
      { name: "SQL", icon: <GrMysql size={32} /> },
      { name: "REST APIs", icon: <VscJson size={32} /> },
      { name: "Docker", icon: <FaDocker size={32} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={32} /> },
      { name: "Jenkins", icon: <FaJenkins size={32} /> },
      { name: "Git", icon: <FaGitAlt size={32} /> },
      { name: "AWS S3", icon: <FaAws size={32} /> },
      { name: "RabbitMQ", icon: <SiRabbitmq size={32} /> },
      { name: "Microservices", icon: <GoGear size={32} /> },
    ];
    
    return (
        <section ref={ref} id="skills" className="scroll-animation py-20">
            <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">Skills</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6">
                    {skills.map(skill => (
                         <div key={skill.name} className="flex flex-col items-center justify-center gap-2 p-4 bg-card rounded-lg shadow-md transform transition-transform hover:scale-110 h-32 w-32">
                           <div className="w-16 h-16 flex items-center justify-center text-primary">
                            {skill.icon}
                           </div>
                           <p className="text-md font-medium text-foreground text-center">{skill.name}</p>
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
        company: "Medi Assist Healthcare",
        role: "Software Engineer L1",
        period: "Jul 2024 - Present",
        location: "Bangalore, India",
        description: [
          "Developed a distributed batch processing system to process Excel data, reducing manual input by 95% and improving onboarding speed by 90%.",
          "Reduced infra cost by 70% and tripled log retrieval speed by migrating logs to AWS S3.",
          "Eliminated manual uploads via automated FTP ingestion and daily client summary emails.",
          "Cut deployment time (10min → <1min) and reduced errors by 99.99% via Jenkins, Docker, Kubernetes automation.",
          "Boosted QA coverage by 100% via automated OTP routing for authentication testing.",
          "Enabled high-volume onboarding via RabbitMQ queues and batched SQL updates to avoid table locks."
        ]
      },
    ];
  
    return (
      <section ref={ref} id="experience" className="scroll-animation py-20 bg-muted/50">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">Experience</h2>
          <div className="relative border-l-2 border-primary/20 pl-6 space-y-12">
             <div className="absolute top-0 left-[-9px] h-4 w-4 rounded-full bg-primary" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                 <div className="absolute -left-[33px] top-1.5 h-4 w-4 rounded-full bg-primary ring-8 ring-background" />
                <Card>
                  <CardHeader>
                     <div className="flex flex-col sm:flex-row justify-between items-start">
                        <div className="mb-2 sm:mb-0">
                            <h3 className="text-xl font-bold">{exp.role}</h3>
                            <p className="text-muted-foreground">{exp.company} - {exp.location}</p>
                        </div>
                        <p className="text-sm text-muted-foreground">{exp.period}</p>
                     </div>
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
    <section ref={ref} id="projects" className="scroll-animation py-20">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-12">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                               <h3 className="text-xl font-bold">Expense Tracker</h3>
                               <p className="text-sm text-muted-foreground">React, .NET Core, SQL Server, JWT</p>
                            </div>
                            <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 hover:text-primary" />
                            </a>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Designed a modular full-stack architecture with React frontend, .NET Core APIs, and SQL Server backend.</li>
                            <li>Implemented secure JWT-based authentication with role-based access control for multi-user workflows.</li>
                            <li>Built interactive charts for real-time expense insights, improving usability and financial tracking accuracy.</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                               <h3 className="text-xl font-bold">Chat App</h3>
                               <p className="text-sm text-muted-foreground">React, Firebase</p>
                            </div>
                            <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer">
                                <Github className="w-5 h-5 hover:text-primary" />
                            </a>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Engineered a scalable real-time chat application capable of handling over 10,000 concurrent connections.</li>
                            <li>Integrated Firebase Authentication to ensure secure login with 99.9% uptime.</li>
                            <li>Enabled group chats and real-time media sharing to increase user engagement.</li>
                        </ul>
                    </CardContent>
                </Card>
                <Card className="flex flex-col">
                    <CardHeader>
                        <div className="flex justify-between items-center">
                            <div>
                               <h3 className="text-xl font-bold">Web Set Hun (Team Project)</h3>
                               <p className="text-sm text-muted-foreground">HTML, CSS, JavaScript</p>
                            </div>
                           <a href="https://swanirbhar.in/" target="_blank" rel="noopener noreferrer">
                                <ArrowRight className="w-5 h-5 hover:text-primary" />
                            </a>
                        </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                            <li>Collaborated in a team to redesign and develop the homepage of a social initiative website.</li>
                            <li>Revamped UI/UX with responsive design, animations, and dark mode for better accessibility.</li>
                            <li>Improved website performance and engagement by optimizing CSS and JavaScript.</li>
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
  <section ref={ref} id="contact" className="scroll-animation py-20 bg-muted/50">
    <div className="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-3xl md:text-4xl font-bold text-primary mb-4">Contact Me</h2>
      <p className="text-center text-muted-foreground mb-8">
        Have a project in mind? I'd love to hear from you.
      </p>
      <Card>
        <CardContent className="p-6">
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="first-name">First Name</Label>
                    <Input id="first-name" placeholder="John" />
                </div>
                <div>
                    <Label htmlFor="last-name">Last Name</Label>
                    <Input id="last-name" placeholder="Doe" />
                </div>
            </div>
            <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
            </div>
            <div>
                <Label htmlFor="message">Message</Label>
                <textarea id="message" className="w-full min-h-[100px] bg-background border border-input rounded-md p-2" placeholder="Your message..."></textarea>
            </div>
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
