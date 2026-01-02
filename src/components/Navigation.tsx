import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Menu, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

import { useLanguage } from "@/contexts/LanguageContext";
import { getLocalizedRoute } from "@/lib/routeMappings";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();
  const { currentLanguage, t } = useLanguage();

  const navItems = [
    { href: getLocalizedRoute(currentLanguage, 'home'), label: t('nav.home') },
    { href: getLocalizedRoute(currentLanguage, 'cases'), label: t('nav.cases') },
    { href: getLocalizedRoute(currentLanguage, 'blog'), label: t('nav.blog') },
  ];

  const solutionItems = [
    { href: getLocalizedRoute(currentLanguage, 'solution-leadgen-ki'), label: 'KI Leadgenerierung' },
    { href: getLocalizedRoute(currentLanguage, 'solution-marketing'), label: 'Marketing Automatisierung' },
    { href: getLocalizedRoute(currentLanguage, 'solution-vertrieb'), label: 'Vertriebsautomatisierung' },
    { href: getLocalizedRoute(currentLanguage, 'solution-crm'), label: 'CRM Automatisierung' },
    { href: getLocalizedRoute(currentLanguage, 'solution-kundenservice'), label: 'Kundenservice Automatisierung' },
    { href: getLocalizedRoute(currentLanguage, 'strategieberatung'), label: 'KI Strategieberatung' },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  return (
    <nav 
      className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 transition-all duration-300 data-[scrolled=true]:bg-bg-2 data-[scrolled=true]:border-border"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to={getLocalizedRoute(currentLanguage, 'home')} className="flex items-center space-x-3 group" aria-label="Homepage">
            <img 
              src="/logos/de-logo.avif" 
              alt="KI Automatisieren Logo" 
              width={80}
              height={80}
              className="h-20 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href!}
                className={cn(
                  "text-sm font-medium transition-colors lime-underline focus-lime relative",
                  isActiveLink(item.href!) ? "text-lime-400" : "text-text-hi hover:text-lime-400"
                )}
              >
                {item.label}
                {isActiveLink(item.href!) && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 lime-dot"></div>
                )}
              </Link>
            ))}
            
            {/* Solutions Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className={cn(
                "text-sm font-medium transition-colors lime-underline focus-lime relative inline-flex items-center gap-1",
                location.pathname.includes('/losungen')
                  ? "text-lime-400" 
                  : "text-text-hi hover:text-lime-400"
              )}>
                {t('nav.solutions')}
                <ChevronDown className="w-3 h-3" />
                {(location.pathname.includes('/losungen')) && (
                  <div className="absolute -left-2 top-1/2 -translate-y-1/2 lime-dot"></div>
                )}
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-background border-border z-[60]">
                {solutionItems.map((item) => (
                  <DropdownMenuItem key={item.href} asChild>
                    <Link 
                      to={item.href} 
                      className="w-full cursor-pointer hover:text-lime-400 transition-colors"
                    >
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuItem asChild>
                  <Link 
                    to={getLocalizedRoute(currentLanguage, 'solutions')} 
                    className="w-full cursor-pointer font-semibold hover:text-lime-400 transition-colors"
                  >
                    {currentLanguage === 'de' && 'Alle Lösungen →'}
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile Navigation */}
          <div className="flex items-center space-x-2">{/* Mobile Navigation */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="focus-lime min-h-[48px] min-w-[48px]" aria-label="Toggle menu">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-card border-border">
              <div className="mb-6 pt-2">
                <Link to={getLocalizedRoute(currentLanguage, 'home')} onClick={() => setIsOpen(false)}>
                  <img 
                    src="/logos/de-logo.avif" 
                    alt="KI Automatisieren Logo" 
                    width={64}
                    height={64}
                    className="h-16 w-auto"
                  />
                </Link>
              </div>
              <nav className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    to={item.href!}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm transition-colors hover:bg-border/30",
                      isActiveLink(item.href!) ? "bg-border/50 text-lime-400 border-l-2 border-lime-400" : "text-text-hi"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;