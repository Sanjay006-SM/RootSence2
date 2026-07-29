import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NUM_PATHS = 36;
const OFFSET_X = 348;
const OFFSET_Y = 158;

// Precompute the 36 figure-8 infinity bezier path data to avoid runtime recalculations
const INFINITY_PATHS = Array.from({ length: NUM_PATHS }, (_, i) => {
  const scale = 140 + i * 8;
  const strokeWidth = (0.45 + i * 0.025).toFixed(2);
  const baseOpacity = (0.04 + (i / NUM_PATHS) * 0.10).toFixed(3);
  const pulseOpacity = (0.35 + (i / NUM_PATHS) * 0.55).toFixed(3);

  // Generate cubic Bezier figure-8 infinity loop
  const d = `
    M ${OFFSET_X - scale} ${OFFSET_Y}
    C ${OFFSET_X - scale} ${OFFSET_Y - scale * 0.5}, 
      ${OFFSET_X - scale * 0.5} ${OFFSET_Y - scale * 0.5}, 
      ${OFFSET_X} ${OFFSET_Y}
    C ${OFFSET_X + scale * 0.5} ${OFFSET_Y + scale * 0.5}, 
      ${OFFSET_X + scale} ${OFFSET_Y + scale * 0.5}, 
      ${OFFSET_X + scale} ${OFFSET_Y}
    C ${OFFSET_X + scale} ${OFFSET_Y - scale * 0.5}, 
      ${OFFSET_X + scale * 0.5} ${OFFSET_Y - scale * 0.5}, 
      ${OFFSET_X} ${OFFSET_Y}
    C ${OFFSET_X - scale * 0.5} ${OFFSET_Y + scale * 0.5}, 
      ${OFFSET_X - scale} ${OFFSET_Y + scale * 0.5}, 
      ${OFFSET_X - scale} ${OFFSET_Y}
  `.replace(/\s+/g, ' ').trim();

  const isForward = i % 2 === 0;
  const duration = isForward ? 8.5 + (i % 6) * 1.4 : 11.0 + (i % 5) * 1.6;
  const delay = i * 0.16;

  return {
    id: i,
    d,
    strokeWidth,
    baseOpacity,
    pulseOpacity,
    isForward,
    duration,
    delay,
  };
});

function BackgroundPaths() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Soft Ambient Radial Glow (Monochrome/Neutral Depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-neutral-200/50 dark:bg-neutral-800/30 blur-3xl" />

      {/* SVG Container with Scale-Only Breathing (No Rotation) */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.02, 1] }}
        transition={{
          duration: 12,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
        }}
      >
        <svg
          className="w-full h-full text-black dark:text-white"
          viewBox="0 0 696 316"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            {/* SVG Soft Drop-Shadow Glow Filter */}
            <filter id="react-infinity-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <title>Incident Intelligence Infinity Flow</title>

          {INFINITY_PATHS.map((path) => (
            <g key={path.id}>
              {/* 1. Static Structural Base Line */}
              <path
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.strokeWidth}
                strokeOpacity={path.baseOpacity}
                fill="none"
              />

              {/* 2. Dual-Directional Traveling Light Pulses (Framer Motion) */}
              {!shouldReduceMotion && (
                <motion.path
                  d={path.d}
                  stroke="currentColor"
                  strokeWidth={parseFloat(path.strokeWidth) + 0.6}
                  strokeOpacity={path.pulseOpacity}
                  strokeDasharray="140 760"
                  fill="none"
                  filter="url(#react-infinity-glow)"
                  initial={{ strokeDashoffset: path.isForward ? 900 : -900 }}
                  animate={{ strokeDashoffset: path.isForward ? -900 : 900 }}
                  transition={{
                    duration: path.duration,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                    delay: path.delay,
                  }}
                />
              )}
            </g>
          ))}
        </svg>
      </motion.div>
    </div>
  );
}

export default memo(BackgroundPaths);
