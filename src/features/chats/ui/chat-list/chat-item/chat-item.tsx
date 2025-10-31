import {FC, JSX, useCallback} from "react";
import type {ChatItemProps} from "./chat-item.props";
import clsx from "classnames";
import styles from "./chat-item.module.scss";
import {useChatsSidebarStore, useCurrentChat} from "@/features/chats/stores";

export const ChatItem: FC<ChatItemProps> = ({ chat }): JSX.Element => {
    const {setCurrentChat, currentChat} = useCurrentChat();
    const hideSidebar = useChatsSidebarStore(state => state.hide);
    const selectChat = useCallback(() => {
        setCurrentChat(chat);
        hideSidebar();
    }, [chat, hideSidebar, setCurrentChat]);
    return (
        <li className={clsx(styles.item, {
            [styles.active]: currentChat?.id === chat.id
        })} onClick={selectChat}>
            <strong>{chat.name}</strong>
            <p>{chat.description}</p>
        </li>
    );
};