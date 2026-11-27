import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "../_components/page-hero";
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
      <SiteHeader />
      <main id="main">
        <PageHero title="Contact Aurora" />
        <div>
          <div className="wrap grid items-start gap-9 py-12 md:grid-cols-[0.8fr_1.2fr] md:gap-14 md:py-16">
            <div>
              <h2 className="text-[clamp(2.25rem,4vw,3.5rem)]">Get in touch</h2>
              <p className="mt-4 max-w-[42ch] leading-relaxed text-muted">
                Use the form for questions about sessions, speaking engagements,
                partnerships, or Aurora’s work.
              </p>
              <a className="text-link mt-2" href={siteLinks.services}>
                Explore sessions
              </a>
              <div className="relative mt-7 hidden aspect-[4/5] w-full max-w-[25rem] overflow-hidden rounded-2xl border border-line md:block">
                <Image
                  alt="Aurora Luna Star standing in a sunlit garden"
                  className="object-cover object-[center_36%]"
                  fill
                  sizes="(min-width: 768px) 35vw, 90vw"
                  src="/aurora/contact-portrait.webp"
                />
              </div>
            </div>
            <div>
              <iframe
                className="block h-[760px] w-full rounded-2xl"
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
