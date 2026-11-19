"use client";
import { useEffect, useState } from "react";

/** Barra de reserva fija solo en móvil: aparece al salir del hero y se oculta en la sección de contacto. */
export default function StickyCta() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const hero = document.getElementById("inicio");
    const contact = document.getElementById("contacto");
    if (!hero || !contact || !("IntersectionObserver" in window)) return;
    let heroOut = false, contactIn = false;
    const update = () => setShow(heroOut && !contactIn);
    const a = new IntersectionObserver(([e]) => { heroOut = !e.isIntersecting; update(); });
    const b = new IntersectionObserver(([e]) => { contactIn = e.isIntersecting; update(); });
    a.observe(hero); b.observe(contact);
    return () => { a.disconnect(); b.disconnect(); };
  }, []);
  return (
    <div className={`sticky-cta ${show ? "show" : ""}`} aria-hidden={!show}>
      <a href="#contacto" className="btn btn-primary" tabIndex={show ? 0 : -1}>Reserva tu sesión</a>
    </div>
  );
}
