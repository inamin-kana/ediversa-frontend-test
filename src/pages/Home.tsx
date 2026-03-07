import FeaturedProfessorsSection from "../sections/FeaturedProfessorsSection/FeaturedProfessorsSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import InnovatingBannerSection from "../sections/InnovatingBannerSection/InnovatingBannerSection";
import LatestResearchSection from "../sections/LatestResearchSection/LatestResearchSection";
import RequestInfoSection from "../sections/RequestInfoSection/RequestInfoSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProfessorsSection />
      <LatestResearchSection />
      <InnovatingBannerSection />
      <RequestInfoSection />
    </div>
  );
}
