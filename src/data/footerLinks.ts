export interface FooterNavLink {
  labelKey: string;
  href: string;
}

export interface FooterNavColumn {
  titleKey: string;
  links: FooterNavLink[];
}

export const footerNavColumns: FooterNavColumn[] = [
  {
    titleKey: "footer.academic",
    links: [
      { labelKey: "footer.links.undergraduateMd", href: "#" },
      { labelKey: "footer.links.graduateStudies", href: "#" },
      { labelKey: "footer.links.medicalEducation", href: "#" },
      { labelKey: "footer.links.globalHealth", href: "#" },
    ],
  },
  {
    titleKey: "footer.departments",
    links: [
      { labelKey: "footer.links.cardiology", href: "#" },
      { labelKey: "footer.links.oncology", href: "#" },
      { labelKey: "footer.links.neurology", href: "#" },
      { labelKey: "footer.links.pediatrics", href: "#" },
    ],
  },
  {
    titleKey: "footer.clinicalServices",
    links: [
      { labelKey: "footer.links.universityHospital", href: "#" },
      { labelKey: "footer.links.specializedClinics", href: "#" },
      { labelKey: "footer.links.patientPortal", href: "#" },
      { labelKey: "footer.links.emergencyCare", href: "#" },
    ],
  },
  {
    titleKey: "footer.resources",
    links: [
      { labelKey: "footer.links.medicalLibrary", href: "#" },
      { labelKey: "footer.links.researchArchives", href: "#" },
      { labelKey: "footer.links.facultyPortal", href: "#" },
      { labelKey: "footer.links.studentEmail", href: "#" },
    ],
  },
];
