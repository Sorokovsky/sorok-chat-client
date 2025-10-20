import {QueryClient, useMutation, useQueryClient} from "@tanstack/react-query";
import {GET_MY_CHANNELS, LOGOUT_KEY, PROFILE_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useLogout = () => {
    const queryClient: QueryClient = useQueryClient();
    return useMutation({
      mutationKey: [LOGOUT_KEY],
      mutationFn: authenticationService.logout,
      onSuccess(): void {
        queryClient.invalidateQueries({ queryKey: [PROFILE_KEY], exact: false });
        queryClient.invalidateQueries({ queryKey: [GET_MY_CHANNELS], exact: false });
      },

      onError() {
        queryClient.refetchQueries({ queryKey: [PROFILE_KEY], exact: false });
        queryClient.refetchQueries({ queryKey: [GET_MY_CHANNELS],exact: false,
        });
      },
    });
}