import { Briefcase, GraduationCap, Star, Trophy, Users, Wrench, Github, Linkedin, Mail, Phone, ExternalLink, FileText, Code } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Section: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode; className?: string }> = ({ title, icon, children, className }) => (
  <section className={`mb-12 ${className}`}>
    <h2 className="flex items-center gap-3 text-2xl font-headline font-bold text-primary mb-6 border-b-2 border-primary/20 pb-2">
      {icon}
      {title}
    </h2>
    <div className="text-foreground/90">
      {children}
    </div>
  </section>
);

const ListItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 mb-3">
    <Star className="h-4 w-4 mt-1 shrink-0 text-accent" />
    <span>{children}</span>
  </li>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-body text-foreground">
      <div className="container mx-auto max-w-5xl p-4 sm:p-8 md:p-12">
        
        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-headline font-bold text-primary">Adarsh Raj Gautam</h1>
          <p className="text-lg text-foreground/80 mt-2">Bangalore, India</p>
          <div className="flex justify-center items-center gap-4 mt-6 text-sm">
            <a href="tel:+917080632642" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
              <Phone className="w-4 h-4" />
              +91 7080632642
            </a>
            <span className="text-foreground/30">|</span>
            <a href="mailto:arg.adarsh@gmail.com" className="flex items-center gap-2 text-foreground/80 hover:text-accent transition-colors">
              <Mail className="w-4 h-4" />
              arg.adarsh@gmail.com
            </a>
          </div>
          <div className="flex justify-center items-center gap-4 mt-4">
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
          </div>
        </header>

        <div className="space-y-12">
          <Section title="Education" icon={<GraduationCap />}>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-primary/90">NIT Kurukshetra, Haryana</h3>
                  <p className="text-sm text-foreground/70">Dec 2020 – Jul 2024</p>
                </div>
                <p className="text-foreground/80">B.Tech – Information Technology</p>
                <p className="text-sm text-foreground/70">CGPA: 8.14</p>
              </div>
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-lg text-primary/90">Jawahar Navodaya Vidyalaya (JNV), Basti</h3>
                  <p className="text-sm text-foreground/70">Jul 2017 – Jun 2019</p>
                </div>
                <p className="text-foreground/80">Senior Secondary (Class 12, CBSE)</p>
                <p className="text-sm text-foreground/70">Percentage: 79.4</p>
              </div>
            </div>
          </Section>

          <Section title="Professional Experience" icon={<Briefcase />}>
            <Card className="bg-card/50">
              <CardHeader>
                <div className="flex justify-between items-baseline">
                  <CardTitle className="text-xl">Software Engineer L1</CardTitle>
                  <p className="text-sm text-foreground/70">Jul 2024 – Present</p>
                </div>
                <CardDescription>Medi Assist Healthcare, Bangalore, India</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-none">
                  <ListItem>Developed distributed batch processing system to process Excel data, reducing manual input by 95% and improving onboarding speed by 90%.</ListItem>
                  <ListItem>Reduced infrastructure cost by 70% and tripled log retrieval speed by migrating logs to AWS S3.</ListItem>
                  <ListItem>Eliminated manual uploads via automated FTP ingestion and daily client summary emails.</ListItem>
                  <ListItem>Cut deployment time (10 min to under 1 min) and reduced errors by 99.99% via Jenkins, Docker, Kubernetes automation.</ListItem>
                  <ListItem>Boosted QA coverage by 100% via automated OTP routing for authentication testing.</ListItem>
                  <ListItem>Enabled high-volume onboarding via RabbitMQ queues and batched SQL updates to avoid table locks.</ListItem>
                </ul>
              </CardContent>
            </Card>
          </Section>
          
          <Section title="Skills" icon={<Wrench />}>
            <div className="flex flex-wrap gap-2">
              {["C#", ".NET Core", "Java", "React", "JavaScript (ES6+)", "HTML", "CSS", "SQL", "SQL Server", "REST APIs", "Docker", "Kubernetes", "Jenkins", "Git", "AWS S3", "Firebase", "RabbitMQ", "Microservices", "Data Structures", "Algorithms", "OOP", "DBMS", "Operating Systems"].map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm bg-accent/10 text-accent-foreground hover:bg-accent/20 border border-accent/20">{skill}</Badge>
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={<Code />}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Expense Tracker
                    <a href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                  </CardTitle>
                  <CardDescription>React, .NET Core, SQL Server, JWT</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-none">
                    <ListItem>Designed full-stack architecture with React frontend, .NET Core APIs, and SQL Server backend.</ListItem>
                    <ListItem>Implemented secure JWT-based authentication with role-based access control.</ListItem>
                    <ListItem>Built real-time expense insights with interactive charts for financial tracking.</ListItem>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Chat App
                    <a href="https://github.com/arg-adarsh/Chat-app" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
                  </CardTitle>
                  <CardDescription>React, Firebase</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-none">
                    <ListItem>Built a scalable chat application handling 10,000+ concurrent users.</ListItem>
                    <ListItem>Integrated Firebase Authentication for secure login (99.9% uptime).</ListItem>
                    <ListItem>Enabled group chats and real-time media sharing to boost engagement.</ListItem>
                  </ul>
                </CardContent>
              </Card>
              <Card className="flex flex-col">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    Web Set Hun (Team)
                    <a href="https://swanirbhar.in/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-accent transition-colors"><ExternalLink className="w-5 h-5" /></a>
                  </CardTitle>
                  <CardDescription>HTML, CSS, JavaScript</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="list-none">
                    <ListItem>Collaborated on redesigning and developing homepage of a social initiative website.</ListItem>
                    <ListItem>Enhanced UI/UX with responsive design, animations, and dark mode.</ListItem>
                    <ListItem>Improved performance and engagement via CSS/JavaScript optimizations.</ListItem>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </Section>

          <Section title="Achievements & Certificates" icon={<Trophy />}>
            <ul className="list-none space-y-3">
              <ListItem>HackerRank — 5 Star in C++ (ID: arg\_adarsh)</ListItem>
              <ListItem>CodeChef — 3 Star (ID: adarsh\_3053)</ListItem>
              <ListItem>Solved 700+ problems on LeetCode, CodeChef, HackerRank, GFG</ListItem>
              <ListItem>Certificates: HackerRank (Frontend Developer – React), Sololearn (C++), HackerRank (JavaScript – Intermediate)</ListItem>
            </ul>
          </Section>

          <Section title="Positions of Responsibility" icon={<Users />}>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="font-bold text-lg text-primary/90">Volunteer Tutor</h3>
                <p className="text-sm text-foreground/70">Mar 2022 – May 2024</p>
              </div>
              <p className="text-foreground/80 italic">Shiksha Society, NIT Kurukshetra</p>
              <ul className="list-none mt-2">
                <ListItem>Tutored underprivileged children, helping improve grades by an average of 10%.</ListItem>
              </ul>
            </div>
          </Section>
        </div>
      </div>
    </main>
  );
}
