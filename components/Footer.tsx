'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/locales/client'
import { MotionButton } from '@/components/MotionButton'

export function Footer() {
  const pathname = usePathname()
  const t = useI18n()
  const currentLocale = 'de'

  const getLocalizedPath = (path: string = '') => {
    return `/${currentLocale}${path}`
  }

  const companyLinks = [
    { href: getLocalizedPath('/uber-uns'), label: 'Über uns' },
    { href: getLocalizedPath('/fallstudien'), label: t('nav.cases') },
    { href: getLocalizedPath('/blog'), label: t('nav.blog') }
  ]

  const solutionLinks = [
    { href: getLocalizedPath('/losungen'), label: 'Lösungen' },
    { href: getLocalizedPath('/losungen/marketing-automatisierung'), label: 'Marketing' },
    { href: getLocalizedPath('/losungen/vertriebsautomatisierung'), label: 'Vertrieb' }
  ]

  const aiTopicLinks = [
    { href: getLocalizedPath('/losungen/leadgenerierung-ki'), label: 'Lead Generation' },
    { href: getLocalizedPath('/losungen/kundenservice-automatisierung'), label: 'Kundenservice' },
    { href: getLocalizedPath('/website-in-3-tagen'), label: 'Website in 3 Tagen' }
  ]

  return (
    <footer className="border-t border-border/40 bg-muted/20">
      <div className="container py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-background font-bold text-sm">AI</span>
              </div>
              <span className="font-bold text-lg gradient-text">AutoPlatform</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              Wir ermöglichen Unternehmenswachstum durch KI und Automatisierung.
            </p>
            <MotionButton 
              asChild
              className="hover-glow-purple bg-gradient-to-r from-secondary to-accent text-secondary-foreground"
            >
              <Link href={getLocalizedPath('/contact')}>
                {t('footer.cta.button')}
              </Link>
            </MotionButton>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Unternehmen
            </h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              Lösungen
            </h3>
            <ul className="space-y-2">
              {solutionLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AI Topics */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">
              KI-Themen
            </h3>
            <ul className="space-y-2">
              {aiTopicLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © 2024 KI-Automatisieren.de – Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link
              href={getLocalizedPath('/datenschutz')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
            >
              Datenschutz
            </Link>
            <Link
              href={getLocalizedPath('/nutzungsbedingungen')}
              className="text-sm text-muted-foreground hover:text-primary transition-colors focus-visible"
            >
              Nutzungsbedingungen
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}