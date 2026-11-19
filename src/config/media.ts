/**
 * Rutas centralizadas de imágenes. Todas viven en /public/images.
 * Para cambiar una foto: reemplaza el archivo manteniendo el nombre
 * (o actualiza `src` aquí). Ajusta width/height a las dimensiones reales.
 */
export type MediaItem = { src: string; alt: string; width: number; height: number };

export const media = {
  hero: {
    src: "/images/hero-principal.webp",
    alt: "Beatriz Garcés Verde, asesora en digitalización para tiendas de moda en Zaragoza, sonriendo con vestido verde",
    width: 601,
    height: 819,
  },
  about: {
    src: "/images/sobre-mi.webp",
    alt: "Beatriz Garcés Verde sentada con gafas, asesora de digitalización y psicología del cliente",
    width: 599,
    height: 818,
  },
  /* Placeholders: suelta estos archivos en /public/images y se activan (ver `enabled`). */
  consulta1: {
    src: "/images/consulta-1.webp",
    alt: "Sesión de asesoría 1 a 1 con una dueña de tienda de moda, revisando su catálogo digital",
    width: 1200,
    height: 800,
    enabled: false,
  },
  consulta2: {
    src: "/images/consulta-2.webp",
    alt: "Beatriz Garcés Verde acompañando a una clienta en su estrategia digital",
    width: 1200,
    height: 800,
    enabled: false,
  },
  tienda: {
    src: "/images/tienda-fisica.webp",
    alt: "Tienda de moda física en Zaragoza preparada para vender también online",
    width: 1200,
    height: 800,
    enabled: false,
  },
  og: "/images/og-image.jpg",
} as const;
