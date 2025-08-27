
'use client';
import { useState } from 'react';
import { Github, Linkedin, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
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
