import { useTranslation } from "react-i18next";
import type { Publication } from "../../types/publication";
import { LinkBlankIcon } from "../Icons";
import "./PublicationCard.scss";

interface PublicationCardProps {
  publication: Publication;
}

export default function PublicationCard({ publication }: PublicationCardProps) {
  const { t } = useTranslation("common");
  const { date, department, title, authors, description, paperUrl } =
    publication;

  return (
    <li className="publicationCard">
      <div className="publicationCard__head">
        <span className="publicationCard__date">{date}</span>
        <span className="publicationCard__department">{department}</span>
      </div>
      <h3 className="publicationCard__title">{title}</h3>
      <p className="publicationCard__authors">{authors}</p>
      <p className="publicationCard__description">{description}</p>
      <a
        href={paperUrl}
        className="publicationCard__link"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${t("latestResearch.readFullPaper")}: ${title}`}
      >
        {t("latestResearch.readFullPaper")}
        <span className="publicationCard__linkIcon" aria-hidden="true">
          <LinkBlankIcon />
        </span>
      </a>
    </li>
  );
}
