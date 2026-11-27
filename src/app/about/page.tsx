import "../inner.css";
import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Reveal } from "../_components/reveal";
import { SiteHeader } from "../_components/site-chrome";
import { bookingAnchor, siteLinks } from "../site-links";
import { TestimonialSlider } from "./testimonial-slider";

export const metadata: Metadata = {
  title: "About Aurora | Aurora Luna Star",
  description:
    "Meet Aurora Luna Star and learn about her work in Starseed Akashic Readings, sound activations, and personal empowerment.",
};

export default function AboutPage() {
  return (
    <>
      <a
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-accent px-4 py-3 text-accent-ink focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main className="edition" id="main">
        <div>
          <section
            aria-labelledby="aurora-work"
            className="wrap grid items-center gap-9 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-16 md:py-20"
          >
            <Reveal className="about-portrait relative mx-auto aspect-[5/6] w-[92%] max-w-104 md:aspect-auto md:self-stretch">
              <Image
                alt="Aurora Luna Star with purple hair in a garden"
                className="object-cover object-[center_35%]"
                fill
                sizes="(min-width: 1024px) 416px, (min-width: 768px) 45vw, 90vw"
                src="/aurora/portrait-about.webp"
              />
            </Reveal>
            <div>
              <h1 id="aurora-work">
                Meet <em>Aurora</em>
              </h1>
              <div className="mt-6 max-w-[60ch] space-y-4 leading-relaxed text-muted">
                <p>
                  Aurora Luna Star is an interdimensional channel. Through
                  Starseed Akashic Readings, sound activations, and personal
                  empowerment work, she invites people to explore their gifts
                  and find their own sense of spiritual direction.
                </p>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                <ButtonLink
                  className="min-h-12"
                  href={bookingAnchor}
                  icon="calendar"
                >
                  Book a Session
                </ButtonLink>
                <a className="text-link" href={siteLinks.media}>
                  Explore Aurora’s speaking work
                </a>
              </div>
            </div>
          </section>
          <section className="story-band">
            <div className="wrap story-pair">
              <div>
                <h2>Sound and light language</h2>{" "}
                <p>
                  As a Soul Vibrational Alchemist, Aurora describes connecting
                  with Aum RA Ha Nu, a collective she knows as
                  ninth-dimensional. She shares what comes through that practice
                  in sound, messages, imagery, and light language. She sees her
                  role as helping others make room for change and discover what
                  they are capable of.
                </p>
                <p>
                  Aurora believes people carry wisdom from past lives and can
                  draw on it during a time of spiritual awakening. She calls
                  this a soul blueprint and sees reconnecting with it as a way
                  to recognize one’s own potential.
                </p>
              </div>
              <Image
                width={780}
                height={1170}
                src="/aurora/services/aurora.webp"
                alt="Aurora sounding a crystal bowl outdoors"
              />
            </div>
          </section>
          <section aria-labelledby="mission-title" className="wrap">
            <Reveal className="mx-auto max-w-[60rem] border-y border-line py-10 md:grid md:grid-cols-[1fr_1.7fr] md:gap-x-12 md:py-16 [&>p]:col-start-2">
              <h2
                className="text-[clamp(2.25rem,4vw,3.5rem)]"
                id="mission-title"
              >
                Aurora’s mission
              </h2>
              <p className="mt-4 max-w-[68ch] text-lg leading-relaxed text-muted">
                Aurora sees her role as bringing people together in harmony and
                helping them remember, awaken, and transform their potential.
                She hopes that shared spiritual work makes space for
                self-healing, raises what she calls the collective vibration,
                and brings more love and peace into how people relate.
              </p>
              <p className="mt-6 max-w-[68ch] border-l-2 border-accent/60 pl-5 font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-[1.35] text-balance text-foreground">
                Aurora’s greatest joy lies in empowering others to recognize
                their limitless nature and see themselves as the master beings
                they’ve always been.
              </p>
            </Reveal>
          </section>
          <section className="wrap closing">
            <details>
              <summary>Read more client stories</summary>
              <TestimonialSlider />
            </details>
            <blockquote>
              “You can just feel the difference walking into any space that she
              has created.”
            </blockquote>
            <p>Shanna S.</p>
            <ButtonLink href="/services">Explore sessions</ButtonLink>
          </section>
        </div>
      </main>
    </>
  );
}
