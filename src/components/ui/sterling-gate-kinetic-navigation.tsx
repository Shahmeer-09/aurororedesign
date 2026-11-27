"use client";

import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { bookingAnchor, navigation, siteLinks } from "@/app/site-links";

const artwork: Record<string, string> = {
  "/": "portrait-about.webp",
  "/media": "media/presenter.webp",
  "/products": "products/trust-yourself-retreat-deposit.webp",
  "/starseeds": "starseeds/welcome.webp",
  "/about": "portrait-about.webp",
  "/services": "services/aurora.webp",
  "/partnerships": "partnerships/kejiwa.webp",
  "/contact": "contact-portrait.webp",
};

export function KineticNavigation() {
  const dialog = useRef<HTMLDialogElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const [preview, setPreview] = useState(artwork["/"]);
  const [open, setOpen] = useState(false);

  useEffect(
    () => () => {
      timeline.current?.kill();
    },
    [],
  );

  function show() {
    const panel = dialog.current;
    if (!panel || panel.open) return;
    setPreview(artwork["/"]);
    panel.showModal();
    setOpen(true);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    timeline.current?.kill();
    timeline.current = gsap
      .timeline({ defaults: { ease: "power3.out" } })
      .fromTo(
        panel.querySelectorAll("[data-curtain]"),
        { xPercent: 101 },
        { xPercent: 0, duration: 0.55, stagger: 0.08 },
      )
      .fromTo(
        panel.querySelectorAll("[data-entry]"),
        { yPercent: 110, rotation: 3 },
        { yPercent: 0, rotation: 0, duration: 0.42, stagger: 0.035 },
        0.24,
      );
  }
  function close() {
    const panel = dialog.current;
    if (!panel?.open) return;
    if (
      timeline.current &&
      !matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      timeline.current
        .eventCallback("onReverseComplete", () => panel.close())
        .timeScale(2)
        .reverse();
      if (timeline.current.progress() === 0) panel.close();
    } else panel.close();
  }
  return (
    <>
      <button
        className="gate-trigger"
        onClick={show}
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="aurora-menu"
        type="button"
      >
        Menu{" "}
        <span className="gate-lines" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
      </button>
      <dialog
        className="gate-dialog"
        ref={dialog}
        id="aurora-menu"
        aria-label="Site menu"
        onClose={() => {
          timeline.current?.revert();
          timeline.current = null;
          setOpen(false);
        }}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onPointerDown={(e) => {
          if (e.target === dialog.current) close();
        }}
      >
        <div className="gate-shell">
          <div data-curtain="" className="gate-rose" />
          <div data-curtain="" className="gate-paper">
            <div className="gate-top">
              <Image
                className="gate-wordmark"
                src="/aurora/aurora-logo-header5.png"
                width={867}
                height={117}
                alt="Aurora Luna Star"
              />
              <button type="button" onClick={close}>
                Close <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="gate-spread">
              <nav aria-label="Main navigation">
                {navigation.map(({ href, label }) => (
                  <div className="overflow-hidden" key={href}>
                    <a
                      onMouseEnter={() => setPreview(artwork[href])}
                      onFocus={() => setPreview(artwork[href])}
                      data-entry=""
                      href={href}
                      onClick={() => dialog.current?.close()}
                    >
                      {label}
                    </a>
                  </div>
                ))}
              </nav>
              <div className="gate-art" aria-hidden="true">
                {open && (
                  <div
                    key={preview}
                    style={{ backgroundImage: `url(/aurora/${preview})` }}
                  />
                )}
              </div>
            </div>
            <div className="gate-bottom">
              <a href={bookingAnchor} onClick={() => dialog.current?.close()}>
                Book a Session
              </a>
              <a href={siteLinks.cart}>Cart</a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
