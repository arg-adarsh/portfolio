
'use client';
import { useRef } from 'react';
import { FaJava, FaReact, FaGitAlt, FaDocker, FaJenkins, FaAws, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiDotnet, SiTailwindcss, SiKubernetes, SiJavascript, SiFirebase, SiRabbitmq } from 'react-icons/si';
import { GrMysql } from "react-icons/gr";
import { VscJson } from "react-icons/vsc";
import { GoGear } from "react-icons/go";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const SkillsSection = () => {
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
            <path fill="currentColor" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6zM97 66.2l.9-4.3h-4.2v-4.7h5.1L100 51h4.9l-1.2 6.1h3.8l1.2-6.1h4.8l-1.2 6.1h2.4v4.7h-3.3l-.9 4.3h4.2v4.7h-5.1l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6h-2.4v-4.7H97zm4.8 0h3.8l.9-4.3h-3.8l-.9 4.3z"/>
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
        <section ref={ref} id="skills" className="scroll-animation py-20 min-h-screen flex items-center">
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
