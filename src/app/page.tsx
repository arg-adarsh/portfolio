import { Briefcase, GraduationCap, Star, Trophy, Users, Wrench, Github, Linkedin, Mail, Phone, ExternalLink, Code, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        <a href="#" className="text-2xl font-bold text-primary">Adarsh Raj Gautam</a>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a>
          <a href="#experience" className="text-foreground/80 hover:text-primary transition-colors">Experience</a>
          <a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a>
          <a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a>
        </div>
        <div className="flex items-center">
            <Button variant="ghost" size="icon" asChild>
              <a href="https://github.com/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a href="https://linkedin.com/in/arg-adarsh" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                 <a href="mailto:arg.adarsh@gmail.com" aria-label="Mail">
                    <Mail className="w-5 h-5" />
                </a>
            </Button>
        </div>
      </div>
    </div>
  </nav>
);

const HeroSection = () => (
  <section className="min-h-screen flex items-center bg-background">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-extrabold text-primary tracking-tight">
          Hi, I'm Adarsh Raj Gautam
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-3xl">
          A passionate Software Engineer specializing in building robust and scalable applications.
        </p>
        <div className="mt-8 flex gap-4">
          <Button asChild size="lg">
            <a href="#projects">
              My Work <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:arg.adarsh@gmail.com">Contact Me</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-card">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="https://picsum.photos/600/600"
            alt="Adarsh Raj Gautam"
            width={600}
            height={600}
            className="rounded-lg shadow-2xl"
            data-ai-hint="professional portrait"
          />
        </div>
        <div className="prose prose-invert max-w-none text-foreground/90">
          <h2 className="text-4xl font-bold text-primary mb-6">About Me</h2>
          <p className="text-lg mb-4">
            I'm a Software Engineer at Medi Assist Healthcare in Bangalore. I build distributed batch processing systems, automate deployments, and optimize performance. I have a B.Tech in Information Technology from NIT Kurukshetra.
          </p>
          <p className="text-lg">
            I'm skilled in a variety of technologies including C#, .NET Core, React, and cloud services like AWS S3. I thrive on solving complex problems and I'm passionate about creating efficient, high-quality software.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ExperienceSection = () => (
  <section id="experience" className="py-20 bg-background">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-primary mb-12">Professional Experience</h2>
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-baseline">
              <CardTitle className="text-2xl">Software Engineer L1</CardTitle>
              <p className="text-sm text-foreground/70">Jul 2024 – Present</p>
            </div>
            <CardDescription>Medi Assist Healthcare, Bangalore, India</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-foreground/90">
              <li>Developed distributed batch processing system to process Excel data, reducing manual input by 95% and improving onboarding speed by 90%.</li>
              <li>Reduced infrastructure cost by 70% and tripled log retrieval speed by migrating logs to AWS S3.</li>
              <li>Eliminated manual uploads via automated FTP ingestion and daily client summary emails.</li>
              <li>Cut deployment time (10 min to under 1 min) and reduced errors by 99.99% via Jenkins, Docker, Kubernetes automation.</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
);

const SkillsSection = () => (
  <section id="skills" className="py-20 bg-card">
    <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-center text-4xl font-bold text-primary mb-12">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {["C#", ".NET Core", "Java", "React", "JavaScript (ES6+)", "HTML", "CSS", "SQL", "SQL Server", "REST APIs", "Docker", "Kubernetes", "Jenkins", "Git", "AWS S3", "Firebase", "RabbitMQ", "Microservices", "Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"].map(skill => (
          <Badge key={skill} variant="secondary" className="text-base px-4 py-2 bg-background hover:bg-secondary/80">{skill}</Badge>
        ))}
      </div>
    </div>
  </section>
);

const ProjectsSection = () => (
    <section id="projects" className="py-20 bg-background">
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
                            <a href="https://swanirbhar.in/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><ExternalLink className="w-5 h-5" /></a>
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
);


const Footer = () => (
    <footer className="bg-card py-6">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-foreground/70">
        <p>&copy; {new Date().getFullYear()} Adarsh Raj Gautam. All Rights Reserved.</p>
      </div>
    </footer>
  );
  

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
    </div>
  );
}
