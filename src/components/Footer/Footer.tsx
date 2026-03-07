import { useTranslation } from "react-i18next";
import { footerNavColumns } from "../../data/footerLinks";
import FooterColumn from "./FooterColumn";
import SocialLinks from "./SocialLinks";
import logo from "../../assets/logo.svg";
import "./Footer.scss";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="Footer">
      <div className="Footer__inner">
        <div className="Footer__top">
          <div className="Footer__brand">
            <img
              src={logo}
              alt={t("header.logoAlt")}
              className="Footer__brandLogo"
            />
            <span className="Footer__brandTitle">{t("footer.brandTitle")}</span>
            <p className="Footer__brandDescription">
              {t("footer.brandDescription")}
            </p>
            <SocialLinks />
          </div>
          {footerNavColumns.map((col) => (
            <FooterColumn
              key={col.titleKey}
              titleKey={col.titleKey}
              links={col.links}
            />
          ))}
        </div>
        {/* <div className="Footer__divider" aria-hidden="true" /> */}
        <div className="Footer__bottom">
          <p className="Footer__copyright">{t("footer.copyright")}</p>
          <nav className="Footer__legal" aria-label="Legal">
            <a href="#" className="Footer__legalLink">
              {t("footer.privacyPolicy")}
            </a>
            <a href="#" className="Footer__legalLink">
              {t("footer.accessibility")}
            </a>
            <a href="#" className="Footer__legalLink">
              {t("footer.termsOfService")}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
