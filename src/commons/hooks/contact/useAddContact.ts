import { saveUserContactService } from "@/commons/services/contact";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useAddContact() {
  const queryClient = useQueryClient();
  const router = useRouter();
  return useMutation({
    mutationFn: ({ id }: { id: string }) => saveUserContactService(id),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: async (data) => {
      await queryClient.invalidateQueries({
        queryKey: ["contacts"],
      });
      toast.success(data.message);
      router.back();
    },
  });
}
