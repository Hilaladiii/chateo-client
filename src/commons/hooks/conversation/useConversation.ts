import { getConversationService } from "@/commons/services/conversation";
import { useQuery } from "@tanstack/react-query";

export function useConversation() {
  return useQuery({
    queryKey: ["conversations"],
    queryFn: getConversationService,
  });
}
