import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

const AGENTS = [
  {
    num: '1',
    name: 'Ingestion Agent',
    badge: 'Log Extraction & Regex',
    desc: 'Extracts structured data from raw error logs using regex patterns and heuristics.',
  },
  {
    num: '2',
    name: 'Matcher Agent',
    badge: 'TF-IDF & Cosine Similarity',
    desc: 'Compares the incident against historical KB using TF-IDF vectorization and cosine similarity.',
  },
  {
    num: '3',
    name: 'Diagnosis Agent',
    badge: 'Ollama LLM Synthesis',
    desc: 'Synthesizes a natural-language root cause explanation using Ollama Mistral LLM.',
  },
  {
    num: '4',
    name: 'Severity Agent',
    badge: 'P1–P4 Score Computation',
    desc: 'Evaluates service criticality, confidence levels, and crisis keywords to assign P1–P4 priorities.',
  },
  {
    num: '5',
    name: 'Resolution Agent',
    badge: 'Action Plan Optimization',
    desc: 'Merges and deduplicates resolution steps from matched incidents into a ranked action plan.',
  },
  {
    num: '6',
    name: 'Escalation Agent',
    badge: 'On-Call Alert Routing',
    desc: 'Routes alerts to owning on-call teams (`#payments-urgent`, `#sec-auth-urgent`) for immediate triage.',
  },
  {
    num: '7',
    name: 'Learning Agent',
    badge: 'Reinforcement Boost Loop',
    desc: 'Learns from feedback via a boost multiplier, making the system smarter over time.',
  },
];

export default function AgentsSection() {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();

  // Track scroll progress strictly through the 7-agent section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.55', 'end 0.85'],
  });

  // Vertical line fill height percentage across the full 7-agent chain
  const strokeHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="how-it-works"
      ref={containerRef}
      className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-white relative z-10"
    >
      <div className="max-w-5xl w-full space-y-16">
        {/* Section Header */}
        <div>
          <p className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-4">
            How It Works
          </p>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight tracking-tight">
            7 Autonomous Agents
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed max-w-3xl font-light mt-8">
            Each agent in the pipeline handles a specific task: ingesting raw errors,
            matching against historical incidents, diagnosing root causes, scoring severity,
            recommending fixes, routing escalations, and learning from feedback.
          </p>
        </div>

        {/* Scroll-Linked Vertical Agent Pipeline Chain */}
        <div className="mt-20 relative pl-4 sm:pl-8">
          {/* Background Connecting Line Track */}
          <div className="absolute left-[27px] sm:left-[43px] top-6 bottom-8 w-[2px] bg-neutral-200 pointer-events-none" />

          {/* Animated Black Active Fill Line */}
          {!shouldReduceMotion && (
            <motion.div
              style={{ height: strokeHeight }}
              className="absolute left-[27px] sm:left-[43px] top-6 w-[2px] bg-black pointer-events-none origin-top transition-all duration-75"
            />
          )}

          {/* Render 7 Agent Pipeline Items */}
          <div className="space-y-12 sm:space-y-16">
            {AGENTS.map((agent, index) => (
              <AgentPipelineItem
                key={agent.num}
                agent={agent}
                index={index}
                total={AGENTS.length}
                scrollYProgress={scrollYProgress}
                shouldReduceMotion={shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentPipelineItem({
  agent,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
}) {
  // Activation threshold for this specific agent (index 0 to 6)
  const threshold = index / (total - 0.8);
  const nextThreshold = (index + 1) / (total - 0.8);

  // Interpolate opacity and node scale smoothly as scroll progresses
  const opacity = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold, nextThreshold],
    [0.35, 1.0, 1.0]
  );

  const scale = useTransform(
    scrollYProgress,
    [threshold - 0.08, threshold],
    [0.92, 1.0]
  );

  // Determine if node is filled black based on scroll position threshold
  const isLast = index === total - 1;

  return (
    <motion.div
      style={shouldReduceMotion ? {} : { opacity, scale }}
      className="relative flex items-start gap-6 sm:gap-10 group"
    >
      {/* Numbered Node Circle (① to ⑦) */}
      <div className="relative z-10 flex-shrink-0">
        <NodeCircle
          num={agent.num}
          index={index}
          total={total}
          scrollYProgress={scrollYProgress}
          shouldReduceMotion={shouldReduceMotion}
        />
      </div>

      {/* Agent Text Details Block */}
      <div className="flex-1 pt-1 pb-4 border-b border-neutral-200">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
            {agent.num}. {agent.name}
          </h3>
          <span className="text-xs font-mono px-3 py-1 bg-neutral-100 text-neutral-700 rounded-full font-medium">
            {agent.badge}
          </span>
        </div>
        <p className="text-neutral-600 text-base sm:text-lg leading-relaxed font-light max-w-3xl">
          {agent.desc}
        </p>
      </div>
    </motion.div>
  );
}

function NodeCircle({ num, index, total, scrollYProgress, shouldReduceMotion }) {
  if (shouldReduceMotion) {
    return (
      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black text-white border-2 border-black flex items-center justify-center font-mono font-bold text-sm sm:text-base shadow-md">
        {num}
      </div>
    );
  }

  const threshold = index / (total - 0.8);
  const isFilled = useTransform(scrollYProgress, (value) => value >= threshold);

  return (
    <motion.div
      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-mono font-bold text-sm sm:text-base transition-colors duration-300 ${
        isFilled.get()
          ? 'bg-black text-white border-2 border-black shadow-md'
          : 'bg-white text-neutral-400 border-2 border-neutral-300'
      }`}
    >
      {num}
    </motion.div>
  );
}
