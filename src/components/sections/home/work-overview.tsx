import { Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { pagePath } from "@/lib/site";
import { Section } from "../../ui/section";
import { ActionLink } from "../../ui/action-link";
import { ApproachIllustration } from "./approach-illustration";
import styles from "./work-overview.module.css";

const illustrations = [4, 3, 2, 5];

export function WorkOverview({ locale, t }: { locale: Locale; t: Dictionary }) {
  const content = t.homeContent;
  return (
    <Section id="work-overview">
      <div className={styles.intro}>
        <div>
          <Typography color="secondary" className={styles.label}>
            {content.overviewLabel}
          </Typography>
          <Typography component="h2" variant="h2" className={styles.heading}>
            {content.overviewTitle}
          </Typography>
        </div>
        <div className={styles.context}>
          <Typography component="p" variant="subtitle1">
            {content.overviewDescription}
          </Typography>
          <Typography component="p" color="text.secondary">
            {content.overviewDetail}
          </Typography>
        </div>
      </div>
      <div className={styles.areas}>
        {content.areas.map((area, index) => (
          <article className={styles.area} key={area.title}>
            <div className={styles.illustration}>
              <ApproachIllustration step={illustrations[index]} />
            </div>
            <div className={styles.content}>
              <Typography component="h3" variant="h3" className={styles.title}>
                {area.title}
              </Typography>
              <Typography color="text.secondary" className={styles.description}>
                {area.description}
              </Typography>
              <ul className={styles.highlights}>
                {area.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.footer}>
        <ActionLink href={pagePath(locale, "experience")} variant="outlined">
          {t.explore}
        </ActionLink>
        <span className={styles.footerLine} aria-hidden="true" />
      </div>
    </Section>
  );
}
