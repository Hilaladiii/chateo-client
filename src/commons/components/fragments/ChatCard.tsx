import { IConversation } from "@/commons/types/contact";
import Avatar from "../elements/Avatar";
import { useOtherUser } from "@/commons/hooks/user/useOtherUser";
import { useMemo } from "react";
import { useLastMessage } from "@/commons/hooks/conversation/useLastMessage";

interface IChatCard {
  conversation: IConversation;
}

export default function ChatCard({ conversation }: IChatCard) {
  const otherUser = useOtherUser(conversation);

  const lastMessageAt = useLastMessage(conversation);
  const lastMessage = useMemo(() => {
    const messages = conversation.message || [];

    return messages[messages.length - 1];
  }, [conversation.message]);

  const content = useMemo(() => {
    if (lastMessage?.image) {
      return "Gambar ";
    }
    if (lastMessage?.content) return lastMessage.content;

    return "Start a Conversation";
  }, [lastMessage]);
  return (
    <div className="flex flex-row gap-3 ">
      <Avatar imageUrl={otherUser?.image!} />
      <div className="w-full flex flex-col ">
        <div className="flex justify-between items-center">
          <h1 className="body1 text-active">{otherUser?.username!}</h1>
        </div>
        <div className="flex justify-between items-center mt-1 ">
          <p className="metadata1 text-disabled w-32 line-clamp-1">{content}</p>
          <p className="metadata2 text-neutralWeak">
            {lastMessageAt.toString()}
          </p>
        </div>
      </div>
    </div>
  );
}
