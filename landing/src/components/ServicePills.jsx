import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const SERVICE_OPTIONS = ['Deadlock', 'Timeout', 'OOM', 'Other'];

export default function ServicePills() {
  const [services, setServices] = useState([]);

  const toggleService = (service) => {
    setServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <section id="features" className="w-full">
      <h2 className="text-2xl font-medium tracking-tight mb-2 text-black">
        What type of incident?
      </h2>
      <p className="opacity-85 text-[#738273] mb-8">Select all that apply</p>

      <div className="flex flex-wrap gap-3 mb-6">
        {SERVICE_OPTIONS.map((option) => {
          const isActive = services.includes(option);
          return (
            <motion.button
              key={option}
              type="button"
              onClick={() => toggleService(option)}
              whileTap={{ scale: 0.97 }}
              className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-[#1C2E1E] text-white shadow-md shadow-emerald-950/5 transform'
                  : 'bg-white text-[#1C2E1E] border border-[#F1F3F1] hover:bg-[#F1F3F1]/55'
              }`}
            >
              {option}
              <AnimatePresence>
                {isActive && (
                  <motion.span
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <Check className="w-4 h-4" strokeWidth={2.5} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {services.length === 0 ? (
          <motion.p
            key="placeholder"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="italic text-xs text-[#738273]"
          >
            Please click to select incident types above.
          </motion.p>
        ) : (
          <motion.div
            key="banner"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="overflow-hidden"
          >
            <div className="bg-[#FAFBF9] border border-[#F1F3F1] rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <p className="text-sm text-[#1C2E1E]">
                Ready to analyze:{' '}
                <span className="font-medium">{services.join(', ')}</span>
              </p>
              <a
                href="dashboard.html"
                className="inline-flex items-center gap-2 text-[#4D6D47] uppercase text-xs font-semibold tracking-wider hover:opacity-70 transition-opacity"
              >
                Let&apos;s Go
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
