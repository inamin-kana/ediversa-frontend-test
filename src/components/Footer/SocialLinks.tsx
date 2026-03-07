import { GlobeIcon, ShareIcon, RssIcon } from "../Icons";
import "./SocialLinks.scss";

export default function SocialLinks() {
  return (
    <ul className="SocialLinks" aria-label="Social and external links">
      <li className="SocialLinks__item">
        <a href="#" className="SocialLinks__link" aria-label="Website">
          <GlobeIcon />
        </a>
      </li>
      <li className="SocialLinks__item">
        <a href="#" className="SocialLinks__link" aria-label="Share">
          <ShareIcon />
        </a>
      </li>
      <li className="SocialLinks__item">
        <a href="#" className="SocialLinks__link" aria-label="RSS Feed">
          <RssIcon />
        </a>
      </li>
    </ul>
  );
}
