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
        <div>
          <div className="contact-layout wrap">
            <div>
              <h1>
                Contact <em>Aurora</em>
              </h1>
              <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">
                Use the form for questions about sessions, speaking engagements,
                partnerships, or Aurora’s work.
              </p>
              <a className="text-link mt-2" href={siteLinks.services}>
                Explore sessions
              </a>
              <div className="contact-photo relative mt-7 overflow-hidden">
                <Image
                  alt="Aurora Luna Star standing in a sunlit garden"
                  className="object-cover object-[center_10%]"
                  fill
                  sizes="(min-width: 768px) 35vw, 90vw"
                  src="/aurora/contact-portrait.webp"
                />
              </div>
            </div>
            <div>
              <iframe
                className="block h-[760px] w-full bg-white"
                src={contactFormUrl}
                title="Aurora Luna Star contact form"
              />
              <a className="text-link mt-3" href={contactFormUrl}>
                Open the contact form directly
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
