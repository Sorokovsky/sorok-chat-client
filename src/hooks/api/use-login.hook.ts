import {useMutation} from "@/hooks/api/use-mutation.hook";
import {QueryKeys} from "@/enums/query-keys.enum";
import type {Auth} from "@/types/models/auth/auth.type";
import {authService} from "@/services/auth.service";

export const useLogin = () => {
    return useMutation([QueryKeys.LOGIN], (login: Auth) => authService.login(login));
};