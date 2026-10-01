# Igor Bezanovic — portfolio

Next.js App Router, TypeScript and MUI with server-rendered pages and Emotion SSR integration.

## Development

```sh
npm ci
npm run dev
```

Open http://localhost:3000 (redirects to `/en`).

```sh
npm run lint
npm run typecheck
npm test
npm run format:check
npm run build
npm start
```

Regression tests use Node.js 22.13+ and the built-in Node test runner. To check a running production server, run `npm run test:routes -- http://127.0.0.1:3100`; add the configured HTTPS origin as the second argument for an indexed build. The checks cover all 24 pages, headings, redirects, unsupported-route 404s, robots, sitemap and the Open Graph image. Preview builds should pass the noindex variant even with `SITE_URL` set.

## Structure

- `src/app/[locale]`: layouts and route composition; four pages per locale.
- `src/components/ui`: reusable presentation primitives, including the theme-aware `BrandLogo` wordmark.
- `public/images/brand`: reusable transparent WebP logos for light and dark themes; asset details and usage are in the directory README.
- `src/components/layout`: shared header, footer and language selector.
- `src/components/sections`: reusable content sections.
- `src/components/forms`: interactive project inquiry form.
- `src/components/providers`: centralized MUI theme and SSR cache provider.
- `src/i18n/messages`: typed dictionary shape, separate translations for en, sr (Latin), de, it, hu and fr.
- `src/lib/site.ts`: profile, route names and public origin.
- `src/lib/seo.ts`: localized metadata, canonical and alternate links.

Routes: `/{locale}`, `/{locale}/experience`, `/{locale}/ask-for-project`, `/{locale}/contact-me`. The language selector preserves the page. Unsupported locales/pages return 404.

## Site icons

The shared IB monogram is defined in `src/app/icon.svg`. Next.js automatically links it, the 96px PNG, the multi-resolution `/favicon.ico` (16, 32, 48, 96 and 256px), Apple touch icons (152, 167 and 180px), and `/manifest.webmanifest` on every localized page. `/apple-touch-icon.png` also supports devices that request the conventional root URL.

The manifest supplies opaque Android and desktop icons from 192 to 512px, separate maskable icons with the lettering inside the safe circle, and Windows app/tile sizes. It keeps `display: browser`; these assets do not add offline behavior or a service worker. Regenerate raster assets with `node scripts/generate-icons.mjs` using the existing Sharp installation. Tests check dimensions, ICO entries and maskable safe areas.

Search engines can discover the same stable favicon URL; each engine controls whether and when it displays the icon. Production must use the final HTTPS `SITE_URL` and allow indexing. Googlebot and Googlebot-Image must be able to access the home page and favicon. Preview and unconfigured builds intentionally remain blocked from indexing. Deployment and recrawling are required before search results can update.

## Vercel deployment and monitoring

Use the Next.js framework preset with the default build/output settings and the committed npm lockfile. All 24 localized pages are prerendered at build time for CDN delivery. Unknown locales/pages return 404 without generating additional pages on demand. The permanent `/` to `/en` redirect is configured in `next.config.ts`, so it does not require a Proxy function. Next.js handles compression, asset caching and responsive image optimization automatically.

`@vercel/analytics` and `@vercel/speed-insights` are integrated once in the locale root layout using their Next.js components, covering all pages and client-side navigation. In the Vercel project dashboard, enable **Web Analytics** and **Speed Insights**, then redeploy. Visits and Core Web Vitals will appear after traffic reaches the deployed site. No analytics API key or custom environment variable is required. Speed Insights usage follows the project's Vercel plan.

Set `SITE_URL` to the final public origin in the **Production** environment only; leave it unset in **Preview** to preserve the existing noindex behavior. Changing it requires a new build. `SITE_URL` must be an HTTPS origin without credentials, a path, query or hash. Vercel environments other than Production remain noindex even if they inherit this variable; keep system environment variables enabled for this guard.

Setup references: [Web Analytics](https://vercel.com/docs/analytics/quickstart) and [Speed Insights](https://vercel.com/docs/speed-insights/quickstart).

## Content and publication

The experience page is based on the owner's supplied CVs and organized by engineering domain. All six locales omit employers, clients, named commercial products, employment dates and tenure. Do not add source PDFs to public assets or restore identifying employment details in visible content, metadata or structured data. Public copy lives in `src/i18n/messages`; technology lists live in `src/content/experience.ts`.

Copy `.env.example` to `.env.local` and set `SITE_URL` to the real HTTPS public origin before building for production. Without it, pages are noindex, robots blocks indexing and the sitemap is empty. With it, metadata includes canonical URLs, six language alternates and x-default, Open Graph/Twitter images, a 24-URL sitemap, and Person JSON-LD on home pages. Keep preview deployments without SITE_URL. Metadata changes require rebuilding.

The project form opens a local email draft using mailto; it does not send or store submissions. Direct delivery requires an email provider and server-side validation/abuse protection. The public contact email is configured in `src/lib/site.ts`.

Still needed: final domain, target clients/markets and optional professional profile links. Search rankings depend on content and other factors beyond technical SEO.

## Home content draft

The Home layout contains an introduction, work overview, working approach, public contributions, personal interests and a project CTA. Editorial copy in `homeContent`, `heroTitle` and `intro` is an initial proposal for the owner to refine. Activities (running, cycling, swimming, weight training, walking and nature) were supplied by the owner. Public contribution details reuse the Experience content. No placeholder employers, testimonials, achievements or photographs are included.

## AI agent skills

Shared project instructions are in `AGENTS.md`; `CLAUDE.md` points to that file. Project skills and their supporting files live in `.agents/skills/`. This catalog includes the existing Vercel skills, official Next.js workflows from `vercel/next.js`, `frontend-design` from `anthropics/skills`, and `web-design-guidelines` from `vercel-labs/agent-skills`.

Agents must discover the current catalog, read all task-relevant skills and apply them within the project rules. Installing a skill does not install its browser/CLI tools or enable the feature it describes. Keep the skill directories in the repository so other checkouts can use them without global installations.
