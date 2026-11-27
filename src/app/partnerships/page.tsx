import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import "../inner.css";
import { Reveal } from "../_components/reveal";
import { SiteHeader } from "../_components/site-chrome";

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
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-accent px-4 py-3 text-accent-ink focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main className="edition partnerships-edition" id="main">
        <div>
          <section
            aria-labelledby="kejiwa-heading"
            className="partner-opening sky-motion"
          >
            <Reveal className="relative aspect-[5/4] w-full overflow-hidden  md:order-2 md:aspect-[5/5.5]">
              <Image
                alt="Two Kejiwa bottles on a table with a small glass and copper beads"
                className="object-cover object-[center_65%]"
                fill
                sizes="(min-width: 1200px) 460px, (min-width: 768px) 42vw, 92vw"
                src="/aurora/partnerships/kejiwa.webp"
              />
            </Reveal>
            <div>
              <h1>
                Creative <em>partnerships</em>
              </h1>
              <h2 id="kejiwa-heading" className="text-foreground">
                Kejiwa
              </h2>
              <p className="mt-4 font-display text-2xl leading-tight text-accent">
                Elixirs and mists for spiritual practice
              </p>
            </div>
          </section>
          <div className="wrap py-10 partner-notes">
            {" "}
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
              className="mt-9 grid grid-cols-2 gap-3 md:grid-cols-[1.4fr_1fr_1fr] md:gap-4"
            >
              {twistedSagePhotos.map(({ file, alt }) => (
                <li
                  className="relative aspect-square overflow-hidden rounded-sm bg-background md:first:row-span-2 md:first:aspect-auto md:last:col-span-2 md:last:aspect-[3/1]"
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
    </>
  );
}
