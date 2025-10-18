import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_MY_CHANNELS, LOGOUT_KEY, PROFILE_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useLogout = () => {
    const queryClient: QueryClient = useQueryClient();
    return useMutation({
        mutationKey: [LOGOUT_KEY],
        mutationFn: authenticationService.logout,
        async onSuccess(): Promise<void> {
            await queryClient.resetQueries({queryKey: [PROFILE_KEY, GET_MY_CHANNELS]});
            queryClient.clear();
        }
    })
}