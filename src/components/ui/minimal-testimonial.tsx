"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/button";

type Testimonial = {
  name: string;
  image: string;
  paragraphs: readonly string[];
};

export function TestimonialsMinimal({
  testimonials,
}: {
  testimonials: readonly [Testimonial, ...Testimonial[]];
}) {
  const root = useRef<HTMLDivElement>(null);
  const quoteId = useId();
  const [{ active, previous }, setSlide] = useState<{
    active: number;
    previous: number | null;
  }>({ active: 0, previous: null });
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const { name } = testimonials[active];
  const rotating =
    testimonials.length > 1 &&
    visible &&
    !reducedMotion &&
    !hovered &&
    !focused;

  useEffect(() => {
    const element = root.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setVisible(entry.isIntersecting);
    });
    observer.observe(element);

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);

    const enter = () => setHovered(true);
    const leave = () => setHovered(false);
    const focus = (event: FocusEvent) => {
      setFocused(
        event.target instanceof HTMLElement &&
          event.target.matches(":focus-visible"),
      );
    };
    const blur = (event: FocusEvent) => {
      if (!element.contains(event.relatedTarget as Node | null))
        setFocused(false);
    };
    element.addEventListener("mouseenter", enter);
    element.addEventListener("mouseleave", leave);
    element.addEventListener("focusin", focus);
    element.addEventListener("focusout", blur);

    return () => {
      element.removeEventListener("mouseenter", enter);
      element.removeEventListener("mouseleave", leave);
      element.removeEventListener("focusin", focus);
      element.removeEventListener("focusout", blur);
      observer.disconnect();
      preference.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!rotating) return;
    const timer = window.setTimeout(() => {
      setSlide({
        active: (active + 1) % testimonials.length,
        previous: active,
      });
    }, 10_000);
    return () => window.clearTimeout(timer);
  }, [active, rotating, testimonials.length]);

  const go = (direction: 1 | -1) => {
    setSlide((slide) => ({
      active:
        (slide.active + direction + testimonials.length) % testimonials.length,
      previous: reducedMotion ? null : slide.active,
    }));
  };

  return (
    <div className="mx-auto max-w-[60rem]" ref={root}>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-x-4 gap-y-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <div className="flex gap-2">
            {testimonials.map(({ name, image }, index) => (
              <button
                aria-controls={quoteId}
                aria-label={`Read ${name}’s testimonial`}
                aria-pressed={active === index}
                className="relative size-11 shrink-0 cursor-pointer rounded-full ring-2 ring-background hover:z-10 focus-visible:z-20 aria-pressed:z-10 aria-pressed:ring-accent"
                key={name}
                onClick={() =>
                  setSlide((slide) =>
                    slide.active === index
                      ? slide
                      : {
                          active: index,
                          previous: reducedMotion ? null : slide.active,
                        },
                  )
                }
                type="button"
              >
                <Image
                  alt=""
                  className={`size-full rounded-full object-cover motion-safe:transition-[filter] ${active === index ? "" : "grayscale hover:grayscale-0"}`}
                  height={44}
                  src={image}
                  width={44}
                />
              </button>
            ))}
          </div>
          <span className="border-l border-line py-1 pl-4 text-sm font-semibold text-foreground">
            {name}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            aria-controls={quoteId}
            aria-label="Previous testimonial"
            className="size-11 p-0"
            icon="previous"
            onClick={() => go(-1)}
            variant="outline"
          />
          <Button
            aria-controls={quoteId}
            aria-label="Next testimonial"
            className="size-11 p-0"
            icon="next"
            onClick={() => go(1)}
            variant="outline"
          />
        </div>
      </div>

      <div
        aria-live={rotating ? "off" : "polite"}
        className="relative isolate overflow-hidden"
        id={quoteId}
      >
        {(previous === null ? [active] : [previous, active]).map((index) => {
          const testimonial = testimonials[index];
          const outgoing = index === previous;
          const motion = outgoing
            ? "pointer-events-none absolute inset-x-0 top-0 motion-safe:animate-[testimonial-out_200ms_var(--ease-out)_both] motion-reduce:hidden"
            : previous === null
              ? ""
              : "relative z-10 motion-safe:animate-[testimonial-in_200ms_var(--ease-out)_both]";
          return (
            <blockquote
              aria-hidden={outgoing || undefined}
              aria-label={`Testimonial by ${testimonial.name}`}
              className={`space-y-4 font-sans text-lg leading-relaxed font-normal text-foreground md:text-xl ${motion}`}
              key={testimonial.name}
              onAnimationEnd={
                outgoing
                  ? () =>
                      setSlide((slide) =>
                        slide.previous === index
                          ? { active: slide.active, previous: null }
                          : slide,
                      )
                  : undefined
              }
            >
              {testimonial.paragraphs.map((paragraph, paragraphIndex) => (
                <p key={paragraph}>
                  {paragraphIndex === 0 && "“"}
                  {paragraph}
                  {paragraphIndex === testimonial.paragraphs.length - 1 && "”"}
                </p>
              ))}
            </blockquote>
          );
        })}
      </div>
    </div>
  );
}
