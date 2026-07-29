import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NUM_PATHS = 36;
const OFFSET_X = 348;
const OFFSET_Y = 158;

// 3 subtle key path indices for the 3 calm particles
const KEY_PATH_INDICES = [8, 18, 28];

// Precompute the 36 figure-8 infinity bezier path data
const INFINITY_PATHS = Array.from({ length: NUM_PATHS }, (_, i) => {
  const scale = 140 + i * 8;
  const strokeWidth = (0.35 + i * 0.015).toFixed(2);
  const isKeyPath = KEY_PATH_INDICES.includes(i);
  
  // Ultra-subtle, low opacity for background structure (so heading remains 100% focal point)
  const baseOpacity = isKeyPath
    ? (0.08 + (i / NUM_PATHS) * 0.04).toFixed(3)
    : (0.02 + (i / NUM_PATHS) * 0.03).toFixed(3);

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

  return {
    id: i,
    d,
    strokeWidth,
    baseOpacity,
    isKeyPath,
  };
});

// Exactly 3 Small, Calm, Slow-Moving Glowing Particles
const CALM_PARTICLES = [
  {
    id: 'calm-particle-0',
    d: INFINITY_PATHS[KEY_PATH_INDICES[0]].d,
    isForward: true,
    duration: 20.0, // Very slow, calm motion
    delay: 2.5,     // Noticeable only after a few seconds
    coreRadius: 2.0, // ~60% size reduction
    haloRadius: 5.0,
    coreOpacity: 0.45, // ~50% brightness reduction
    haloOpacity: 0.12,
  },
  {
    id: 'calm-particle-1',
    d: INFINITY_PATHS[KEY_PATH_INDICES[1]].d,
    isForward: false, // Reverse direction
    duration: 26.0,
    delay: 6.0,
    coreRadius: 1.8,
    haloRadius: 4.5,
    coreOpacity: 0.40,
    haloOpacity: 0.10,
  },
  {
    id: 'calm-particle-2',
    d: INFINITY_PATHS[KEY_PATH_INDICES[2]].d,
    isForward: true,
    duration: 32.0,
    delay: 9.5,
    coreRadius: 2.2,
    haloRadius: 5.5,
    coreOpacity: 0.45,
    haloOpacity: 0.12,
  },
];

function BackgroundPaths() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* 80% Reduced Faint Ambient Radial Vignette (Zero Washout) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-neutral-200/10 dark:bg-neutral-800/10 blur-3xl" />

      {/* SVG Container with Scale-Only Breathing (Scale: 1 -> 1.015 -> 1, Duration: 14s, No Rotation) */}
      <motion.div
        className="w-full h-full flex items-center justify-center"
        animate={shouldReduceMotion ? {} : { scale: [1, 1.015, 1] }}
        transition={{
          duration: 14,
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
            {/* Subtle Soft Blur Filter for Micro Glow */}
            <filter id="subtle-particle-glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="1.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <title>Subtle Enterprise Triage Intelligence Flow</title>

          {/* Layer 1 & Layer 2: Subtle Structural & Highlighted Infinity Lines */}
          {INFINITY_PATHS.map((path) => (
            <g key={path.id}>
              <path
                id={`subtle-path-${path.id}`}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.strokeWidth}
                strokeOpacity={path.baseOpacity}
                fill="none"
              />

              {/* Faint Energy Dash Flow on Key Paths */}
              {!shouldReduceMotion && path.isKeyPath && (
                <motion.path
                  d={path.d}
                  stroke="currentColor"
                  strokeWidth={parseFloat(path.strokeWidth) + 0.3}
                  strokeOpacity={0.08}
                  strokeDasharray="100 700"
                  fill="none"
                  initial={{ strokeDashoffset: path.id % 2 === 0 ? 800 : -800 }}
                  animate={{ strokeDashoffset: path.id % 2 === 0 ? -800 : 800 }}
                  transition={{
                    duration: 18 + (path.id % 3) * 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                />
              )}
            </g>
          ))}

          {/* Layer 3: Exactly 3 Small, Calm, Slow-Moving Light Particles */}
          {!shouldReduceMotion &&
            CALM_PARTICLES.map((particle) => (
              <g key={particle.id}>
                {/* Micro Halo */}
                <circle
                  r={particle.haloRadius}
                  fill="currentColor"
                  fillOpacity={particle.haloOpacity}
                  filter="url(#subtle-particle-glow)"
                >
                  <animateMotion
                    path={particle.d}
                    dur={`${particle.duration}s`}
                    begin={`${particle.delay}s`}
                    repeatCount="indefinite"
                    keyPoints={particle.isForward ? '0;1' : '1;0'}
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>

                {/* Small Core Particle Head */}
                <circle
                  r={particle.coreRadius}
                  fill="currentColor"
                  fillOpacity={particle.coreOpacity}
                  filter="url(#subtle-particle-glow)"
                >
                  <animateMotion
                    path={particle.d}
                    dur={`${particle.duration}s`}
                    begin={`${particle.delay}s`}
                    repeatCount="indefinite"
                    keyPoints={particle.isForward ? '0;1' : '1;0'}
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.4 0 0.2 1"
                  />
                </circle>
              </g>
            ))}
        </svg>
      </motion.div>
    </div>
  );
}

export default memo(BackgroundPaths);
