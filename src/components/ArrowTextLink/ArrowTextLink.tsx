import type { AnchorHTMLAttributes, ReactNode } from "react";
import { ArrowIcon } from "../Icons";
import "./arrowTextLink.scss";

interface arrowTextLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

export default function ArrowTextLink({
  href,
  children,
  className = "",
  ...rest
}: arrowTextLinkProps) {
  return (
    <a href={href} className={`arrowTextLink ${className}`.trim()} {...rest}>
      {children}
      <span className="arrow-icon" aria-hidden="true">
        <ArrowIcon className="arrowTextLink__icon icon-svg" />
      </span>
    </a>
  );
}
