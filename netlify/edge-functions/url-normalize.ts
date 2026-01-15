// Netlify Edge Function: URL Normalizer
// Minimal scope: ONLY URL normalization + 301 redirects
// No auth, no headers, no business logic
// Template for ki-automatisieren.de

import type { Context } from "https://edge.netlify.com";

export default async (request: Request, context: Context) => {
    try {
        const url = new URL(request.url);
        let path = url.pathname;
        const lowerPath = path.toLowerCase();

        // 1. Handle index.html FIRST (before asset check)
        if (lowerPath === '/index.html' || lowerPath.endsWith('/index.html')) {
            // /index.html → / and /preise/index.html → /preise/
            const parentPath = lowerPath.replace(/\/index\.html$/i, '/') || '/';
            return Response.redirect(url.origin + parentPath + url.search, 301);
        }

        // 2. Handle .html files → strip extension, add trailing slash
        if (lowerPath.endsWith('.html')) {
            const withoutHtml = lowerPath.slice(0, -5) + '/';
            return Response.redirect(url.origin + withoutHtml + url.search, 301);
        }

        // 3. Skip static assets (images, css, js, etc.)
        if (/\.(png|jpg|jpeg|gif|svg|ico|css|js|woff|woff2|ttf|eot|webp|mp4|webm|pdf|avif)$/i.test(path)) {
            return context.next();
        }

        // 4. Compute canonical path
        let canonical = path
            .replace(/\/+/g, '/')           // Collapse //slug// → /slug/
            .toLowerCase();                  // /Slug → /slug

        // 5. Ensure trailing slash (except root)
        if (canonical !== '/' && !canonical.endsWith('/')) {
            canonical += '/';
        }

        // 6. Only redirect if path changed
        if (path !== canonical) {
            const redirectUrl = url.origin + canonical + url.search;
            return Response.redirect(redirectUrl, 301);
        }

        return context.next();
    } catch {
        // Fail-safe: Never crash, always serve content
        return context.next();
    }
};

export const config = {
    path: "/*"
};
