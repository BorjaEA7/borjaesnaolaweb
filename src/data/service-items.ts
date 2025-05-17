
export interface ServiceItem {
  id: string;
  title: string;
  imageUrl: string;
  imageHint: string;
  description: string;
  features: string[];
}

export const serviceItems: ServiceItem[] = [
  {
    id: "web-design",
    title: "Diseño Web Creativo",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "website layout",
    description: "Creamos sitios web visualmente atractivos y funcionales que capturan la esencia de tu marca y enganchan a tu audiencia.",
    features: [
      "Diseño UI/UX moderno",
      "Optimizado para móviles",
      "Enfocado en la conversión"
    ],
  },
  {
    id: "web-development",
    title: "Desarrollo Web Avanzado",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "code computer",
    description: "Transformamos diseños en sitios web robustos y escalables utilizando las últimas tecnologías para un rendimiento óptimo.",
    features: [
      "Desarrollo Full-Stack",
      "Integración CMS",
      "Soluciones E-commerce"
    ],
  },
  {
    id: "branding",
    title: "Identidad de Marca",
    imageUrl: "https://placehold.co/150x150.png",
    imageHint: "brand logo",
    description: "Construimos identidades de marca memorables que comunican tus valores y te diferencian en el mercado.",
    features: [
      "Diseño de Logotipo",
      "Manual de Marca",
      "Estrategia de Comunicación"
    ],
  },
];
