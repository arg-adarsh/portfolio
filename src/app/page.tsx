
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

const fakeDelay = (promise: Promise<any>, delay: number) => {
    return new Promise(resolve => {
        setTimeout(resolve, delay);
    }).then(() => promise);
}

const HeroSection = dynamic(() =>
  fakeDelay(import('@/components/sections/HeroSection').then((mod) => mod.HeroSection), 2000),
  { ssr: false }
);

const WhatIDoSection = dynamic(() =>
  fakeDelay(import('@/components/sections/WhatIDoSection').then((mod) => mod.WhatIDoSection), 2000),
  { ssr: false }
);
const SkillsSection = dynamic(() =>
  fakeDelay(import('@/components/sections/SkillsSection').then((mod) => mod.SkillsSection), 2000),
  { ssr: false }
);
const ExperienceSection = dynamic(() =>
  fakeDelay(import('@/components/sections/ExperienceSection').then((mod) => mod.ExperienceSection), 2000),
  { ssr: false }
);
const ProjectsSection = dynamic(() =>
  fakeDelay(import('@/components/sections/ProjectsSection').then((mod) => mod.ProjectsSection), 2000),
  { ssr: false }
);
const ContactSection = dynamic(() =>
  fakeDelay(import('@/components/sections/ContactSection').then((mod) => mod.ContactSection), 2000),
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
