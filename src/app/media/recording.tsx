"use client";

import Image from "next/image";
import { useState } from "react";

export function Recording({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <iframe
      className="aspect-video w-full"
      title={title}
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
      allow="autoplay; encrypted-media; fullscreen"
      allowFullScreen
    />
  ) : (
    <button
      type="button"
      className="episode"
      onClick={() => setPlaying(true)}
      aria-label={`Play ${title}`}
    >
      <Image
        src={`/aurora/media/${id}.webp`}
        width={640}
        height={360}
        sizes="(min-width:768px) 55vw, 95vw"
        alt=""
      />
      <span>▶ Play recording</span>
    </button>
  );
}
