export interface IContact {
  id: string;
  username: string;
  image: string;
  bio: string;
}

export interface IConversation {
  id: string;
  name?: string;
  lastMessageAt: string;
  users: IUser[];
  message: IMessage[];
}

export interface IMessage {
  id: string;
  content?: string;
  image?: string;
  seenIds: string[];
  senderId: string;
  conversationId: string;
}
