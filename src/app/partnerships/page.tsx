import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { PageHero } from "../_components/page-hero";
import { Reveal } from "../_components/reveal";
import { SiteFooter, SiteHeader } from "../_components/site-chrome";

export const metadata: Metadata = {
  title: "Partnerships | Aurora Luna Star",
  description:
    "Explore Aurora Luna Star’s partnerships with Kejiwa and TwistedSage.",
};

const twistedSagePhotos = [
  {
    file: "twisted-sage-1",
    alt: "Circular pieces made with woven copper wire",
  },
  {
    file: "twisted-sage-2",
    alt: "Silver-colored circular pendant with interlocking loops",
  },
  {
    file: "twisted-sage-3",
    alt: "Silver-colored pendant with a flower-like geometric pattern",
  },
  {
    file: "twisted-sage-4",
    alt: "Silver-colored three-loop pendant on a chain",
  },
];

const twistedSageShop =
  "https://shop.twistedsage.com/?rfsn=7249051.55ef11&utm_source=refersion&utm_medium=affiliate&utm_campaign=7249051.55ef11";

export default function PartnershipsPage() {
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
        <PageHero title="Partnerships" />
        <div className="star-field">
          <section
            aria-labelledby="kejiwa-heading"
            className="wrap grid items-center gap-8 py-12 md:grid-cols-[1fr_0.85fr] md:gap-16 md:py-18"
          >
            <Reveal className="relative aspect-[5/4] w-full overflow-hidden rounded-2xl border border-line md:order-2 md:aspect-[5/5.5]">
              <Image
                alt="Two Kejiwa bottles on a table with a small glass and copper beads"
                className="object-cover object-[center_65%]"
                fill
                sizes="(min-width: 1200px) 460px, (min-width: 768px) 42vw, 92vw"
                src="/aurora/partnerships/kejiwa.webp"
              />
            </Reveal>
            <div>
              <h2 id="kejiwa-heading">Kejiwa</h2>
              <p className="mt-4 font-display text-2xl leading-tight text-accent">
                Elixirs and mists for spiritual practice
              </p>
              <div className="mt-4 max-w-[60ch] space-y-4 leading-relaxed text-muted">
                <p>
                  Kejiwa makes elixirs and mists for lightworkers, Reiki
                  practitioners, and others with a spiritual practice. The maker
                  describes them as companions for meditation, bodywork,
                  breathwork, sound baths, and ceremony.
                </p>
                <p>
                  Explore Kejiwa’s Alche-Mists, Ormus Minerals, and Spagyrics,
                  along with the maker’s guidance on using them in daily rituals
                  or practitioner-led sessions.
                </p>
              </div>
              <ButtonLink
                className="mt-6"
                href="https://kejiwastore.com/aurora"
                icon="bag"
                rel="sponsored"
              >
                Visit Kejiwa
              </ButtonLink>
            </div>
          </section>

          <section
            aria-labelledby="twistedsage-heading"
            className="wrap border-t border-line py-12 md:py-18"
          >
            <Reveal className="grid items-start gap-x-12 gap-y-4 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h2 id="twistedsage-heading">TwistedSage</h2>
                <p className="mt-3 font-display text-2xl leading-tight text-accent">
                  Geometric jewelry and tensor tools
                </p>
              </div>
              <div>
                <p className="max-w-[60ch] leading-relaxed text-muted">
                  TwistedSage makes woven copper designs, pendants, and other
                  pieces for spiritual practice. The maker calls the collection
                  Tensor Technology and describes it as bringing together
                  geometric forms and spiritual intention.
                </p>
                <ButtonLink
                  className="mt-5"
                  href={twistedSageShop}
                  icon="bag"
                  rel="sponsored"
                >
                  Visit TwistedSage
                </ButtonLink>
              </div>
            </Reveal>
            <ul
              aria-label="TwistedSage pieces"
              className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4"
            >
              {twistedSagePhotos.map(({ file, alt }) => (
                <li
                  className="relative aspect-square overflow-hidden rounded-xl border border-line bg-background"
                  key={file}
                >
                  <Image
                    alt={alt}
                    className="object-cover"
                    fill
                    sizes="(min-width: 1200px) 276px, (min-width: 768px) 24vw, 45vw"
                    src={`/aurora/partnerships/${file}.webp`}
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
