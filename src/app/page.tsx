import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { HeroMotion } from "./_components/hero-motion";
import { MeditationForm } from "./_components/meditation-form";
import { MoonPhases } from "./_components/moon-phases";
import { Reveal } from "./_components/reveal";
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
          className="home-hero relative isolate grid min-h-[calc(100svh-var(--header-height))] place-items-center overflow-hidden bg-hero-fill px-5 py-[clamp(4.5rem,10svh,8rem)] text-center"
          aria-labelledby="hero-title"
        >
          <HeroMotion />
          <div aria-hidden="true" className="hero-horizon" />
          <div className="relative z-2 mx-auto w-full">
            <MoonPhases />
            <h1
              className="mx-auto mt-7 font-display text-[clamp(2.35rem,11.5vw,3.45rem)] leading-[0.99] text-balance tracking-[-0.038em] sm:text-[clamp(3.45rem,7.5vw,7.3rem)]"
              id="hero-title"
            >
              What would you do{" "}
              <em className="mt-1 block text-[0.92em] leading-[1.08] text-accent">
                without the weight of fear?
              </em>
            </h1>
            <p className="mx-auto mt-6 max-w-[47ch] text-[clamp(1rem,1.35vw,1.18rem)] leading-relaxed text-pretty text-hero-muted">
              Bridging all that you are with All That Is through Starseed
              Akashic Readings, Sound Activations, and Personal Empowerment.
            </p>
            <div className="mx-auto mt-8 grid w-fit gap-3 min-[440px]:flex">
              <ButtonLink
                className="button-featured"
                href={bookingAnchor}
                icon="calendar"
              >
                Book a Session
              </ButtonLink>
              <ButtonLink
                className="button-featured"
                href="#meditation"
                icon="sparkles"
                variant="outline"
              >
                Get the Free Meditation
              </ButtonLink>
            </div>
          </div>
        </section>

        <div
          className="marquee overflow-hidden border-y border-accent/25 bg-marquee-fill"
          aria-hidden="true"
        >
          <div className="marquee-track">
            {["first", "repeat"].map((copy) => (
              <div className="flex w-max items-center" key={copy}>
                {specialties.map((specialty) => (
                  <span
                    className="flex items-center gap-8 pr-8 font-display text-[1.35rem] leading-none whitespace-nowrap text-marquee-ink italic md:gap-12 md:pr-12"
                    key={specialty}
                  >
                    {specialty}
                    <span className="my-5 size-1 rotate-45 bg-accent" />
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
            <Reveal className="meditation-spread grid overflow-hidden rounded-[0.5rem] border border-accent/25 md:grid-cols-[1.05fr_1fr]">
              <div className="relative min-h-64 md:min-h-[33.5rem]">
                <Image
                  alt="A woman opens her arms above sunlit mountain clouds"
                  className="object-cover object-[52%_center]"
                  src="/aurora/fear-clear-summit.webp"
                  fill
                  sizes="(min-width: 1200px) 590px, (min-width: 768px) 50vw, 96vw"
                />
              </div>
              <div className="self-center p-[clamp(1.5rem,4vw,4rem)]">
                <h2 id="meditation-title">
                  Fear <em className="text-accent">Clear</em>
                </h2>
                <p className="my-4 text-sm font-medium tracking-wide text-accent">
                  Free guided meditation · 30 minutes
                </p>
                <p className="mb-6 max-w-[38ch] leading-relaxed text-muted">
                  A guided practice to help you release what’s holding you back
                  and step into clarity, calm, and courage.
                </p>
                <MeditationForm />
              </div>
            </Reveal>
          </section>

          <section
            className="wrap pb-[clamp(4rem,8vw,7rem)]"
            id="sessions"
            aria-labelledby="sessions-title"
          >
            <div className="grid items-center gap-10 md:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <Reveal className="session-portrait relative order-last mx-auto aspect-[4/5] w-[90%] max-w-[27rem] md:order-first md:aspect-auto md:w-full md:max-w-none md:self-stretch">
                <Image
                  src="/aurora/services/aurora.webp"
                  alt="Aurora playing a singing bowl in the evening light"
                  className="rounded-t-full object-cover"
                  fill
                  sizes="(min-width: 1024px) 430px, (min-width: 768px) 40vw, 94vw"
                />
              </Reveal>
              <div>
                <h2 id="sessions-title">
                  Sessions <em className="text-accent">with Aurora</em>
                </h2>
                <p className="section-intro">
                  A space to reconnect with yourself, explore your gifts, and
                  move forward with clarity.
                </p>
                <ul className="divide-y divide-accent/25 border-y border-accent/25">
                  {sessions.map(({ name, description, id }) => (
                    <li key={name} className="py-5">
                      <h3 className="text-[clamp(1.7rem,3vw,2.5rem)] leading-tight tracking-tight">
                        {name}
                      </h3>
                      <p className="mt-2 max-w-[50ch] leading-relaxed text-muted">
                        {description}
                      </p>
                      <a
                        className="text-link"
                        aria-label={id ? `Book ${name}` : `Ask about ${name}`}
                        href={sessionHref(id)}
                      >
                        {id ? "Book this session" : "Ask about this session"}{" "}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={siteLinks.services}
                  variant="outline"
                  className="mt-6"
                >
                  View all services
                </ButtonLink>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="about-title"
            id="about"
            className="about-spread border-y border-line"
          >
            <div className="wrap grid items-center gap-8 py-[clamp(3.5rem,7vw,6rem)] md:grid-cols-[1.2fr_0.8fr] md:gap-16">
              <Reveal>
                <h2 id="about-title">
                  Meet <em className="text-accent">Aurora</em>
                </h2>
                <p className="my-6 max-w-[30ch] font-display text-[clamp(1.65rem,3vw,2.6rem)] leading-[1.2] text-pretty">
                  Aurora shares what comes through in sound, messages, imagery,
                  and light language.
                </p>
                <p className="mb-6 max-w-[48ch] leading-relaxed text-muted">
                  As a Soul Vibrational Alchemist and interdimensional channel,
                  she works with Aum RA Ha Nu through Starseed Akashic Readings,
                  sound activations, and personal empowerment.
                </p>
                <ButtonLink
                  className="button-featured"
                  href={siteLinks.about}
                  variant="outline"
                >
                  More about Aurora
                </ButtonLink>
              </Reveal>
              <Reveal className="about-portrait relative mx-auto aspect-[4/5] w-[85%] max-w-[23rem]">
                <Image
                  src="/aurora/portrait-about.webp"
                  alt="Aurora Luna Star seated among yellow flowers"
                  className="rounded-t-full rounded-b-lg object-cover object-[center_35%]"
                  fill
                  sizes="(min-width: 768px) 370px, 80vw"
                />
              </Reveal>
            </div>
          </section>

          <figure
            aria-label="Client testimonial"
            className="testimonial nebula-backdrop relative isolate text-center"
          >
            <div className="wrap grid justify-items-center py-[clamp(4rem,9vw,8rem)]">
              <span
                aria-hidden="true"
                className="h-12 font-display text-8xl leading-none text-accent"
              >
                “
              </span>
              <blockquote className="max-w-[46ch] font-display text-[clamp(1.65rem,3.1vw,3.15rem)] leading-[1.25] text-balance italic">
                Aurora has an extremely powerful gift. My session was one of the
                most poignant spiritual experiences of my life. It was
                stunningly accurate. I felt as though 10 billion tons of rainbow
                light flushed my soul of all the inferior energies that had been
                pulling me down.
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-3 text-sm text-accent">
                <Image
                  src="/aurora/testimonials/erik.webp"
                  alt=""
                  className="size-10 rounded-full object-cover"
                  width={40}
                  height={40}
                />
                Erik L.
              </figcaption>
            </div>
          </figure>

          <section
            aria-labelledby="home-products-title"
            className="wrap section-space"
          >
            <Reveal className="mb-8">
              <h2 id="home-products-title">
                Retreats <em className="text-accent">&amp; recordings</em>
              </h2>
              <p className="section-intro max-w-[52ch]">
                Explore Aurora’s retreats, galactic gatherings, and channeled
                series.
              </p>
            </Reveal>
            <Reveal>
              <ProductGrid
                products={products.slice(0, 6)}
                headingLevel="h3"
                layout="shelf"
              />
            </Reveal>
            <ButtonLink
              className="mt-8"
              href={siteLinks.products}
              icon="bag"
              variant="outline"
            >
              View all products
            </ButtonLink>
          </section>

          <section
            aria-labelledby="starseeds-title"
            className="relative isolate overflow-hidden border-t border-accent/25 bg-surface"
          >
            <div className="starseed-panorama relative h-[min(76vw,22rem)] md:absolute md:inset-y-0 md:right-0 md:h-auto md:w-[60%]">
              <Image
                alt="Illustration of a purple-haired woman beneath a star-filled sky"
                className="object-cover object-[center_29%]"
                src="/aurora/hero-aurora.webp"
                fill
                sizes="(min-width: 768px) 60vw, 100vw"
              />
            </div>
            <div className="wrap relative grid items-center pt-2 pb-12 md:min-h-[34rem] md:py-20">
              <Reveal className="md:w-[46%]">
                <h2 id="starseeds-title" className="max-w-[13ch]">
                  Embracing your{" "}
                  <em className="text-accent">starseed nature</em>
                </h2>
                <p className="section-intro">
                  Do you feel a strong connection to the stars? Explore your
                  star origins, intuitive gifts, and connections to the cosmos.
                </p>
                <ButtonLink
                  href={siteLinks.starseeds}
                  icon="sparkles"
                  variant="outline"
                >
                  Explore Starseeds
                </ButtonLink>
              </Reveal>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
