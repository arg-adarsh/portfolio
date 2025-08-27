
'use client';
import { Github, Linkedin, Mail, ArrowRight, Server, Brush, PenTool } from 'lucide-react';
import { Card, CardContent, CardHeader, CardMedia, Typography, Box, Grid, TextField } from '@mui/material';
import { Button, IconButton } from '@mui/material';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useRef } from 'react';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaJenkins } from 'react-icons/fa';
import { SiDotnet, SiMicrosoftsqlserver, SiTailwindcss, SiKubernetes, SiCsharp, SiJavascript } from 'react-icons/si';


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
        <IconButton href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" color="primary">
            <Github className="h-4 w-4" />
        </IconButton>
        <IconButton href="https://linkedin.com/in/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" color="primary">
            <Linkedin className="h-4 w-4" />
        </IconButton>
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
          <Button variant="contained" href="#contact" sx={{ width: { xs: '100%', md: '33%' } }}>Contact Me</Button>
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
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardHeader
              avatar={
                <Box sx={{ mx: 'auto', bgcolor: 'primary.light', p: 2, borderRadius: '50%', width: 'fit-content' }}>
                  <Server className="h-8 w-8 text-primary" />
                </Box>
              }
              title={<Typography variant="h5" component="div">Backend Development</Typography>}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                I build robust and scalable backend systems using C# and .NET Core, with experience in creating microservices and REST APIs.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardHeader
              avatar={
                <Box sx={{ mx: 'auto', bgcolor: 'primary.light', p: 2, borderRadius: '50%', width: 'fit-content' }}>
                  <Brush className="h-8 w-8 text-primary" />
                </Box>
              }
              title={<Typography variant="h5" component="div">Frontend Development</Typography>}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                I create modern and responsive user interfaces with React, ensuring a great user experience across devices.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ textAlign: 'center', p: 2 }}>
            <CardHeader
              avatar={
                <Box sx={{ mx: 'auto', bgcolor: 'primary.light', p: 2, borderRadius: '50%', width: 'fit-content' }}>
                  <PenTool className="h-8 w-8 text-primary" />
                </Box>
              }
              title={<Typography variant="h5" component="div">System Design & DevOps</Typography>}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                I design distributed systems and automate deployments with Docker, Kubernetes, and Jenkins to improve efficiency and reduce errors.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  </section>
)};

const SkillsSection = () => {
    const ref = useRef<HTMLElement>(null);
    useScrollAnimation(ref);

    const skills = [
      { name: "Java", icon: <FaJava size={40} /> },
      { name: "Javascript", icon: <SiJavascript size={40} /> },
      { name: "C#", icon: <SiCsharp size={40} /> },
      { name: ".NET", icon: <SiDotnet size={40} /> },
      { name: "React", icon: <FaReact size={40} /> },
      { name: "SQL Server", icon: <SiMicrosoftsqlserver size={40} /> },
      { name: "Git", icon: <FaGitAlt size={40} /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss size={40} /> },
      { name: "Docker", icon: <FaDocker size={40} /> },
      { name: "Kubernetes", icon: <SiKubernetes size={40} /> },
      { name: "Jenkins", icon: <FaJenkins size={40} /> },
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
                <Card>
                  <CardHeader
                    title={<Typography variant="h6">{exp.role}</Typography>}
                    subheader={exp.company}
                    action={<Typography variant="body2" color="text.secondary">{exp.period}</Typography>}
                  />
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                      {exp.description.map((item, i) => <li key={i}><Typography variant="body2">{item}</Typography></li>)}
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
            <Grid container spacing={4}>
                <Grid item xs={12} md={4}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <CardHeader 
                            title="Expense Tracker"
                            subheader="React, .NET Core, SQL Server, JWT"
                            action={
                                <IconButton href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                </IconButton>
                            }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                                <li>Designed full-stack architecture with React frontend, .NET Core APIs, and SQL Server backend.</li>
                                <li>Implemented secure JWT-based authentication with role-based access control.</li>
                                <li>Built real-time expense insights with interactive charts for financial tracking.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <CardHeader 
                            title="Chat App"
                            subheader="React, Firebase"
                             action={
                                <IconButton href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer">
                                    <Github className="w-5 h-5" />
                                </IconButton>
                            }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                                <li>Built a scalable chat application handling 10,000+ concurrent users.</li>
                                <li>Integrated Firebase Authentication for secure login (99.9% uptime).</li>
                                <li>Enabled group chats and real-time media sharing to boost engagement.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                        <CardHeader
                          title="Web Set Hun (Team)"
                          subheader="HTML, CSS, JavaScript"
                          action={
                            <IconButton href="https://swanirbhar.in/" target="_blank" rel="noopener noreferrer">
                                <ArrowRight className="w-5 h-5" />
                            </IconButton>
                          }
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
                                <li>Collaborated on redesigning and developing homepage of a social initiative website.</li>
                                <li>Enhanced UI/UX with responsive design, animations, and dark mode.</li>
                                <li>Improved performance and engagement via CSS/JavaScript optimizations.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
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
        <CardContent sx={{ p: 3 }}>
          <form className="space-y-4">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                  <TextField fullWidth label="First Name" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={6}>
                 <TextField fullWidth label="Last Name" variant="outlined" />
              </Grid>
            </Grid>
            <TextField type="email" fullWidth label="Email" variant="outlined" />
            <TextField fullWidth label="Your message" multiline rows={4} variant="outlined" />
            <Button type="submit" variant="contained" fullWidth>Send Message</Button>
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

