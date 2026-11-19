import Link from "next/link";
import Reveal from "@/components/Reveal";
import { closing } from "@/config/site";

/** Bloque "Empieza con claridad" (aparece al final de las páginas, como en la web original). */
export default function Cta() {
  return (
    <section className="section cta" aria-labelledby="empieza">
      <div className="container narrow cta-in">
        <Reveal>
          <h2 id="empieza">{closing.title}</h2>
          <p className="sub light">{closing.lead[0]} {closing.lead[1]}</p>
          <h3 className="ready">{closing.ready}</h3>
          <ul className="ticks light">{closing.points.map((p) => <li key={p}>{p}</li>)}</ul>
          <div className="center"><Link href="/contact" className="btn btn-light">Quiero Empezar</Link></div>
        </Reveal>
      </div>
    </section>
  );
}
