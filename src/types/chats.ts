import { UserType } from "./auth";

export type ChatCardType = {
  chatType: 'private' | 'group',
  lastMessage: string | null,
  messages: [],
  participants: UserType[],
  _id: string
};