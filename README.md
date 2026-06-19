# Rasa Ashworth — Tapestry Artist

A portfolio website for **Rasa Ashworth**, a Lithuanian tapestry artist working
in Bristol, UK. Built with [Astro](https://astro.build), deployed to
[Railway](https://railway.app) from GitHub.

## Pages

- **Home** — hero, artist statement, selected work, contact CTA
- **Gallery** — all works with a click-to-zoom lightbox (keyboard + swipe friendly)
- **About** — biography and details
- **Contact** — email, studio, and an optional enquiry form

## Develop locally

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build
```

## Editing content

| What | Where |
| --- | --- |
| Add / edit artworks | `src/data/works.ts` (drop images in `public/images/`) |
| Artist bio | `src/pages/about.astro` |
| Contact details | `src/pages/contact.astro` (set `email`, `btgUrl`, `formspreeId`) |
| Colours & fonts | `src/styles/global.css` (`:root` variables) |
| Final domain | `astro.config.mjs` (`site:`) for correct canonical URLs |

### Enabling the contact form

The contact form is hidden until you add a [Formspree](https://formspree.io)
form ID. Create a free Formspree form, then set `formspreeId` in
`src/pages/contact.astro`. Until then, the page shows the email address only.

## Deploy to Railway

This repo includes `railway.json`. Railway builds with Nixpacks
(`npm run build`) and serves the static `dist/` folder via `serve` on `$PORT`.

1. Push this repo to GitHub.
2. In Railway: **New Project → Deploy from GitHub repo** → pick this repo.
3. Railway auto-detects the config; the first deploy runs build + start.
4. Add a custom domain under the service's **Settings → Networking**, then
   update `site:` in `astro.config.mjs` to match.

## Image credits

All tapestry images © Rasa Ashworth.
