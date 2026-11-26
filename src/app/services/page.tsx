import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { PageHero } from "../_components/page-hero";
import { SiteFooter, SiteHeader } from "../_components/site-chrome";
import { sessionHref, sessions } from "./sessions";

export const metadata: Metadata = {
  title: "Services | Aurora Luna Star",
  description:
    "Compare Bio-Magnetic Alignment, Heart Intelligence, and Soul Evolutionary Alchemy and find a session with Aurora Luna Star.",
};

export default function ServicesPage() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-purple px-4 py-3 text-foreground focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <PageHero title="Services" />
        <div className="star-field">
          <section
            aria-labelledby="sessions-heading"
            className="wrap grid gap-10 py-12 lg:grid-cols-[minmax(16rem,0.75fr)_minmax(0,1.25fr)] lg:gap-20 lg:py-18"
          >
            <div className="self-start lg:sticky lg:top-[calc(var(--header-height)+2rem)]">
              <h2
                className="text-[clamp(2.4rem,4vw,3.75rem)]"
                id="sessions-heading"
              >
                Choose a session with Aurora
              </h2>
              <nav
                aria-label="Session guide"
                className="mt-5 border-t border-line"
              >
                <ul>
                  {sessions.map(({ name, slug }) => (
                    <li className="border-b border-line" key={slug}>
                      <a
                        className="flex min-h-11 items-center text-sm font-semibold text-accent hover:text-foreground"
                        href={`#${slug}`}
                      >
                        {name}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="relative mt-6 hidden aspect-[4/3] max-w-96 overflow-hidden rounded-2xl border border-line lg:block">
                <Image
                  alt="Aurora playing a crystal singing bowl outdoors"
                  className="object-cover object-bottom"
                  fill
                  sizes="384px"
                  src="/aurora/services/aurora.webp"
                />
              </div>
            </div>
            <div className="min-w-0 space-y-9 lg:space-y-11">
              {sessions.map(({ name, slug, description, details, id }) => (
                <section
                  aria-labelledby={`${slug}-title`}
                  className="border-b border-line pb-8 lg:pb-10"
                  id={slug}
                  key={slug}
                >
                  <Image
                    alt=""
                    className="h-auto w-full rounded-2xl border border-line"
                    height={480}
                    sizes="(min-width: 1200px) 670px, (min-width: 1024px) 57vw, 92vw"
                    src={`/aurora/services/${slug}.webp`}
                    width={960}
                  />
                  <h3
                    className="mt-5 text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.025em]"
                    id={`${slug}-title`}
                  >
                    {name}
                  </h3>
                  <p className="mt-3 max-w-[65ch] leading-relaxed text-foreground">
                    {description}
                  </p>
                  <p className="mt-3 max-w-[65ch] leading-relaxed text-muted">
                    {details}
                  </p>
                  <ButtonLink
                    aria-label={id ? `Book ${name}` : `Ask about ${name}`}
                    className="mt-5"
                    href={sessionHref(id)}
                    icon={id ? "calendar" : "message"}
                    variant={id ? "primary" : "outline"}
                  >
                    {id ? "Book this session" : "Ask about this session"}
                  </ButtonLink>
                </section>
              ))}
            </div>
          </section>
          <section
            aria-labelledby="session-testimonials"
            className="wrap pb-14 md:pb-20"
          >
            <h2
              className="text-[clamp(2.25rem,4vw,3.5rem)]"
              id="session-testimonials"
            >
              From Aurora’s clients
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <figure className="border-t border-line pt-5">
                <blockquote className="text-2xl leading-snug italic">
                  “She met us with open arms”
                </blockquote>
                <p className="mt-3 max-w-[49ch] leading-relaxed text-muted">
                  Angela recalls that Aurora made time for her and a friend. She
                  appreciated the personal insights and remembers leaving their
                  session feeling energized and capable.
                </p>
                <figcaption className="mt-2 text-sm text-accent">
                  Angela G.
                </figcaption>
              </figure>
              <figure className="border-t border-line pt-5">
                <blockquote className="text-2xl leading-snug italic">
                  “The beautiful safe space she created embraced me like a
                  cocoon”
                </blockquote>
                <p className="mt-3 max-w-[49ch] leading-relaxed text-muted">
                  June found the session both gentle and energizing. She
                  appreciated the care Aurora brought to the experience and
                  found it especially meaningful during a time of change.
                </p>
                <figcaption className="mt-2 text-sm text-accent">
                  June G.
                </figcaption>
              </figure>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
