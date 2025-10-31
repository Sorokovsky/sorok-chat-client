import {type FC, type JSX} from "react";
import type {ChatListProps} from "./chat-list.props";
import clsx from 'classnames';
import styles from "./chat-list.module.scss";
import {Typography} from "@mui/material";
import {ChatItem} from "./chat-item/chat-item";
import {CREATE_CHAT_ROUTE, NavigationItem} from "@/shared";

export const ChatList: FC<ChatListProps> = ({title, chats}): JSX.Element => {
    return (
        <div className={clsx(styles.chats)}>
            <Typography variant="h5">{title}</Typography>
            <NavigationItem route={CREATE_CHAT_ROUTE}/>
            <ul>
                {chats.map(chat => <ChatItem key={chat.id} chat={chat} />)}
            </ul>
        </div>
    );
};