"use client";

import { useEffect, useState } from "react";

export function HeroMotion() {
  const [eligible, setEligible] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-reduced-motion: no-preference)",
    );
    const sync = () => setEligible(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  return (
    <div aria-hidden="true" className="hero-backdrop absolute inset-0 -z-1">
      {eligible && (
        <video
          className={`absolute inset-0 size-full object-cover motion-safe:transition-opacity motion-safe:duration-[260ms] motion-safe:ease-[ease] ${started ? "opacity-100" : "opacity-0"}`}
          loop
          muted
          onError={() => setStarted(false)}
          onPlaying={() => setStarted(true)}
          playsInline
          poster="/aurora/hero-galaxies.webp"
          autoPlay
          src="/aurora/hero-galaxies.mp4"
        />
      )}
    </div>
  );
}
