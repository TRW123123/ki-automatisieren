# Package.json Scripts

Add these scripts to your package.json:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "test": "playwright test",
    "test:ui": "playwright test --ui",
    "lighthouse": "lhci autorun",
    "analyze": "ANALYZE=true npm run build",
    "postbuild": "next-sitemap"
  }
}
```

## Usage

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run start` - Start production server
- `npm run test` - Run Playwright tests
- `npm run lighthouse` - Run Lighthouse CI
- `npm run analyze` - Build with bundle analyzer
- `npm run postbuild` - Generate sitemap after build