import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { P } from "@/components/Media";
import { breadcrumb } from "@/lib/schema";
import { media } from "@/config/media";
import { story, aboutExtra } from "@/config/site";

export const metadata: Metadata = {
  title: "Acerca de mí: Beatriz Garcés Verde, asesora de digitalización en Zaragoza",
  description: "Nací entre zapatos, clientas y cuadernos llenos de ideas. Conoce la historia de Beatriz Garcés Verde y el método VÉRTICE: estrategia + psicología + acompañamiento humano.",
  alternates: { canonical: "/about" },
};

export default function About() {
  const photos = [media.exterior3, media.hero, media.exterior2];
  return (
    <>
      <JsonLd data={breadcrumb("Acerca de mí", "/about")} />
      <section className="page-hero">
        <div className="container about-hero">
          <Reveal>
            <p className="eyebrow">{aboutExtra.welcome}</p>
            <h1>{aboutExtra.title}</h1>
            <p className="lead">{story.aboutTagline}</p>
          </Reveal>
          <Reveal className="about-photos" delay={100}>
            {photos.map((m, i) => (
              <div key={m.src} className={`about-photo p${i}`}>
                <Image src={m.src} alt={m.alt} width={m.width} height={m.height} priority={i === 0} loading={i === 0 ? "eager" : "lazy"} sizes="(max-width: 860px) 60vw, 260px" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="section" aria-labelledby="historia">
        <div className="container narrow-text left">
          <Reveal>
            <h2 id="historia">{story.aboutTitle}</h2>
            <p><strong>{story.aboutSub}</strong></p>
            <P items={story.paras} />
          </Reveal>
        </div>
      </section>

      <section className="section tint" aria-labelledby="camino">
        <div className="container">
          <Reveal><h2 id="camino">{story.pathTitle}</h2></Reveal>
          <div className="grid3">
            {story.path.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} className="card phase">
                <span className="num" aria-hidden="true">{p.n}</span><h3>{p.t}</h3><p>{p.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
