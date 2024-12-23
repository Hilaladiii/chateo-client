import { verificationService } from "@/commons/services/user";
import { TVerification } from "@/commons/validator/verification";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useVerify() {
  const router = useRouter();
  return useMutation({
    mutationFn: (data: TVerification) => verificationService(data),
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data);
      router.push("/login");
    },
  });
}
