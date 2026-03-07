import { useTranslation } from "react-i18next";
import TitleSection from "../../components/TitleSection/TitleSection";
import ArrowTextLink from "../../components/ArrowTextLink/ArrowTextLink";
import PublicationCard from "../../components/PublicationCard/PublicationCard";
import { publications } from "../../data/publications";
import "./LatestResearchSection.scss";

export default function LatestResearchSection() {
  const { t } = useTranslation("common");

  return (
    <section
      className="latestResearch section"
      aria-labelledby="latest-research-heading"
    >
      <div className="latestResearch__inner section__inner">
        <div className="latestResearch__head">
          <TitleSection
            titleId="latest-research-heading"
            title={t("latestResearch.title")}
            subtitle={t("latestResearch.subtitle")}
            subtitleSp={t("latestResearch.subtitleSp")}
          />
          <ArrowTextLink href="#" className="latestResearch__viewAll">
            {t("latestResearch.viewAllPublications")}
          </ArrowTextLink>
        </div>
        <ul className="latestResearch__list" role="list">
          {publications.map((publication) => (
            <PublicationCard key={publication.id} publication={publication} />
          ))}
        </ul>
      </div>
    </section>
  );
}
