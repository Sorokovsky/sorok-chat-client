import type { FC, JSX } from "react";
import type { ChatItemProps } from "./chat-item.props";
import clsx from "classnames";
import styles from "./chat-item.module.scss";
import { useCurrentChat } from "@/features/chats/stores";

export const ChatItem: FC<ChatItemProps> = ({ chat }): JSX.Element => {
    const {setCurrentChat, currentChat} = useCurrentChat();
    return (
        <li className={clsx(styles.item, {
            [styles.active]: currentChat?.id === chat.id
        })} onClick={() => setCurrentChat(chat)} >
            <strong>{chat.name}</strong>
            <p>{chat.description}</p>
        </li>
    );
};