import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NUM_PATHS = 36;
const OFFSET_X = 348;
const OFFSET_Y = 158;

// Precompute 36 structural figure-8 bezier infinity paths
const INFINITY_PATHS = Array.from({ length: NUM_PATHS }, (_, i) => {
  const scale = 140 + i * 8;
  const strokeWidth = (0.4 + i * 0.02).toFixed(2);
  const baseOpacity = (0.04 + (i / NUM_PATHS) * 0.08).toFixed(3);

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

  return { id: i, d, strokeWidth, baseOpacity };
});

// Selected paths reserved for physical traveling glowing particles (reduces visual noise)
const PARTICLE_CONFIGS = [
  { pathIndex: 4,  duration: 9.0,  delay: 0.0, isForward: true  },
  { pathIndex: 12, duration: 12.5, delay: 2.2, isForward: false },
  { pathIndex: 20, duration: 10.0, delay: 4.5, isForward: true  },
  { pathIndex: 27, duration: 14.0, delay: 1.0, isForward: false },
  { pathIndex: 33, duration: 11.5, delay: 3.2, isForward: true  },
];

function BackgroundPaths() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Soft Ambient Monochrome Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[750px] rounded-full bg-neutral-200/50 dark:bg-neutral-800/30 blur-3xl" />

      {/* SVG Container with Scale-Only Breathing (1 -> 1.02 -> 1, 12s duration, No Rotation) */}
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
            {/* Soft Radial Bloom Filter for Glowing Heads */}
            <filter id="particle-bloom-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <title>Enterprise Incident Intelligence Motion Flow</title>

          {/* 1. Structural Static Infinity Background Lines */}
          {INFINITY_PATHS.map((path) => (
            <path
              key={`base-${path.id}`}
              d={path.d}
              stroke="currentColor"
              strokeWidth={path.strokeWidth}
              strokeOpacity={path.baseOpacity}
              fill="none"
              className="floating-path-base"
            />
          ))}

          {/* 2. Physical Traveling Glowing Light Particles with Fading Tails */}
          {!shouldReduceMotion &&
            PARTICLE_CONFIGS.map((config, idx) => {
              const targetPath = INFINITY_PATHS[config.pathIndex];
              if (!targetPath) return null;

              return (
                <g key={`particle-flow-${idx}`}>
                  {/* Trailing Fading Light Flow along the path curve */}
                  <motion.path
                    d={targetPath.d}
                    stroke="currentColor"
                    strokeWidth={parseFloat(targetPath.strokeWidth) + 0.8}
                    strokeOpacity={0.7}
                    strokeDasharray="160 840"
                    fill="none"
                    filter="url(#particle-bloom-glow)"
                    initial={{ strokeDashoffset: config.isForward ? 1000 : -1000 }}
                    animate={{ strokeDashoffset: config.isForward ? -1000 : 1000 }}
                    transition={{
                      duration: config.duration,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: 'linear',
                      delay: config.delay,
                    }}
                  />

                  {/* Physical Traveling Glowing White Particle Head (<animateMotion>) */}
                  <g filter="url(#particle-bloom-glow)">
                    {/* Outer soft halo */}
                    <circle r="7" fill="currentColor" opacity="0.3" />
                    {/* Mid bright halo */}
                    <circle r="4.5" fill="currentColor" opacity="0.6" />
                    {/* Core white center */}
                    <circle r="2.5" fill="#ffffff" />

                    <animateMotion
                      path={targetPath.d}
                      dur={`${config.duration}s`}
                      keyPoints={config.isForward ? '0;1' : '1;0'}
                      keyTimes="0;1"
                      repeatCount="indefinite"
                      calcMode="linear"
                      begin={`${config.delay}s`}
                    />
                  </g>
                </g>
              );
            })}
        </svg>
      </motion.div>
    </div>
  );
}

export default memo(BackgroundPaths);
