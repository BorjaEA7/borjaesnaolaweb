import { siteConfig } from '@/config/site';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.</p>
        <p className="mt-1">Inspired by Zaguan. Crafted with Next.js & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
