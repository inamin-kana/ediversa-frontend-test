import type { ReactNode } from "react";
import "./ButtonSimple.scss";

type ButtonVariant = "primary" | "secondary" | "primaryWhiteOnSp";

interface ButtonSimpleProps {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
  className?: string;
  iconRight?: ReactNode;
}

export default function ButtonSimple({
  variant = "primary",
  href,
  children,
  className = "",
  iconRight,
}: ButtonSimpleProps) {
  const classNames = `buttonSimple buttonSimple--${variant} ${className}`.trim();

  const content = (
    <>
      {children}
      {iconRight != null && (
        <span className="buttonSimple__icon" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </>
  );

  if (href) {
    return <a href={href} className={classNames}>{content}</a>;
  }

  return <button type="button" className={classNames}>{content}</button>;
}
