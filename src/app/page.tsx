
'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { HeroSectionSkeleton } from '@/components/skeletons/HeroSectionSkeleton';
import { WhatIDoSectionSkeleton } from '@/components/skeletons/WhatIDoSectionSkeleton';
import { SkillsSectionSkeleton } from '@/components/skeletons/SkillsSectionSkeleton';
import { ExperienceSectionSkeleton } from '@/components/skeletons/ExperienceSectionSkeleton';
import { ProjectsSectionSkeleton } from '@/components/skeletons/ProjectsSectionSkeleton';
import { ContactSectionSkeleton } from '@/components/skeletons/ContactSectionSkeleton';

const HeroSection = dynamic(() =>
  import('@/components/sections/HeroSection').then((mod) => mod.HeroSection),
  { ssr: false }
);

const WhatIDoSection = dynamic(() =>
  import('@/components/sections/WhatIDoSection').then((mod) => mod.WhatIDoSection),
  { ssr: false }
);
const SkillsSection = dynamic(() =>
  import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection),
  { ssr: false }
);
const ExperienceSection = dynamic(() =>
  import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection),
  { ssr: false }
);
const ProjectsSection = dynamic(() =>
  import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection),
  { ssr: false }
);
const ContactSection = dynamic(() =>
  import('@/components/sections/ContactSection').then((mod) => mod.ContactSection),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="bg-background text-foreground font-sans">
      <Navbar />
      <main className="relative overflow-x-hidden no-scrollbar">
        <Suspense fallback={<HeroSectionSkeleton />}>
          <HeroSection />
        </Suspense>
        <Suspense fallback={<WhatIDoSectionSkeleton />}>
          <WhatIDoSection />
        </Suspense>
        <Suspense fallback={<SkillsSectionSkeleton />}>
          <SkillsSection />
        </Suspense>
        <Suspense fallback={<ExperienceSectionSkeleton />}>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={<ProjectsSectionSkeleton />}>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={<ContactSectionSkeleton />}>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
