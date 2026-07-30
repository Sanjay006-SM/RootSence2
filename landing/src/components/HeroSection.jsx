import { motion } from 'framer-motion';
import SignalTrace from './SignalTrace';
import ParallaxLayer from './ParallaxLayer';

export default function HeroSection() {
  return (
    <section className="w-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-4 relative overflow-hidden">
      {/* Background Parallax Layer (SignalTrace & Corner Topology SVGs at speed=0.3) */}
      <ParallaxLayer speed={0.3} className="absolute inset-0 z-0 pointer-events-none">
        {/* On-brand Signal Trace telemetry background element */}
        <SignalTrace />

        {/* Top-Left Asymmetric Network Topology Corner Accent */}
        <svg
          viewBox="0 0 300 300"
          className="absolute top-4 left-4 lg:left-12 w-64 h-64 lg:w-80 lg:h-80 pointer-events-none hidden md:block"
          aria-hidden="true"
        >
          <g stroke="#000000" strokeWidth="1" strokeOpacity="0.10">
            <line x1="40" y1="60" x2="120" y2="30" />
            <line x1="120" y1="30" x2="180" y2="90" />
            <line x1="40" y1="60" x2="90" y2="140" />
            <line x1="180" y1="90" x2="150" y2="170" />
            <line x1="90" y1="140" x2="150" y2="170" />
          </g>
          <g fill="#000000" fillOpacity="0.16">
            <circle cx="40" cy="60" r="4" />
            <circle cx="120" cy="30" r="5" />
            <circle cx="180" cy="90" r="4" />
            <circle cx="90" cy="140" r="3.5" />
            <circle cx="150" cy="170" r="4.5" />
          </g>
        </svg>

        {/* Top-Right Asymmetric Network Topology Corner Accent */}
        <svg
          viewBox="0 0 300 300"
          className="absolute top-4 right-4 lg:right-12 w-56 h-56 lg:w-72 lg:h-72 pointer-events-none hidden md:block"
          aria-hidden="true"
        >
          <g stroke="#000000" strokeWidth="1" strokeOpacity="0.09">
            <line x1="220" y1="40" x2="260" y2="100" />
            <line x1="260" y1="100" x2="210" y2="150" />
            <line x1="220" y1="40" x2="170" y2="80" />
            <line x1="170" y1="80" x2="210" y2="150" />
            <line x1="210" y1="150" x2="240" y2="200" />
            <line x1="260" y1="100" x2="280" y2="170" />
          </g>
          <g fill="#000000" fillOpacity="0.15">
            <circle cx="220" cy="40" r="4" />
            <circle cx="260" cy="100" r="3.5" />
            <circle cx="210" cy="150" r="5" />
            <circle cx="170" cy="80" r="4" />
            <circle cx="240" cy="200" r="3.5" />
            <circle cx="280" cy="170" r="3" />
          </g>
        </svg>
      </ParallaxLayer>

      {/* Centered Glass Card (Stays unwrapped at normal 1.0 scroll speed) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-3xl w-full rounded-[36px] bg-white/75 backdrop-blur-xl border border-white/80 p-8 sm:p-14 shadow-2xl shadow-black/5 text-center flex flex-col items-center space-y-7 relative z-10"
      >
        {/* Minimal Monospace Tracking Label */}
        <p className="text-xs font-mono text-neutral-500 uppercase tracking-[0.25em]">
          ENTERPRISE INCIDENT INTELLIGENCE
        </p>

        {/* Massive Bold Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-neutral-900 tracking-tight leading-[1.05] drop-shadow-sm">
          Root Cause<br />Analysis
        </h1>

        {/* Minimal Subtitle */}
        <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed max-w-xl mx-auto">
          Instantly match production errors against your incident history. Get root causes, severity ratings, and automated fixes in seconds.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="dashboard.html"
            className="w-full sm:w-auto px-7 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition text-sm shadow-lg shadow-black/10 flex items-center justify-center gap-2"
          >
            Launch Demo Console &rarr;
          </a>
          <a
            href="https://github.com/Sanjay006-SM/RootSence2.git"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 bg-white/90 backdrop-blur-md text-neutral-900 font-semibold rounded-xl hover:bg-neutral-100 border border-neutral-200 transition text-sm flex items-center justify-center"
          >
            View GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}
