/** Public origins enable indexing only outside Vercel Preview/Development. */
export function resolveSiteUrl(configuredUrl?: string, environment?: string) {
  if (!configuredUrl) return undefined;
  let url: URL;
  try {
    url = new URL(configuredUrl);
  } catch {
    throw new Error("SITE_URL must be a valid HTTPS origin.");
  }
  if (
    url.protocol !== "https:" ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      "SITE_URL must be an HTTPS origin without credentials, path, query or hash.",
    );
  }
  if (environment && environment !== "production") return undefined;
  return url.origin;
}
