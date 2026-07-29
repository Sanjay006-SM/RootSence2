import BackgroundPaths from './components/BackgroundPaths';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';

export default function App() {
  return (
    <div className="relative bg-white text-neutral-900 font-sans selection:bg-[#EAECE9] selection:text-[#1C2E1E] antialiased overflow-x-hidden flex flex-col lg:block lg:min-h-screen">
      <Navbar />

      <div className="relative z-10 flex flex-col order-first lg:order-none w-full bg-transparent pb-8 lg:pb-0 lg:min-h-screen">
        <HeroSection />
      </div>

      <BackgroundPaths />
    </div>
  );
}
