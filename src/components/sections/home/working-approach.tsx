import { Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import { Section } from "../../ui/section";
import { ApproachIllustration } from "./approach-illustration";
import styles from "./working-approach.module.css";

export function WorkingApproach({
  content,
}: {
  content: Dictionary["homeContent"];
}) {
  return (
    <Section id="working-approach">
      <Typography component="h2" variant="h2" sx={{ mb: { xs: 5, md: 7 } }}>
        {content.approachTitle}
      </Typography>
      <ol className={styles.journey}>
        {content.steps.map((step, index) => (
          <li className={styles.step} key={step.title}>
            <div className={styles.marker} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className={styles.panel}>
              <div className={styles.illustration}>
                <ApproachIllustration step={index} />
              </div>
              <Typography component="h3" variant="h3" className={styles.title}>
                {step.title}
              </Typography>
              <Typography className={styles.description}>
                {step.description}
              </Typography>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
