import imgInnovatingBanner from "../../assets/img/InnovatingSection/img_banner.jpg";
import imgInnovatingBanner2x from "../../assets/img/InnovatingSection/img_banner@2x.jpg";
import { useTranslation } from "react-i18next";
import ButtonSimple from "../../components/ButtonSimple/ButtonSimple";
import { ResearchIcon } from "../../components/Icons";
import "./InnovatingBannerSection.scss";

export default function InnovatingBannerSection() {
  const { t } = useTranslation("common");

  return (
    <section
      className="innovatingSection"
      aria-labelledby="innovating-section-heading"
    >
      <div className="innovatingSection__inner">
        <div className="innovatingSection__body">
          <h2 id="innovating-section-heading" className="innovatingSection__title">
            {t("innovatingSection.title")}
          </h2>
          <p className="innovatingSection__description pc-only">
            {t("innovatingSection.description")}
          </p>
          <p className="innovatingSection__description sp-only">
            {t("innovatingSection.descriptionSp")}
          </p>
          <ButtonSimple
            variant="primaryWhiteOnSp"
            href="#"
            iconRight={<ResearchIcon />}
          >
            {t("innovatingSection.buttonText")}
          </ButtonSimple>
        </div>
        <div className="innovatingSection__image">
          <img
            src={imgInnovatingBanner}
            srcSet={`${imgInnovatingBanner2x} 2x`}
            alt={t("innovatingSection.imageAlt")}
          />
        </div>
      </div>
    </section>
  );
}
