import { FC, JSX } from "react";
import clsx from 'classnames';
import styles from "./home.module.scss";
import { ChatList, useGetChannelsByMe } from "@/features/chats";

export const HomePage: FC = (): JSX.Element => {
    const { data: chats } = useGetChannelsByMe();
    return (
        <div className={clsx(styles.page)}>
            <ChatList title="Чати" chats={chats || []} />
        </div>
    )
};