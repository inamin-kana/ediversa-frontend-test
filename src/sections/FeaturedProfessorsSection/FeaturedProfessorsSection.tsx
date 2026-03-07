import { useTranslation } from "react-i18next";
import { featuredProfessors } from "../../data/featuredProfessors";
import ProfessorLinkCard from "../../components/ProfessorLinkCard/ProfessorLinkCard";
import ArrowTextLink from "../../components/ArrowTextLink/ArrowTextLink";
import TitleSection from "../../components/TitleSection/TitleSection";
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
          <TitleSection
            title={t("featuredProfessors.title")}
            subtitle={t("featuredProfessors.subtitle")}
            subtitleSp={t("featuredProfessors.subtitleSp")}
          />
          <ArrowTextLink href="#" className="featuredProfessors__viewAll">
            {t("featuredProfessors.textLinkLabel")}
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
