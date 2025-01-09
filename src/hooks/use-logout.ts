import {useMutation} from "@/hooks/use-mutation";
import {QueryKeys} from "@/enums/query-keys.enum";
import {authService} from "@/services/auth.service";
import { SUCCESS_LOGOUT } from "@/constants/messages.constant";

export const useLogout = () => {
    return useMutation(
        [QueryKeys.AUTH], (): Promise<void> => authService.logout(),
        undefined,
        SUCCESS_LOGOUT
    );
}