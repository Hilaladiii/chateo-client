import { IConversation } from "@/commons/types/contact";
import { useMemo } from "react";

export function useLastMessage(conversation: IConversation) {
  return useMemo(() => {
    const lastMessageAt = new Date(conversation.lastMessageAt);
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    if (lastMessageAt >= today) {
      return lastMessageAt.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (lastMessageAt >= yesterday) {
      return "yesterday";
    } else {
      return lastMessageAt.toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
      });
    }
  }, [conversation.lastMessageAt]);
}
