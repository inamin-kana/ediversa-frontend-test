import { useTranslation } from "react-i18next";
import "./ButtonPortal.scss";

export default function ButtonPortal() {
  const { t } = useTranslation("common");

  return (
    <a
      href="7"
      target="_blank"
      rel="noopener noreferrer"
      className="buttonPortal"
      aria-label={t("header.portalAriaLabel")}
    >
      <span className="buttonPortal__icon">
        <img src="/src/assets/img/icon-portal.svg" alt={t("header.portal")} />
      </span>
      {t("header.portal")}
    </a>
  );
}
