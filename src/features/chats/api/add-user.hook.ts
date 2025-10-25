import { useMutation } from "@tanstack/react-query";
import { ADD_USER_TO_CHAT } from '../constants/queries';
import { useCurrentChat } from '../stores/current-chat.store';
import { channelsService } from "./channels.service";
import { useNavigate } from 'react-router';
import { HOME_ROUTE } from "@/shared";

export const useAddUser = () => {
    const chat = useCurrentChat(store => store.currentChat);
    const navigate = useNavigate();
    return useMutation({
        mutationKey: [ADD_USER_TO_CHAT],
        mutationFn: async (userEmail: string) => await channelsService.addUser(userEmail, chat!.id),
        onSuccess() {
            navigate(HOME_ROUTE.path);
        }
    });
};