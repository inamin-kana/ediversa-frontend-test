import { t } from "i18next";
import z from "zod";


export const requestInfoSchema = z.object({
  firstName: z.string().min(1, { message: t("requestInfoSection.form.errors.firstNameRequired") }),
  lastName: z.string().min(1, { message: t("requestInfoSection.form.errors.lastNameRequired") }),
  email: z
    .string()
    .min(1, { message: t("requestInfoSection.form.errors.emailRequired") })
    .email({ message: t("requestInfoSection.form.errors.invalidEmail") }),
  departmentOfInterest: z
    .string()
    .min(1, { message: t("requestInfoSection.form.errors.departmentRequired") }),
  message: z.string().max(1000, { message: t("requestInfoSection.form.errors.messageMax") }).optional(),
});

export type RequestInfoSchema = z.infer<typeof requestInfoSchema>;
