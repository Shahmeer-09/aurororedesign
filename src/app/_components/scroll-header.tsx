"use client";

import { type ReactNode, useEffect, useRef } from "react";

export function ScrollHeader({ children }: { children: ReactNode }) {
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = header.current;
    if (!element) return;
    let previous = window.scrollY;
    function onScroll() {
      if (!element) return;
      const current = Math.max(0, window.scrollY);
      if (current > element.offsetHeight && Math.abs(current - previous) < 8)
        return;
      element.toggleAttribute(
        "data-away",
        current > element.offsetHeight && current > previous,
      );
      previous = current;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="site-header" ref={header}>
      {children}
    </header>
  );
}
