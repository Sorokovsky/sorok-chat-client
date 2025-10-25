import { Form } from "@/shared";
import type { FC, JSX } from "react";
import { useCreateChat } from '@/features/chats/api/create-chat.hook';
import { NewChannel } from '@/features/chats/models/new-channel';
import { NEW_CHANNEL_INPUT } from "@/features/chats/constants/new-channel-form";

export const NewChat: FC = (): JSX.Element => {
    const { mutate: create } = useCreateChat();

    return (
        <>
            <Form
                submitHandler={(chat) => create(chat as NewChannel)}
                submitText="Створити"
                title="Створення чату"
                inputs={NEW_CHANNEL_INPUT}
            />
        </>
    );
};