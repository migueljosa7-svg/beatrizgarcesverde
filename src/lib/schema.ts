import { site, phases, oneToOne, story, faqs } from "@/config/site";
import { media } from "@/config/media";

/** Grafo global (en el layout): WebSite + Person + ProfessionalService. */
export const globalGraph = {
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
      description: oneToOne.title, slogan: story.aboutTagline,
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
  ],
};

export const faqSchema = (items: { q: string; a: string[] }[] = faqs) => ({
  "@context": "https://schema.org", "@type": "FAQPage",
  mainEntity: items.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.join(" ") } })),
});

export const breadcrumb = (name: string, path: string) => ({
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Inicio", item: site.url },
    { "@type": "ListItem", position: 2, name, item: `${site.url}${path}` },
  ],
});
