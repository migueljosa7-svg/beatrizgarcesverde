import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import FormBlock from "@/components/FormBlock";
import JsonLd from "@/components/JsonLd";
import { breadcrumb } from "@/lib/schema";
import { contact } from "@/config/site";

export const metadata: Metadata = {
  title: "Contacto y reserva de sesión con Beatriz Garcés Verde",
  description: "Escríbeme y te responderé personalmente. Atención online y presencial en Zaragoza (España). Reserva tu sesión de asesoría para digitalizar tu tienda.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumb("Contacto", "/contact")} />
      <PageHero kicker={contact.kicker} title="Contacto" sub="Reserva tu sesión: completa el formulario y te respondo personalmente." />
      <FormBlock variant="contact" />
    </>
  );
}
