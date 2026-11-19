import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import { CardImg, P } from "@/components/Media";
import { media } from "@/config/media";
import { site, hero, pains, phases, journey, story, pillars } from "@/config/site";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section id="inicio" className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1>{hero.h1}</h1>
            <p className="lead">{hero.lead}</p>
            <p className="question">{hero.question}</p>
            <ul className="ticks">{hero.bullets.map((b) => <li key={b}>{b}</li>)}</ul>
            <div className="hero-actions">
              <Link href={site.bookingHref} className="btn btn-primary">Reserva tu sesión</Link>
              <a href="#como-te-acompano" className="btn btn-ghost">Cómo trabajo</a>
            </div>
          </div>
          <div className="hero-media">
            <div className="photo-frame">
              <Image src={media.hero.src} alt={media.hero.alt} width={media.hero.width} height={media.hero.height}
                priority fetchPriority="high" loading="eager" sizes="(max-width: 860px) 80vw, 480px" />
            </div>
            <div className="badge"><strong>Online y presencial</strong><span>Zaragoza, España</span></div>
          </div>
        </div>
        <div className="container facts" aria-label="Datos clave">
          {hero.facts.map((f) => <div key={f.k}><strong>{f.k}</strong><span>{f.v}</span></div>)}
        </div>
      </section>

      {/* BLOQUEOS */}
      <section className="section tint" aria-labelledby="bloqueo">
        <div className="container">
          <Reveal><h2 id="bloqueo">{pains.title}</h2><p className="sub">{pains.sub}</p></Reveal>
          <div className="grid4">
            {pains.items.map((p, i) => (
              <Reveal key={p.t} delay={i * 80} className="card">
                <span className="num" aria-hidden="true">0{i + 1}</span>
                <h3>{p.t}</h3><P items={p.d} />
              </Reveal>
            ))}
          </div>
          <Reveal className="callout"><h3>{pains.alone.t}</h3><p>{pains.alone.d}</p></Reveal>
        </div>
      </section>

      {/* FASES + RECORRIDO */}
      <section id="como-te-acompano" className="section" aria-labelledby="metodo">
        <div className="container">
          <Reveal><h2 id="metodo">{phases.title}</h2><p className="sub">{phases.sub}</p></Reveal>
          <div className="grid3">
            {phases.items.map((p, i) => (
              <Reveal key={p.n} delay={i * 100} className="card phase">
                <span className="num" aria-hidden="true">{p.n}</span>
                <h3>{p.t}</h3><P items={p.d} />
                <Link className="more" href={p.href}>{p.cta} →</Link>
              </Reveal>
            ))}
          </div>
          <Reveal className="center"><Link href={site.bookingHref} className="btn btn-primary">{phases.cta}</Link></Reveal>

          <Reveal className="journey-wrap">
            <h3 className="center-h">{journey.title}</h3>
            <ol className="journey">
              {journey.steps.map((s, i) => (
                <li key={s.t}><span className="dot">{i + 1}</span><strong>{s.t}</strong><p>{s.d}</p></li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* MI HISTORIA (resumen, como en su inicio) */}
      <section className="section tint" aria-labelledby="historia">
        <div className="container">
          <Reveal><p className="eyebrow center-t">{story.kicker}</p><h2 id="historia">{story.homeTitle}</h2></Reveal>
          <div className="about">
            <Reveal className="about-photos one">
              <div className="about-photo p0">
                <Image src={media.historia.src} alt={media.historia.alt} width={media.historia.width} height={media.historia.height} loading="lazy" sizes="(max-width: 860px) 70vw, 380px" />
              </div>
            </Reveal>
            <Reveal className="about-copy">
              <p className="role">{story.role}</p>
              <P items={story.intro} />
              <Link href="/about" className="btn btn-primary">Toda Mi Historia</Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3 PILARES */}
      <section className="section" aria-labelledby="pilares-h">
        <div className="container">
          <Reveal><h2 id="pilares-h">{pillars.title}</h2><p className="sub">{pillars.sub}</p></Reveal>
          <div className="grid3">
            {pillars.items.map((p, i) => (
              <Reveal key={p.t} delay={i * 100} className="card phase has-img">
                <CardImg pic={[media.pilar1, media.pilar2, media.pilar3][i]} />
                <div className="card-body">
                  <span className="num" aria-hidden="true">0{i + 1}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                  <Link className="more" href={p.href}>{p.cta} →</Link>
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
