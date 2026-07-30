import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end start'],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.85, 0.96] : [1.03, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.4], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.4], [40, -10]);

  return (
    <section
      ref={containerRef}
      className="flex flex-col items-center justify-center relative px-2 md:px-6 overflow-hidden bg-white z-10 pt-10 pb-20"
    >
      <div
        className="w-full relative max-w-6xl mx-auto flex flex-col items-center"
        style={{
          perspective: '1000px',
        }}
      >
        {/* 1. Header Text ABOVE the 3D Card (matching standard Aceternity UI spec & attachment) */}
        <Header translate={translate} titleComponent={titleComponent} />

        {/* 2. 3D Dashboard Image Card directly BELOW the Header */}
        <Card rotate={rotate} translate={translate} scale={scale}>
          {children}
        </Card>
      </div>
    </section>
  );
}

function Header({ translate, titleComponent }) {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-5xl mx-auto text-center mb-6 md:mb-10"
    >
      {titleComponent}
    </motion.div>
  );
}

function Card({ rotate, scale, children }) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          '0 0 #00000010, 0 9px 20px #0000001b, 0 37px 37px #00000018, 0 84px 50px #00000010, 0 149px 60px #00000005',
      }}
      className="max-w-5xl -mt-4 md:-mt-8 mx-auto h-[24rem] sm:h-[30rem] md:h-[40rem] w-full border-4 border-neutral-800 p-2 md:p-3 bg-neutral-900 rounded-[28px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-neutral-50 p-1 md:p-2">
        {children}
      </div>
    </motion.div>
  );
}

export default ContainerScroll;
