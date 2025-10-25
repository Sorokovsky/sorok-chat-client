import { TextInput } from "@/shared";
import { Button } from "@mui/material";
import { FC, JSX, useEffect } from "react";
import { useForm } from "react-hook-form";
import clsx from 'classnames';
import styles from "./send-message.module.scss";
import type { NewMessage } from "@/features/chats/models";
import { signMessage } from "@/features/chats/api/signing";
import { useGetProfile } from "@/features/authentication";
import { useSendMessage } from "@/features/chats/api";
import { useCurrentChat } from "@/features/chats/stores";

export const SendMessage: FC = (): JSX.Element => {
    const { register, handleSubmit, reset } = useForm();
    const { data: user } = useGetProfile();
    const { mutate: send, data: retrievedChat } = useSendMessage();
    const { currentChat: chat, setCurrentChat } = useCurrentChat();

    const sendMessage = (data: unknown) => {
        if (typeof data === "object" && data) {
            const message = data as NewMessage;
            message.mac = signMessage(message.text, user!.macSecret);
            send(message);
            reset();
        }
    };

    useEffect(() => {
        if (retrievedChat && chat && chat.messages) {
            setCurrentChat(retrievedChat);
        }
    }, [retrievedChat]);

    return (
        <form className={clsx(styles.form)} onSubmit={handleSubmit(sendMessage)}>
            <TextInput
                register={register}
                registerOptions={{
                    required: true
                }}
                type="text"
                label="Повідомлення"
                name="text"
            />
            <Button type="submit" variant="contained">Відправити</Button>
        </form>
    );
};