import {QueryKeys} from "@/enums/query-keys.enum";
import {type Register} from "@/types/models/auth/register.type";
import {type GetUser} from "@/types/models/users/get-user.type";
import {authService} from "@/services/auth.service";
import {useMutation} from "@/hooks/use-mutation";
import { SUCCESS_REGISTER } from "@/constants/messages.constant";

export const useRegister = () => {
    return useMutation(
        [QueryKeys.AUTH], (register: Register): Promise<GetUser> => authService.register(register),
        undefined,
        SUCCESS_REGISTER
    );
};