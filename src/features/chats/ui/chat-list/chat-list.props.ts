import type { Channel } from "../../models";

export interface ChatListProps {
    chats: Channel[];
    title: string
    opened?: boolean;
    toggleIsOpened: () => void;
};