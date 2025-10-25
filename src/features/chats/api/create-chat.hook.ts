import { HOME_ROUTE } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { CREATE_CHAT } from "../constants/queries";
import type { NewChannel } from "../models";
import { channelsService } from './channels.service';

export const useCreateChat = () => {
    const navigate = useNavigate();
    return useMutation({
        mutationKey: [CREATE_CHAT],
        mutationFn: async (chat: NewChannel) => channelsService.createChannel(chat),
        onSuccess() {
            navigate(HOME_ROUTE.path);
        }
    });
};