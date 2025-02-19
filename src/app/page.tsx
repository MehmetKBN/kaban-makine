import { Suspense } from 'react';
import { Hero } from '@/components/sections/Hero';
import { CompletedProjects } from '@/components/sections/CompletedProjects';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Loading } from '@/components/common/Loading';

export default function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <CompletedProjects />
      </Suspense>
      <About />
      <Contact />
    </>
  );
} 