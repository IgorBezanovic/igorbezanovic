"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
export function NavigationLinks({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const pathname = usePathname();
  return links.map(({ href, label }) => (
    <Link
      key={href}
      href={href}
      aria-current={pathname === href ? "page" : undefined}
    >
      {label}
    </Link>
  ));
}
