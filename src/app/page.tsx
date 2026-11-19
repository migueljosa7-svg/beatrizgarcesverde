import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import StickyCta from "@/components/StickyCta";
import VideoLite from "@/components/VideoLite";
import { media, video } from "@/config/media";
import {
  site, hero, pains, phases, journey, story, clarity, oneToOne, support, pillars, closing, faqs, contact, aboutExtra,
} from "@/config/site";

const gallery = [media.consulta1, media.consulta2].filter((m) => m.enabled);

type Pic = { src: string; alt: string; width: number; height: number };
/** Banner de cabecera (foto de fondo de cada bloque en la web original) con título superpuesto. */
const Banner = ({ pic, kicker, title }: { pic: Pic; kicker?: string; title: string }) => (
  <div className="banner">
    <Image src={pic.src} alt={pic.alt} width={pic.width} height={pic.height} loading="lazy" sizes="(max-width: 1140px) 100vw, 1100px" />
    <div className="banner-txt">{kicker && <p className="eyebrow">{kicker}</p>}<p className="banner-t">{title}</p></div>
  </div>
);
const CardImg = ({ pic }: { pic: Pic }) => (
  <div className="card-img"><Image src={pic.src} alt={pic.alt} width={pic.width} height={pic.height} loading="lazy" sizes="(max-width: 860px) 100vw, 360px" /></div>
);
const showVideo = video.enabled && video.youtubeId;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebSite", "@id": `${site.url}/#website`, url: site.url, name: site.name, inLanguage: "es-ES", publisher: { "@id": `${site.url}/#person` } },
    {
      "@type": "Person", "@id": `${site.url}/#person`, name: site.name, alternateName: "Bea", url: site.url,
      image: `${site.url}${media.hero.src}`, email: site.email,
      jobTitle: "Asesora en Digitalización y Psicología del Cliente",
      description: story.aboutTagline,
      address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
      knowsAbout: ["Digitalización de tiendas de moda", "Psicomarketing", "Catálogo digital", "Ventas online", "Transformación digital del comercio local", "Psicología del cliente"],
      hasOccupation: { "@type": "Occupation", name: "Asesora en digitalización" },
    },
    {
      "@type": "ProfessionalService", "@id": `${site.url}/#service`, name: `${site.name} · Asesoría ${site.brand}`, url: site.url,
      image: `${site.url}${media.og}`, logo: `${site.url}${media.logo.src}`, email: site.email,
      founder: { "@id": `${site.url}/#person` },
      description: oneToOne.title,
      slogan: story.aboutTagline,
      address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
      areaServed: [{ "@type": "City", name: site.city }, { "@type": "Country", name: "España" }],
      availableLanguage: "es",
      audience: oneToOne.forWho.map((a) => ({ "@type": "Audience", audienceType: a })),
      hasOfferCatalog: {
        "@type": "OfferCatalog", name: "Programa VÉRTICE INDIVIDUAL",
        itemListElement: [
          ...phases.items.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p.t, description: p.d.join(" ") } })),
          ...oneToOne.includes.map((i) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: i } })),
        ],
      },
    },
    {
      "@type": "FAQPage", "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") } })),
    },
  ],
};

const P = ({ items }: { items: string[] }) => <>{items.map((t) => <p key={t}>{t}</p>)}</>;

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#contenido" className="skip">Ir al contenido</a>
      <Header />
      <main id="contenido">
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
                <a href={site.bookingHref} className="btn btn-primary">Reserva tu sesión</a>
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

        {/* PAINS */}
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

        {/* PHASES + JOURNEY */}
        <section id="como-te-acompano" className="section" aria-labelledby="metodo">
          <div className="container">
            <Reveal><h2 id="metodo">{phases.title}</h2><p className="sub">{phases.sub}</p></Reveal>
            <div className="grid3">
              {phases.items.map((p, i) => (
                <Reveal key={p.n} delay={i * 100} className="card phase">
                  <span className="num" aria-hidden="true">{p.n}</span>
                  <h3>{p.t}</h3><P items={p.d} />
                  <a className="more" href={p.href}>{p.cta} →</a>
                </Reveal>
              ))}
            </div>
            <Reveal className="center"><a href={site.bookingHref} className="btn btn-primary">{phases.cta}</a></Reveal>

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

        {/* STORY */}
        <section id="quien-es-beatriz" className="section tint" aria-labelledby="quien">
          <div className="container">
            <Reveal><p className="eyebrow center-t">{story.kicker}</p><h2 id="quien">{story.homeTitle}</h2></Reveal>
            <div className="about">
              <Reveal className="about-photos">
                {[media.historia, media.exterior2, media.exterior3].map((m, i) => (
                  <div key={m.src} className={`about-photo p${i}`}>
                    <Image src={m.src} alt={m.alt} width={m.width} height={m.height} loading="lazy" sizes="(max-width: 860px) 60vw, 260px" />
                  </div>
                ))}
              </Reveal>
              <Reveal className="about-copy">
                <p className="eyebrow">{aboutExtra.welcome}</p>
                <p className="role">{story.role}</p>
                <P items={story.intro} />
                <h3>{story.aboutTitle}</h3>
                <p><strong>{story.aboutSub}</strong></p>
                <P items={story.paras} />
              </Reveal>
            </div>
            <Reveal><h3 className="center-h" style={{ marginTop: 56 }}>{story.pathTitle}</h3></Reveal>
            <div className="grid3">
              {story.path.map((p, i) => (
                <Reveal key={p.n} delay={i * 100} className="card phase">
                  <span className="num" aria-hidden="true">{p.n}</span><h3>{p.t}</h3><p>{p.d}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="about-2">
              <Image src={media.about.src} alt={media.about.alt} width={media.about.width} height={media.about.height}
                loading="lazy" sizes="(max-width: 860px) 60vw, 260px" />
              <p>{story.aboutTagline}</p>
            </Reveal>
          </div>
        </section>

        {/* CLARITY */}
        <section id="claridad" className="section" aria-labelledby="claridad-h">
          <div className="container">
            <Reveal><Banner pic={media.banner.claridad} title={clarity.title} /></Reveal>
            <Reveal><h2 id="claridad-h">{clarity.title}</h2><p className="sub">{clarity.sub}</p></Reveal>
            <Reveal className="narrow-text"><P items={clarity.intro} />
              <h3>{clarity.whatTitle}</h3><p>{clarity.what}</p></Reveal>
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
                  <a className="more" href={site.bookingHref}>{d.cta} →</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ONE TO ONE */}
        <section id="servicios" className="section tint" aria-labelledby="servicios-h">
          <div className="container">
            <Reveal><Banner pic={media.banner.asesoria} kicker={oneToOne.kicker} title={aboutExtra.moreOneToOne} /></Reveal>
            <Reveal>
              <p className="eyebrow center-t">{oneToOne.kicker}</p>
              <h2 id="servicios-h">Asesoría 1 a 1: ¿qué incluye el proceso {site.brand}?</h2>
              <p className="sub">{oneToOne.title}</p>
            </Reveal>
            <div className="split">
              <Reveal>
                <h3>{oneToOne.forTitle}</h3>
                <ul className="checks">{oneToOne.forWho.map((i) => <li key={i}>{i}</li>)}</ul>
              </Reveal>
              <Reveal delay={100}>
                <h3>{oneToOne.includesTitle}</h3>
                <ul className="checks">{oneToOne.includes.map((i) => <li key={i}>{i}</li>)}</ul>
              </Reveal>
            </div>
            <Reveal className="center"><a href={site.bookingHref} className="btn btn-primary">Reserva tu sesión</a></Reveal>
          </div>
        </section>

        {/* SUPPORT */}
        <section id="acompanamiento" className="section" aria-labelledby="acomp-h">
          <div className="container">
            <Reveal><Banner pic={media.banner.acompanamiento} title={support.title} /></Reveal>
            <Reveal><h2 id="acomp-h">{support.title}</h2><p className="sub">{support.sub}</p>
              <p className="sub">{support.intro}</p></Reveal>
            <div className="grid3">
              {support.items.map((s, i) => (
                <Reveal key={s.t} delay={i * 100} className="card has-img">
                  <CardImg pic={media.acompanamiento[i]} />
                  <div className="card-body"><span className="num" aria-hidden="true">0{i + 1}</span><h3>{s.t}</h3><p>{s.d}</p></div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section id="pilares" className="section tint" aria-labelledby="pilares-h">
          <div className="container">
            <Reveal><h2 id="pilares-h">{pillars.title}</h2><p className="sub">{pillars.sub}</p></Reveal>
            <div className="grid3">
              {pillars.items.map((p, i) => (
                <Reveal key={p.t} delay={i * 100} className="card phase has-img">
                  <CardImg pic={[media.pilar1, media.pilar2, media.pilar3][i]} />
                  <div className="card-body">
                    <span className="num" aria-hidden="true">0{i + 1}</span>
                    <h3>{p.t}</h3><p>{p.d}</p>
                    <a className="more" href={site.bookingHref}>{p.cta} →</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* VIDEO: solo con un vídeo real y público (ver media.ts) */}
        {showVideo && (
          <section id="video" className="section" aria-labelledby="video-h">
            <div className="container narrow">
              <Reveal><h2 id="video-h">{video.title}</h2><VideoLite id={video.youtubeId} title={video.title} /></Reveal>
            </div>
          </section>
        )}

        {/* GALLERY: solo con fotos activadas en media.ts */}
        {gallery.length > 0 && (
          <section id="el-espacio" className="section" aria-labelledby="espacio">
            <div className="container">
              <Reveal><h2 id="espacio">El mundo de la tienda física</h2>
                <p className="sub">Digitalizar no es dejar de ser tú: es dar más fuerza a lo que ya haces bien.</p></Reveal>
              <div className="gallery">
                {gallery.map((m, i) => (
                  <Reveal key={m.src} as="figure" delay={i * 100}>
                    <Image src={m.src} alt={m.alt} width={m.width} height={m.height} loading="lazy" sizes="(max-width: 860px) 100vw, 1000px" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="preguntas-frecuentes" className="section tint" aria-labelledby="faq">
          <div className="container narrow">
            <Reveal><h2 id="faq">Preguntas frecuentes: ¿qué vas a transformar?</h2></Reveal>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}><summary><h3>{f.q}</h3></summary><div className="ans"><P items={f.a} /></div></details>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING + CONTACT */}
        <section id="contacto" className="section cta" aria-labelledby="contacto-h">
          <Image className="cta-bg" src={media.banner.contacto.src} alt="" width={media.banner.contacto.width} height={media.banner.contacto.height} loading="lazy" sizes="100vw" aria-hidden="true" />
          <div className="container narrow cta-in">
            <Reveal>
              <h2 id="empieza">{closing.title}</h2>
              <p className="sub light">{closing.lead[0]} {closing.lead[1]}</p>
              <h3 className="ready">{closing.ready}</h3>
              <ul className="ticks light">{closing.points.map((p) => <li key={p}>{p}</li>)}</ul>
              <h2 id="contacto-h" style={{ marginTop: 40 }}>{closing.formTitle}</h2>
              <p className="sub light">{closing.formSub}</p>
              <div className="form-text">{closing.formText.map((t) => <p key={t}>{t}</p>)}</div>
              <div className="contact-info">
                <p className="eyebrow">{contact.kicker}</p>
                <h3>{contact.title}</h3>
                {contact.text.map((t) => <p key={t}>{t}</p>)}
                <div className="info-cards">
                  <div><strong>{contact.addressLabel}</strong><span>{contact.address}</span></div>
                  <div><strong>{contact.emailLabel}</strong><a href={`mailto:${site.email}`}>{site.email}</a></div>
                </div>
                <h3 className="send">{contact.formTitle}</h3>
              </div>
            </Reveal>
            <Reveal delay={100} className="form-wrap"><ContactForm /></Reveal>
            <p className="contact-line">Atención online y presencial (Zaragoza, España) · <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">
          <Image className="foot-logo" src={media.logo.src} alt={media.logo.alt} width={media.logo.width} height={media.logo.height} loading="lazy" />
          <p>© 2026 {site.name} · {site.city}, España</p>
        </div>
      </footer>
      <StickyCta />
    </>
  );
}
