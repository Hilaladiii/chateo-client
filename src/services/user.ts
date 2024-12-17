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

  const response = await res.json();
  return response;
}

export async function verificationService(data: TVerification) {
  const res = await fetch(`${process.env.BASE_API_URL}/user/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const response = await res.json();
  return response;
}
