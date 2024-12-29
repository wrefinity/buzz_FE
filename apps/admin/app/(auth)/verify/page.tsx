"use client";

import { use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAxios from "@/hooks/useAxios";
import { toast } from "sonner";
import { verifyUrl, resendCodeUrl } from "@/service/auth";
import { OTPVerification } from "@/app/components/auth/OTPVerification";
import BannerLayout from "@/app/components/Layout/BannerLayout";

const VerifyPage = (props: { searchParams: Record<string, string> }) => {
  const params = props.searchParams;
  console.log(params);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { axiosHandler } = useAxios();

  const handleVerifySubmit = async (otp: string) => {
    setLoading(true);
    try {
      const result = await axiosHandler(verifyUrl, "POST", {
        email: params.email,
        token: otp
      });
      if (result) {
        toast.success("Email verified successfully");
        router.replace("/");
      }
    } catch (error) {
      console.error(error);
      toast.error("Verification failed. Please try again.");
    }
    setLoading(false);
  };

  const handleResendOTP = async () => {
    try {
      await axiosHandler(resendCodeUrl, "POST");
      toast.success("New OTP sent to your email");
    } catch (error) {
      console.error(error);
      toast.error("Failed to resend OTP. Please try again.");
    }
  };

  return (
    <BannerLayout
      title="Get Started and Start Earning"
      description="Get started with BuzzRoom today and begin your journey to earning
            rewards by watching videos. Don't wait—unlock your earning potential
            now!"
    >
      <div className="p-5 space-y-5">
        <OTPVerification
          onSubmit={handleVerifySubmit}
          isLoading={loading}
          onResendOTP={handleResendOTP}
        />
      </div>
    </BannerLayout>
  );
};

export default VerifyPage;
