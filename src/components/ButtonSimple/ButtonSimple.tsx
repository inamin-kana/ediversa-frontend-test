import "./ButtonSimple.scss";

type ButtonVariant = "primary" | "secondary";

interface ButtonSimpleProps {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

export default function ButtonSimple({
  variant = "primary",
  href,
  children,
  className = "",
}: ButtonSimpleProps) {
  const classNames = `buttonSimple buttonSimple--${variant} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classNames}>
        {children}
      </a>
    );
  }

  return <button type="button" className={classNames}>{children}</button>;
}
