"use client";
import { useState } from "react";

const links = [
  { href: "#quien-es-beatriz", label: "Sobre mí" },
  { href: "#como-te-acompano", label: "Método" },
  { href: "#servicios", label: "Servicios" },
  { href: "#preguntas-frecuentes", label: "Preguntas" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <div className="container header-in">
        <a href="#inicio" className="logo" aria-label="Beatriz Garcés Verde, inicio">
          Beatriz Garcés <span>Verde</span>
        </a>
        <nav id="nav" className={`nav ${open ? "open" : ""}`} aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a href="#contacto" className="btn btn-primary nav-cta" onClick={() => setOpen(false)}>Reservar cita</a>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
