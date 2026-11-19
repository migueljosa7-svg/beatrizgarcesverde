"use client";
import { useState } from "react";
import { site } from "@/config/site";

// Sustituye TU_ID_AQUI por el ID de tu formulario en https://formspree.io
const FORMSPREE_ENDPOINT = "https://formspree.io/f/TU_ID_AQUI";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
      if (!res.ok) throw new Error(String(res.status));
      form.reset();
      setStatus("ok");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="form" aria-busy={status === "sending"}>
      <input type="hidden" name="_subject" value="Reserva de sesión VÉRTICE" />
      <div className="row2">
        <label>Nombre *<input name="nombre" required autoComplete="given-name" /></label>
        <label>Apellidos<input name="apellidos" autoComplete="family-name" /></label>
      </div>
      <label>Email *<input name="email" type="email" required autoComplete="email" inputMode="email" /></label>
      <label>Móvil *<input name="movil" type="tel" required autoComplete="tel" inputMode="tel" /></label>
      <label>Mensaje *<textarea name="mensaje" rows={4} required /></label>
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Enviando..." : "Enviar"}
      </button>
      <div role="status" aria-live="polite">
        {status === "ok" && <p className="ok">¡Mensaje enviado! Te respondo personalmente lo antes posible.</p>}
        {status === "error" && (
          <p className="err">
            No se ha podido enviar. Inténtalo de nuevo o escribe directamente a{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        )}
      </div>
    </form>
  );
}
