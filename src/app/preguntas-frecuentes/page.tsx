import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import Cta from "@/components/Cta";
import Faq from "@/components/Faq";
import JsonLd from "@/components/JsonLd";
import { breadcrumb, faqSchema } from "@/lib/schema";
import { faqs } from "@/config/site";

export const metadata: Metadata = {
  title: "Preguntas frecuentes sobre digitalizar tu tienda de moda",
  description: "Respuestas claras: quién es Beatriz Garcés Verde, qué incluye la asesoría VÉRTICE, cuánto tiempo necesitas a la semana, si es online o presencial y cómo reservar.",
  alternates: { canonical: "/preguntas-frecuentes" },
};

export default function FaqPage() {
  return (
    <>
      <JsonLd data={breadcrumb("Preguntas frecuentes", "/preguntas-frecuentes")} />
      <JsonLd data={faqSchema(faqs)} />
      <PageHero kicker="— Resuelve tus dudas" title="Preguntas frecuentes sobre digitalizar tu tienda de moda"
        sub="Todo lo que suelen preguntar las dueñas de tiendas antes de empezar, con respuestas directas." />
      <section className="section tint tight">
        <div className="container narrow">
          <Faq items={faqs} />
          <Reveal className="center">
            <p>¿Tu duda no está aquí?</p>
            <Link href="/contact" className="btn btn-primary">Escríbeme</Link>
          </Reveal>
        </div>
      </section>
      <Cta />
    </>
  );
}
