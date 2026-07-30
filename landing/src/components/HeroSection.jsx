import { motion } from 'framer-motion';
import SignalTrace from './SignalTrace';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-16 relative overflow-hidden">
      {/* On-brand Signal Trace telemetry background element (positioned behind glass card) */}
      <SignalTrace />

      {/* Centered Glass Card */}
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
