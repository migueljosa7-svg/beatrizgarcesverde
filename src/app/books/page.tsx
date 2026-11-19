import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { Banner, CardImg, P } from "@/components/Media";
import { breadcrumb } from "@/lib/schema";
import { media } from "@/config/media";
import { site, clarity } from "@/config/site";

export const metadata: Metadata = {
  title: "Claridad estratégica para tu tienda de moda: diagnóstico y hoja de ruta",
  description: "Tu punto de partida, tu visión y un mapa claro para avanzar sin caos: analizamos tu negocio físico, tu cliente ideal y tus bloqueos y prioridades.",
  alternates: { canonical: "/books" },
};

export default function Books() {
  return (
    <>
      <JsonLd data={breadcrumb("Claridad y Estrategia", "/books")} />
      <section className="section tight">
        <div className="container">
          <Reveal><Banner pic={media.banner.claridad} title={clarity.title} priority /></Reveal>
          <Reveal className="narrow-text">
            <p className="sub">{clarity.sub}</p>
            <P items={clarity.intro} />
            <h2 className="h-sm">{clarity.whatTitle}</h2>
            <p>{clarity.what}</p>
          </Reveal>
          <div className="grid3">
            {clarity.dims.map((d, i) => (
              <Reveal key={d.t} delay={i * 100} className="card dim has-img">
                <CardImg pic={media.claridad[i]} />
                <div className="card-body">
                  <h3>{d.t}</h3><p>{d.d}</p>
                  <p className="label">Qué analizamos</p>
                  <ul className="mini">{d.list.map((l) => <li key={l}>{l}</li>)}</ul>
                  <p className="label">Resultado</p>
                  <p className="result">{d.result}</p>
                  <Link className="more" href={site.bookingHref}>{d.cta} →</Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
