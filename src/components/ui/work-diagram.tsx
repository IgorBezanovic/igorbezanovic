import type { Dictionary } from "@/i18n/dictionaries";
import type { CaseStudyPage } from "@/lib/site";

export function WorkDiagram({
  study,
  content,
}: {
  study: CaseStudyPage;
  content: Dictionary["work"];
}) {
  const item = content.cases[study];
  return (
    <figure className="work-diagram">
      <p className="diagram-title">{item.title}</p>
      {study === "serverless-modernization" ? (
        <div className="migration-flow">
          <span>JavaScript</span>
          <span aria-hidden="true">→</span>
          <span>TypeScript</span>
        </div>
      ) : (
        <ul className="diagram-nodes">
          {item.diagramNodes.map((technology) => (
            <li key={technology}>{technology}</li>
          ))}
        </ul>
      )}
      <p className="diagram-scale">{item.scale}</p>
      <figcaption>{content.diagramCaption}</figcaption>
    </figure>
  );
}
