# Next.js Migration Deployment Guide

## Build & Test Commands

```bash
# 1. Install dependencies
npm install

# 2. Build the project
npm run build

# 3. Start production server
npm run start

# 4. Run tests
npm run test

# 5. Run Lighthouse CI
npm run lighthouse
```

## Environment Variables

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
SENTRY_ORG=your_org
SENTRY_PROJECT=your_project
```

## Performance Budgets (Lighthouse CI)

- **LCP**: < 2.5s (Largest Contentful Paint)
- **INP**: < 200ms (Interaction to Next Paint)  
- **CLS**: < 0.1 (Cumulative Layout Shift)
- **FCP**: < 1.8s (First Contentful Paint)

## Features Implemented

✅ SSR/SSG/ISR with revalidate=60  
✅ i18n routing (/tr, /de, /en)  
✅ SEO metadata with hreflang  
✅ robots.ts & sitemap.ts  
✅ Performance optimizations  
✅ Motion with reduced-motion fallback  
✅ 3D Hero with lazy loading  
✅ Accessibility (skip-link, ARIA)  
✅ Sentry monitoring  
✅ Lighthouse CI  
✅ Playwright E2E tests  

## Bundle Analysis

Enable with: `ANALYZE=true npm run build`

## Production Checklist

1. [ ] Set NEXT_PUBLIC_SITE_URL
2. [ ] Configure Sentry DSN
3. [ ] Add OG images for each locale
4. [ ] Upload GLB models to /public/models/
5. [ ] Run Lighthouse CI
6. [ ] Verify hreflang tags
7. [ ] Test keyboard navigation
8. [ ] Check reduced motion preferences