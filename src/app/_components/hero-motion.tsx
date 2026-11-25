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
    <div aria-hidden="true" className="hero-backdrop">
      {eligible && (
        <video
          className={started ? "hero-video is-playing" : "hero-video"}
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
