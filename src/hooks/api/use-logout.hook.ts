import {useMutation} from "@/hooks/api/use-mutation.hook";
import {QueryKeys} from "@/enums/query-keys.enum";
import {authService} from "@/services/auth.service";
import {SUCCESS_LOGOUT} from "@/constants/messages.constants";

export const useLogout = () => {
    return useMutation(
        [QueryKeys.LOGOUT],
        () => authService.logout(),
        SUCCESS_LOGOUT,
    );
}