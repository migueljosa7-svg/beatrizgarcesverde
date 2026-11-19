import Reveal from "@/components/Reveal";

export default function PageHero({ kicker, title, sub, children }: { kicker?: string; title: string; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="page-hero">
      <div className="container">
        <Reveal>
          {kicker && <p className="eyebrow">{kicker}</p>}
          <h1>{title}</h1>
          {sub && <p className="lead">{sub}</p>}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
