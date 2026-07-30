import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AgentsSection from './components/AgentsSection';
import BenefitsSection from './components/BenefitsSection';
import TechStackSection from './components/TechStackSection';
import { CtaSection, Footer } from './components/CtaSection';

export default function App() {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white antialiased overflow-x-hidden min-h-screen">
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <AgentsSection />
        <BenefitsSection />
        <TechStackSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
