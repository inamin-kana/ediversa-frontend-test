import { useTranslation } from "react-i18next";
import type { FooterNavLink } from "../../data/footerLinks";
import "./FooterColumn.scss";

export type { FooterNavLink };

interface FooterColumnProps {
  titleKey: string;
  links: FooterNavLink[];
}

export default function FooterColumn({ titleKey, links }: FooterColumnProps) {
  const { t } = useTranslation("common");

  return (
    <div className="FooterColumn">
      <h3 className="FooterColumn__title">{t(titleKey)}</h3>
      <ul className="FooterColumn__list">
        {links.map((link) => (
          <li key={link.labelKey} className="FooterColumn__item">
            <a href={link.href} className="FooterColumn__link">
              {t(link.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
