import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { PageHero } from "../_components/page-hero";
import { Reveal } from "../_components/reveal";
import { SiteFooter, SiteHeader } from "../_components/site-chrome";
import { siteLinks } from "../site-links";

export const metadata: Metadata = {
  title: "Media & Speaking | Aurora Luna Star",
  description:
    "Explore Aurora Luna Star’s speaking experience and invite her to present at an in-person or online event.",
};

export default function MediaPage() {
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
        <PageHero title="Speaking engagements" subtitle="In person & online" />

        <div className="star-field">
          <section
            aria-labelledby="speaker-title"
            className="border-b border-line"
            id="speaker"
          >
            <div className="mx-auto grid w-[min(100%-2.25rem,90rem)] items-center gap-8 py-[clamp(3rem,6vw,6rem)] md:w-[min(100%-4rem,90rem)] md:grid-cols-[1.25fr_1fr] md:gap-[clamp(2rem,5vw,5rem)]">
              <Reveal className="tinted-image relative isolate overflow-hidden rounded-2xl bg-surface">
                <Image
                  alt="Aurora Luna Star seated onstage at a speaking engagement"
                  className="h-auto w-full"
                  height={931}
                  sizes="(min-width: 1536px) 790px, (min-width: 768px) 52vw, 95vw"
                  src="/aurora/media/presenter.webp"
                  width={1339}
                />
              </Reveal>

              <div>
                <h2 id="speaker-title">Presenter &amp; Speaker</h2>
                <div className="mt-5 max-w-[58ch] space-y-4 leading-relaxed text-muted md:text-[1.0625rem]">
                  <p>
                    Aurora presents in person and online. In Sedona, Arizona,
                    she has appeared at <em>The Channel Panel</em> and{" "}
                    <em>Odyssey</em>. She has also spoken at{" "}
                    <em>The Lemurian Life Expo</em> in Mount Shasta, California,
                    and appeared six times on John Burgos’s{" "}
                    <em>Beyond the Ordinary Show</em> since 2018.
                  </p>
                  <p>
                    Her online appearances include <em>Portal to Ascension</em>{" "}
                    with Neil Gaur, <em>You Wealth Revolution</em> with Darius
                    Barazandeh, and <em>Haute Hustle</em> with Jeneth Blacker
                    and Lyanca Martinez. She is also developing her own podcast,{" "}
                    <em>Starseed Nation 1111</em>.
                  </p>
                  <p>
                    Aurora approaches personal and spiritual growth with
                    humility. She sees her role as leading by example and
                    supporting others on their own paths.
                  </p>
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <ButtonLink href={siteLinks.contact} icon="message">
                    Invite Aurora to Speak
                  </ButtonLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
