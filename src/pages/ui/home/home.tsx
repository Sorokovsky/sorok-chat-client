import {FC, JSX, useEffect} from 'react';
import clsx from 'classnames';
import styles from "./home.module.scss";
import {Chat, ChatsSidebar, useCurrentChat, useGetChannelsByMe} from "@/features/chats";

export const HomePage: FC = (): JSX.Element => {
    "use no memo"
    const { data: chats } = useGetChannelsByMe();
    const { currentChat, setCurrentChat, clearCurrentChat } = useCurrentChat();

    useEffect(() => {
        if (currentChat && chats && Array.isArray(chats)) {
            const newCurrentChat = chats.find(chat => chat.id === currentChat.id);
            if (newCurrentChat) {
                setCurrentChat(newCurrentChat);
            } else {
                clearCurrentChat();
            }
        }
    }, [chats, clearCurrentChat, currentChat, setCurrentChat]);
    return (
        <div className={clsx(styles.page)}>
            <ChatsSidebar/>
            {currentChat && <Chat chat={currentChat} />}
        </div>
    )
};