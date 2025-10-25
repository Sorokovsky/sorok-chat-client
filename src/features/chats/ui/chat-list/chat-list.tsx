import { type FC, type JSX } from "react";
import type { ChatListProps } from "./chat-list.props";
import clsx from 'classnames';
import styles from "./chat-list.module.scss";
import { Typography } from "@mui/material";
import { ChatItem } from "./chat-item/chat-item";

export const ChatList: FC<ChatListProps> = ({ title, chats }): JSX.Element => {
    return (
        <aside className={clsx(styles.chats)}>
            <Typography variant="h5">{title}</Typography>
            <ul>
                {chats.map(chat => <ChatItem key={chat.id} chat={chat} />)}
            </ul>
        </aside>
    );
};