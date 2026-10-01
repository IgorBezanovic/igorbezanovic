# Igor Bezanovic wordmark

Transparent, lossless WebP assets, 1200 × 200 pixels:

- `igor-bezanovic-light.webp`: dark forest lettering and a green terminal period.
- `igor-bezanovic-dark.webp`: light lettering and a light green terminal period.

Use `BrandLogo` from `src/components/ui/brand-logo.tsx` for automatic theme selection:

```tsx
<BrandLogo />
<BrandLogo width={280} />
```

The component uses the existing MUI `data-light` / `data-dark` attributes, with a system-preference fallback before initialization. Both images occupy the same reserved space. CSS chooses the visible asset without theme-dependent React markup. Image loading remains lazy so hidden variants are not eagerly requested. Direct asset URLs are available for other app contexts and exports.

Generated with the built-in `imagegen` tool; exported to WebP using the project's existing Sharp installation. No new dependency was added.

Generation prompt: “Create a polished typographic wordmark for a personal software engineer portfolio header. Text verbatim: Igor Bezanovic. Capital I and B, one space, green period at the end. One horizontal line. Contemporary bold sans-serif typography, refined tight kerning, excellent legibility at 210px wide. Dark forest lettering #202b26, green period #245d47. Transparent background. No extra symbol, tagline, shadow or texture.”

Dark variant prompt: “Create a pristine clean dark-mode version of the same wordmark. Match the bold sans-serif typography and layout. Uniform light lettering #e6eae3, terminal period #8fc7a7. Clean smooth sharp edges, no noise, texture, outlines, shadows or stray pixels. Transparent background. Exact spelling Igor Bezanovic.”
