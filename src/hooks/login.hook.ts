import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_MY_CHANNELS, LOGIN_KEY, PROFILE_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useLogin = () => {
    const queryClient: QueryClient = useQueryClient();
    return  useMutation({
        mutationKey: [LOGIN_KEY],
        mutationFn: authenticationService.login,
        async onSuccess(): Promise<void> {
            await queryClient.resetQueries({ queryKey: [PROFILE_KEY, GET_MY_CHANNELS] });
            queryClient.clear();
        }
    });
}