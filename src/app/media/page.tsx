import "../inner.css";
import type { Metadata } from "next";
import Image from "next/image";
import { EditionCta, EditionHero } from "../_components/edition-banner";
import { Reveal } from "../_components/reveal";
import { SiteHeader } from "../_components/site-chrome";
import { siteLinks } from "../site-links";
import { Recording } from "./recording";

export const metadata: Metadata = {
  title: "Media & Speaking | Aurora Luna Star",
  description:
    "Explore Aurora Luna Star’s speaking experience and invite her to present at an in-person or online event.",
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
        className="fixed top-3 left-3 z-3 -translate-y-[180%] bg-accent px-4 py-3 text-accent-ink focus:translate-y-0"
        href="#main"
      >
        Skip to content
      </a>
      <SiteHeader overlay />
      <main className="edition media-edition" id="main">
        <EditionHero image="space4.jpg" title="Media & Speaking" />
        <div>
          <section className="feature-band">
            <div className="wrap media-opening">
              <Recording id={recordings[0].id} title={recordings[0].title} />
              <div>
                <p className="kicker">Featured recording</p>
                <h2>{recordings[0].title}</h2>
                <a
                  className="text-link"
                  href={`https://www.youtube.com/watch?v=${recordings[0].id}`}
                >
                  Watch on YouTube ↗
                </a>
              </div>
            </div>
          </section>
          <section
            aria-labelledby="appearances-title"
            className="wrap section-space"
            id="appearances"
          >
            <h2 id="appearances-title">Recorded appearances</h2>
            <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
              {recordings.slice(1).map(({ id, title }) => (
                <li key={id}>
                  <a
                    className="group flex h-full flex-col border-t border-line pt-3"
                    href={`https://www.youtube.com/watch?v=${id}`}
                  >
                    <div className="relative aspect-video overflow-hidden rounded-md bg-surface">
                      <Image
                        alt=""
                        className="object-cover"
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 95vw"
                        src={`/aurora/media/${id}.webp`}
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 py-4">
                      <h3 className="text-2xl leading-none">{title}</h3>
                      <span className="mt-auto text-sm text-muted underline-offset-4 group-hover:text-accent group-hover:underline">
                        Watch on YouTube
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section
            aria-labelledby="speaker-title"
            className="border-b border-line"
            id="speaker"
          >
            <div className="mx-auto grid w-[min(100%-2.25rem,90rem)] items-center gap-8 py-[clamp(3rem,6vw,6rem)] md:w-[min(100%-4rem,90rem)] md:grid-cols-[1.25fr_1fr] md:gap-[clamp(2rem,5vw,5rem)]">
              <Reveal className="overflow-hidden rounded-lg bg-surface">
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
                <h2 id="speaker-title">Presenter &amp; speaker</h2>
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
              </div>
            </div>
          </section>
        </div>
        <EditionCta
          image="pexelspace2.jpg"
          title="Bring Aurora to your event"
          label="Invite Aurora to Speak"
          href={siteLinks.contact}
        />
      </main>
    </>
  );
}
