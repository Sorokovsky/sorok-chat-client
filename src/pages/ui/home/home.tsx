import { FC, JSX } from "react";
import clsx from 'classnames';
import styles from "./home.module.scss";
import { Chat, ChatList, useCurrentChat, useGetChannelsByMe } from "@/features/chats";

export const HomePage: FC = (): JSX.Element => {
    const { data: chats } = useGetChannelsByMe();
    const currentChat = useCurrentChat(store => store.currentChat);
    return (
        <div className={clsx(styles.page)}>
            <ChatList title="Чати" chats={chats || []} />
            {currentChat && <Chat chat={currentChat} />}
        </div>
    )
};