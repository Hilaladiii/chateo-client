"use server";

import { TLogin } from "@/commons/validator/loginValidator";
import { TRegister } from "@/commons/validator/registerValidator";
import { TVerification } from "@/commons/validator/verificationValidator";

export async function registerService(userData: TRegister) {
  const res = await fetch(`${process.env.BASE_API_URL}/user/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  return await res.json();
}

export async function verificationService(data: TVerification) {
  const res = await fetch(`${process.env.BASE_API_URL}/user/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return await res.json();
}

export async function loginService(data: TLogin) {
  const res = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await res.json();
}
