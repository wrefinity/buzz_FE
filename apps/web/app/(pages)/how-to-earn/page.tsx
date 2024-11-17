"use client";
import AdsBanner from "@/app/components/how-to-earn/AdsBanner";
import StepSectionComp from "@/app/components/how-to-earn/StepsSection";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import { MainLayout } from "@/app/components/MainLayout";
import { Separator } from "@/components/ui/separator";

const HowToEarnPage = () => {
  return (
    <BannerLayout
      title="How to Earn at BuzzRoom"
      description=" At BuzzRoom, earning rewards is easy and enjoyable! Simply sign up, explore our daily video tasks, and start watching to accumulate points. The more you watch, the more you earn track your progress in real-time and cash out when you’re ready. Join us and make your screen time rewarding!"
    >
      <div className="space-y-5">
        <MainLayout>
          <StepSectionComp />
        </MainLayout>
        <AdsBanner />
      </div>
      <Separator />
    </BannerLayout>
  );
};

export default HowToEarnPage;
