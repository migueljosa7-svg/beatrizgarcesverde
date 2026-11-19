"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Barra de reserva fija solo en móvil: aparece tras hacer scroll y no se muestra en /contact. */
export default function StickyCta() {
  const [show, setShow] = useState(false);
  const path = usePathname();
  useEffect(() => {
    const on = () => setShow(window.scrollY > 520);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, [path]);
  const visible = show && path !== "/contact";
  return (
    <div className={`sticky-cta ${visible ? "show" : ""}`} aria-hidden={!visible}>
      <Link href="/contact" className="btn btn-primary" tabIndex={visible ? 0 : -1}>Reserva tu sesión</Link>
    </div>
  );
}
