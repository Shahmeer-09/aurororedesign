import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/button";
import { bookingAnchor, navigation, siteLinks } from "../site-links";
import { MobileMenu } from "./mobile-menu";
import { ScrollHeader } from "./scroll-header";

function Wordmark({ className }: { className: string }) {
  return (
    <Link className={`inline-block w-full ${className}`} href="/">
      <Image
        alt="Aurora Luna Star home"
        className="h-auto w-full"
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
      <div className="mx-auto grid min-h-(--header-height) w-[min(100%-3rem,100rem)] grid-cols-[1fr_auto] items-center gap-6 xl:grid-cols-[auto_1fr_auto]">
        <Wordmark className="max-w-48 md:max-w-54 xl:w-50" />
        <nav
          aria-label="Main navigation"
          className="hidden justify-center gap-[clamp(0.8rem,1.5vw,1.75rem)] xl:flex"
        >
          {navigation.map(({ href, label }) => (
            <a
              className="inline-flex min-h-11 items-center text-xs leading-[inherit] tracking-[0.06em] text-muted uppercase hover:text-foreground"
              href={href}
              key={href}
            >
              {label}
            </a>
          ))}
        </nav>
        <ButtonLink
          className="hidden justify-self-end xl:inline-flex"
          href={bookingAnchor}
        >
          Book a Session
        </ButtonLink>
        <MobileMenu />
      </div>
    </ScrollHeader>
  );
}

const footerLinks =
  "grid content-start justify-items-start [&_a]:py-[0.55rem] [&_a]:text-sm [&_a]:leading-[inherit] [&_a]:text-muted [&_a:hover]:text-foreground";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-footer-fill">
      <div className="wrap">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-line py-12 md:flex-row md:items-center">
          <h2 className="text-[clamp(2.5rem,4vw,3.75rem)]">
            Connect with Aurora
          </h2>
          <ButtonLink href={bookingAnchor}>Book a Session</ButtonLink>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-7 py-12 md:grid-cols-[1.7fr_1fr_1fr] md:gap-8">
          <div className="col-span-full md:col-auto">
            <Wordmark className="max-w-72" />
            <div className="mt-[0.9rem] flex flex-wrap items-center gap-x-4">
              <a className="text-link" href="#meditation">
                Get the Free Meditation
              </a>
            </div>
          </div>
          <nav aria-label="Explore" className={footerLinks}>
            <h2 className="mb-2 font-sans text-[0.9rem] leading-normal font-semibold tracking-normal">
              Explore
            </h2>
            <a href="/">Home</a>
            <a href={siteLinks.services}>Services</a>
            <a href={siteLinks.about}>About</a>
            <a href={siteLinks.starseeds}>Starseeds</a>
            <a href={siteLinks.products}>Products</a>
            <a href={siteLinks.media}>Media</a>
            <a href={siteLinks.cart}>Cart</a>
          </nav>
          <nav aria-label="Connect" className={footerLinks}>
            <h2 className="mb-2 font-sans text-[0.9rem] leading-normal font-semibold tracking-normal">
              Connect
            </h2>
            <a href={siteLinks.contact}>Contact</a>
            <a href={siteLinks.partnerships}>Partnerships</a>
            <a href="https://www.instagram.com/auroralunastar/">Instagram</a>
            <a href="https://www.facebook.com/auroralunastar1111/">Facebook</a>
            <a href="https://www.youtube.com/channel/UCn2jrsR8VjC3h6rBUQDmngA/videos">
              YouTube
            </a>
          </nav>
        </div>
        <p className="border-t border-line py-[1.2rem] text-xs leading-[inherit] text-muted">
          © Aurora Luna Star
        </p>
      </div>
    </footer>
  );
}
