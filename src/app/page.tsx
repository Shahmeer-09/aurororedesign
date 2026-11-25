import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { HeroMotion } from "./_components/hero-motion";
import { MeditationForm } from "./_components/meditation-form";
import { SiteFooter, SiteHeader } from "./_components/site-chrome";
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

const sessions = [
  {
    name: "Bio-Magnetic Alignment",
    description:
      "Explore the beliefs that hold you back and work with them through a guided meditation.",
    id: "1074087138",
  },
  {
    name: "Heart Intelligence",
    description:
      "Make space to speak freely, then reconnect with yourself through a heart-mind meditation.",
    id: "1074115334",
  },
  {
    name: "Soul Evolutionary Alchemy",
    description:
      "Explore your Akashic Records through a channeled meditation at your own pace.",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy wrap">
            <p className="hero-kicker">Aurora Luna Star</p>
            <h1 id="hero-title">
              What would you do <span>without the weight of fear?</span>
            </h1>
            <p className="hero-intro">
              Bridging <strong>all that you are</strong> with{" "}
              <strong>All That Is</strong> through Starseed Akashic Readings,
              Sound Activations, and Personal Empowerment.
            </p>
            <div className="actions">
              <ButtonLink href={bookingAnchor}>Book a Session</ButtonLink>
              <ButtonLink href="#meditation" variant="outline">
                Get the Free Meditation
              </ButtonLink>
            </div>
          </div>
          <HeroMotion />
        </section>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {["first", "repeat"].map((copy) => (
              <div className="marquee-group" key={copy}>
                {specialties.map((specialty) => (
                  <span key={specialty}>{specialty}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="star-field">
          <section
            className="meditation-section section-space wrap"
            id="meditation"
            aria-labelledby="meditation-title"
          >
            <div className="meditation-panel">
              <div className="meditation-art">
                <Image
                  alt="A woman opens her arms above sunlit mountain clouds"
                  src="/aurora/fear-clear-summit.webp"
                  fill
                  sizes="(min-width: 768px) 45vw, 90vw"
                />
              </div>
              <div className="meditation-copy">
                <h2 id="meditation-title">
                  What would you do without the weight of fear?
                </h2>
                <p className="meditation-name">Fear Clear</p>
                <p className="section-intro">
                  A free 30-minute guided meditation to help you release what’s
                  holding you back and step into clarity, calm, and courage.
                </p>
                <MeditationForm />
              </div>
            </div>
          </section>

          <section
            aria-labelledby="sessions-title"
            className="section-space wrap"
            id="sessions"
          >
            <h2 id="sessions-title">Sessions with Aurora</h2>
            <p className="section-intro">
              A space to reconnect with yourself, explore your gifts, and move
              forward with clarity.
            </p>
            <ul className="session-list">
              {sessions.map(({ name, description, id }) => (
                <li className="session-row" key={name}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                  <a
                    aria-label={id ? `Book ${name}` : `Ask about ${name}`}
                    className="text-link"
                    href={
                      id
                        ? `https://www.schedulista.com/schedule/auroralunastar/choose_time?service_id=${id}`
                        : siteLinks.contact
                    }
                  >
                    {id ? "Book this session" : "Ask about this session"}{" "}
                    <span aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ul>
            <a className="text-link" href={siteLinks.services}>
              View all services <span aria-hidden="true">↗</span>
            </a>
          </section>

          <section
            aria-labelledby="about-title"
            className="about section-space wrap"
            id="about"
          >
            <div className="about-photo">
              <Image
                src="/aurora/portrait-about.webp"
                alt="Aurora Luna Star"
                fill
                sizes="(min-width: 768px) 40vw, 90vw"
              />
            </div>
            <div className="about-copy">
              <h2 id="about-title">Meet Aurora</h2>
              <p className="section-intro">
                Aurora is an interdimensional channel whose work includes
                Starseed Akashic Readings, sound activations, and personal
                empowerment.
              </p>
              <p className="about-detail">
                As a Soul Vibrational Alchemist, she channels Aum RA Ha Nu,
                sharing sound, messages, images, and light language to support
                personal growth and self-discovery.
              </p>
              <a className="text-link" href={siteLinks.about}>
                More about Aurora <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>

          <figure aria-label="Client testimonial" className="testimonial">
            <div aria-hidden="true" className="testimonial-image" />
            <div className="testimonial-content wrap">
              <blockquote>
                “Aurora has an extremely powerful gift. My session was one of
                the most poignant spiritual experiences of my life. It was
                stunningly accurate. I felt as though 10 billion tons of rainbow
                light flushed my soul of all the inferior energies that had been
                pulling me down.”
              </blockquote>
              <figcaption>Erik L.</figcaption>
            </div>
          </figure>

          <section
            className="starseeds section-space wrap"
            aria-labelledby="starseeds-title"
          >
            <div className="starseeds-copy">
              <h2 id="starseeds-title">
                Embracing your <em>starseed nature</em>
              </h2>
              <p className="section-intro">
                Do you feel a strong connection to the stars? Explore your star
                origins, intuitive gifts, and connections to the cosmos.
              </p>
              <ButtonLink href={siteLinks.starseeds} variant="outline">
                Explore Starseeds
              </ButtonLink>
            </div>
            <div className="starseeds-orbit">
              <div className="starseeds-image">
                <Image
                  alt="Violet and blue stars illuminating a distant nebula"
                  src="/aurora/galaxy.webp"
                  fill
                  sizes="(min-width: 768px) 50vw, 90vw"
                />
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
