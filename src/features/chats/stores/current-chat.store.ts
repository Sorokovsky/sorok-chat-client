import { create } from "zustand";
import type { Channel } from "../models";
import type { CurrentChatStore } from "./current-chat.type";

export const useCurrentChat = create<CurrentChatStore>((set, get) => {
    return {
        currentChat: null,
        setCurrentChat(chat: Channel) {
            const previus: CurrentChatStore = get();
            return set({ ...previus, currentChat: chat });
        },
        clearCurrentChat() {
            const previus: CurrentChatStore = get();
            return set({ ...previus, currentChat: null });
        },
    };
});