"use client";

import { useConversation } from "@/commons/hooks/conversation/useConversation";
import ListChat from "./components/ListChat";

export default function ChatPage() {
  const { data, isLoading } = useConversation();
  const conversations = isLoading ? [] : data.data;
  return (
    <>
      <ListChat conversations={conversations} isLoading={isLoading} />
    </>
  );
}
