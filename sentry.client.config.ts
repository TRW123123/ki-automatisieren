import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  
  // Performance monitoring
  tracesSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Capture 100% of the transactions for performance monitoring in development
  replaysOnErrorSampleRate: 1.0,
  
  // Capture 10% of the transactions for performance monitoring when no errors occur
  replaysSessionSampleRate: process.env.NODE_ENV === 'production' ? 0.1 : 1.0,
  
  // Session Replay configuration
  integrations: [
    new Sentry.Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
  
  beforeSend(event) {
    // Filter out development errors in production
    if (process.env.NODE_ENV === 'development') {
      console.log('Sentry Event:', event)
    }
    return event
  },
  
  environment: process.env.NODE_ENV,
})