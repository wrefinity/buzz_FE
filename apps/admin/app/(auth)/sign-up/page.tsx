"use client";

import AuthForm from "@/app/components/auth/auth-form";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import React from "react";

const SignUpPage = () => {
  return (
    <BannerLayout
      title="Get Started and Start Earning"
      description="Get started with BuzzRoom today and begin your journey to earning
            rewards by watching videos. Don't wait—unlock your earning potential
            now!"
    >
      <div className="p-5 space-y-5">
        <AuthForm
          mode="signup"
          onSubmit={(data) => console.log(data)}
          imageUrl="/signUp.svg"
        />
      </div>
    </BannerLayout>
  );
};

export default SignUpPage;
