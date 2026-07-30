import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/**
 * SignalTrace Component
 * An ultra-restrained, on-brand monitoring dashboard signal trace line
 * positioned exclusively behind the Hero glass card.
 * Evokes system telemetry monitoring and incident root-cause analysis.
 */
function SignalTrace() {
  const shouldReduceMotion = useReducedMotion();

  // Smooth telemetry waveform SVG path data
  const tracePath = `
    M 0 160 
    Q 120 160 180 150 
    T 300 170 
    T 420 140 
    L 460 210 
    L 490 90 
    L 520 180 
    L 550 160 
    T 680 160 
    T 840 165 
    T 1000 160 
    T 1200 160
  `;

  // Telemetry node metric points along the signal line (representing anomaly checkpoints)
  const nodes = [
    { cx: 460, cy: 210, label: 'Error Spike' },
    { cx: 490, cy: 90, label: 'Root Cause Node' },
    { cx: 520, cy: 180, label: 'Telemetry Event' },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Extremely Faint Ambient Vignette (Zero washout) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] rounded-full bg-neutral-200/20 dark:bg-neutral-800/10 blur-3xl" />

      <svg
        className="w-full h-full text-black dark:text-white max-w-7xl mx-auto"
        viewBox="0 0 1200 320"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <filter id="signal-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Structural Faint Grid Baseline */}
        <line x1="0" y1="160" x2="1200" y2="160" stroke="currentColor" strokeWidth="1" strokeOpacity="0.04" strokeDasharray="4 8" />

        {/* 2. Main Monitoring Telemetry Signal Line */}
        <path
          d={tracePath}
          stroke="currentColor"
          strokeWidth="1.2"
          strokeOpacity="0.06"
          fill="none"
        />

        {/* 3. Subtle Animated Dash Flow along the Signal Line */}
        {!shouldReduceMotion && (
          <motion.path
            d={tracePath}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeOpacity="0.12"
            strokeDasharray="80 720"
            fill="none"
            filter="url(#signal-glow)"
            initial={{ strokeDashoffset: 800 }}
            animate={{ strokeDashoffset: -800 }}
            transition={{
              duration: 16,
              repeat: Number.POSITIVE_INFINITY,
              ease: 'linear',
            }}
          />
        )}

        {/* 4. Sparse Metric Checkpoint Nodes */}
        {nodes.map((node, i) => (
          <g key={node.label}>
            {/* Outer halo */}
            <motion.circle
              cx={node.cx}
              cy={node.cy}
              r="6"
              fill="currentColor"
              fillOpacity="0.05"
              animate={shouldReduceMotion ? {} : { opacity: [0.05, 0.20, 0.05], scale: [0.9, 1.2, 0.9] }}
              transition={{
                duration: 4.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: 'easeInOut',
                delay: i * 1.5,
              }}
            />
            {/* Inner node dot */}
            <circle
              cx={node.cx}
              cy={node.cy}
              r="2.2"
              fill="currentColor"
              fillOpacity="0.18"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}

export default memo(SignalTrace);
