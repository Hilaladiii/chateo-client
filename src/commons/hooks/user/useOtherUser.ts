import { IConversation } from "@/commons/types/contact";
import { useCurrentUser } from "./getCurrentUser";
import { useMemo } from "react";

export function useOtherUser(conversation: IConversation) {
  const user = useCurrentUser();

  const otherUser = useMemo(() => {
    const emailUser = user.email;
    const otherUser = conversation.users.filter(
      (user) => user.email !== emailUser
    );

    return otherUser[0];
  }, [user.email, conversation.users]);

  return otherUser;
}
