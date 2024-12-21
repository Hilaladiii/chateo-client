"use server";

import { FetchApp } from "@/commons/utils/fetch";

export async function getUserContactService() {
  const contact = await FetchApp({
    path: "contact/user",
    option: {
      method: "GET",
    },
  });

  return contact;
}
