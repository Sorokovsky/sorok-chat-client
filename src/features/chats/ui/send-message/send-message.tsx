import { TextInput } from "@/shared";
import { Button } from "@mui/material";
import type { FC, JSX } from "react";
import { useForm } from "react-hook-form";
import clsx from 'classnames';
import styles from "./send-message.module.scss";
import type { NewMessage } from "@/features/chats/models";
import { signMessage } from "@/features/chats/api/signing";
import { useGetProfile } from "@/features/authentication";
import { useSendMessage } from "@/features/chats/api";

export const SendMessage: FC = (): JSX.Element => {
    const { register, handleSubmit, reset } = useForm();
    const { data: user } = useGetProfile();
    const { mutate: send } = useSendMessage();

    const sendMessage = (data: unknown) => {
        if (typeof data === "object" && data) {
            const message = data as NewMessage;
            message.mac = signMessage(message.text, user!.macSecret);
            send(message);
            reset();
        }
    };

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