import Image from "next/image";
import { ButtonLink } from "@/components/button";

type SpaceImage =
  | "space4.jpg"
  | "pexelcolorful.jpg"
  | "space3.jpg"
  | "pexelspace2.jpg";

export function EditionHero({
  image,
  title,
}: {
  image: SpaceImage;
  title: string;
}) {
  return (
    <div className="edition-hero">
      <Image
        className="edition-sky"
        src={`/aurora/spaceimagesfornewsite/${image}`}
        alt=""
        fill
        sizes="100vw"
        preload
      />
      <h1 className="wrap">{title}</h1>
    </div>
  );
}

export function EditionCta({
  image,
  title,
  href,
  label,
}: {
  image: SpaceImage;
  title: string;
  href: string;
  label: string;
}) {
  return (
    <section className="edition-cta" aria-labelledby="edition-cta-title">
      <Image
        className="edition-sky"
        src={`/aurora/spaceimagesfornewsite/${image}`}
        alt=""
        fill
        sizes="100vw"
      />
      <div className="wrap">
        <h2 id="edition-cta-title">{title}</h2>
        <ButtonLink href={href}>{label}</ButtonLink>
      </div>
    </section>
  );
}
