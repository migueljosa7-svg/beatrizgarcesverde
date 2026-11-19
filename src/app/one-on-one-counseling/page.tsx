import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import FormBlock from "@/components/FormBlock";
import JsonLd from "@/components/JsonLd";
import Faq from "@/components/Faq";
import { Banner } from "@/components/Media";
import { breadcrumb } from "@/lib/schema";
import { media } from "@/config/media";
import { oneToOne, faqsOriginal, aboutExtra } from "@/config/site";

export const metadata: Metadata = {
  title: "Asesoría 1 a 1 VÉRTICE INDIVIDUAL para tiendas de moda en Zaragoza y online",
  description: "Asesoría 1 a 1 para dueños de tiendas que quieren digitalizar su negocio con claridad, estrategia y humanidad. Diagnóstico, hoja de ruta, catálogo y seguimiento semanal.",
  alternates: { canonical: "/one-on-one-counseling" },
};

export default function OneToOne() {
  return (
    <>
      <JsonLd data={breadcrumb("Asesoría 1 a 1", "/one-on-one-counseling")} />
      <section className="section tight">
        <div className="container">
          <Reveal><Banner pic={media.banner.asesoria} kicker={aboutExtra.moreOneToOne} title={oneToOne.kicker} priority /></Reveal>
          <Reveal><p className="sub">{oneToOne.title}</p></Reveal>
          <div className="split">
            <Reveal>
              <h2 className="h-sm">{oneToOne.forTitle}</h2>
              <ul className="checks">{oneToOne.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="h-sm">{oneToOne.includesTitle}</h2>
              <ul className="checks">{oneToOne.includes.map((i) => <li key={i}>{i}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal className="center"><Link href="/contact" className="btn btn-primary">Reserva tu sesión</Link></Reveal>
        </div>
      </section>

      <section className="section tint" aria-labelledby="transformar">
        <div className="container narrow">
          <Reveal><h2 id="transformar">{aboutExtra.transform}</h2></Reveal>
          <Faq items={faqsOriginal} />
          <Reveal className="center"><Link href="/preguntas-frecuentes" className="more">Ver todas las preguntas frecuentes →</Link></Reveal>
        </div>
      </section>

      <FormBlock variant="one" />
    </>
  );
}
