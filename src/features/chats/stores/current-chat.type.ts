import { Channel } from "../models";

export type CurrentChatStore = {
    currentChat: Channel | null;
    setCurrentChat: (chat: Channel) => void;
    clearCurrentChat: () => void;
};