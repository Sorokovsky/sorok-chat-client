import { type GetChannel } from "@/types/models/channel/get-channel.type"
import { type FC, type JSX } from "react";
import { ChatItem } from '../chat-item/chat-item';

interface Props {
    chats?: GetChannel[];
};

export const ChatMenu: FC<Props> = ({ chats = [] }): JSX.Element => {
    return (
        <ul>
            {chats.map(chat => <ChatItem key={chat.id} chat={chat} />)}
        </ ul>
    );
}