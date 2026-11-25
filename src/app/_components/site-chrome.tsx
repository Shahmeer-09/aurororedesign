import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { bookingAnchor, navigation, siteLinks } from "../site-links";
import { MobileMenu } from "./mobile-menu";

import { ScrollHeader } from "./scroll-header";

function Wordmark() {
  return (
    <Link className="wordmark" href="/">
      <Image
        alt="Aurora Luna Star home"
        height={117}
        src="/aurora/wordmark.png"
        unoptimized
        width={867}
      />
    </Link>
  );
}

export function SiteHeader() {
  return (
    <ScrollHeader>
      <div className="wrap header-inner">
        <Wordmark />
        <nav aria-label="Main navigation" className="desktop-navigation">
          {navigation.map(({ href, label }) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink className="header-book" href={bookingAnchor}>
          Book a Session
        </ButtonLink>
        <MobileMenu />
      </div>
    </ScrollHeader>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-invitation">
          <h2>Connect with Aurora</h2>
          <ButtonLink href={bookingAnchor}>Book a Session</ButtonLink>
        </div>
        <div className="footer-inner">
          <div className="footer-brand">
            <Wordmark />
            <div className="footer-actions">
              <a className="text-link" href="#meditation">
                Get the Free Meditation
              </a>
            </div>
          </div>
          <nav aria-label="Explore" className="footer-links">
            <h2>Explore</h2>
            <a href="/">Home</a>
            <a href={siteLinks.services}>Services</a>
            <a href={siteLinks.about}>About</a>
            <a href={siteLinks.starseeds}>Starseeds</a>
            <a href={siteLinks.products}>Products</a>
            <a href={siteLinks.media}>Media</a>
            <a href={siteLinks.cart}>Cart</a>
          </nav>
          <nav aria-label="Connect" className="footer-links">
            <h2>Connect</h2>
            <a href={siteLinks.contact}>Contact</a>
            <a href={siteLinks.partnerships}>Partnerships</a>
            <a href="https://www.instagram.com/auroralunastar/">Instagram</a>
            <a href="https://www.facebook.com/auroralunastar1111/">Facebook</a>
            <a href="https://www.youtube.com/channel/UCn2jrsR8VjC3h6rBUQDmngA/videos">
              YouTube
            </a>
          </nav>
        </div>
        <p className="footer-copyright">© Aurora Luna Star</p>
      </div>
    </footer>
  );
}
