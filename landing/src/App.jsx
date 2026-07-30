import { RobotHero } from './components/ui/robot-hero';
import ContainerScroll from './components/ContainerScroll';
import AgentsSection from './components/AgentsSection';
import BenefitsSection from './components/BenefitsSection';
import TechStackSection from './components/TechStackSection';
import { CtaSection, Footer } from './components/CtaSection';

import dashboardPreview from './assets/dashboard-preview.png';

export default function App() {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white antialiased overflow-x-hidden min-h-screen">
      <main className="relative z-10">
        {/* 1. Hero Section — 3D holographic agent core + sticky pill nav (replaces the old flat hero/navbar) */}
        <RobotHero onCtaClick={() => { window.location.href = 'dashboard.html'; }} />

        {/* 2. ContainerScroll Product Preview (Placed directly below HeroSection as a "see it in action" live dashboard reveal before reading the 11-Agent breakdown) */}
        <ContainerScroll
          titleComponent={
            <h1 className="text-3xl md:text-5xl font-semibold text-black">
              See root cause analysis <br />
              <span className="text-4xl md:text-[5.5rem] font-bold mt-2 leading-none inline-block">
                happen in real time
              </span>
            </h1>
          }
        >
          <img
            src={dashboardPreview}
            alt="RootSense dashboard analyzing a live incident"
            className="mx-auto rounded-xl object-cover w-full h-full object-top shadow-inner"
            draggable={false}
          />
        </ContainerScroll>

        {/* 3. 7 Autonomous Agents Gallery */}
        <AgentsSection />

        {/* 4. Enterprise Benefits */}
        <BenefitsSection />

        {/* 5. Modern Tech Stack Grid */}
        <TechStackSection />

        {/* 6. Final Call-to-Action */}
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
