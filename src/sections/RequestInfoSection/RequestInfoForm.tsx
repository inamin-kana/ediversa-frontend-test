import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "../../components/FormField/FormField";
import {
  requestInfoSchema,
  type RequestInfoSchema,
} from "../../schemas/requestInfoSchema";

const DEPARTMENT_OPTIONS = [
  "Cardiology",
  "Oncology",
  "Neurology",
  "Pediatrics",
  "General Admissions",
];

interface RequestInfoFormProps {
  onSubmit: (data: RequestInfoSchema) => void;
}

export default function RequestInfoForm({ onSubmit }: RequestInfoFormProps) {
  const { t } = useTranslation("common");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RequestInfoSchema>({
    resolver: zodResolver(requestInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      departmentOfInterest: "",
      message: "",
    },
  });

  return (
    <form
      className="requestInfoSection__form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="requestInfoSection__formRow">
        <FormField
          label={t("requestInfoSection.form.labels.firstName")}
          htmlFor="request-firstName"
          error={errors.firstName?.message}
        >
          <input
            id="request-firstName"
            type="text"
            placeholder={t("requestInfoSection.form.placeholders.firstName")}
            {...register("firstName")}
            autoComplete="given-name"
            aria-invalid={errors.firstName != null}
          />
        </FormField>
        <FormField
          label={t("requestInfoSection.form.labels.lastName")}
          htmlFor="request-lastName"
          error={errors.lastName?.message}
        >
          <input
            id="request-lastName"
            type="text"
            placeholder={t("requestInfoSection.form.placeholders.lastName")}
            {...register("lastName")}
            autoComplete="family-name"
            aria-invalid={errors.lastName != null}
          />
        </FormField>
      </div>
      <FormField
        label={t("requestInfoSection.form.labels.email")}
        htmlFor="request-email"
        error={errors.email?.message}
      >
        <input
          id="request-email"
          type="email"
          placeholder={t("requestInfoSection.form.placeholders.email")}
          {...register("email")}
          autoComplete="email"
          aria-invalid={errors.email != null}
        />
      </FormField>
      <FormField
        label={t("requestInfoSection.form.labels.departmentOfInterest")}
        htmlFor="request-department"
        error={errors.departmentOfInterest?.message}
      >
        <select
          id="request-department"
          {...register("departmentOfInterest")}
          aria-invalid={errors.departmentOfInterest != null}
        >
          <option value="">
            {t("requestInfoSection.form.placeholders.departmentOfInterest")}
          </option>
          {DEPARTMENT_OPTIONS.map((dept) => (
            <option key={dept} value={dept}>
              {dept}
            </option>
          ))}
        </select>
      </FormField>
      <FormField
        label={t("requestInfoSection.form.labels.message")}
        htmlFor="request-message"
        error={errors.message?.message}
      >
        <textarea
          id="request-message"
          rows={5}
          placeholder={t("requestInfoSection.form.placeholders.message")}
          {...register("message")}
          aria-invalid={errors.message != null}
        />
      </FormField>
      <button type="submit" className="requestInfoSection__submit">
        {t("requestInfoSection.form.submitButton")}
      </button>
    </form>
  );
}
