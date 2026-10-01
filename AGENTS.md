<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Project quality rules for AI agents

## Scope and working discipline

- This is a multilingual personal portfolio, currently using Next.js 16.3.7 App Router, React 19, TypeScript strict mode, MUI 9 and Emotion. Verify installed versions in `package.json` and the lockfile before applying framework advice.
- Read `README.md` and inspect `git status` before editing. Preserve existing uncommitted work; do not reset, overwrite or format unrelated files.
- Keep changes focused on the requested feature. Reuse existing sections and UI primitives before introducing abstractions or dependencies. Explain material rendering, dependency and deployment tradeoffs.
- Preserve the generated Next.js instruction block above. `CLAUDE.md` points to this file; keep shared project instructions here.
- Check the project-local skills below before planning implementation or reviews. Read relevant `SKILL.md` files and report accurately which were used. Verify their advice against installed Next.js guides and this project's versions.

## Project-local skills and task routing

Project skills live in `.agents/skills/`, including supporting references, scripts and licenses. This includes the existing Vercel skill set, the official `vercel/next.js` skills, Anthropic's `frontend-design`, and Vercel Labs' `web-design-guidelines`. Resolve paths from the repository root; do not depend on a user-specific global installation or plugin cache path. Agent-specific copies elsewhere are installation artifacts; prefer `.agents/skills/` as the shared project catalog.

For every task:

1. Discover the current catalog with `rg --files --hidden .agents/skills -g SKILL.md`; do not assume the list below is exhaustive or unchanged.
2. Inspect skill names and frontmatter descriptions, then select every skill relevant to the user's requested outcome and the files or workflows involved. If the user names a skill explicitly, read it before proceeding.
3. Read each selected `SKILL.md` before applying it. Follow references and scripts only when needed, resolving their paths relative to the skill directory.
4. Combine relevant guidance across implementation, review and verification. Use all applicable skills; do not apply unrelated skills merely because they are installed.
5. Briefly state which skills are being used and why. At completion, report what was actually used and checked, including unavailable tools or incomplete checks.
6. If a named skill is missing, check project and available global locations. Copy its complete directory into `.agents/skills/` when authorized, preserving supporting files and licenses without overwriting an existing skill. If it cannot be obtained, report the limitation accurately.

Skills are guidance, not authorization to expand scope, install dependencies, deploy, send messages, or change the project's stack or rendering strategy. Explicit user instructions and these project rules take precedence. Verify framework advice against the installed package versions and Next.js guides. Do not enable Cache Components, Partial Prefetching or a new runtime merely because a corresponding skill is installed.

Read only the skills relevant to the current task before applying their guidance:

- Next.js routing, rendering, Server/Client Components and metadata: `.agents/skills/nextjs/SKILL.md`.
- Visual design, new UI and intentional layout changes: `.agents/skills/frontend-design/SKILL.md`; preserve the existing MUI theme and the user's visual direction.
- UI, accessibility and usability reviews: `.agents/skills/web-design-guidelines/SKILL.md`; follow its current guideline retrieval instructions and verify findings against rendered behavior when tooling is available.
- Running Next.js runtime checks after app changes: `.agents/skills/next-dev-loop/SKILL.md`; use its developer-server and browser checks when their prerequisites are available.
- Explicit Cache Components adoption or optimization requests: `.agents/skills/next-cache-components-adoption/SKILL.md` and `.agents/skills/next-cache-components-optimizer/SKILL.md`, choosing the workflow that matches the request.
- Explicit Partial Prefetching adoption or optimization requests: `.agents/skills/next-partial-prefetching-adoption/SKILL.md` and `.agents/skills/next-partial-prefetching-optimizer/SKILL.md`, choosing the workflow that matches the request.
- React component changes and reviews: `.agents/skills/react-best-practices/SKILL.md`.
- Browser interaction and UI checks: `.agents/skills/agent-browser/SKILL.md`; dev-server checks: `.agents/skills/agent-browser-verify/SKILL.md`; complete flow verification: `.agents/skills/verification/SKILL.md`.
- Analytics, Speed Insights, logs and performance investigation: `.agents/skills/observability/SKILL.md`.
- Deployment and CI/CD: `.agents/skills/deployments-cicd/SKILL.md`; CLI operations: `.agents/skills/vercel-cli/SKILL.md`; connected Vercel app/API access: `.agents/skills/vercel-api/SKILL.md`.
- Environment configuration: `.agents/skills/env-vars/SKILL.md`.
- Bundler configuration and build debugging: `.agents/skills/turbopack/SKILL.md`.
- Open Graph image rendering: `.agents/skills/satori/SKILL.md`.

Other skills in this directory are available when their descriptions match the requested work. Their presence does not require adding the corresponding service or dependency. Copying skills does not install their CLIs, connect a Vercel account or configure a deployment; check tool availability before use.

Explicit user instructions and these project rules take precedence over generic skill defaults. Preserve MUI and Emotion rather than adopting shadcn/Tailwind defaults, and preserve the current static rendering strategy rather than enabling Cache Components or changing runtime by habit. The installed Next.js guides are authoritative for the installed version's APIs and conventions.

## Rendering, routing and client boundaries

- Keep layouts, pages and content composition as Server Components by default. Add `"use client"` at the smallest boundary requiring hooks, event handlers or browser APIs. Server-rendered HTML and Server Components are different concepts; MUI components can still ship client code.
- Preserve composition through `children` in `AppProvider`; wrapping server-rendered children in a provider does not require turning every page into a Client Component.
- Send only the translations/data a Client Component needs. Prefer a small typed labels object over passing the entire `Dictionary`; avoid importing translation JSON as a runtime dependency in client modules.
- Keep browser APIs out of module scope and initial render. Ensure initial server/client output agrees. Do not use `suppressHydrationWarning` to hide new mismatches; the existing root attribute is for MUI's color scheme initialization.
- Await route `params` according to the installed Next.js API. Validate locales and page slugs before loading content, and keep unsupported routes returning actual HTTP 404 responses.
- Maintain `generateStaticParams` and `dynamicParams = false` for the current finite route set. The current expectation is six locales times four pages, or 24 prerendered pages. Update this expectation when intentionally adding routes/locales.
- Keep the `/` to `/en` redirect in `next.config.ts`. Add Proxy only for a demonstrated request-time requirement; do not introduce a function just for this fixed redirect.
- Preserve prerendering of public content. Before adding `cookies()`, `headers()`, request-dependent data or uncached fetches, explain the rendering impact and check the local caching guide. Do not enable Cache Components, change runtime or add caching directives by habit.
- Fetch server-owned data on the server. Start independent requests together when appropriate; choose caching/revalidation explicitly. Do not cache personal submissions or secrets in a shared public cache.

## MUI, theme, images and performance

- Keep `AppRouterCacheProvider` from the installed `v16-appRouter` integration. Preserve Emotion SSR so styles are included correctly during streaming; do not add another cache/provider without a concrete need.
- Keep `InitColorSchemeScript` before application content, with `attribute="data"` and `defaultMode="system"` matching the theme/provider configuration. Verify reload and navigation in light, dark and system modes.
- Use theme tokens, CSS variables and `theme.applyStyles("dark", ...)`. Fixed colors are acceptable for intentional artwork; check their contrast in both themes. Avoid rendering different markup based on the browser theme before hydration.
- Reuse typography, spacing and card primitives. Explicitly choose semantic `component` values when visual typography differs from the intended heading level.
- Use `next/image` for appropriate raster assets with meaningful localized alt text, reserved dimensions and accurate responsive `sizes`. Keep below-the-fold images lazy; preload only a measured above-the-fold LCP candidate using the installed version's API.
- Keep SVG icons decorative with `aria-hidden` when text already supplies their meaning. Do not add a large icon or animation package for a handful of assets.
- Respect `prefers-reduced-motion` for transforms, transitions and pointer-driven animations as well as scrolling. Avoid permanent `will-change` and repeated layout reads on high-frequency pointer events unless measurement justifies them.
- Assess JS payload, image transfer size and Core Web Vitals before claiming a performance improvement. Use mobile Lighthouse for diagnosis and Speed Insights for real-user evidence; target p75 LCP <= 2.5 s, INP <= 200 ms and CLS <= 0.1 when enough field data exists.

## Localization, content and accessibility

- Keep all six locales (`en`, `sr`, `de`, `it`, `hu`, `fr`) structurally aligned with the English dictionary. Use Serbian Latin. Update every locale when adding user-visible labels, validation messages or accessibility text.
- Check dictionary key parity and interpolation tokens when translations change; type compatibility alone does not reject all extra keys or prove translation quality.
- Keep route construction in `pagePath` and locale definitions in `src/i18n/config.ts`. Language switching must preserve the current page; decide explicitly whether query/hash state also needs preservation for a new feature.
- Preserve the owner's content privacy rules from `README.md`: do not restore employers, clients, named commercial products, employment dates/tenure or source CV PDFs in visible copy, assets, metadata or structured data. Do not invent achievements or testimonials.
- Keep one descriptive h1 per page, a logical heading order, landmarks, the working skip link, visible keyboard focus and localized control labels. Use links for navigation and buttons for actions; expose active navigation with `aria-current` when implemented.
- Check narrow screens (at least 320 px), long translations, 200% zoom, keyboard operation and both color schemes for UI changes. Do not infer accessibility from lint passing.

## SEO, configuration and Vercel

- Keep metadata logic in `src/lib/seo.ts` and origin/profile/routes in `src/lib/site.ts`. Keep canonical URLs, hreflang, x-default, sitemap and Open Graph URLs consistent with actual routes and the production origin.
- `SITE_URL` currently enables indexing. Leave it unset in Preview; configure the final HTTPS origin in Production and rebuild after changing it. Do not substitute a deployment hostname as the canonical production domain.
- Validate any future URL configuration as an HTTP(S) origin, require HTTPS for the public production domain, and reject malformed configuration clearly. If extending indexing logic, explicitly guard Preview even when `SITE_URL` is accidentally inherited.
- Verify both configuration cases when modifying SEO: without `SITE_URL`, noindex/blocked robots/empty sitemap; with a production origin, correct canonical links, all language alternates, OG image and 24 sitemap entries for the current route set.
- Keep JSON-LD grounded in supplied facts and escape `<` after serialization. Never interpolate unchecked content into HTML/script strings.
- Use Vercel's Next.js framework preset and default output settings unless the feature requires otherwise. Preserve the npm lockfile and use `npm ci` in CI. Keep the configured Vercel Node version compatible with installed dependencies.
- Mount Analytics and Speed Insights once in the locale root layout. Do not send form values, email addresses or inquiry text as analytics events. Dashboard activation and deployed behavior must be verified separately from a local build.
- Never expose secrets through `NEXT_PUBLIC_*`, serialized props, public assets or logs. Document new environment variable names in `.env.example` without real credentials.
- Add CSP/security headers only with a tested policy compatible with Next.js scripts, Emotion and monitoring. Do not paste a generic policy that breaks hydration or styles.

## Forms and future server features

- The current project form prepares a `mailto:` draft; it does not deliver or store a message. Keep labels and feedback truthful and retain a usable direct-email alternative.
- If direct delivery is requested, validate and bound all inputs on the server, keep provider credentials server-side, add abuse/rate protection appropriate to serverless deployment, and expose localized success/failure/pending states. Client validation alone is insufficient.
- Do not rely on process-local memory or the deployment filesystem for durable submissions or global rate limits. Avoid logging personal inquiry content.

## Verification and completion

- For application changes, run `npm run lint`, `npm run typecheck` and `npm run build`; build does not replace lint. Run `npm run format:check` and format only files within scope.
- Do not run `next dev`, `next typegen` and `next build` concurrently against the same output directory. Inspect the production build route report for unintended dynamic rendering.
- For route/SEO changes, check a production server: root redirect, all supported locale/page combinations, unsupported locale/page 404s, robots, sitemap and OG image. Do not claim these checks passed unless actually run.
- Add focused regression tests for new behavior or meaningful bugs. Prioritize routing, dictionary consistency, SEO configuration and server validation; avoid tests that only duplicate implementation details.
- For UI changes, verify rendered browser behavior, hydration console output, keyboard interaction and responsive layout when browser tooling is available. Clearly report any unavailable visual or deployed checks.
- Keep README behavior accurate. At completion, state what changed, what was checked and any remaining limitation. Never claim a Vercel deployment or field performance was verified from local checks alone.

## Review follow-ups (2026-10-01)

These are review findings to address when the relevant feature is next changed, not a claim that they are already fixed:

- `ProjectForm` receives the complete dictionary although it only needs form labels. `BeyondCode` receives the whole `homeContent` group and brings section composition into its client module graph for pointer animation. Narrow props and isolate the animated photo area if payload measurements justify it.
- The photo cards use pointer-driven transforms and permanent `will-change`. The global reduced-motion rule only disables smooth scrolling; add a reduced-motion treatment to the photo animation.
- `siteUrl` accepts any URL scheme supported by `new URL`, and indexing depends only on `SITE_URL` presence. Add explicit origin validation and a Preview indexing guard when refining deployment configuration.
- Navigation has no active-page `aria-current`. Add it without moving the entire header into the client graph.
- The local production build passed but emitted two `metadataBase` fallback warnings for social images. Inspect the file-based OG metadata interaction and verify generated URLs with a real production origin before considering SEO fully validated.
- There is no automated regression test setup or CI workflow in the current repository. A small CI gate and focused routing/translation/SEO checks would protect the existing foundation.

## Reference sources

- Installed Next.js guides: `node_modules/next/dist/docs/01-app/02-guides/server-and-client-boundary.md`, `01-app/03-api-reference/04-functions/generate-static-params.md`, `01-app/01-getting-started/17-deploying.md` and the relevant caching/metadata guides in the same docs tree.
- MUI App Router integration: <https://mui.com/material-ui/integrations/nextjs/>
- Vercel environments: <https://vercel.com/docs/deployments/environments>
- Field performance monitoring: <https://vercel.com/docs/speed-insights>
