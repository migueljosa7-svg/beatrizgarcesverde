import Image from "next/image";
import Reveal from "@/components/Reveal";
import ContactForm from "@/components/ContactForm";
import { media } from "@/config/media";
import { site, closing, contact } from "@/config/site";

/** Bloque oscuro con formulario. variant "contact" = página Contacto; "one" = final de la asesoría 1 a 1. */
export default function FormBlock({ variant }: { variant: "contact" | "one" }) {
  return (
    <section id="formulario" className="section cta" aria-labelledby="form-h">
      <Image className="cta-bg" src={media.banner.contacto.src} alt="" width={media.banner.contacto.width} height={media.banner.contacto.height} loading="lazy" sizes="100vw" aria-hidden="true" />
      <div className="container narrow cta-in">
        <Reveal>
          {variant === "contact" ? (
            <>
              <h2 id="form-h">{contact.title}</h2>
              <div className="form-text">{contact.text.map((t) => <p key={t}>{t}</p>)}</div>
              <div className="info-cards">
                <div><strong>{contact.addressLabel}</strong><span>{contact.address}</span></div>
                <div><strong>{contact.emailLabel}</strong><a href={`mailto:${site.email}`}>{site.email}</a></div>
              </div>
              <h3 className="send">{contact.formTitle}</h3>
            </>
          ) : (
            <>
              <h2 id="form-h">{closing.formTitle}</h2>
              <p className="sub light">{closing.formSub}</p>
              <div className="form-text">{closing.formText.map((t) => <p key={t}>{t}</p>)}</div>
            </>
          )}
        </Reveal>
        <Reveal delay={100} className="form-wrap"><ContactForm /></Reveal>
        <p className="contact-line">Atención online y presencial (Zaragoza, España) · <a href={`mailto:${site.email}`}>{site.email}</a></p>
      </div>
    </section>
  );
}
