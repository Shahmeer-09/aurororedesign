import type { Metadata } from "next";
import Image from "next/image";
import "../inner.css";
import { SiteHeader } from "../_components/site-chrome";
import { siteLinks } from "../site-links";

export const metadata: Metadata = {
  title: "Contact Aurora | Aurora Luna Star",
  description:
    "Contact Aurora Luna Star about sessions, speaking engagements, or general inquiries.",
};

const contactFormUrl =
  "https://app.digistartup.io/widget/form/Jv6DCO8vYzeu3o9wXAgQ";

export default function ContactPage() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-accent px-4 py-3 text-accent-ink focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main className="edition contact-edition" id="main">
        <div className="contact-layout wrap">
          <span className="contact-display" aria-hidden="true">
            Contact
          </span>
          <div className="contact-intro">
            <h1>
              Connect with <em>Aurora</em>
            </h1>
            <p className="mt-4 max-w-[45ch] leading-relaxed text-muted">
              Have a question about a session, or an invitation for Aurora to
              speak? Send her a message below.
            </p>
            <p className="mt-3 max-w-[45ch] leading-relaxed text-muted">
              For partnerships, share a little about your work and what you’d
              like to create together.
            </p>
          </div>
          <div className="contact-photo">
            <Image
              alt="Aurora Luna Star standing in a sunlit garden"
              className="object-cover object-[center_20%]"
              fill
              sizes="(min-width: 1100px) 430px, (min-width: 768px) 42vw, 92vw"
              src="/aurora/contact-portrait.webp"
            />
          </div>
          <div className="contact-form">
            <iframe
              className="block h-[760px] w-full border border-line bg-white"
              src={contactFormUrl}
              title="Aurora Luna Star contact form"
            />
          </div>
          <a className="contact-sessions text-link" href={siteLinks.services}>
            Explore sessions
          </a>
          <a className="contact-form-link text-link" href={contactFormUrl}>
            Open the contact form directly
          </a>
        </div>
      </main>
    </>
  );
}
