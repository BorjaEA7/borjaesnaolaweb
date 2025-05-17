
export type NavItem = {
  label: string;
  href: string;
  disabled?: boolean;
};

export type SiteConfig = {
  name: string;
  description: string;
  navItems: NavItem[];
};

export const siteConfig: SiteConfig = {
  name: "Zaguan",
  description: "Estudio de diseño gráfico y desarrollo web.",
  navItems: [
    { label: "Proyectos", href: "/#portfolio" },
    { label: "Servicios", href: "/#services" }, 
    { label: "Sobre mí", href: "/#about-me" },
    { label: "Contacto", href: "/#contact" }, 
  ],
};
