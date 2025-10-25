import { FC, JSX } from "react";
import clsx from 'classnames';
import styles from "./home.module.scss";
import { Chat, ChatList, useGetChannelsByMe } from "@/features/chats";

export const HomePage: FC = (): JSX.Element => {
    const { data: chats } = useGetChannelsByMe();
    return (
        <div className={clsx(styles.page)}>
            <ChatList title="Чати" chats={chats || []} />
            {chats !== undefined && chats.length > 0 && <Chat chat={chats[0]} />}
        </div>
    )
};