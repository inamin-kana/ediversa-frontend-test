import FeaturedProfessorsSection from "../sections/FeaturedProfessorsSection/FeaturedProfessorsSection";
import HeroSection from "../sections/HeroSection/HeroSection";
import InnovatingBannerSection from "../sections/InnovatingBannerSection/InnovatingBannerSection";
import LatestResearchSection from "../sections/LatestResearchSection/LatestResearchSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturedProfessorsSection />
      <LatestResearchSection />
      <InnovatingBannerSection />
      <p className="text-3xl font-bold underline">Hello World</p>
    </div>
  );
}
