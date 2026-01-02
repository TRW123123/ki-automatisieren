'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'
import { getRouteKeyFromPath, getLocalizedRoute, extractParamsFromPath } from '@/lib/routeMappings'

const locales = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const t = useI18n()
  
  const currentLocale = 'de'
  const currentLocaleData = locales.find(l => l.code === currentLocale) || locales[0]

  const isActiveLink = (href: string): boolean => {
    if (href === `/${currentLocale}`) {
      return pathname === `/${currentLocale}` || pathname === `/${currentLocale}/`
    }
    return pathname.startsWith(href)
  }

  const getLocalizedPath = (path: string = '') => {
    return `/${currentLocale}${path}`
  }

  const switchLocale = (newLocale: string) => {
    // Only German is available, no switching needed
  }

  const navItems = [
    { href: getLocalizedPath(), label: t('nav.solutions') },
    { href: getLocalizedPath('/fallstudien'), label: t('nav.cases') },
    { href: getLocalizedPath('/blog'), label: t('nav.blog') }
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-16 items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link 
          href={getLocalizedPath()}
          className="flex items-center space-x-2 hover-glow rounded-lg px-2 py-1 transition-all duration-300"
          aria-label="Home"
        >
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="text-background font-bold text-sm">AI</span>
          </div>
          <span className="font-bold text-lg gradient-text">AutoPlatform</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-primary focus-visible ${
                isActiveLink(item.href)
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-muted-foreground'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Language Switcher */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="hover-glow"
                aria-label="Switch language"
                aria-expanded="false"
              >
                <Globe className="h-4 w-4 mr-2" />
                {currentLocaleData.flag} {currentLocaleData.code.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="glass">
              {locales.map((locale) => (
                <DropdownMenuItem
                  key={locale.code}
                  onClick={() => switchLocale(locale.code)}
                  className="cursor-pointer hover:bg-primary/10"
                >
                  {locale.flag} {locale.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <MotionButton 
            asChild
            className="hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
          >
            <Link href={getLocalizedPath('/contact')}>
              {t('nav.contact')}
            </Link>
          </MotionButton>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] glass">
            <div className="flex flex-col space-y-6 mt-6">
              {/* Mobile Logo */}
              <Link 
                href={getLocalizedPath()}
                className="flex items-center space-x-2"
                onClick={() => setIsOpen(false)}
              >
                <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <span className="text-background font-bold text-sm">AI</span>
                </div>
                <span className="font-bold text-lg gradient-text">AutoPlatform</span>
              </Link>

              {/* Mobile Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="justify-start w-full glass"
                    aria-label="Switch language"
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    {currentLocaleData.flag} {currentLocaleData.name}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-full glass">
                  {locales.map((locale) => (
                    <DropdownMenuItem
                      key={locale.code}
                      onClick={() => {
                        switchLocale(locale.code)
                        setIsOpen(false)
                      }}
                      className="cursor-pointer"
                    >
                      {locale.flag} {locale.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Navigation Links */}
              <nav className="flex flex-col space-y-4" role="navigation">
                {navItems.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      href={item.href}
                      className={`text-sm font-medium transition-colors hover:text-primary focus-visible p-2 rounded-md ${
                        isActiveLink(item.href)
                          ? 'text-primary bg-primary/10'
                          : 'text-muted-foreground hover:bg-muted/50'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>

              {/* Mobile CTA */}
              <MotionButton 
                asChild
                className="w-full hover-glow bg-gradient-to-r from-primary to-secondary text-primary-foreground border-0"
                onClick={() => setIsOpen(false)}
              >
                <Link href={getLocalizedPath('/contact')}>
                  {t('nav.contact')}
                </Link>
              </MotionButton>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}