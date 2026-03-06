import { useTranslation } from "react-i18next";
import "./SearchBox.scss";

export default function SearchBox() {
  const { t } = useTranslation("common");

  return (
    <div className="searchBox">
      <span className="searchBox__icon">
        <img src="/src/assets/img/icon-search.svg" alt={t("header.searchIconAlt")} />
      </span>
      <input type="text" placeholder={t("header.searchPlaceholder")} />
    </div>
  );
}
