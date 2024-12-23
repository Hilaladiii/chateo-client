"use server";

import { FetchApp } from "@/commons/utils/fetch";

export async function getUserContactService() {
  const contact = await FetchApp({
    path: "contact",
    option: {
      method: "GET",
    },
  });

  return contact;
}

export async function findContactUserService(id: string) {
  const contact = await FetchApp({
    path: `contact/user?id=${id}`,
    option: { method: "GET" },
  });

  return contact;
}

export async function saveUserContactService(userSavedId: string) {
  const data = {
    userSavedId: userSavedId,
  };
  const res = await FetchApp({
    path: "contact/save",
    option: {
      method: "PUT",
      body: JSON.stringify(data),
    },
  });

  return res;
}
