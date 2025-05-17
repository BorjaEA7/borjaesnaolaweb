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
  description: "A modern portfolio showcasing creative works.",
  navItems: [
    { label: "Home", href: "/" },
    { label: "Portfolio", href: "/#portfolio" },
    { label: "About", href: "/about", disabled: true }, // Placeholder, can be enabled later
    { label: "Contact", href: "/contact", disabled: true }, // Placeholder
  ],
};
