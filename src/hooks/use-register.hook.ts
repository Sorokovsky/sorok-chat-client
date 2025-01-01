import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {type Register} from "@/types/models/auth/register.type";
import {type GetUser} from "@/types/models/users/get-user.type";
import {authService} from "@/services/auth.service";

export const useRegister = () => {
    const { invalidateQueries } = useQueryClient()
    const {mutate, isPending, isSuccess, isError} = useMutation({
        mutationKey: [QueryKeys.AUTH],
        mutationFn: (register: Register): Promise<GetUser> => authService.register(register),
        onMutate: (): Promise<void> => invalidateQueries()
    });
    return {mutate, isPending, isSuccess, isError};
};