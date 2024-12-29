import { BASE_URL } from "@/utils/constants";

export const registerUrl = `${BASE_URL}api/auth/register`
export const loginUrl = `${BASE_URL}api/auth/login`
export const verifyUrl = `${BASE_URL}api/auth/verify`
export const resendCodeUrl = `${BASE_URL}api/auth/reset-code`
export const passwordResetUrl = `${BASE_URL}api/auth/password-reset`
export const updateProfile = `${BASE_URL}api/auth/profile-update`