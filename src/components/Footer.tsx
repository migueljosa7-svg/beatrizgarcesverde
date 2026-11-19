import Image from "next/image";
import Link from "next/link";
import { media } from "@/config/media";
import { site, nav } from "@/config/site";

export default function Footer() {
  const links = nav.flatMap((n) => ("children" in n && n.children ? n.children : [n as { label: string; href: string }]));
  return (
    <footer className="footer">
      <div className="container">
        <Image className="foot-logo" src={media.logo.src} alt={media.logo.alt} width={media.logo.width} height={media.logo.height} loading="lazy" />
        <nav className="foot-nav" aria-label="Pie de página">
          {links.map((l) => <Link key={l.href} href={l.href}>{l.label}</Link>)}
        </nav>
        <p>Email: <a href={`mailto:${site.email}`}>{site.email}</a> · Atención online y presencial ({site.city}, España)</p>
        <p>© 2026 {site.name}</p>
      </div>
    </footer>
  );
}
