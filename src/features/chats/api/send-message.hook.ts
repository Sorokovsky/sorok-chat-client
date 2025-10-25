import { useMutation } from "@tanstack/react-query";
import { SEND_MESSAGE } from "../constants/routes";
import type { Channel, NewMessage } from "../models";
import { useCurrentChat } from "../stores";
import { channelsService } from "./channels.service";

export const useSendMessage = () => {
    const currentChannel = useCurrentChat(store => store.currentChat);
    return useMutation({
        mutationKey: [SEND_MESSAGE],
        mutationFn: async (message: NewMessage): Promise<Channel> => await channelsService.sendMessage(message, currentChannel!.id),
    });
};