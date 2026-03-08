import type { ReactNode } from "react";
import "./FormField.scss";

interface FormFieldProps {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}

export default function FormField({
  label,
  htmlFor,
  error,
  children,
}: FormFieldProps) {
  return (
    <div className="formField">
      <label className="formField__label" htmlFor={htmlFor}>
        {label}
      </label>
      <div className="formField__input">{children}</div>
      {error != null && error !== "" && (
        <p className="formField__error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
