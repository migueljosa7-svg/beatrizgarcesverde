import Image from "next/image";

export type Pic = { src: string; alt: string; width: number; height: number };

/** Banner de cabecera (foto de fondo de cada página en la web original) con título superpuesto. */
export function Banner({ pic, kicker, title, priority = false }: { pic: Pic; kicker?: string; title: string; priority?: boolean }) {
  // En las páginas interiores el banner lleva el único <h1>.
  return (
    <div className="banner">
      <Image src={pic.src} alt={pic.alt} width={pic.width} height={pic.height} priority={priority} loading={priority ? "eager" : "lazy"} sizes="(max-width: 1140px) 100vw, 1100px" />
      <div className="banner-txt">{kicker && <p className="eyebrow">{kicker}</p>}<h1 className="banner-t">{title}</h1></div>
    </div>
  );
}

export function CardImg({ pic }: { pic: Pic }) {
  return (
    <div className="card-img"><Image src={pic.src} alt={pic.alt} width={pic.width} height={pic.height} loading="lazy" sizes="(max-width: 860px) 100vw, 360px" /></div>
  );
}

export const P = ({ items }: { items: string[] }) => <>{items.map((t) => <p key={t}>{t}</p>)}</>;
