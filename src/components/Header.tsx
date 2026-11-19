"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/config/site";
import { media } from "@/config/media";

export default function Header() {
  const [open, setOpen] = useState(false);   // menú móvil
  const [sub, setSub] = useState(false);     // desplegable "Trabaja Conmigo"
  const ref = useRef<HTMLElement>(null);
  const path = usePathname();

  useEffect(() => { setOpen(false); setSub(false); }, [path]);
  useEffect(() => {
    const onDoc = (e: MouseEvent) => { if (ref.current && !ref.current.contains(e.target as Node)) setSub(false); };
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") { setSub(false); setOpen(false); } };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  const cur = (href: string) => (path === href ? "page" : undefined);

  return (
    <header className="header" ref={ref}>
      <div className="container header-in">
        <Link href="/" className="logo" aria-label="Beatriz Garcés Verde, inicio">
          <Image src={media.logo.src} alt="" width={media.logo.width} height={media.logo.height} priority className="logo-img" />
          <span className="logo-name">Beatriz Garcés <span>Verde</span></span>
        </Link>
        <nav id="nav" className={`nav ${open ? "open" : ""}`} aria-label="Principal">
          {nav.map((item) =>
            "children" in item && item.children ? (
              <div key={item.label}
                className={`dropdown ${sub ? "open" : ""} ${item.children.some((c) => c.href === path) ? "active" : ""}`}
                onMouseEnter={() => window.matchMedia("(hover: hover)").matches && setSub(true)}
                onMouseLeave={() => window.matchMedia("(hover: hover)").matches && setSub(false)}>
                <button type="button" className="dropdown-btn" aria-expanded={sub} aria-haspopup="true" onClick={() => setSub(!sub)}>
                  {item.label}
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M2 4.5l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <ul className="dropdown-menu">
                  {item.children.map((c) => (
                    <li key={c.href}><Link href={c.href} aria-current={cur(c.href)}>{c.label}</Link></li>
                  ))}
                </ul>
              </div>
            ) : (
              <Link key={item.label} href={item.href} aria-current={cur(item.href)}>{item.label}</Link>
            )
          )}
          <Link href="/contact" className="btn btn-primary nav-cta">Reservar Cita</Link>
        </nav>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={open ? "Cerrar menú" : "Abrir menú"} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
