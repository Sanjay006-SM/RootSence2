import React, { useRef, useState, useEffect } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

export function ContainerScroll({ titleComponent, children }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
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
    return isMobile ? [0.8, 0.95] : [1.04, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 0.45], [16, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.45], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 0.45], [60, -40]);

  return (
    <section
      ref={containerRef}
      className="h-[45rem] md:h-[62rem] flex items-center justify-center relative p-2 md:p-12 overflow-hidden bg-white z-10"
    >
      <div
        className="py-6 md:py-16 w-full relative max-w-6xl mx-auto"
        style={{
          perspective: '1000px',
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
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
      className="max-w-5xl mx-auto text-center mb-8 md:mb-12"
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
      className="max-w-5xl -mt-6 md:-mt-10 mx-auto h-[24rem] sm:h-[32rem] md:h-[42rem] w-full border-4 border-neutral-800 p-2 md:p-4 bg-neutral-900 rounded-[28px] shadow-2xl"
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-neutral-50 p-1 md:p-2">
        {children}
      </div>
    </motion.div>
  );
}

export default ContainerScroll;
