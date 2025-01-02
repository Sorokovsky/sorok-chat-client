import {QueryKeys} from "@/enums/query-keys.enum";
import {authService} from "@/services/auth.service";
import {type LoginUser} from "@/types/models/auth/login.type";
import {useMutation} from "@/hooks/use-mutation";

export const useLogin = () => {
    return useMutation([QueryKeys.AUTH], (login: LoginUser): Promise<void> => authService.login(login));
}