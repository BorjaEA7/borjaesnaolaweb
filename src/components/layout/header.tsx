
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { siteConfig, type NavItem } from '@/config/site';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import * as React from 'react';


export default function Header() {
  const [isSheetOpen, setIsSheetOpen] = React.useState(false);
  const pathname = usePathname();

  const NavLink = ({ item, className, onClick }: { item: NavItem, className?: string, onClick?: () => void }) => (
    <Link
      href={item.href}
      className={cn(
        "text-sm font-medium transition-colors",
        pathname === item.href ? "text-primary font-semibold" : "text-primary/80 hover:text-primary",
        item.disabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={onClick}
      aria-disabled={item.disabled}
      tabIndex={item.disabled ? -1 : undefined}
    >
      {item.label}
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="Borja Esnaola Logo"
            width={162} // Aspect ratio 650/60 = 10.83. If height is 15, width = 15 * 10.83 = 162.45
            height={15} // Adjusted for a reasonable header height
            priority
            className="h-auto" // Maintain aspect ratio
          />
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          {siteConfig.navItems.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="flex flex-col space-y-6 p-6">
                <Link href="/" className="flex items-center gap-2 mb-4" onClick={() => setIsSheetOpen(false)}>
                  <Image
                    src="/logo.png"
                    alt="Borja Esnaola Logo"
                    width={162}
                    height={15}
                    priority
                    className="h-auto"
                  />
                </Link>
                {siteConfig.navItems.map((item) => (
                  <NavLink
                    key={item.href}
                    item={item}
                    className="text-lg"
                    onClick={() => setIsSheetOpen(false)}
                  />
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
