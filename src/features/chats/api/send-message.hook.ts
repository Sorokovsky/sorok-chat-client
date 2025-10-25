import { useMutation } from "@tanstack/react-query";
import { SEND_MESSAGE } from "../constants/routes";
import type { Message, NewMessage } from "../models";
import { useCurrentChat } from "../stores";
import { channelsService } from "./channels.service";

export const useSendMessage = () => {
    const currentChannel = useCurrentChat(store => store.currentChat);
    return useMutation({
        mutationKey: [SEND_MESSAGE],
        mutationFn: async (message: NewMessage): Promise<Message> => await channelsService.sendMessage(message, currentChannel!.id),
    });
};