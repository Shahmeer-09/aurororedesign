"use client";

import { useEffect, useRef } from "react";

const poster = "/aurora/hero-logo-animation.webp";

export function HeroMotion() {
  const video = useRef<HTMLVideoElement>(null);
  const layer = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = video.current;
    const backdrop = layer.current;
    const hero = backdrop?.parentElement;
    if (!media || !hero || !backdrop) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = matchMedia("(min-width: 768px)");
    let inView = false;
    let frame = 0;

    function draw() {
      frame = 0;
      if (!hero || !backdrop) return;
      const progress = Math.min(
        1,
        Math.max(0, -hero.getBoundingClientRect().top / hero.offsetHeight),
      );
      backdrop.style.transform = `translateY(${progress * 48}px)`;
    }
    function queue() {
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function sync() {
      cancelAnimationFrame(frame);
      frame = 0;
      window.removeEventListener("scroll", queue);
      backdrop?.style.removeProperty("transform");
      if (inView && !reduce.matches && desktop.matches) {
        queue();
        window.addEventListener("scroll", queue, { passive: true });
      }
      if (inView && !reduce.matches) media?.play().catch(() => {});
      else media?.pause();
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(hero);
    reduce.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", queue);
      reduce.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        ref={layer}
        className="absolute -inset-y-12 inset-x-0 -z-2 bg-cover bg-center"
        style={{ backgroundImage: `url(${poster})` }}
        aria-hidden="true"
      >
        <video
          ref={video}
          className="size-full object-cover object-[55%_center] md:object-center"
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          src="/aurora/hero-logo-animation.mp4"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-1 bg-[#100516]/50"
      />
    </>
  );
}
