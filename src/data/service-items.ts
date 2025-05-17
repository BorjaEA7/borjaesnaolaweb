
export interface LogoItem {
  id: string;
  url: string;
  alt: string;
  hint: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  extendedDescription: string;
  features: string[];
  logoGallery: LogoItem[];
}

export const serviceItems: ServiceItem[] = [
  {
    id: "web-design",
    title: "Diseño Web Creativo",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "website layout",
    description: "Creamos sitios web visualmente atractivos y funcionales que capturan la esencia de tu marca y enganchan a tu audiencia.",
    extendedDescription: "Nuestro enfoque en diseño web creativo va más allá de la estética. Nos sumergimos en la identidad de tu marca para crear experiencias digitales únicas y memorables. Cada proyecto es una oportunidad para innovar, combinando las últimas tendencias de diseño con una usabilidad impecable. Consideramos la arquitectura de la información, el flujo de usuario y la interacción para asegurar que cada visitante no solo encuentre lo que busca, sino que disfrute del proceso. El resultado es un sitio web que no solo luce bien, sino que también convierte visitantes en clientes.",
    features: [
      "Diseño UI/UX moderno y centrado en el usuario",
      "Optimizado para todos los dispositivos (responsive)",
      "Enfocado en la conversión y objetivos de negocio",
      "Prototipado interactivo y pruebas de usabilidad"
    ],
    logoGallery: [
      { id: "wd-logo-1", url: "https://placehold.co/200x200.png", alt: "Figma Logo", hint: "design tool" },
      { id: "wd-logo-2", url: "https://placehold.co/200x200.png", alt: "Adobe XD Logo", hint: "prototyping software" },
      { id: "wd-logo-3", url: "https://placehold.co/200x200.png", alt: "Sketch Logo", hint: "vector graphics" },
      { id: "wd-logo-4", url: "https://placehold.co/200x200.png", alt: "InVision Logo", hint: "collaboration platform" },
      { id: "wd-logo-5", url: "https://placehold.co/200x200.png", alt: "Canva Logo", hint: "graphic design" },
    ],
  },
  {
    id: "web-development",
    title: "Desarrollo Web Avanzado",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "code computer",
    description: "Transformamos diseños en sitios web robustos y escalables utilizando las últimas tecnologías para un rendimiento óptimo.",
    extendedDescription: "El desarrollo web avanzado es el núcleo de lo que hacemos. Utilizamos un stack tecnológico moderno y probado para construir sitios web rápidos, seguros y escalables. Desde aplicaciones web complejas hasta plataformas de e-commerce personalizadas, nuestro equipo de desarrolladores se especializa en convertir visiones en realidad digital. Nos enfocamos en código limpio, mejores prácticas de desarrollo y optimización de rendimiento para asegurar que tu sitio web no solo funcione perfectamente, sino que también ofrezca una experiencia de usuario superior y esté preparado para el futuro crecimiento.",
    features: [
      "Desarrollo Full-Stack (Frontend y Backend)",
      "Integración con APIs y sistemas de terceros",
      "Soluciones E-commerce personalizadas",
      "Optimización de rendimiento y seguridad"
    ],
    logoGallery: [
      { id: "dev-logo-1", url: "https://placehold.co/200x200.png", alt: "React Logo", hint: "javascript library" },
      { id: "dev-logo-2", url: "https://placehold.co/200x200.png", alt: "Next.js Logo", hint: "react framework" },
      { id: "dev-logo-3", url: "https://placehold.co/200x200.png", alt: "Node.js Logo", hint: "runtime environment" },
      { id: "dev-logo-4", url: "https://placehold.co/200x200.png", alt: "TypeScript Logo", hint: "typed javascript" },
      { id: "dev-logo-5", url: "https://placehold.co/200x200.png", alt: "GraphQL Logo", hint: "query language" },
      { id: "dev-logo-6", url: "https://placehold.co/200x200.png", alt: "Docker Logo", hint: "containerization platform" },
    ],
  },
  {
    id: "branding",
    title: "Identidad de Marca",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "brand logo",
    description: "Construimos identidades de marca memorables que comunican tus valores y te diferencian en el mercado.",
    extendedDescription: "Una identidad de marca sólida es fundamental para el éxito. Nuestro proceso de branding comienza con una inmersión profunda en tu negocio, tu audiencia y tu mercado. Desarrollamos estrategias de marca que resuenan y construimos identidades visuales cohesivas que incluyen diseño de logotipo, paletas de colores, tipografía y guías de estilo. Nuestro objetivo es crear una marca que no solo sea estéticamente agradable, sino que también cuente tu historia, conecte emocionalmente con tu público y establezca una presencia fuerte y duradera en la mente de tus clientes.",
    features: [
      "Diseño de Logotipo y Sistema Visual",
      "Desarrollo de Manual de Marca completo",
      "Estrategia de Comunicación y Tono de Voz",
      "Diseño de Materiales de Marketing Cohesivos"
    ],
    logoGallery: [
      { id: "brand-logo-1", url: "https://placehold.co/200x200.png", alt: "Adobe Illustrator Logo", hint: "vector software" },
      { id: "brand-logo-2", url: "https://placehold.co/200x200.png", alt: "Adobe Photoshop Logo", hint: "image editing" },
      { id: "brand-logo-3", url: "https://placehold.co/200x200.png", alt: "Brandfolder Logo", hint: "brand management" },
      { id: "brand-logo-4", url: "https://placehold.co/200x200.png", alt: "Milanote Logo", hint: "moodboard tool" },
    ],
  },
];
