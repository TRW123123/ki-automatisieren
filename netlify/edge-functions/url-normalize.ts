// Netlify Edge Function: URL Normalizer
// Purpose: Enforce canonical URL structure for SEO
// - Trailing slashes: /impressum → /impressum/
// - Lowercase: /Impressum/ → /impressum/
// - HTML cleanup: /impressum.html → /impressum/
// - Double slash: /impressum// → /impressum/
//
// CRITICAL: Contains loop prevention logic

// @ts-ignore - Deno import for Netlify Edge
import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    try {
        const url = new URL(request.url);
        let path = url.pathname;
        const lowerPath = path.toLowerCase();

        // ===== LOOP PREVENTION LAYER =====

        // 1. Root path - never redirect
        if (path === '/') {
            return context.next();
        }

        // 2. Already normalized - PASS THROUGH
        // Path ends with / AND is lowercase → no redirect needed
        if (path.endsWith('/') && path === lowerPath) {
            return context.next();
        }

        // 3. Static assets - NEVER redirect
        const assetExtensions = /\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|webp|mp4|webm|pdf|avif|json)$/i;
        if (assetExtensions.test(path)) {
            return context.next();
        }

        // 4. Crawler entrypoints - CRITICAL for GSC
        if (path === '/robots.txt' ||
            path.startsWith('/sitemap') ||
            path === '/_headers' ||
            path === '/_redirects') {
            return context.next();
        }

        // 5. Netlify internals
        if (path.startsWith('/.netlify/') || path.startsWith('/_astro/')) {
            return context.next();
        }

        // ===== NORMALIZATION LAYER =====

        // Handle index.html first
        if (lowerPath === '/index.html' || lowerPath.endsWith('/index.html')) {
            const parentPath = lowerPath.replace(/\/index\.html$/i, '/') || '/';
            return Response.redirect(url.origin + parentPath + url.search, 301);
        }

        // Handle .html extension
        if (lowerPath.endsWith('.html')) {
            const withoutHtml = lowerPath.slice(0, -5) + '/';
            return Response.redirect(url.origin + withoutHtml + url.search, 301);
        }

        // Compute canonical path
        let canonical = path
            .replace(/\/+/g, '/')    // Collapse multiple slashes
            .toLowerCase();           // Lowercase

        // Ensure trailing slash
        if (!canonical.endsWith('/')) {
            canonical += '/';
        }

        // Only redirect if path actually changed
        if (path !== canonical) {
            return Response.redirect(url.origin + canonical + url.search, 301);
        }

        // Path already canonical, serve content
        return context.next();

    } catch (error) {
        // Fail-safe: Never crash, always serve content
        console.error('Edge Function Error:', error);
        return context.next();
    }
};

export const config = {
    path: "/*"
};
