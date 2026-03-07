import { useTranslation } from "react-i18next";
import type { Professor } from "../../types/professor";
import "./ProfessorLinkCard.scss";
import { ArrowIcon } from "../Icons";

interface ProfessorLinkCardProps {
  professor: Professor;
}

export default function ProfessorLinkCard({
  professor,
}: ProfessorLinkCardProps) {
  const { t } = useTranslation("common");
  const srcSet = professor.image2x
    ? `${professor.image} 1x, ${professor.image2x} 2x`
    : undefined;

  return (
    <a href={professor.profileUrl} className="professorLinkCard">
      <div className="professorLinkCard__image">
        <img
          src={professor.image}
          srcSet={srcSet}
          alt={professor.name}
          width={284}
          height={378}
        />
      </div>
      <div className="professorLinkCard__body">
        <h3 className="professorLinkCard__name">{professor.name}</h3>
        <p className="professorLinkCard__jobTitle">{professor.jobTitle}</p>
        <p className="professorLinkCard__description">
          {professor.description}
        </p>
      </div>
      <span className="professorLinkCard__label">
        {t("featuredProfessors.viewProfile")}
        <span className="arrow-icon">
          <ArrowIcon className="arrowTextLink__icon icon-svg" />
        </span>
      </span>
    </a>
  );
}
