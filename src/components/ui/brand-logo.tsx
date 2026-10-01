import Image from "next/image";
import { profile } from "@/lib/site";
import styles from "./brand-logo.module.css";

/** Theme-aware wordmark. The transparent WebP assets can also be used directly. */
export function BrandLogo({ width = 210 }: { width?: number }) {
  return (
    <span className={styles.logo} style={{ width }}>
      <Image
        src="/images/brand/igor-bezanovic-light.webp"
        alt={`${profile.name}.`}
        width={1200}
        height={200}
        sizes={`${width}px`}
        className={styles.light}
      />
      <Image
        src="/images/brand/igor-bezanovic-dark.webp"
        alt={`${profile.name}.`}
        width={1200}
        height={200}
        sizes={`${width}px`}
        className={styles.dark}
      />
    </span>
  );
}
