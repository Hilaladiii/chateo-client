"use server";

import { cookies } from "next/headers";

interface IFetchApp {
  path: string;
  option?: RequestInit;
}

export async function FetchApp({ path, option }: IFetchApp) {
  const cookie = await cookies();
  const res = await fetch(`${process.env.BASE_API_URL}/${path}`, {
    headers: {
      Authorization: `Bearer ${cookie.get("token")?.value}`,
      "Content-Type": "application/json",
    },
    ...option,
  });
  return await res.json();
}
