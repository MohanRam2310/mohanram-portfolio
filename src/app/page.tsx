import Hero from '@/components/Hero';
import Snapshot from '@/components/Snapshot';
import CaseStudies from '@/components/CaseStudies';
import WhatIDo from '@/components/WhatIDo';
import AutomationJourneys from '@/components/AutomationJourneys';
import Brands from '@/components/Brands';
import Contact from '@/components/Contact';
import SmoothScroll from '@/components/SmoothScroll';

/**
 * The homepage stitches together all of the portfolio sections into one
 * cohesive layout. Each section has its own responsibility and lives in
 * `/components`. Framer Motion animations, Tailwind styling and a custom
 * cursor provide a premium feel.
 */
export default function Page() {
  return (
    <SmoothScroll>
      <main className="flex flex-col">
        <Hero />
        <Snapshot />
        <CaseStudies />
        <WhatIDo />
        <AutomationJourneys />
        <Brands />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
