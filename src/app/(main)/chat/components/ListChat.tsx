import InputSearch from "@/commons/components/elements/InputSearch";
import ChatCard from "@/commons/components/fragments/ChatCard";
import ChatSkeleton from "@/commons/components/skeletons/ChatSkeleton";
import { IConversation } from "@/commons/types/contact";

export default function ListChat({
  conversations,
  isLoading,
}: {
  conversations: IConversation[];
  isLoading: boolean;
}) {
  return (
    <>
      <InputSearch className="my-4" fullWidth />
      <div className="flex flex-col gap-4">
        {isLoading
          ? [...new Array(5)].map((_, index) => <ChatSkeleton key={index} />)
          : conversations.map((conversation: IConversation, index: number) => (
              <ChatCard conversation={conversation} key={index} />
            ))}
      </div>
    </>
  );
}
