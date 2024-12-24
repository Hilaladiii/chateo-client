"use server";

import { FetchApp } from "@/commons/utils/fetch";
import { TCreateConversation } from "@/commons/validator/conversation";

export async function createConversationService(data: TCreateConversation) {
  const res = await FetchApp({
    path: "conversation",
    option: {
      method: "POST",
      body: JSON.stringify(data),
    },
  });

  return res;
}

export async function getConversationService() {
  const res = await FetchApp({
    path: "conversation",
    option: {
      method: "GET",
    },
  });

  return res;
}
