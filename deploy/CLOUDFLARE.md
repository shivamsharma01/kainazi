# Deploy Kainazi site to Cloudflare (`www.kainazi.com`)

Static Angular SPA. No API proxy — unlike `gym.kainazi.com`, this Worker only serves
assets from `dist/kainazi/browser`.

## Build & deploy (local)

```bash
npm ci
npm run build          # → dist/kainazi/browser
npx wrangler deploy    # or: npm run deploy
```

Requires Cloudflare auth (`npx wrangler login` once).

## Cloudflare dashboard (Git)

1. **Workers & Pages** → **Create** → connect the GitHub repo for this project.
2. Settings:

| Setting | Value |
|---------|--------|
| Project name | `kainazi-www` (match `wrangler.jsonc`) |
| Root directory | `/` (repo root) |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Output | `dist/kainazi/browser` (also in `wrangler.jsonc`) |

3. **Custom domains** → `www.kainazi.com` (and optionally apex `kainazi.com` → www).

DNS (zone `kainazi.com`): orange-cloud CNAME/A for `www` to the Worker/Pages target Cloudflare creates.

## Smoke test

```bash
curl -sS -o /dev/null -w "%{http_code}\n" https://www.kainazi.com/
curl -sS https://www.kainazi.com/ | head
```

Contact mailto uses `sales@kainazi.com` (see `src/app/core/data/site.content.ts`).
