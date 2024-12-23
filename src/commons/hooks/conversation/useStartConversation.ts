import { createConversationService } from "@/commons/services/conversation";
import { TCreateConversation } from "@/commons/validator/conversation";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useStartConversation() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: TCreateConversation) => createConversationService(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (res) => {
      router.push(`/chat/${res.data.id}`);
    },
  });
}
