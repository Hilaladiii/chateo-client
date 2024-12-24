"use server";

import { TLogin } from "@/commons/validator/login";
import { TRegister } from "@/commons/validator/register";
import { TVerification } from "@/commons/validator/verification";
import { cookies } from "next/headers";

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
  const cookieStore = await cookies();
  const res = await fetch(`${process.env.BASE_API_URL}/auth/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const response = await res.json();

  if (response.statusCode == 200) cookieStore.set("token", response.data);

  return response;
}
