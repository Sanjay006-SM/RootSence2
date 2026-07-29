import { motion } from 'framer-motion';

const AGENTS = [
  {
    num: '1',
    name: 'Ingestion Agent',
    desc: 'Extracts structured data from raw error logs using regex patterns and heuristics.',
  },
  {
    num: '2',
    name: 'Matcher Agent',
    desc: 'Compares the incident against historical KB using TF-IDF vectorization and cosine similarity.',
  },
  {
    num: '3',
    name: 'Diagnosis Agent',
    desc: 'Synthesizes a natural-language root cause explanation using Ollama Mistral LLM.',
  },
  {
    num: '4',
    name: 'Severity Agent',
    desc: 'Evaluates service criticality, confidence levels, and crisis keywords to assign P1–P4 priorities.',
  },
  {
    num: '5',
    name: 'Resolution Agent',
    desc: 'Merges and deduplicates resolution steps from matched incidents into a ranked action plan.',
  },
  {
    num: '6',
    name: 'Escalation Agent',
    desc: 'Routes alerts to owning on-call teams (`#payments-urgent`, `#sec-auth-urgent`) for immediate triage.',
  },
  {
    num: '7',
    name: 'Learning Agent',
    desc: 'Learns from feedback via a boost multiplier, making the system smarter over time.',
  },
];

export default function AgentsSection() {
  return (
    <section id="how-it-works" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-white relative z-10">
      <div className="max-w-5xl w-full space-y-16">
        {/* Minimal label */}
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">
          How It Works
        </p>

        {/* Large headline */}
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
          7 Autonomous Agents
        </h2>

        {/* Overview description */}
        <div className="mt-20 space-y-8">
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl font-light">
            Each agent in the pipeline handles a specific task: ingesting raw errors,
            matching against historical incidents, diagnosing root causes, scoring severity,
            recommending fixes, routing escalations, and learning from your feedback.
          </p>
        </div>

        {/* Agent visualization gallery */}
        <div className="mt-24 space-y-8">
          {AGENTS.map((agent, index) => (
            <motion.div
              key={agent.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={`border-b border-gray-200 pb-12 ${index > 0 ? 'pt-8' : ''}`}
            >
              <h3 className="text-2xl font-bold text-black mb-4">
                {agent.num}. {agent.name}
              </h3>
              <p className="text-gray-600 text-lg max-w-2xl font-light">
                {agent.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
