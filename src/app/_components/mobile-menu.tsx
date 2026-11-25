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
    <div className="mobile-navigation">
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
        className="mobile-menu"
        id="mobile-menu"
        onClose={() => setOpen(false)}
        ref={dialog}
      >
        <div className="mobile-menu-header">
          <h2 id="mobile-menu-title">Menu</h2>
          <Button onClick={closeMenu} variant="outline">
            Close
          </Button>
        </div>
        <nav aria-label="Main navigation" className="mobile-links">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href} onClick={closeMenu}>
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
