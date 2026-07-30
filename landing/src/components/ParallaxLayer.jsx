import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

/**
 * ParallaxLayer
 * Scoped, scroll-linked parallax transform primitive.
 *
 * @param {number} speed - Parallax multiplier (e.g., 0.3 for background, 1.0 for normal, 1.1 for fast)
 * @param {boolean} disableOnMobile - Disable parallax transform on viewports <= 768px (default: true)
 * @param {string} className - Optional container styling classes
 * @param {React.ReactNode} children - Child elements
 */
export default function ParallaxLayer({
  speed = 0.3,
  disableOnMobile = true,
  className = '',
  children,
}) {
  const containerRef = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Scoped section scroll tracking
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Calculate smooth y-displacement based on speed multiplier
  // speed 0.3 -> [-35px, 35px], speed 1.0 -> [0px, 0px], speed 1.12 -> [6px, -6px]
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [(1 - speed) * -50, (1 - speed) * 50]
  );

  const isParallaxDisabled = shouldReduceMotion || (disableOnMobile && isMobile);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <motion.div
        style={isParallaxDisabled ? {} : { y, willChange: 'transform' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
