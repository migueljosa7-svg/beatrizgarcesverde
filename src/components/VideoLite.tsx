"use client";
import { useState } from "react";

/** Lite-embed: no carga nada de YouTube hasta que el usuario pulsa. Usa youtube-nocookie. */
export default function VideoLite({ id, title }: { id: string; title: string }) {
  const [play, setPlay] = useState(false);
  return (
    <div className="video">
      {play ? (
        <iframe src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`} title={title}
          allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen loading="lazy" />
      ) : (
        <button type="button" onClick={() => setPlay(true)} aria-label={`Reproducir vídeo: ${title}`}
          style={{ backgroundImage: `url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)` }}>
          <span className="play" aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
