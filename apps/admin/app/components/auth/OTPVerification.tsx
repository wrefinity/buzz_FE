"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot
} from "@/components/ui/input-otp";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface OTPVerificationProps {
  onSubmit: (otp: any) => Promise<void>;
  isLoading: boolean;
  onResendOTP: () => Promise<void>;
}

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters."
  })
});

export function OTPVerification({ onSubmit, isLoading, onResendOTP }: OTPVerificationProps) {
  const [resendLoading, setResendLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: ""
    }
  });

  function handleSubmit(values: z.infer<typeof FormSchema>) {
    onSubmit(values.pin);
  }

  async function handleResendOTP() {
    setResendLoading(true);
    await onResendOTP();
    setResendLoading(false);
  }

  return (
    <div className="container flex w-full h-full py-8 bg-white shadow-md md:p-5 md:px-4 md:mx-auto rounded-xl md:max-w-7xl ">
      <div className="flex flex-col w-full space-y-5 md:p-10 lg:w-1/2">
        <h2 className="text-2xl font-semibold text-center">
          Verify Your Account
        </h2>
        <p className="px-5 text-center text-gray-600">
          We've sent a 6-digit code to your email. Please enter it below to
          verify your account.
        </p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="self-center space-y-4">
            <FormField
              control={form.control}
              name="pin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>One-Time Code</FormLabel>
                  <FormControl>
                    <InputOTP maxLength={6} {...field}>
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#014D6E] hover:bg-[#15293f]"
              size="lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Verify OTP"
              )}
            </Button>
          </form>
        </Form>
        <div className="flex flex-col items-center space-y-4">
          <Button
            variant="outline"
            onClick={handleResendOTP}
            disabled={resendLoading}
          >
            {resendLoading ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : null}
            Resend OTP
          </Button>
          <Link href="/sign-in" className="text-sm text-[#014D6E] hover:underline">
            Back to Login
          </Link>
        </div>
      </div>
      <div className="hidden lg:flex w-1/2 bg-[#014D6E] text-white p-10 rounded-xl">
        <div className="flex flex-col justify-center w-full max-w-lg mx-auto">
          <h2 className="max-w-sm mb-4 text-3xl font-bold">
            Very awesome rewards are waiting for you
          </h2>
          <p className="mb-8 text-2xl">Verify your email</p>
          <Image
            width={500}
            height={500}
            src="/signUp.svg"
            alt="Authentication preview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

