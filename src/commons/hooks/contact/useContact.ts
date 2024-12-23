import { getUserContactService } from "@/commons/services/contact";
import { useQuery } from "@tanstack/react-query";

export function useContact() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getUserContactService,
    staleTime: Infinity,
  });
}
