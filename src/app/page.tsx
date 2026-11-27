import Image from "next/image";
import { HeroMotion } from "./_components/hero-motion";
import { MeditationForm } from "./_components/meditation-form";
import { SiteHeader } from "./_components/site-chrome";
import { TestimonialBackdrop } from "./_components/testimonial-backdrop";
import { getProductsPage } from "./products/catalog";
import { sessionHref, sessions } from "./services/sessions";
import { siteLinks } from "./site-links";

export default async function Home() {
  const [retreat, , ...recordings] = await getProductsPage();
  const productUrl = (slug: string) =>
    `https://auroralunastar.com/product/${slug}/`;
  return (
    <div className="journal">
      <a
        className="fixed top-3 left-3 z-10 -translate-y-[180%] bg-background px-4 py-3 text-foreground focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main id="main">
        <section
          aria-labelledby="hero-title"
          className="journal-hero relative isolate grid place-items-center overflow-hidden bg-background"
        >
          <HeroMotion />
          <h1 id="hero-title">
            <Image
              className="h-auto w-[min(85vw,47rem)]"
              src="/aurora/aurora-logo.png"
              alt="Aurora Luna Star — Alchemy, Alignment, Ascension"
              width={1447}
              height={684}
              sizes="(max-width: 885px) 85vw, 752px"
              preload
            />
          </h1>
        </section>
        <section className="paper">
          <div className="spread columns items-center">
            <Image
              className="portrait"
              width={780}
              height={1092}
              src="/aurora/portrait-about.webp"
              alt="Aurora sitting among yellow garden flowers"
              sizes="(min-width: 768px) 38vw, 90vw"
            />
            <div>
              <p className="caption">Meet Aurora</p>
              <h2>
                What would you do <em>without the weight of fear?</em>
              </h2>
              <p className="body-copy">
                I’m Aurora Luna Star. In private sessions, I work with sound,
                light language, and the Starseed Akashic Records. We begin with
                what you bring to the session and explore it together.
              </p>
              <div className="flex flex-wrap items-center gap-x-7 gap-y-3">
                <a className="book" href="#sessions">
                  Book a Session
                </a>
                <a className="ink-link" href={siteLinks.about}>
                  Read my story
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="paper sessions" id="sessions">
          <div className="spread">
            <h2>
              Sessions <em>with Aurora</em>
            </h2>
            <ul className="session-list">
              {sessions.map(({ name, description, id, slug }) => (
                <li key={name}>
                  <div className={`session-cover cover-${slug}`}>
                    <h3>{name}</h3>
                  </div>
                  <p>{description}</p>
                  <a
                    className="ink-link"
                    aria-label={id ? `Book ${name}` : `Ask about ${name}`}
                    href={sessionHref(id)}
                  >
                    {id ? "Book this session" : "Ask about this session"}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <figure className="sound">
          <TestimonialBackdrop />
          <div>
            <blockquote>
              “Aurora has an extremely powerful gift. My session was one of the
              most <em>poignant spiritual experiences</em> of my life. It was
              stunningly accurate. I felt as though 10 billion tons of rainbow
              light flushed my soul of all the inferior energies that had been
              pulling me down.”
            </blockquote>
            <figcaption>Erik L.</figcaption>
          </div>
        </figure>
        <section id="meditation" className="meditation-chapter">
          <div className="spread columns items-center">
            <div>
              <p className="caption">Free 30-minute guided meditation</p>
              <h2>
                <em>Fear Clear</em>
              </h2>
              <p className="body-copy">
                A guided practice to help you release what’s holding you back
                and step into clarity, calm, and courage.
              </p>
              <MeditationForm />
            </div>
            <Image
              className="meditation-portrait"
              width={780}
              height={1092}
              src="/aurora/portrait-about.webp"
              sizes="(min-width: 1040px) 464px, (min-width: 768px) 45vw, 88vw"
              alt="Aurora Luna Star sitting among yellow flowers"
            />
          </div>
        </section>
        <section className="paper">
          <div className="spread">
            <h2>
              Retreats <em>&amp; recordings</em>
            </h2>
            <div className="shop">
              <a className="lead-product" href={productUrl(retreat.slug)}>
                <Image
                  src={`/aurora/products/${retreat.slug}.webp`}
                  width={640}
                  height={640}
                  sizes="(min-width: 768px) 25vw, 85vw"
                  alt=""
                />
                <h3>{retreat.title}</h3>
              </a>
              <div>
                <ul>
                  {recordings.slice(0, 3).map((product) => (
                    <li key={product.slug}>
                      <a href={productUrl(product.slug)}>
                        <Image
                          src={`/aurora/products/${product.slug}.webp`}
                          width={64}
                          height={64}
                          alt=""
                        />
                        {product.title}
                        <span aria-hidden="true">↗</span>
                      </a>
                    </li>
                  ))}
                </ul>
                <a className="ink-link mt-5" href={siteLinks.products}>
                  Visit the shop
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
