import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_MY_CHANNELS, PROFILE_KEY, REGISTER_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useRegistration = () => {
    const queryClient: QueryClient = useQueryClient();
    return useMutation({
        mutationKey: [REGISTER_KEY],
        mutationFn: authenticationService.registration,
        async onSuccess() {
            await queryClient.invalidateQueries({queryKey: [PROFILE_KEY, GET_MY_CHANNELS]});
        }
    })
};