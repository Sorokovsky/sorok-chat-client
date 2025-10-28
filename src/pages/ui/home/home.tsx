import { FC, JSX, useEffect, useState, useCallback } from 'react';
import clsx from 'classnames';
import styles from "./home.module.scss";
import { Chat, ChatList, useCurrentChat, useGetChannelsByMe } from "@/features/chats";

export const HomePage: FC = (): JSX.Element => {
    "use no memo"
    const { data: chats } = useGetChannelsByMe();
    const { currentChat, setCurrentChat, clearCurrentChat } = useCurrentChat();
    const [isChatsOpened, setIsChatsOpened] = useState(true);

    const toggleIsOpened = useCallback(() => {
        setIsChatsOpened(prev => !prev);
    }, [isChatsOpened]);

    useEffect(() => {
        if (currentChat && chats && Array.isArray(chats)) {
            const newCurrentChat = chats.find(chat => chat.id === currentChat.id);
            if (newCurrentChat) {
                setCurrentChat(newCurrentChat);
            } else {
                clearCurrentChat();
            }
        }
    }, [chats]);
    return (
        <div className={clsx(styles.page)}>
            <ChatList title="Чати" chats={chats || []} opened={isChatsOpened} toggleIsOpened={toggleIsOpened} />
            {currentChat && <Chat chat={currentChat} />}
        </div>
    )
};