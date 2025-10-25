import { useCurrentChat } from '@/features/chats';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { LOGOUT_KEY, PROFILE_KEY } from '../constants/queries';
import { authenticationService } from "./authentication.service";

export const useLogout = () => {
    const clearCurrentChannel = useCurrentChat(store => store.clearCurrentChat);
    const client = useQueryClient();
    return useMutation({
        mutationKey: [LOGOUT_KEY],
        mutationFn: async () => await authenticationService.logout(),
        onSuccess() {
            client.invalidateQueries({ queryKey: [PROFILE_KEY] });
            clearCurrentChannel();
        },
    });
};