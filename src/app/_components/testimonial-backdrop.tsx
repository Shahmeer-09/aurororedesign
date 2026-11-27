"use client";

import { useEffect, useRef } from "react";

export function TestimonialBackdrop() {
  const video = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = video.current;
    if (!media) return;
    const preference = matchMedia("(prefers-reduced-motion: reduce)");
    let inView = false;
    function sync() {
      if (inView && !preference.matches) media?.play().catch(() => {});
      else media?.pause();
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        inView = entry.intersectionRatio >= 0.15;
        sync();
      },
      { threshold: 0.15 },
    );
    observer.observe(media);
    preference.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      preference.removeEventListener("change", sync);
    };
  }, []);

  return (
    <video
      aria-hidden="true"
      tabIndex={-1}
      className="testimonial-sky"
      ref={video}
      muted
      loop
      playsInline
      preload="none"
      poster="/aurora/milky-way.webp"
      src="/aurora/milky-way.mp4"
    />
  );
}
