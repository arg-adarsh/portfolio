
'use client';
import { useRef } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ExperienceSection = () => {
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
      <section ref={ref} id="experience" className="scroll-animation py-20 bg-muted/50 min-h-screen flex items-center">
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
