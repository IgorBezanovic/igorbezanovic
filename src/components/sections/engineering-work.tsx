import Link from "next/link";
import { Box, Typography } from "@mui/material";
import type { Dictionary } from "@/i18n/dictionaries";
import type { Locale } from "@/i18n/config";
import { caseStudyPages, pagePath } from "@/lib/site";
import { Section } from "../ui/section";

export function EngineeringWork({
  locale,
  content,
}: {
  locale: Locale;
  content: Dictionary["work"];
}) {
  return (
    <Section id="selected-work">
      <Typography component="h2" variant="h2" sx={{ mb: 5 }}>
        {content.selected}
      </Typography>
      <div className="work-list">
        {caseStudyPages.map((slug) => {
          const study = content.cases[slug];
          return (
            <article key={slug} className="work-row">
              <div>
                <Typography
                  component="p"
                  variant="body2"
                  color="text.secondary"
                >
                  {study.role}
                </Typography>
                <Typography component="h3" variant="h3" sx={{ mt: 1, mb: 2 }}>
                  <Link href={pagePath(locale, slug)} className="work-title">
                    {study.title}
                  </Link>
                </Typography>
                <Typography color="text.secondary">{study.summary}</Typography>
              </div>
              <Box className="work-result">
                <Typography
                  component="p"
                  sx={{ fontWeight: 600, color: "secondary.main" }}
                >
                  {study.scale}
                </Typography>
                <Link href={pagePath(locale, slug)} className="work-read">
                  {content.read}
                  <span aria-hidden="true"> ↗</span>
                  <span className="sr-only">: {study.title}</span>
                </Link>
              </Box>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
