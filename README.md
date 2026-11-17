# Creatix

Creative agency website — "Empowering Brands Through Creative Solutions".

Built with **Astro 7** + **Tailwind CSS 4** + **GSAP** + **Lenis**, Archivo + Inter
fonts self-hosted via `@fontsource` (no Google Fonts CDN). Static output,
deploys to Cloudflare Pages. Lime `#A3E635` + black + light grey.

21 pages: home, about, services (+ 4 detail pages), projects (+ 6 detail
pages), team, reviews, contact, FAQ, privacy, terms, 404.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build   # outputs to dist/
npm run preview
```

## Deploy

Every push to `main` runs `.github/workflows/deploy.yml` (build + `wrangler pages
deploy dist --project-name=creatix`). It needs these two repository secrets:

- `CLOUDFLARE_API_TOKEN` — custom API token with **Account → Cloudflare Pages → Edit**
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Live URL (after the first successful deploy): https://creatix.pages.dev

## Notes

All mock values (team names, email hello@creatix.in, phone +91 98765 43210,
prices, testimonials, projects) live in `src/data/site.ts` — replace before
launch. Social links are `#` placeholders. The contact form has no backend
(mailto fallback).
