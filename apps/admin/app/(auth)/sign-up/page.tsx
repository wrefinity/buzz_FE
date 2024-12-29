"use client";

import AuthForm from "@/app/components/auth/auth-form";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import useAxios from "@/hooks/useAxios";
import { registerUrl } from "@/service/auth";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { axiosHandler } = useAxios();
  const handelSignUpSubmit = async (data: any) => {
    console.log(data);
    setLoading(true);
    try {
      console.log(data);
      const result = await axiosHandler(registerUrl, "POST", data);
      if (result) {
        toast.success("Registration successful, please verify your email");
        router.replace(`/verify?email=${data.email}`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  };
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
          onSubmit={(data) => handelSignUpSubmit(data)}
          imageUrl="/signUp.svg"
          isLoading={loading}
        />
      </div>
    </BannerLayout>
  );
};

export default SignUpPage;
