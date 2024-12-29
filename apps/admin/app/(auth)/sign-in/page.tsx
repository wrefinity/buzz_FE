"use client";

import AuthForm from "@/app/components/auth/auth-form";
import BannerLayout from "@/app/components/Layout/BannerLayout";
import { useStore } from "@/context/storeProvider";
import useAxios from "@/hooks/useAxios";
import { loginUrl } from "@/service/auth";
import { auth_token, session_active } from "@/utils/constants";
import { ActionTypeEnum, IUser, loginResponseType } from "@/utils/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const SingInPage = () => {
  const { axiosHandler } = useAxios();
  const {dispatch} = useStore()
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const handelSignInSubmit = async (data: any) => {
    setLoading(true);
    try {
      console.log(data);
      const result = await axiosHandler<loginResponseType, typeof data>(loginUrl, "POST", data);
      if (result) {
        console.log(result);
        dispatch({type: ActionTypeEnum.SetActiveUser, payload: result.user as IUser})
        localStorage.setItem(auth_token, result.token)
        localStorage.setItem("user", JSON.stringify(result.user));
        localStorage.removeItem(session_active)
        toast.success(result.message);
        router.replace(`/`);
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <BannerLayout
      title="Welcome Back!"
      description="Welcome back to BuzzRoom! We're excited to have you with us
            again let’s dive back into earning rewards together!"
    >
      <div className="p-5 space-y-5">
        <AuthForm
          mode="login"
          onSubmit={(data) => handelSignInSubmit(data)}
          imageUrl="/welcomeBack.svg"
          isLoading={loading}
        />
      </div>
    </BannerLayout>
  );
};

export default SingInPage;
