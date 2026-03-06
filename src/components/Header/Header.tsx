import { useTranslation } from "react-i18next";
import ButtonPortal from "../ButtonPortal/ButtonPortal";
import SearchBox from "../SearchBox/SearchBox";
import "./Header.scss";

export default function Header() {
  const { t } = useTranslation("common");

  return (
    <header className="header">
      <div className="header__inner">
        <span className="header__logo">
          <img src="/src/assets/logo.svg" alt={t("header.logoAlt")} />
        </span>
        <div className="header__title-wrapper">
          <h1 className="header__title">{t("header.title")}</h1>
          <span className="header__subtitle">{t("header.subtitle")}</span>
        </div>
        <nav>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#">{t("header.nav.about")}</a>
            </li>
            <li className="header__nav-item">
              <a href="#">{t("header.nav.programs")}</a>
            </li>
            <li className="header__nav-item">
              <a href="#">{t("header.nav.research")}</a>
            </li>
            <li className="header__nav-item">
              <a href="#">{t("header.nav.faculty")}</a>
            </li>
            <li className="header__nav-item">
              <a href="#">{t("header.nav.contact")}</a>
            </li>
          </ul>
        </nav>
        <div className="header__search-and-portal">
          <SearchBox />
          <ButtonPortal />
        </div>
      </div>
    </header>
  );
}
