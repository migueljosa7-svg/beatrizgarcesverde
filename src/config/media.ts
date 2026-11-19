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
  /* Fotos reales de Beatriz (su web original) */
  exterior2: {
    src: "/images/bea-exterior-2.webp",
    alt: "Beatriz Garcés Verde sonriendo con gafas amarillas y camiseta verde al aire libre",
    width: 900, height: 1578, enabled: true,
  },
  exterior3: {
    src: "/images/bea-exterior-3.webp",
    alt: "Beatriz Garcés Verde paseando con un carrito doble, con gafas amarillas y camiseta verde",
    width: 900, height: 1575, enabled: true,
  },
  /* Pilares (orden de la web original) */
  pilar1: { src: "/images/tienda-fisica.webp", alt: "Diagnóstico y dirección estratégica: tienda de moda y complementos con estanterías blancas", width: 1600, height: 900, enabled: true },
  pilar2: { src: "/images/pilar-2-implementacion.webp", alt: "Implementación práctica y acompañamiento: equipo trabajando con cuadernos y tablet sobre una mesa", width: 1200, height: 800, enabled: true },
  pilar3: { src: "/images/pilar-3-consolidacion.webp", alt: "Consolidación y crecimiento sostenible: reunión de asesoría en una oficina luminosa", width: 1200, height: 800, enabled: true },
  /* Claridad estratégica: una foto por dimensión */
  claridad: [
    { src: "/images/claridad-negocio.webp", alt: "Perchero con ropa en una tienda: tu negocio físico y la esencia de tu marca", width: 1200, height: 800, enabled: true },
    { src: "/images/claridad-cliente.webp", alt: "Conversación con una clienta: entender a tu cliente ideal", width: 1200, height: 800, enabled: true },
    { src: "/images/claridad-bloqueos.webp", alt: "Persona abrumada ante el ordenador: los bloqueos ante la digitalización", width: 1200, height: 800, enabled: true },
  ],
  /* Acompañamiento paso a paso: una foto por etapa */
  acompanamiento: [
    { src: "/images/acompanamiento-1.webp", alt: "Estantería de tienda de moda ordenada: configuración y primer orden digital", width: 1200, height: 1800, enabled: true },
    { src: "/images/acompanamiento-2.webp", alt: "Ropa colgada en una barra: revisión estratégica de textos y catálogo", width: 1200, height: 1800, enabled: true },
    { src: "/images/acompanamiento-3.webp", alt: "Dos personas revisando un portátil: seguimiento semanal y micro-objetivos", width: 1200, height: 800, enabled: true },
  ],
  /* Banners de cabecera de cada bloque (de su web original) */
  banner: {
    claridad: { src: "/images/banner-claridad.webp", alt: "Mujer pensativa sosteniendo un café: claridad estratégica desde el primer día", width: 1600, height: 900 },
    asesoria: { src: "/images/banner-asesoria.webp", alt: "Pareja en conversación cercana: asesoría uno a uno con humanidad", width: 1600, height: 900 },
    acompanamiento: { src: "/images/banner-acompanamiento.webp", alt: "Sala de conferencias con público: acompañamiento paso a paso", width: 1600, height: 916 },
    contacto: { src: "/images/banner-contacto.webp", alt: "Persona sonriente en una conversación: ponte en contacto conmigo", width: 1600, height: 900 },
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
