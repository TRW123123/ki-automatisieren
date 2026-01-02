'use client'

import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { I18nProviderClient } from '@/locales/client'
import { ThemeProvider } from 'next-themes'
import { Toaster } from '@/components/ui/toaster'
import { Toaster as Sonner } from '@/components/ui/sonner'
import { TooltipProvider } from '@/components/ui/tooltip'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000, // 1 minute
      gcTime: 10 * 60 * 1000, // 10 minutes
    },
  },
})

interface ProvidersProps {
  children: ReactNode
  locale: string
}

export function Providers({ children, locale }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProviderClient locale={locale}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ThemeProvider>
      </I18nProviderClient>
    </QueryClientProvider>
  )
}