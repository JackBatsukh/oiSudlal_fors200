'use client';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import ResearchOverview from '@/components/ResearchOverview';
import Findings from '@/components/Findings';
import Professions from '@/components/Professions';
import Team from '@/components/Team';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-[#0a0f08] text-white overflow-x-hidden">
      <Hero />
      <Stats />
      <ResearchOverview />
      <Findings />
      <Professions />
      <Team />
      <Footer />
    </main>
  );
}
