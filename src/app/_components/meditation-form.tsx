"use client";

import { useEffect, useRef, useState } from "react";
import { siteLinks } from "../site-links";

const formId = "688bc6a2665a288748556803";
const scriptUrl = "https://assets.flodesk.com/universal.js";

type Flodesk = ((
  command: "form",
  options: {
    formId: string;
    containerEl: string;
    callback: (error?: unknown) => void;
  },
) => void) & { q?: unknown[] };

export function MeditationForm() {
  const host = useRef<HTMLDivElement>(null);
  const [inRange, setInRange] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const containerId = `meditation-form-${attempt}`;

  useEffect(() => {
    if (!host.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInRange(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(host.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inRange) return;

    const container = document.getElementById(containerId);
    if (!container) return;

    const browser = window as Window & { fd?: Flodesk };
    let active = true;
    let script: HTMLScriptElement | undefined;
    const timer = window.setTimeout(() => finish(true), 20_000);
    const observer = new MutationObserver(() => {
      if (container.querySelector("form")) finish();
    });
    observer.observe(container, { childList: true, subtree: true });

    function finish(error?: unknown) {
      if (!active) return;
      active = false;
      window.clearTimeout(timer);
      observer.disconnect();
      setStatus(error ? "error" : "ready");
    }

    function renderForm() {
      if (!active) return;

      try {
        if (!browser.fd || browser.fd.q) {
          finish(true);
          return;
        }
        browser.fd("form", {
          formId,
          containerEl: `#${containerId}`,
          callback(error) {
            if (error) finish(error);
          },
        });
      } catch {
        finish(true);
      }
    }

    if (browser.fd && !browser.fd.q) {
      renderForm();
    } else {
      const queue: unknown[] = [];
      const enqueue: Flodesk = (...args) => queue.push(args);
      enqueue.q = queue;
      browser.fd = enqueue;

      script = document.createElement("script");
      script.src = attempt ? `${scriptUrl}?retry=${attempt}` : scriptUrl;
      script.async = true;
      script.onload = renderForm;
      script.onerror = () => finish(true);
      document.head.append(script);
    }

    return () => {
      active = false;
      window.clearTimeout(timer);
      observer.disconnect();
      script?.remove();
    };
  }, [attempt, containerId, inRange]);

  return (
    <div className="meditation-signup min-h-52" ref={host}>
      {status === "loading" && (
        <output className="text-sm leading-[inherit] text-muted">
          Loading meditation signup…
        </output>
      )}
      {status === "error" && (
        <div className="text-sm leading-[inherit] text-muted">
          <output className="block">The signup form couldn’t load.</output>
          <button
            className="text-link"
            onClick={() => {
              setStatus("loading");
              setAttempt(attempt + 1);
            }}
            type="button"
          >
            Try again
          </button>
          <a className="text-link ms-4" href={siteLinks.contact}>
            Contact Aurora
          </a>
        </div>
      )}
      <div hidden={status !== "ready"} id={containerId} key={containerId} />
      <noscript>
        <p>
          <a className="text-link" href={siteLinks.contact}>
            Contact Aurora for the meditation
          </a>
        </p>
      </noscript>
    </div>
  );
}
