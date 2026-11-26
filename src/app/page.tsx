import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { HeroMotion } from "./_components/hero-motion";
import { MeditationForm } from "./_components/meditation-form";
import { SiteFooter, SiteHeader } from "./_components/site-chrome";
import { getProductsPage } from "./products/catalog";
import { ProductGrid } from "./products/product-grid";
import { sessionHref, sessions } from "./services/sessions";
import { bookingAnchor, siteLinks } from "./site-links";

const specialties = [
  "Alchemy",
  "Alignment",
  "Ascension",
  "Starseed Akashic Readings",
  "Sound Activations",
  "Light Language",
  "Personal Empowerment",
];

export default async function Home() {
  const products = await getProductsPage();

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
        <section
          className="relative isolate grid min-h-[calc(100svh-var(--header-height))] place-items-center bg-hero-fill py-12 text-center md:py-16"
          aria-labelledby="hero-title"
        >
          <div className="wrap">
            <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase md:mb-5">
              Aurora Luna Star
            </p>
            <h1
              className="mx-auto max-w-[17ch] text-[clamp(2.7rem,9vw,4rem)] leading-[1.05] text-balance tracking-[-0.03em] [text-shadow:0_3px_35px_var(--hero-text-shadow)] md:max-w-[62rem] md:text-[clamp(3rem,5.6vw,6rem)]"
              id="hero-title"
            >
              What would you do{" "}
              <span className="block text-accent">
                without the weight of fear?
              </span>
            </h1>
            <p className="mx-auto mt-[1.6rem] mb-8 max-w-[35ch] text-[0.95rem] leading-[1.75] text-pretty text-hero-muted md:max-w-[52ch] md:text-[clamp(1rem,1.4vw,1.125rem)] [&_strong]:font-semibold [&_strong]:text-foreground">
              Bridging <strong>all that you are</strong> with{" "}
              <strong>All That Is</strong> through Starseed Akashic Readings,
              Sound Activations, and Personal Empowerment.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink
                className="button-featured min-h-12 px-[1.45rem]"
                href={bookingAnchor}
                icon="calendar"
              >
                Book a Session
              </ButtonLink>
              <ButtonLink
                className="button-featured min-h-12 px-[1.45rem]"
                href="#meditation"
                icon="sparkles"
                variant="outline"
              >
                Get the Free Meditation
              </ButtonLink>
            </div>
          </div>
          <HeroMotion />
        </section>

        <div
          className="marquee overflow-hidden border-y border-line bg-marquee-fill"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {["first", "repeat"].map((copy) => (
              <div className="flex w-max items-center" key={copy}>
                {specialties.map((specialty) => (
                  <span
                    className="flex items-center font-display text-[1.12rem] leading-none font-medium tracking-[0.21em] whitespace-nowrap text-marquee-ink uppercase"
                    key={specialty}
                  >
                    {specialty}
                    <span className="px-[clamp(1.4rem,3vw,3rem)] py-5 text-[0.8rem] text-accent">
                      ✦
                    </span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="star-field">
          <section
            className="wrap section-space"
            id="meditation"
            aria-labelledby="meditation-title"
          >
            <div className="grid overflow-hidden rounded-[1.75rem] border border-line bg-meditation-fill md:grid-cols-[0.95fr_1.15fr]">
              <div className="tinted-image relative isolate min-h-[clamp(15rem,65vw,18.75rem)] md:min-h-[33.5625rem]">
                <Image
                  alt="A woman opens her arms above sunlit mountain clouds"
                  className="object-cover"
                  src="/aurora/fear-clear-summit.webp"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
              </div>
              <div className="self-center p-[clamp(1.5rem,3vw,2.875rem)]">
                <h2
                  className="text-[clamp(2rem,3vw,3rem)] leading-[1.12] tracking-[-0.025em]"
                  id="meditation-title"
                >
                  What would you do without the weight of fear?
                </h2>
                <p className="mt-5 font-display text-xl leading-[inherit] tracking-[0.25em] text-accent uppercase">
                  Fear Clear
                </p>
                <p className="section-intro mt-4 max-w-[52ch] text-[0.95rem]">
                  A free 30-minute guided meditation to help you release what’s
                  holding you back and step into clarity, calm, and courage.
                </p>
                <MeditationForm />
              </div>
            </div>
          </section>

          <section
            aria-labelledby="sessions-title"
            className="wrap pb-12 md:pb-16"
            id="sessions"
          >
            <h2 id="sessions-title">Sessions with Aurora</h2>
            <p className="section-intro">
              A space to reconnect with yourself, explore your gifts, and move
              forward with clarity.
            </p>
            <ul className="mt-8 mb-5 grid gap-5 md:grid-cols-3">
              {sessions.map(({ name, description, id }, index) => (
                <li
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-linear-to-b from-surface/85 to-background/60 p-6 motion-safe:transition-[transform,border-color,box-shadow] motion-safe:duration-300 motion-safe:hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_18px_50px_-24px_var(--purple-hover)] lg:p-8"
                  key={name}
                >
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-accent/60 to-transparent opacity-60 group-hover:opacity-100"
                  />
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-display text-sm tracking-[0.35em] text-accent/80">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="h-px flex-1 bg-line group-hover:bg-accent/40 motion-safe:transition-colors motion-safe:duration-300" />
                  </div>
                  <h3 className="text-[clamp(1.85rem,2.6vw,2.6rem)] leading-[1.05] tracking-[-0.025em] text-balance">
                    {name}
                  </h3>
                  <p className="mt-4 mb-6 max-w-[40ch] leading-[1.75] text-muted">
                    {description}
                  </p>
                  <a
                    aria-label={id ? `Book ${name}` : `Ask about ${name}`}
                    className="mt-auto inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-accent underline decoration-1 underline-offset-[0.32em] hover:text-foreground"
                    href={sessionHref(id)}
                  >
                    {id ? "Book this session" : "Ask about this session"}
                    <span
                      aria-hidden="true"
                      className="inline-block motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:translate-x-1"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="text-link" href={siteLinks.services}>
              View all services
            </a>
          </section>

          <section
            aria-labelledby="home-products-title"
            className="wrap border-t border-line pt-10 pb-16 md:pt-14 md:pb-20"
          >
            <div className="mb-9 flex flex-wrap items-end justify-between gap-x-8 gap-y-5">
              <div>
                <p className="mb-4 text-[0.72rem] font-semibold tracking-[0.2em] text-accent uppercase">
                  Gatherings & Recordings
                </p>
                <h2 id="home-products-title">Products</h2>
                <p className="section-intro mt-4 mb-0">
                  Retreats, galactic gatherings, and channeled series to explore
                  at your own pace.
                </p>
              </div>
              <ButtonLink
                href={siteLinks.products}
                icon="bag"
                variant="outline"
              >
                View All Products
              </ButtonLink>
            </div>
            <ProductGrid products={products.slice(0, 6)} headingLevel="h3" />
          </section>

          <section
            aria-labelledby="about-title"
            className="wrap section-space grid items-center gap-[clamp(2.25rem,9vw,8rem)] pt-2 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]"
            id="about"
          >
            <div className="tinted-image relative aspect-[5/6] w-full max-w-[22rem] justify-self-start overflow-hidden rounded-t-[50%_38%] rounded-b-2xl border border-accent/45 bg-surface ring-[7px] ring-purple/20 md:max-w-[27rem] md:justify-self-end">
              <Image
                src="/aurora/portrait-about.webp"
                alt="Aurora Luna Star"
                className="object-cover object-[center_35%]"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </div>
            <div>
              <h2 id="about-title">Meet Aurora</h2>
              <p className="section-intro">
                Aurora is an interdimensional channel whose work includes
                Starseed Akashic Readings, sound activations, and personal
                empowerment.
              </p>
              <p className="mb-6 max-w-[44ch] leading-[1.8] text-muted">
                As a Soul Vibrational Alchemist, she channels Aum RA Ha Nu,
                sharing sound, messages, images, and light language to support
                personal growth and self-discovery.
              </p>
              <ButtonLink
                className="button-featured"
                href={siteLinks.about}
                variant="outline"
              >
                More about Aurora
              </ButtonLink>
            </div>
          </section>

          <figure
            aria-label="Client testimonial"
            className="testimonial nebula-backdrop relative isolate grid items-center overflow-clip border-y border-line text-center"
          >
            <div className="wrap grid min-h-96 content-center justify-items-center py-16 md:min-h-92">
              <blockquote className="max-w-[58ch] text-[clamp(1.5rem,2.2vw,2.5rem)] leading-[1.45] text-balance tracking-[-0.025em] italic">
                “Aurora has an extremely powerful gift. My session was one of
                the most poignant spiritual experiences of my life. It was
                stunningly accurate. I felt as though 10 billion tons of rainbow
                light flushed my soul of all the inferior energies that had been
                pulling me down.”
              </blockquote>
              <figcaption className="mt-[1.35rem] text-accent">
                Erik L.
              </figcaption>
            </div>
          </figure>

          <section
            className="wrap section-space grid items-center gap-[clamp(2rem,6vw,6rem)] md:grid-cols-[1fr_1.15fr]"
            aria-labelledby="starseeds-title"
          >
            <div>
              <h2 className="max-w-[14ch]" id="starseeds-title">
                Embracing your <em className="text-accent">starseed nature</em>
              </h2>
              <p className="section-intro">
                Do you feel a strong connection to the stars? Explore your star
                origins, intuitive gifts, and connections to the cosmos.
              </p>
              <ButtonLink
                href={siteLinks.starseeds}
                icon="sparkles"
                variant="outline"
              >
                Explore Starseeds
              </ButtonLink>
            </div>
            <div className="relative mx-auto aspect-[5/6] w-full max-w-[29rem] overflow-hidden rounded-2xl border border-line">
              <Image
                alt="Illustration of a purple-haired woman beneath a star-filled sky"
                className="object-cover object-[center_34%]"
                src="/aurora/hero-aurora.webp"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
