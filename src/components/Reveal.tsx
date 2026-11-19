"use client";
import { useEffect, useRef, type ReactNode, type ElementType } from "react";

/** Fade-in-up al entrar en viewport. Solo transform/opacity; respeta prefers-reduced-motion vía CSS. */
export default function Reveal({ children, delay = 0, as: Tag = "div", className = "" }: {
  children: ReactNode; delay?: number; as?: ElementType; className?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { el.classList.add("in"); return; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); }
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <Tag ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </Tag>
  );
}
