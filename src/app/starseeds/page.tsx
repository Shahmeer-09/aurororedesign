import "../inner.css";
import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { Reveal } from "../_components/reveal";
import { SiteHeader } from "../_components/site-chrome";
import { siteLinks } from "../site-links";

export const metadata: Metadata = {
  title: "Starseeds | Aurora Luna Star",
  description:
    "Explore Aurora’s approach to Starseed spirituality and discover Galactic Akashic Readings, Star Mapping, and personalized Blueprint Activators.",
};

const offerings = [
  {
    title: "Galactic Akashic Reading",
    image: "akashic-reading",
    format: "60-minute live Zoom session",
    description:
      "Explore your star origins and intuitive gifts in a live channeled reading. Aurora draws on her practice of working with the Galactic Records to help you reflect on how those connections relate to your life.",
    action: "Purchase a Reading",
    href: "https://auroralunastar.com/product/galactic-akashic-reading/",
  },
  {
    title: "Star Mapping",
    image: "star-mapping",
    format: "Personalized report by email",
    description:
      "Receive a personal report exploring your primary star connections, the gifts Aurora associates with them, and areas you may want to reflect on further.",
    action: "Order a Star Map",
    href: "https://auroralunastar.com/product/star-mapping/",
  },
  {
    title: "Starseed Blueprint Activators®",
    image: "blueprint-activator",
    format: "Personalized artwork and written reading",
    description:
      "Aurora creates a personal piece using color, geometry, symbols, and light language. It comes with a written reading about the themes and messages that came through while she made it.",
    action: "Ask About an Activator",
    href: siteLinks.contact,
  },
];

export default function StarseedsPage() {
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
            aria-labelledby="what-is-a-starseed"
            className="wrap star-opening grid items-center gap-8 py-14 md:grid-cols-[1.1fr_0.9fr] md:gap-16 md:py-20"
          >
            <div>
              <h1 id="what-is-a-starseed">
                What is a <em>starseed?</em>
              </h1>
              <div className="mt-6 max-w-[60ch] space-y-4 leading-relaxed text-muted">
                <p>
                  In Aurora’s spiritual practice, a starseed is someone who
                  feels a connection between their soul and other star systems.
                  You might feel drawn to a constellation, wonder about your
                  soul’s origins, or feel out of place on Earth.
                </p>
                <p>
                  If you already identify as a starseed, Aurora’s work explores
                  grounding in your body, connecting with unity consciousness,
                  and bringing what you learn about your star connections into
                  everyday life.
                </p>
              </div>
              <ButtonLink className="mt-7" href="#starseed-offerings">
                Explore the Offerings
              </ButtonLink>
            </div>
            <Image
              alt=""
              className="mx-auto h-auto w-full max-w-100 rounded-full"
              height={900}
              sizes="(min-width: 768px) 400px, 90vw"
              src="/aurora/starseeds/welcome.webp"
              width={900}
            />
          </section>
          <section
            aria-labelledby="starseed-offerings-title"
            className="wrap border-t border-line pt-10 pb-16 md:pt-14 md:pb-20"
            id="starseed-offerings"
          >
            <Reveal>
              <h2 id="starseed-offerings-title">
                Explore your star connections
              </h2>
            </Reveal>
            <ul className="mt-9 grid gap-9 md:grid-cols-3">
              {offerings.map(
                ({ title, image, format, description, action, href }) => (
                  <li
                    className="flex flex-col gap-5 border-t border-line pt-4"
                    key={image}
                  >
                    <Image
                      alt={
                        image === "blueprint-activator"
                          ? "Circular blueprint artwork with multicolored geometric patterns and symbols"
                          : ""
                      }
                      className="mx-auto aspect-square h-auto w-full max-w-96 rounded-sm object-contain"
                      height={900}
                      sizes="(min-width: 1200px) 368px, (min-width: 768px) 30vw, 90vw"
                      src={`/aurora/starseeds/${image}.webp`}
                      width={900}
                    />
                    <div>
                      <h3 className="text-[clamp(2rem,4vw,3rem)] leading-none tracking-[-0.02em]">
                        {title}
                      </h3>
                      <p className="mt-3 text-sm font-semibold text-accent">
                        {format}
                      </p>
                      <p className="mt-3 mb-2 max-w-[62ch] leading-relaxed text-muted">
                        {description}
                      </p>
                      <a className="text-link" href={href}>
                        {action}
                      </a>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </section>
        </div>
      </main>
    </>
  );
}
