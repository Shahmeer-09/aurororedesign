import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/button";
import { PageHero } from "../_components/page-hero";
import { SiteFooter, SiteHeader } from "../_components/site-chrome";
import { siteLinks } from "../site-links";

export const metadata: Metadata = {
  title: "Media & Speaking | Aurora Luna Star",
  description:
    "Explore Aurora Luna Star’s speaking engagements, interviews, panels, and recorded appearances. Inquire about in-person and online events.",
};

const recordings = [
  { id: "khmHG3QKUvk", title: "Starseed Blueprint Activator" },
  { id: "exX0aoTzSrM", title: "The Channel Panel · January 4, 2025" },
  {
    id: "agN0FgqE5FY",
    title: "Hucolo Saturday Webinar with Aurora Luna Star · March 15, 2025",
  },
  {
    id: "f8hMAoZHVeE",
    title: "Presentation & Channeling at Odyssey 2024 in Sedona, AZ",
  },
  { id: "zDP7j5Icq18", title: "Awaken Your Star Consciousness" },
  {
    id: "_exv5DuCYMk",
    title: "Starseed Akashic Readings & Inter-Dimensional Guidance for Change",
  },
  {
    id: "R4L4ywH4zg4",
    title: "Quantum Manifesting & Star Beings with Aurora Luna Star",
  },
  { id: "CNo-KoBEYdA", title: "Aurora Luna Star · Celestial Harmonies" },
];

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
              <div className="tinted-image relative isolate overflow-hidden rounded-2xl bg-surface">
                <Image
                  alt="Aurora Luna Star seated onstage at a speaking engagement"
                  className="h-auto w-full"
                  height={931}
                  sizes="(min-width: 1536px) 790px, (min-width: 768px) 52vw, 95vw"
                  src="/aurora/media/presenter.webp"
                  width={1339}
                />
              </div>

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
                  <a className="text-link" href="#appearances">
                    Browse recordings <span aria-hidden="true">↓</span>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section
            aria-labelledby="appearances-title"
            className="mx-auto w-[min(100%-2.25rem,90rem)] py-[clamp(3rem,6vw,6rem)] md:w-[min(100%-4rem,90rem)]"
            id="appearances"
          >
            <h2 id="appearances-title">Recorded Appearances</h2>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {recordings.map(({ id, title }) => (
                <li key={id}>
                  <a
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface hover:border-accent motion-safe:transition-colors"
                    href={`https://www.youtube.com/watch?v=${id}`}
                  >
                    <div className="relative aspect-video overflow-hidden bg-background">
                      <Image
                        alt=""
                        className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                        src={`/aurora/media/${id}.webp`}
                      />
                      <span
                        aria-hidden="true"
                        className="absolute right-3 bottom-3 grid size-11 place-items-center rounded-full border border-line bg-background text-accent group-hover:bg-purple group-hover:text-foreground"
                      >
                        ▶
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-4 sm:p-5">
                      <h3 className="text-2xl leading-none">{title}</h3>
                      <span className="mt-auto text-xs font-semibold text-accent">
                        Watch on YouTube <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </a>
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
