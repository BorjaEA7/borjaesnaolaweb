import ProjectCard from './project-card';

const portfolioItems = [
  {
    title: "E-commerce Platform Redesign",
    description: "A complete overhaul of a legacy e-commerce system, focusing on UX, performance, and modern design aesthetics. Implemented a new headless CMS and Next.js frontend.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "online shopping",
    projectUrl: "#",
    tags: ["UI/UX", "Next.js", "E-commerce", "Headless CMS"],
  },
  {
    title: "Mobile Banking App",
    description: "Designed and developed a secure and intuitive mobile banking application with features like P2P payments, bill pay, and financial tracking.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "mobile finance",
    projectUrl: "#",
    tags: ["Mobile App", "Fintech", "Security", "React Native"],
  },
  {
    title: "SaaS Dashboard UI Kit",
    description: "Created a comprehensive UI kit for a SaaS product, including a variety of components, charts, and templates to streamline development.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "data analytics",
    projectUrl: "#",
    tags: ["UI Kit", "SaaS", "Design System", "Figma"],
  },
  {
    title: "Branding for Startup Co.",
    description: "Developed a full brand identity, including logo, color palette, typography, and marketing materials for an emerging tech startup.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "brand identity",
    tags: ["Branding", "Graphic Design", "Marketing"],
  },
   {
    title: "Interactive Art Installation",
    description: "Conceptualized and built an interactive digital art installation for a public gallery, using projection mapping and sensor technology.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "digital art",
    projectUrl: "#",
    tags: ["Creative Tech", "Art", "Interactive"],
  },
  {
    title: "Non-Profit Website",
    description: "Designed and launched a new website for a local non-profit organization, improving accessibility and online donations.",
    imageUrl: "https://placehold.co/600x450.png",
    imageHint: "community support",
    tags: ["Web Design", "Non-Profit", "Accessibility"],
  },
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 sm:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary font-geist-sans">Our Recent Work</h2>
        <p className="mt-4 text-lg text-foreground/70 max-w-xl mx-auto">
          Discover a selection of projects that showcase our passion for creativity and technical excellence.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {portfolioItems.map((item) => (
          <ProjectCard
            key={item.title}
            title={item.title}
            description={item.description}
            imageUrl={item.imageUrl}
            imageHint={item.imageHint}
            projectUrl={item.projectUrl}
            tags={item.tags}
          />
        ))}
      </div>
    </section>
  );
}
