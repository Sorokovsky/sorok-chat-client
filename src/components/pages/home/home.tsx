"use client"
import { useFilterAccess } from "@/hooks/use-filter-access.hook";
import clsx from "clsx";
import {NextPage} from "next";
import { JSX, useState } from 'react';
import styles from "./home.module.scss";
import { useGetMyChannels } from '@/hooks/get-my-channels.hooks';
import { Channel } from "@/contracts/channel.contract";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Typography } from "@mui/material";
import { FormEvent } from "react";
import { NewMessage } from "@/contracts/new-message.contract";
import { useWriteMessage } from "@/hooks/write-message.hook";
import hmac from "crypto-js/hmac-sha256";
import { useGetProfile } from "@/hooks/get-profile.hook";

const generateMac = (text: string, secret: string): string => {
    return hmac(text, secret).toString();
};

export const HomePage: NextPage = (): JSX.Element => {
    useFilterAccess(true);
    const { data: channels } = useGetMyChannels();
    const [currentChannel, setCurrentChannel] = useState<Channel | null>(null);
    const { data: user } = useGetProfile();
    const {mutate: write} = useWriteMessage();
    const [text, setText] = useState("");
    const onChannelClick = (id: number) => {
        setCurrentChannel(channels?.filter(channel => channel.id == id)[0]!);
    };
    const sendMessage = (text: string) => {
        const message: NewMessage = { text, mac: generateMac(text, user!.email) };
        
        write({ message, channelId: currentChannel!.id });
    }
    return (
        <div className={styles.page}>
            <div className={clsx(styles.chats)}>
                <ul>
                    {channels?.map(({name, description, id}) => (
                        <li
                            onClick={() => onChannelClick(id)}
                            key={id} className={clsx({
                            [styles.current]: currentChannel?.id === id
                        })}>
                            <strong>{name}</strong>
                            <p>{description}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={clsx(styles.messages)}>
                <Typography variant="h4">{currentChannel?.name}</Typography>
                <ul>
                    {currentChannel && currentChannel.messages.map((message => (
                        <li key={message.id}>
                            <strong>Автор: {message.author.lastName} {message.author.firstName} {message.author.middleName}</strong>
                            <p>{message.text}</p>
                            <p>{message.createdAt.toString()}</p>
                            <p>Повідрмлення {generateMac(message.text, message.author.email) === message.mac ? "перевірино" : "пошкоджено"}</p>
                        </li>
                )))}
                </ul>
                {currentChannel && <Box
                    component={"form"}
                    className={clsx(styles.form)}
                    onSubmit={(event: FormEvent<HTMLFormElement>) => {
                        event.preventDefault();
                        const data = new FormData(event.target as HTMLFormElement);
                        sendMessage(data.get("text") as string);
                    }}
                >
                    <TextField
                        name={"text"}
                        value={text}
                        id={"text"}
                        type={"text"}
                        placeholder={"Текст повідомлення"}
                        label={"Повідомлення"}
                        onChange={event => setText(event.target.value)}
                    />
                    <Button
                        type={"submit"}
                        variant={"outlined"}
                    >Відправити</Button>
                </Box>}
            </div>
        </div>
    );
}