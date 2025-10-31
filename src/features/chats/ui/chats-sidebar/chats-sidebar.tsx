import {FC, JSX, useEffect} from "react";
import {Position, Sidebar} from "@/widgets";
import type {ChatsSidebarProps} from "./chats-sidebar.props";
import {useChatsSidebarStore, useCurrentChat, useGetChannelsByMe} from "@/features/chats";
import {ChatList} from "../chat-list/chat-list";

export const ChatsSidebar: FC<ChatsSidebarProps> = ({position = Position.left}): JSX.Element => {
    const isOpen = useChatsSidebarStore(state => state.isOpen);
    const show = useChatsSidebarStore(state => state.show);
    const currentChat = useCurrentChat(state => state.currentChat);
    useEffect(() => {
        if (!currentChat) {
            show();
        }
    }, [currentChat, show]);
    const {data: chats} = useGetChannelsByMe();
    return (
        <Sidebar position={position} isOpen={isOpen}>
            <ChatList chats={chats || []} title={"Чати"}/>
        </Sidebar>
    )
};