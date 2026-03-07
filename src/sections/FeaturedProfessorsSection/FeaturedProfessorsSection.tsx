import { useTranslation } from "react-i18next";
import { featuredProfessors } from "../../data/featuredProfessors";
import ProfessorLinkCard from "../../components/ProfessorLinkCard/ProfessorLinkCard";
import ArrowTextLink from "../../components/ArrowTextLink/ArrowTextLink";
import "./FeaturedProfessorsSection.scss";

export default function FeaturedProfessorsSection() {
  const { t } = useTranslation("common");

  return (
    <section
      className="featuredProfessors section"
      aria-labelledby="featured-professors-heading"
    >
      <div className="featuredProfessors__inner section__inner">
        <div className="featuredProfessors__headed">
          <div className="featuredProfessors__title-wrapper">
            <h2 className="featuredProfessors__title">
              {t("featuredProfessors.title")}
            </h2>
            <p className="featuredProfessors__subtitle featuredProfessors__subtitle-pc">
              {t("featuredProfessors.subtitle")}
            </p>
            <p className="featuredProfessors__subtitle featuredProfessors__subtitle-sp">
              {t("featuredProfessors.subtitleSp")}
            </p>
          </div>
          <ArrowTextLink href="#" className="featuredProfessors__viewAll">
            <span className="featuredProfessors__viewAll-pc">
              {t("featuredProfessors.textLinkLabelPc")}
            </span>
            <span className="featuredProfessors__viewAll-sp">
              {t("featuredProfessors.textLinkLabelSp")}
            </span>
          </ArrowTextLink>
        </div>
        <div className="featuredProfessors__grid">
          {featuredProfessors.map((professor) => (
            <ProfessorLinkCard key={professor.id} professor={professor} />
          ))}
        </div>
      </div>
    </section>
  );
}
