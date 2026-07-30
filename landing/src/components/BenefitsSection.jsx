import React from 'react';
import { motion } from 'framer-motion';
import ParallaxLayer from './ParallaxLayer';

const BENEFITS = [
  {
    title: 'Saves 30+ Minutes Per Incident',
    desc: 'Eliminate manual root-cause archaeology. Instant answers from historical patterns.',
    speed: 0.92,
  },
  {
    title: '100% Offline, Zero Dependencies',
    desc: 'No API keys, no cloud, no external calls. Works anywhere, anytime.',
    speed: 1.04,
  },
  {
    title: 'Gets Smarter Over Time',
    desc: "Learns from your team's feedback. Each incident makes the next one faster.",
    speed: 1.12,
  },
  {
    title: 'Enterprise Ready',
    desc: 'FastAPI backend, tested pipeline, production-grade code. Deploy confidently.',
    speed: 0.96,
  },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-white relative z-10">
      <div className="max-w-5xl w-full space-y-16">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Benefits</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
          Why Teams Choose RootSense
        </h2>

        {/* 4 benefits cards with organic staggered parallax motion */}
        <div className="mt-24 space-y-16">
          {BENEFITS.map((benefit, index) => (
            <ParallaxLayer key={benefit.title} speed={benefit.speed}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/80 shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="text-3xl sm:text-4xl font-bold text-black mb-4">{benefit.title}</p>
                <p className="text-lg text-gray-600 max-w-2xl font-light leading-relaxed">{benefit.desc}</p>
              </motion.div>
            </ParallaxLayer>
          ))}
        </div>
      </div>
    </section>
  );
}
