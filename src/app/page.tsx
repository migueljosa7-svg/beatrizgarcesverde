import Image from "next/image";
import Header from "@/components/Header";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { media } from "@/config/media";
import { site, pains, phases, audience, included, faqs } from "@/config/site";

const gallery = [media.consulta1, media.consulta2, media.tienda].filter((m) => m.enabled);

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      inLanguage: "es-ES",
      publisher: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      url: site.url,
      image: `${site.url}${media.hero.src}`,
      email: site.email,
      jobTitle: "Asesora en Digitalización y Psicología del Cliente",
      description: site.description,
      address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
      knowsAbout: ["Digitalización de tiendas de moda", "Psicomarketing", "Catálogo digital", "Ventas online", "Transformación digital del comercio local"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${site.url}/#service`,
      name: `${site.name} · Asesoría ${site.brand}`,
      url: site.url,
      image: `${site.url}${media.og}`,
      email: site.email,
      founder: { "@id": `${site.url}/#person` },
      description: "Asesoría 1 a 1 para dueños de tiendas de moda que quieren digitalizar su negocio con claridad, estrategia y acompañamiento humano.",
      address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.country },
      areaServed: [{ "@type": "City", name: site.city }, { "@type": "Country", name: "España" }],
      availableLanguage: "es",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Servicios de digitalización",
        itemListElement: phases.map((p) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: p.t, description: p.d } })),
      },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ],
};

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
              <p className="eyebrow">Asesora de digitalización · Zaragoza y online</p>
              <h1>Digitaliza tu tienda de moda en Zaragoza y online, sin perder tu esencia</h1>
              <p className="lead">Más ventas online sin agotarte con herramientas complejas: paso a paso y con acompañamiento humano.</p>
              <ul className="ticks">
                <li>Presencia online profesional sin frustración</li>
                <li>Catálogo digital que realmente vende</li>
              </ul>
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
        </section>

        {/* PAINS */}
        <section className="section tint" aria-labelledby="bloqueo">
          <div className="container">
            <Reveal><h2 id="bloqueo">¿Te sientes bloqueado con la digitalización de tu tienda?</h2>
              <p className="sub">No es falta de capacidad: es falta de claridad, tiempo y acompañamiento.</p></Reveal>
            <div className="grid4">
              {pains.map((p, i) => (
                <Reveal key={p.t} delay={i * 80} className="card">
                  <h3>{p.t}</h3><p>{p.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="quien-es-beatriz" className="section" aria-labelledby="quien">
          <div className="container about">
            <Reveal className="about-photo">
              <Image src={media.about.src} alt={media.about.alt} width={media.about.width} height={media.about.height}
                loading="lazy" sizes="(max-width: 860px) 80vw, 420px" />
            </Reveal>
            <Reveal className="about-copy">
              <h2 id="quien">¿Quién es Beatriz Garcés Verde?</h2>
              <p><strong>Beatriz Garcés Verde es asesora en digitalización y psicología del cliente en Zaragoza.</strong> Nació entre zapatos, clientas y cuadernos llenos de ideas, y conoce de primera mano la presión de digitalizar una tienda física sin saber cómo.</p>
              <p>Su camino combina experiencia en banca ayudando a negocios locales, digitalización real de tiendas de moda y estética, y formación en psicomarketing. De ahí nace <strong>{site.brand}</strong>: estrategia, psicología y acompañamiento humano.</p>
              <h3>Para quién es</h3>
              <ul className="ticks">{audience.map((a) => <li key={a}>{a}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        {/* METHOD */}
        <section id="como-te-acompano" className="section tint" aria-labelledby="metodo">
          <div className="container">
            <Reveal><h2 id="metodo">¿Cómo funciona una sesión y el método {site.brand}?</h2>
              <p className="sub">Tres fases que ordenan tu digitalización sin caos y sin saturarte.</p></Reveal>
            <div className="grid3">
              {phases.map((p, i) => (
                <Reveal key={p.n} delay={i * 100} className="card phase">
                  <span className="num" aria-hidden="true">{p.n}</span>
                  <h3>{p.t}</h3><p>{p.d}</p>
                </Reveal>
              ))}
            </div>
            <Reveal className="center"><a href={site.bookingHref} className="btn btn-primary">Quiero agendar mi sesión</a></Reveal>
          </div>
        </section>

        {/* SERVICES */}
        <section id="servicios" className="section" aria-labelledby="servicios-h">
          <div className="container split">
            <Reveal>
              <h2 id="servicios-h">¿Qué incluye la asesoría 1 a 1?</h2>
              <p className="sub left">Un programa personalizado, online o presencial en Zaragoza, con una dedicación de 1 a 2 horas semanales.</p>
            </Reveal>
            <Reveal delay={100}>
              <ul className="checks">{included.map((i) => <li key={i}>{i}</li>)}</ul>
            </Reveal>
          </div>
        </section>

        {/* GALLERY: solo se renderiza si hay al menos una foto activada en media.ts */}
        {gallery.length > 0 && (
          <section id="el-espacio" className="section" aria-labelledby="espacio">
            <div className="container">
              <Reveal><h2 id="espacio">El espacio y la consulta</h2>
                <p className="sub">Así es trabajar con Beatriz, online o en persona en Zaragoza.</p></Reveal>
              <div className="gallery">
                {gallery.map((m, i) => (
                  <Reveal key={m.src} as="figure" delay={i * 100}>
                    <Image src={m.src} alt={m.alt} width={m.width} height={m.height} loading="lazy" sizes="(max-width: 860px) 100vw, 360px" />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section id="preguntas-frecuentes" className="section tint" aria-labelledby="faq">
          <div className="container narrow">
            <Reveal><h2 id="faq">Preguntas frecuentes sobre digitalizar tu tienda</h2></Reveal>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary><h3>{f.q}</h3></summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contacto" className="section cta" aria-labelledby="contacto-h">
          <div className="container narrow">
            <Reveal>
              <h2 id="contacto-h">¿Cómo reservo mi sesión con Beatriz?</h2>
              <p className="sub light">Completa el formulario y te respondo personalmente. Digitalizar tu tienda no tiene por qué sentirse abrumador.</p>
            </Reveal>
            <Reveal delay={100} className="form-wrap"><ContactForm /></Reveal>
            <p className="contact-line">Atención online y presencial (Zaragoza, España) · <a href={`mailto:${site.email}`}>{site.email}</a></p>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container">© 2026 {site.name} · {site.city}, España</div>
      </footer>
    </>
  );
}
