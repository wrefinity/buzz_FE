import { HeroSection } from "./components/home/HomeHero";
import { FeaturesSection } from "./components/home/Features";
import { JoinSection } from "./components/home/JoinSection";
import { CashOutSection } from "./components/home/Cashout";
import { TestimonialsSection } from "./components/home/Testimonal";
import { NewsletterSection } from "./components/home/Newsletter";
import DownloadNow from "./components/home/DownloadNow";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <JoinSection />
      <CashOutSection/>
     <TestimonialsSection/>
     <NewsletterSection/>
     <DownloadNow/>
    </div>
  );
}
