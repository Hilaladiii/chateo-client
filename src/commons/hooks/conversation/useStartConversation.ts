import { createConversationService } from "@/commons/services/conversation";
import { TCreateConversation } from "@/commons/validator/conversation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useStartConversation() {
  const router = useRouter();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: TCreateConversation) => createConversationService(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (res) => {
      router.push(`/chat/${res.data.id}`);
      queryClient.invalidateQueries({ queryKey: ["conversations"] });
    },
  });
}
