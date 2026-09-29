# Igor Bezanovic — portfolio

Next.js App Router, TypeScript and MUI with server-rendered pages and Emotion SSR integration.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/en`).

```sh
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Structure

- `src/app/[locale]`: layouts and route composition; four pages per locale.
- `src/components/ui`: reusable presentation primitives.
- `src/components/layout`: shared header, footer and language selector.
- `src/components/sections`: reusable content sections.
- `src/components/forms`: interactive project inquiry form.
- `src/components/providers`: centralized MUI theme and SSR cache provider.
- `src/i18n/messages`: typed dictionary shape, separate translations for en, sr (Latin), de, it, hu and fr.
- `src/lib/site.ts`: profile, route names and public origin.
- `src/lib/seo.ts`: localized metadata, canonical and alternate links.

Routes: `/{locale}`, `/{locale}/experience`, `/{locale}/ask-for-project`, `/{locale}/contact-me`. The language selector preserves the page. Unsupported locales/pages return 404.

## Content and publication

The experience page is based on the owner's supplied CVs and organized by engineering domain. All six locales omit employers, clients, named commercial products, employment dates and tenure. Do not add source PDFs to public assets or restore identifying employment details in visible content, metadata or structured data. Public copy lives in `src/i18n/messages`; technology lists live in `src/content/experience.ts`.

Copy `.env.example` to `.env.local` and set `SITE_URL` to the real HTTPS public origin before building for production. Without it, pages are noindex, robots blocks indexing and the sitemap is empty. With it, metadata includes canonical URLs, six language alternates and x-default, Open Graph/Twitter images, a 24-URL sitemap, and Person JSON-LD on home pages. Keep preview deployments without SITE_URL. Metadata changes require rebuilding.

The project form opens a local email draft using mailto; it does not send or store submissions. Direct delivery requires an email provider and server-side validation/abuse protection. The public contact email is configured in `src/lib/site.ts`.

Still needed: final domain, target clients/markets and optional professional profile links. Search rankings depend on content and other factors beyond technical SEO.

## Home content draft

The Home layout contains an introduction, work overview, working approach, public contributions, personal interests and a project CTA. Editorial copy in `homeContent`, `heroTitle` and `intro` is an initial proposal for the owner to refine. Activities (running, cycling, swimming, weight training, walking and nature) were supplied by the owner. Public contribution details reuse the Experience content. No placeholder employers, testimonials, achievements or photographs are included.
