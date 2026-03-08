import { useTranslation } from "react-i18next";
import type { FooterNavLink } from "../../data/footerLinks";
import "./FooterColumn.scss";

export type { FooterNavLink };

interface FooterColumnProps {
  titleKey: string;
  links: FooterNavLink[];
  columnId: string;
}

export default function FooterColumn({ titleKey, links, columnId }: FooterColumnProps) {
  const { t } = useTranslation("common");
  const titleId = `${columnId}-title`;

  return (
    <nav className="FooterColumn" aria-labelledby={titleId}>
      <h2 id={titleId} className="FooterColumn__title">
        {t(titleKey)}
      </h2>
      <ul className="FooterColumn__list">
        {links.map((link) => (
          <li key={link.labelKey} className="FooterColumn__item">
            <a href={link.href} className="FooterColumn__link">
              {t(link.labelKey)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
