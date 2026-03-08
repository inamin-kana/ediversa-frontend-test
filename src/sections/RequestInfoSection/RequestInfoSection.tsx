import { useTranslation } from "react-i18next";
import { EmailIcon, PlacePinIcon } from "../../components/Icons";
import type { RequestInfoSchema } from "../../schemas/requestInfoSchema";
import RequestInfoForm from "./RequestInfoForm";
import "./RequestInfoSection.scss";

export default function RequestInfoSection() {
  const { t } = useTranslation("common");

  const handleSubmit = (data: RequestInfoSchema) => {
    console.log(data);
  };

  return (
    <section
      className="requestInfoSection section"
      aria-labelledby="request-info-heading"
    >
      <div className="requestInfoSection__inner section__inner">
        <div className="requestInfoSection__body">
          <h2 id="request-info-heading" className="requestInfoSection__title">
            {t("requestInfoSection.title")}
          </h2>
          <p className="requestInfoSection__description">
            {t("requestInfoSection.description")}
          </p>
          <dl className="requestInfoSection__infoList">
            <div className="requestInfoSection__infoItem">
              <div className="requestInfoSection__infoItemIcon">
                <PlacePinIcon />
              </div>
              <div className="requestInfoSection__infoItemBody">
                <dt className="requestInfoSection__infoItemTitle pc-only">
                  {t("requestInfoSection.addressLabel")}
                </dt>
                <dd className="requestInfoSection__infoItemDetail">
                  {t("requestInfoSection.address")}
                </dd>
              </div>
            </div>
            <div className="requestInfoSection__infoItem">
              <div className="requestInfoSection__infoItemIcon">
                <EmailIcon />
              </div>
              <div className="requestInfoSection__infoItemBody">
                <dt className="requestInfoSection__infoItemTitle pc-only">
                  {t("requestInfoSection.emailLabel")}
                </dt>
                <dd className="requestInfoSection__infoItemDetail">
                  {t("requestInfoSection.email")}
                </dd>
              </div>
            </div>
          </dl>
        </div>
        <RequestInfoForm onSubmit={handleSubmit} />
      </div>
    </section>
  );
}
