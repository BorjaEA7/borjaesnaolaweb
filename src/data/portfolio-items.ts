
export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  hint?: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string; // Used for the card face
  imageHint?: string;
  heroImageUrl?: string; // Specific image for modal hero
  heroImageHint?: string;
  tags: string[];
  extendedDescription: string;
  services: string[]; // New: e.g., "Web Design", "Development"
  client: string; // New: e.g., "Kultiva 360"
  year: number; // New: e.g., 2023
  galleryImages: GalleryImage[];
  projectUrl?: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-platform",
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of a legacy e-commerce system, focusing on UX and performance.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "online store",
    heroImageUrl: "https://placehold.co/1200x600.png", // Horizontal hero
    heroImageHint: "ecommerce solution",
    tags: ["UI/UX", "Next.js", "E-commerce"],
    extendedDescription: "This project involved a comprehensive redesign and redevelopment of an outdated e-commerce platform. Our primary goals were to enhance the user experience, improve site performance, and modernize the overall design aesthetic.\n\nWe migrated the backend to a new headless CMS, providing greater flexibility and content management capabilities. The frontend was rebuilt using Next.js, leveraging server-side rendering and static site generation for optimal speed and SEO. Key features included a streamlined checkout process, personalized product recommendations, and an intuitive admin dashboard for managing inventory and orders.",
    services: ["Web Development", "UI/UX Design", "System Migration"],
    client: "Global Retail Inc.",
    year: 2023,
    galleryImages: [
      { id: "ecom-gallery-1", url: "https://placehold.co/800x600.png", alt: "E-commerce dashboard view", hint: "analytics dashboard" },
      { id: "ecom-gallery-2", url: "https://placehold.co/800x600.png", alt: "Product page detail", hint: "product display" },
      { id: "ecom-gallery-3", url: "https://placehold.co/800x600.png", alt: "Mobile responsive view", hint: "mobile shopping" },
      { id: "ecom-gallery-4", url: "https://placehold.co/800x600.png", alt: "Checkout process", hint: "online payment" },
    ],
    projectUrl: "#",
  },
  {
    id: "mobile-banking-app",
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with P2P payments and tracking.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "mobile finance",
    heroImageUrl: "https://placehold.co/1200x600.png",
    heroImageHint: "finance app",
    tags: ["Mobile App", "Fintech", "React Native"],
    extendedDescription: "We designed and developed a state-of-the-art mobile banking application aimed at providing users with a seamless and secure financial management experience.\n\nBuilt using React Native for cross-platform compatibility, the app features robust security measures, including biometric authentication and end-to-end encryption. Key functionalities include peer-to-peer (P2P) payments, comprehensive bill pay options, real-time transaction alerts, and personalized financial tracking tools with insightful analytics.",
    services: ["Mobile App Development", "Security Implementation", "UX Research"],
    client: "SecureBank Corp.",
    year: 2024,
    galleryImages: [
      { id: "bank-gallery-1", url: "https://placehold.co/800x600.png", alt: "App login screen", hint: "secure login" },
      { id: "bank-gallery-2", url: "https://placehold.co/800x600.png", alt: "Transaction history", hint: "financial data" },
      { id: "bank-gallery-3", url: "https://placehold.co/800x600.png", alt: "P2P payment interface", hint: "money transfer" },
    ],
  },
  {
    id: "saas-dashboard-uikit",
    title: "SaaS Dashboard UI Kit",
    description: "Comprehensive UI kit for a SaaS product, streamlining development with diverse components.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "data interface",
    heroImageUrl: "https://placehold.co/1200x600.png",
    heroImageHint: "dashboard components",
    tags: ["UI Kit", "SaaS", "Design System"],
    extendedDescription: "To accelerate development and maintain design consistency for a growing SaaS product, we created an extensive UI kit.\n\nThis kit includes a wide array of reusable components, from basic form elements and buttons to complex data tables and interactive charts. Designed in Figma and implemented as a library of React components, the UI kit features theming capabilities, accessibility considerations, and detailed documentation to help developers build new features quickly and efficiently, ensuring a cohesive user experience across the platform.",
    services: ["UI Design", "Component Library", "Figma Design"],
    client: "Innovatech Solutions",
    year: 2022,
    galleryImages: [
      { id: "saas-gallery-1", url: "https://placehold.co/800x600.png", alt: "Component showcase", hint: "ui elements" },
      { id: "saas-gallery-2", url: "https://placehold.co/800x600.png", alt: "Chart examples", hint: "data visualization" },
      { id: "saas-gallery-3", url: "https://placehold.co/800x600.png", alt: "Dark mode theme", hint: "theme options" },
    ],
  },
  {
    id: "branding-startup-co",
    title: "Branding for Startup Co.",
    description: "Full brand identity, including logo, color palette, and marketing materials for a tech startup.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "company logo",
    heroImageUrl: "https://placehold.co/1200x600.png",
    heroImageHint: "brand identity",
    tags: ["Branding", "Graphic Design"],
    extendedDescription: "We partnered with an emerging tech startup to develop their complete brand identity from the ground up.\n\nThis involved in-depth market research and collaborative workshops to define the brand's core values and messaging. The deliverables included a modern and memorable logo, a versatile color palette, carefully selected typography, and a suite of marketing materials such as business cards, presentation templates, and social media assets. The new branding positions the startup излучающими innovation and trustworthiness in a competitive market.",
    services: ["Logo Design", "Brand Strategy", "Marketing Collateral"],
    client: "TechSpark Ltd.",
    year: 2023,
    galleryImages: [
      { id: "brand-gallery-1", url: "https://placehold.co/800x600.png", alt: "Logo variations", hint: "logo design" },
      { id: "brand-gallery-2", url: "https://placehold.co/800x600.png", alt: "Stationery design", hint: "business cards" },
      { id: "brand-gallery-3", url: "https://placehold.co/800x600.png", alt: "Style guide snippet", hint: "brand guidelines" },
    ],
  },
   {
    id: "interactive-art-installation",
    title: "Interactive Art Installation",
    description: "Digital art installation using projection mapping and sensor technology.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "modern art",
    heroImageUrl: "https://placehold.co/1200x600.png",
    heroImageHint: "digital installation",
    tags: ["Creative Tech", "Art", "Interactive"],
    extendedDescription: "This project pushed the boundaries of creative technology with an interactive digital art installation for a public gallery.\n\nWe utilized projection mapping techniques to transform a physical space into a dynamic canvas, combined with sensor technology that allowed visitors to influence the visuals and soundscapes in real-time. The installation aimed to create an immersive and engaging experience, exploring themes of connection and digital interaction. The technical setup involved custom software development and careful calibration of hardware components.",
    services: ["Projection Mapping", "Sensor Integration", "Software Development"],
    client: "City Art Gallery",
    year: 2024,
    galleryImages: [
      { id: "art-gallery-1", url: "https://placehold.co/800x600.png", alt: "Installation view", hint: "gallery space" },
      { id: "art-gallery-2", url: "https://placehold.co/800x600.png", alt: "Close-up of projection", hint: "light projection" },
      { id: "art-gallery-3", url: "https://placehold.co/800x600.png", alt: "Audience interaction", hint: "public engagement" },
    ],
    projectUrl: "#",
  },
  {
    id: "non-profit-website",
    title: "Non-Profit Website",
    description: "New website for a local non-profit, improving accessibility and online donations.",
    imageUrl: "https://placehold.co/600x800.png",
    imageHint: "charity website",
    heroImageUrl: "https://placehold.co/1200x600.png",
    heroImageHint: "community site",
    tags: ["Web Design", "Non-Profit", "Accessibility"],
    extendedDescription: "We collaborated with a local non-profit organization to design and launch a new website that better served their community and mission.\n\nKey objectives included improving accessibility to WCAG standards, enhancing the user experience for information discovery, and streamlining the online donation process. The new site features a clean, welcoming design, clear calls-to-action, and an easy-to-manage content system, enabling the non-profit to effectively communicate their impact and increase engagement.",
    services: ["Web Design", "Accessibility Audit", "CMS Integration"],
    client: "Community Hub Foundation",
    year: 2023,
    galleryImages: [
      { id: "np-gallery-1", url: "https://placehold.co/800x600.png", alt: "Homepage design", hint: "website homepage" },
      { id: "np-gallery-2", url: "https://placehold.co/800x600.png", alt: "Donation page", hint: "online giving" },
      { id: "np-gallery-3", url: "https://placehold.co/800x600.png", alt: "Mobile view of site", hint: "responsive design" },
    ],
  },
];
