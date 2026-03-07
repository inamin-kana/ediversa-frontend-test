import { useTranslation } from "react-i18next";
import { LogoutIcon } from "../Icons";
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
        <LogoutIcon className="buttonPortal__icon icon-svg" />
      </span>
      {t("header.portal")}
    </a>
  );
}
