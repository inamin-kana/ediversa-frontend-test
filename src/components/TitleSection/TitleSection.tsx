import type { ReactNode } from "react";
import "./TitleSection.scss";

interface TitleSectionProps {
  title: ReactNode;
  titleId?: string;
  subtitle?: string;
  subtitleSp?: string;
}

export default function TitleSection({
  title,
  titleId,
  subtitle,
  subtitleSp,
}: TitleSectionProps) {
  const hasPcSpSubtitle = subtitleSp != null && subtitleSp !== "";
  const hasSubtitle = (subtitle != null && subtitle !== "") || hasPcSpSubtitle;

  return (
    <div className="section__title-wrapper">
      <h2 id={titleId} className="section__title">
        {title}
      </h2>
      {hasSubtitle &&
        (hasPcSpSubtitle ? (
          <>
            {subtitle != null && subtitle !== "" && (
              <p className="section__subtitle pc-only">{subtitle}</p>
            )}
            <p className="section__subtitle sp-only">{subtitleSp}</p>
          </>
        ) : (
          <p className="section__subtitle">{subtitle}</p>
        ))}
    </div>
  );
}
