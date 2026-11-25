"use client";

import { useRef, useState } from "react";
import { Button, ButtonLink } from "@/components/button";
import { bookingAnchor, navigation } from "../site-links";

export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  function closeMenu() {
    dialog.current?.close();
  }

  return (
    <div className="xl:hidden">
      <Button
        aria-controls="mobile-menu"
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
        }}
        variant="outline"
      >
        Menu
      </Button>
      <dialog
        aria-labelledby="mobile-menu-title"
        className="fixed inset-y-0 right-0 left-auto m-0 h-dvh max-h-none w-full max-w-100 overflow-auto overscroll-contain border-l border-line bg-surface p-6 text-foreground backdrop:bg-menu-scrim"
        id="mobile-menu"
        onClose={() => setOpen(false)}
        ref={dialog}
      >
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-[2.5rem]" id="mobile-menu-title">
            Menu
          </h2>
          <Button onClick={closeMenu} variant="outline">
            Close
          </Button>
        </div>
        <nav aria-label="Main navigation" className="my-6 grid">
          {navigation.map(({ href, label }) => (
            <a
              className="border-b border-line py-[0.85rem]"
              href={href}
              key={href}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink href={bookingAnchor} onClick={closeMenu}>
          Book a Session
        </ButtonLink>
      </dialog>
    </div>
  );
}
