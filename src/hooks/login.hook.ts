import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_MY_CHANNELS, LOGIN_KEY, PROFILE_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useLogin = () => {
    const queryClient: QueryClient = useQueryClient();
    return useMutation({
      mutationKey: [LOGIN_KEY],
      mutationFn: authenticationService.login,
      onSuccess(): void {
        queryClient.invalidateQueries({ queryKey: [PROFILE_KEY] });
        queryClient.invalidateQueries({ queryKey: [GET_MY_CHANNELS] });
      },

      onError() {
        queryClient.refetchQueries({ queryKey: [PROFILE_KEY], exact: false });
        queryClient.refetchQueries({ queryKey: [GET_MY_CHANNELS], exact: false });
      },
    });
}