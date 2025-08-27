
'use client';

import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { HeroSection } from '@/components/sections/HeroSection';

const WhatIDoSection = dynamic(() =>
  import('@/components/sections/WhatIDoSection').then((mod) => mod.WhatIDoSection)
);
const SkillsSection = dynamic(() =>
  import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection)
);
const ExperienceSection = dynamic(() =>
  import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection)
);
const ProjectsSection = dynamic(() =>
  import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection)
);
const ContactSection = dynamic(() =>
  import('@/components/sections/ContactSection').then((mod) => mod.ContactSection)
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
