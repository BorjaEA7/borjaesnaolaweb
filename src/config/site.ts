
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
    // { label: "Home", href: "/" }, // Zaguanestudio.com uses logo for home link
    { label: "Proyectos", href: "/#portfolio" },
    { label: "Servicios", href: "/servicios" }, 
    { label: "Nosotros", href: "/nosotros", disabled: true }, // Mark as disabled until page is created
    { label: "Blog", href: "/blog", disabled: true }, // Mark as disabled until page is created
    { label: "Contacto", href: "/contacto", disabled: true }, // Mark as disabled until page is created
  ],
};
