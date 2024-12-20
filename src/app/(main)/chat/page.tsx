import InputSearch from "@/commons/components/elements/InputSearch";
import ChatCard from "@/commons/components/fragments/ChatCard";

export default function ChatPage() {
  return (
    <div>
      <InputSearch className="my-4" fullWidth />
      <ChatCard />
    </div>
  );
}
