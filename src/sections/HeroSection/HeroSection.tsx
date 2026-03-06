import { Trans, useTranslation } from "react-i18next";
import imgHero from "../../assets/img/HeroSection/img-hero.jpg";
import imgHero2x from "../../assets/img/HeroSection/img-hero@2x.jpg";
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple";
import "./HeroSection.scss";

export default function HeroSection() {
  const { t } = useTranslation("common");

  return (
    <div className="HeroSection section">
      <div className="HeroSection__inner section__inner">
        <div className="HeroSection__body">
          <span className="HeroSection__label">{t("heroSection.label")}</span>
          <h2 className="HeroSection__title">
            <Trans
              i18nKey="heroSection.title"
              ns="common"
              components={[<span className="HeroSection__title-highlight" />]}
            />
          </h2>
          <p className="HeroSection__description">
            {t("heroSection.description")}
          </p>
          <div className="HeroSection__buttons">
            <ButtonSimple variant="primary" href="#">
              {t("heroSection.buttonExplorePrograms")}
            </ButtonSimple>
            <ButtonSimple variant="secondary" href="#">
              {t("heroSection.buttonResearchPortal")}
            </ButtonSimple>
          </div>
        </div>
        <div className="HeroSection__image">
          <img
            src={imgHero}
            srcSet={`${imgHero2x} 2x`}
            alt={t("heroSection.imageAlt")}
          />
        </div>
      </div>
    </div>
  );
}
