"use server";

import { FetchApp } from "@/commons/utils/fetch";
import { TCreateConversation } from "@/commons/validator/conversationValidator";

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
