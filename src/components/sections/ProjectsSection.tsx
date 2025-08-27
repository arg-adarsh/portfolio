
'use client';
import { useRef } from 'react';
import { Github, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ProjectsSection = () => {
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
