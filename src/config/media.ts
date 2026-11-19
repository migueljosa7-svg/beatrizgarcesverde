/**
 * Rutas centralizadas de imágenes. Todas viven en /public/images.
 * Para cambiar una foto: reemplaza el archivo manteniendo el nombre
 * (o actualiza `src` aquí). Ajusta width/height a las dimensiones reales.
 */
export type MediaItem = { src: string; alt: string; width: number; height: number; enabled?: boolean };

export const media = {
  hero: {
    src: "/images/hero-principal.webp",
    alt: "Beatriz Garcés Verde, asesora en digitalización para tiendas de moda en Zaragoza, sonriendo con vestido verde",
    width: 601, height: 819, enabled: true,
  },
  about: {
    src: "/images/sobre-mi.webp",
    alt: "Beatriz Garcés Verde sentada con gafas, asesora de digitalización y psicología del cliente",
    width: 599, height: 818, enabled: true,
  },
  historia: {
    src: "/images/historia-bea.webp",
    alt: "Bea, Beatriz Garcés Verde, sonriendo al aire libre con gafas verdes y blusa fucsia",
    width: 800, height: 1071, enabled: true,
  },
  logo: {
    src: "/images/logo-vertice.webp",
    alt: "Logotipo del método VÉRTICE de Beatriz Garcés Verde",
    width: 378, height: 126, enabled: true,
  },
  tienda: {
    src: "/images/tienda-fisica.webp",
    alt: "Escaparate interior de una tienda de moda y complementos con botas, bolsos y bisutería en estanterías blancas",
    width: 1600, height: 900, enabled: true,
  },
  /* Placeholders: suelta el archivo en /public/images y pon enabled: true. */
  consulta1: {
    src: "/images/consulta-1.webp",
    alt: "Sesión de asesoría 1 a 1 con una dueña de tienda de moda, revisando su catálogo digital",
    width: 1200, height: 800, enabled: false,
  },
  consulta2: {
    src: "/images/consulta-2.webp",
    alt: "Beatriz Garcés Verde acompañando a una clienta en su estrategia digital",
    width: 1200, height: 800, enabled: false,
  },
  og: "/images/og-image.jpg",
} as const;

/**
 * Vídeo (YouTube). El único vídeo que había en la web antigua era el
 * "Video Placeholder" de Elementor (XHOmBV4js_E): relleno de plantilla, no de Beatriz.
 * Cuando haya un vídeo real y público: pon su ID y enabled: true.
 */
export const video = {
  enabled: false,
  youtubeId: "",
  title: "Conoce a Beatriz Garcés Verde y el método VÉRTICE",
  fallbackHref: "#contacto",
};
