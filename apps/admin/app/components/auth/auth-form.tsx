"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface AuthFormProps {
  mode: "login" | "signup";
  onSubmit: (data: any) => void;
  imageUrl: string;
  isLoading: boolean;
}

export default function Component({
  mode = "login",
  onSubmit = () => {},
  imageUrl,
  isLoading = false
}: AuthFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isLogin = mode === "login";
  const title = isLogin ? "Login" : "Sign up";
  const subtitle = isLogin
    ? "How do I get started lorem ipsum dolor sit?"
    : "Start your 30-day free trial.";
  const buttonText = isLogin ? "Sign in" : "Get started";
  const altText = isLogin ? "Don't have an account?" : "Already a member?";
  const altLink = isLogin ? "/sign-up" : "/sign-in";
  const altLinkText = isLogin ? "Sign up" : "Sign in";

  return (
    <div className="container flex w-full h-full py-8 bg-white shadow-md md:p-5 md:px-4 md:mx-auto rounded-xl md:max-w-7xl ">
      <div className="flex flex-col w-full space-y-5 md:p-10 lg:w-1/2">
        <div className="flex-1 px-10">
          <h1 className="mb-2 text-2xl font-semibold">{title}</h1>
          <p className="mb-8 text-sm text-muted-foreground">{subtitle}</p>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(Object.fromEntries(new FormData(e.currentTarget)));
            }}
            className="space-y-4"
          >
            {!isLogin && (
              <div className="space-y-2">
                <Input
                  name="username"
                  placeholder="Username"
                  required
                  className="bg-[#F7F7F9] border border-[#DBDCDE] rounded-lg shadow-sm px-6 py-3 h-auto text-base placeholder:text-gray-400"
                />
              </div>
            )}

            <div className="space-y-2">
              <Input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="bg-[#F7F7F9] border border-[#DBDCDE] rounded-lg shadow-sm px-6 py-3 h-auto text-base placeholder:text-gray-400"
              />
            </div>

            <div className="relative space-y-2">
              <Input
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                required
                className="bg-[#F7F7F9] border border-[#DBDCDE] rounded-lg shadow-sm px-6 py-3 h-auto text-base placeholder:text-gray-400"
              />
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute top-0 right-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff className="w-4 h-4" />
                ) : (
                  <Eye className="w-4 h-4" />
                )}
                <span className="sr-only">Toggle password visibility</span>
              </Button>
            </div>

            {isLogin && (
              <div className="flex justify-end">
                <Link
                  href="/forgot-password"
                  className="text-sm text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
            )}

            <Button
              className="w-full bg-[#014D6E] hover:bg-[#15293f]"
              type="submit"
              size={"lg"}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                buttonText
              )}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="px-2 bg-background text-muted-foreground">
                  Or
                </span>
              </div>
            </div>

            <Button
              variant="outline"
              className="w-full"
              type="button"
              size={"lg"}
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Sign {isLogin ? "in" : "up"} with Google
            </Button>

            <Button
              variant="outline"
              className="w-full"
              type="button"
              size={"lg"}
            >
              <svg className="w-4 h-4 mr-2" fill="#1877f2" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Sign {isLogin ? "in" : "up"} with Facebook
            </Button>
          </form>
        </div>

        <div className="text-sm text-center ">
          <span className="text-muted-foreground">{altText}</span>{" "}
          <Link href={altLink} className="text-primary hover:underline">
            {altLinkText}
          </Link>
          {!isLogin && (
            <p className="mt-4 text-xs text-muted-foreground">
              You are agreeing to the{" "}
              <Link href="/terms" className="text-[#014D6E] hover:underline">
                Terms of Services
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-[#014D6E] hover:underline">
                Privacy Policy
              </Link>
            </p>
          )}
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 bg-[#014D6E] text-white p-10 rounded-xl">
        <div className="flex flex-col justify-center w-full max-w-lg mx-auto">
          <h2 className="max-w-sm mb-4 text-3xl font-bold">
            Very {isLogin ? "awesome rewards" : "good works"} are waiting for
            you
          </h2>
          <p className="mb-8 text-2xl">
            {isLogin ? "Login Now!" : "Sign up Now"}
          </p>
          <img
            src={imageUrl}
            alt="Authentication preview"
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}
