"use client";

import { inView } from "motion";
import { animate } from "motion/mini";
import { type ReactNode, useEffect, useRef } from "react";

export function Reveal({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || element.getBoundingClientRect().top < innerHeight)
      return;

    element.style.opacity = "0";
    element.style.transform = "translateY(32px)";
    let animation: ReturnType<typeof animate> | undefined;
    const cancel = () => {
      animation?.cancel();
      element.style.removeProperty("opacity");
      element.style.removeProperty("transform");
    };
    const stopObserving = inView(
      element,
      () => {
        if (preference.matches || element.matches(":focus-within")) {
          cancel();
          return;
        }

        animation = animate(
          element,
          { opacity: [0, 1], transform: ["translateY(32px)", "none"] },
          // The tuple matches --ease-out in globals.css.
          { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
        );
      },
      { margin: "0px 0px -64px" },
    );

    preference.addEventListener("change", cancel);
    element.addEventListener("focusin", cancel);
    return () => {
      stopObserving();
      cancel();
      preference.removeEventListener("change", cancel);
      element.removeEventListener("focusin", cancel);
    };
  }, []);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
