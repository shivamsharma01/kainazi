# Kainazi Technology Solutions

Corporate site for **Kainazi Technology Solutions** — Angular 20 (standalone, zoneless, signals).

Production URL: **https://www.kainazi.com**

## Scripts

```bash
npm start          # http://localhost:4200
npm run build      # → dist/kainazi/browser
npm run deploy     # build + wrangler deploy to Cloudflare
npm test           # unit tests
```

## Structure

- `src/app/core` — typed content models, site copy, and services
- `src/app/shared` — reusable UI (buttons, cards, tags, architecture diagram, brand mark)
- `src/app/layout` — header and footer
- `src/app/features/home` — page sections, including the flagship e-commerce architecture block
- `public/brand` — company identity artwork
- `legacy` — previous HTML drafts (historical)
- `wrangler.jsonc` — Cloudflare Workers static assets (`kainazi-www`)

Content lives in `src/app/core/data/`. Cloudflare deploy steps: **[deploy/CLOUDFLARE.md](deploy/CLOUDFLARE.md)**.
