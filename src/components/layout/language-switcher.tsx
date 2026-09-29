"use client";
import { usePathname, useRouter } from "next/navigation";
import { languageNames, locales, type Locale } from "@/i18n/config";
export function LanguageSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <select
      className="language-select"
      aria-label={label}
      value={locale}
      onChange={(e) => {
        const parts = pathname.split("/");
        parts[1] = e.target.value;
        router.push(parts.join("/"));
      }}
    >
      {locales.map((l) => (
        <option key={l} value={l}>
          {languageNames[l]}
        </option>
      ))}
    </select>
  );
}
