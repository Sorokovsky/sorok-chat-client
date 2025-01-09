"use client"
import { useGetChannels } from "@/hooks/use-get-channels.hook";
import { type JSX, type FC } from "react";
import { ChatMenu } from "../ui/chats/chat-menu/chat-menu";
import { Loader } from "../ui/loader/loader";

export const Chats: FC = (): JSX.Element => {
    const { data, isPending } = useGetChannels();
    return <>{isPending ? <Loader /> : <ChatMenu chats={data} /> }</>
}