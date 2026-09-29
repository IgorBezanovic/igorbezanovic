import Image from "next/image";
import { technologyIcons } from "@/content/technology-icons";

export function TechnologyIcon({ technology }: { technology: string }) {
  const icon = technologyIcons[technology];
  if (!icon) {
    return (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#5267a8"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        focusable="false"
      >
        <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-13-2 16" />
      </svg>
    );
  }
  return (
    <Image
      src={`/icons/technologies/${icon}.svg`}
      width={36}
      height={36}
      alt=""
      aria-hidden="true"
      style={{ objectFit: "contain" }}
    />
  );
}
