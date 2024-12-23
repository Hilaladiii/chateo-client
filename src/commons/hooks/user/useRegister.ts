import { registerService } from "@/commons/services/user";
import { TRegister } from "@/commons/validator/register";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useRegister() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: TRegister) => registerService(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data, { email }) => {
      toast.success(data.message);
      router.push(`/verify/${email}`);
    },
  });
}
