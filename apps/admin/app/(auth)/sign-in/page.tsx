"use client";

import AuthForm from "@/app/components/auth/auth-form";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import React from "react";

const SingInPage = () => {
  return (
    <BannerLayout
      title="Welcome Back!"
      description="Welcome back to BuzzRoom! We're excited to have you with us
            again let’s dive back into earning rewards together!"
    >
      <div className="p-5 space-y-5">
        <AuthForm
          mode="login"
          onSubmit={(data) => console.log(data)}
          imageUrl="/welcomeBack.svg"
        />
      </div>
    </BannerLayout>
  );
};

export default SingInPage;
