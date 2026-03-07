import { useTranslation } from "react-i18next";
import { SearchIcon } from "../Icons";
import "./SearchBox.scss";

export default function SearchBox() {
  const { t } = useTranslation("common");

  return (
    <div className="searchBox">
      <span className="searchBox__icon">
        <SearchIcon className="searchBox__icon icon-svg" />
      </span>
      <input type="text" placeholder={t("header.searchPlaceholder")} />
    </div>
  );
}
