import { loginService } from "@/commons/services/user";
import { TLogin } from "@/commons/validator/login";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useLogin() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: TLogin) => loginService(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      router.push("/chat");
    },
  });
}
