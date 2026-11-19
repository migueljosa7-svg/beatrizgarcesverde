import { P } from "@/components/Media";

export default function Faq({ items }: { items: { q: string; a: string[] }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}><summary><h3>{f.q}</h3></summary><div className="ans"><P items={f.a} /></div></details>
      ))}
    </div>
  );
}
