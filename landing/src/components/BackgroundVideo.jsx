import { useEffect, useRef } from 'react';

const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260601_110537_3a579fa0-7bbc-4d94-9d25-0e816c7840f5.mp4';

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const targetTimeRef = useRef(0);
  const prevXRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleMobileAutoplay = () => {
      if (window.innerWidth < 1024) {
        video.autoplay = true;
        video.play().catch(() => {});
      } else {
        video.autoplay = false;
        video.pause();
        video.currentTime = 0;
      }
    };

    handleMobileAutoplay();

    const handleMouseMove = (e) => {
      if (window.innerWidth < 1024) return;
      if (!video.duration || Number.isNaN(video.duration)) return;

      const currentX = e.clientX;
      if (prevXRef.current === null) {
        prevXRef.current = currentX;
        return;
      }

      const delta = currentX - prevXRef.current;
      prevXRef.current = currentX;

      targetTimeRef.current += (delta / window.innerWidth) * 0.8 * video.duration;
      targetTimeRef.current = Math.max(0, Math.min(video.duration, targetTimeRef.current));
      video.currentTime = targetTimeRef.current;
    };

    const handleSeeked = () => {
      if (window.innerWidth < 1024) return;
      if (!video.duration || Number.isNaN(video.duration)) return;
      video.currentTime = targetTimeRef.current;
    };

    const handleResize = () => {
      prevXRef.current = null;
      handleMobileAutoplay();
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    video.addEventListener('seeked', handleSeeked);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      video.removeEventListener('seeked', handleSeeked);
    };
  }, []);

  return (
    <div className="order-last lg:order-none relative lg:absolute lg:inset-0 lg:z-0 overflow-hidden pointer-events-none w-full aspect-square md:aspect-video lg:aspect-auto lg:h-full bg-neutral-50 lg:bg-transparent">
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        loop
        className="w-full h-full object-cover object-right lg:object-right-bottom"
      >
        <source src={VIDEO_SRC} type="video/mp4" />
      </video>
    </div>
  );
}
