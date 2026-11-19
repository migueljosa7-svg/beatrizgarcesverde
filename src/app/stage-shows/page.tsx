import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import JsonLd from "@/components/JsonLd";
import { Banner, CardImg } from "@/components/Media";
import { breadcrumb } from "@/lib/schema";
import { media } from "@/config/media";
import { support } from "@/config/site";

export const metadata: Metadata = {
  title: "Acompañamiento práctico paso a paso para digitalizar tu tienda",
  description: "Tu digitalización empieza a tomar forma, sin caos y sin saturarte: configuración, revisión de textos y catálogo, y seguimiento semanal con micro-objetivos.",
  alternates: { canonical: "/stage-shows" },
};

export default function Support() {
  return (
    <>
      <JsonLd data={breadcrumb("Acompañamiento", "/stage-shows")} />
      <section className="section tight">
        <div className="container">
          <Reveal><Banner pic={media.banner.acompanamiento} title={support.title} priority /></Reveal>
          <Reveal className="narrow-text"><p className="sub">{support.sub}</p><p>{support.intro}</p></Reveal>
          <div className="grid3">
            {support.items.map((s, i) => (
              <Reveal key={s.t} delay={i * 100} className="card has-img">
                <CardImg pic={media.acompanamiento[i]} />
                <div className="card-body"><span className="num" aria-hidden="true">0{i + 1}</span><h2 className="h-card">{s.t}</h2><p>{s.d}</p></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
