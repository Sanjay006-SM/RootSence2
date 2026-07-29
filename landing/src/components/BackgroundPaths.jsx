import React, { memo } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const NUM_PATHS = 36;
const OFFSET_X = 348;
const OFFSET_Y = 158;

// Selected key path indices for Layer 2 & Layer 3 foreground particles (creating visual hierarchy)
const KEY_PATH_INDICES = [4, 10, 16, 22, 28, 34];

// Precompute the 36 figure-8 infinity bezier path data to avoid runtime recalculations
const INFINITY_PATHS = Array.from({ length: NUM_PATHS }, (_, i) => {
  const scale = 140 + i * 8;
  const strokeWidth = (0.4 + i * 0.02).toFixed(2);
  const isKeyPath = KEY_PATH_INDICES.includes(i);
  
  // Layer 1 (Background) vs Layer 2 (Middle ground) opacity
  const baseOpacity = isKeyPath
    ? (0.18 + (i / NUM_PATHS) * 0.12).toFixed(3)
    : (0.03 + (i / NUM_PATHS) * 0.05).toFixed(3);

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

// Layer 3: 6 Physically Traveling Glowing Particles (Clockwise & Counter-Clockwise)
const PARTICLES = KEY_PATH_INDICES.map((pathIdx, particleIdx) => {
  const targetPath = INFINITY_PATHS[pathIdx];
  const isForward = particleIdx % 2 === 0;
  
  // Varied non-synchronous speeds, radius, and delays for organic depth
  const duration = [7.5, 10.2, 12.8, 8.8, 11.5, 14.2][particleIdx];
  const delay = [0, 1.8, 3.2, 0.9, 2.5, 4.1][particleIdx];
  const coreRadius = [4.5, 5.0, 4.0, 5.2, 4.2, 4.8][particleIdx];
  const haloRadius = [10.0, 12.0, 9.0, 12.5, 9.5, 11.0][particleIdx];

  return {
    id: `particle-${particleIdx}`,
    pathId: `infinity-path-${pathIdx}`,
    d: targetPath.d,
    isForward,
    duration,
    delay,
    coreRadius,
    haloRadius,
  };
});

function BackgroundPaths() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
      {/* Ambient Soft Glowing Radial Vignette (Monochrome Depth) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-neutral-300/40 dark:bg-neutral-800/30 blur-3xl" />

      {/* SVG Container with Scale-Only Breathing (Scale: 1 -> 1.02 -> 1, Duration: 12s, No Rotation) */}
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
            {/* Soft Multi-Layered Bloom Filter for Glowing Particle Heads */}
            <filter id="particle-bloom" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* Glowing Pulse Line Filter */}
            <filter id="line-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2.0" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <title>AI Incident Triage Intelligence Flow</title>

          {/* Layer 1 & Layer 2: Base Structural & Highlighted Infinity Paths */}
          {INFINITY_PATHS.map((path) => (
            <g key={path.id}>
              <path
                id={`infinity-path-${path.id}`}
                d={path.d}
                stroke="currentColor"
                strokeWidth={path.strokeWidth}
                strokeOpacity={path.baseOpacity}
                fill="none"
              />

              {/* Layer 2: Continuous Flowing Trailing Dash Energy on Key Paths */}
              {!shouldReduceMotion && path.isKeyPath && (
                <motion.path
                  d={path.d}
                  stroke="currentColor"
                  strokeWidth={parseFloat(path.strokeWidth) + 0.8}
                  strokeOpacity={0.45}
                  strokeDasharray="180 620"
                  fill="none"
                  filter="url(#line-glow)"
                  initial={{ strokeDashoffset: path.id % 2 === 0 ? 800 : -800 }}
                  animate={{ strokeDashoffset: path.id % 2 === 0 ? -800 : 800 }}
                  transition={{
                    duration: 10 + (path.id % 4) * 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                />
              )}
            </g>
          ))}

          {/* Layer 3: Physical Glowing Light Particles Traveling Along Infinity Paths */}
          {!shouldReduceMotion &&
            PARTICLES.map((particle) => (
              <g key={particle.id}>
                {/* Outer Soft Halo / Bloom Effect */}
                <circle r={particle.haloRadius} fill="currentColor" fillOpacity="0.35" filter="url(#particle-bloom)">
                  <animateMotion
                    path={particle.d}
                    dur={`${particle.duration}s`}
                    begin={`${particle.delay}s`}
                    repeatCount="indefinite"
                    keyPoints={particle.isForward ? '0;1' : '1;0'}
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.45 0.05 0.55 0.95"
                  />
                </circle>

                {/* Bright Core Particle Head */}
                <circle r={particle.coreRadius} fill="currentColor" fillOpacity="0.95" filter="url(#particle-bloom)">
                  <animateMotion
                    path={particle.d}
                    dur={`${particle.duration}s`}
                    begin={`${particle.delay}s`}
                    repeatCount="indefinite"
                    keyPoints={particle.isForward ? '0;1' : '1;0'}
                    keyTimes="0;1"
                    calcMode="spline"
                    keySplines="0.45 0.05 0.55 0.95"
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
