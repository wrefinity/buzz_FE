"use client";
import AboutUsComponent from "@/app/components/about/AboutComp";
import NewsletterSection from "@/app/components/about/NewsLetters";
import PartnersSection from "@/app/components/about/PartnersSection";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      <BannerLayout
        title="About Us"
        description=" Learn more about BuzzRoom! We’re dedicated to providing a fun and
              rewarding experience, helping you earn money by watching videos
              and engaging with content you love."
      >
        <div className="w-full space-y-5">
          <div className="w-full space-y-5">
            <AboutUsComponent />
            <PartnersSection />
            <NewsletterSection />
          </div>
        </div>
      </BannerLayout>
    </>
  );
};

export default AboutUsPage;
