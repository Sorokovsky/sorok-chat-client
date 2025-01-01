import {useMutation, useQueryClient} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {authService} from "@/services/auth.service";
import {type LoginUser} from "@/types/models/auth/login.type";

export const useLogin = () => {
    const { invalidateQueries } = useQueryClient()
    const { mutate,  isPending, isSuccess, isError} = useMutation(
        {
            mutationKey: [QueryKeys.AUTH],
            mutationFn: (login: LoginUser): Promise<void> => authService.login(login),
            onMutate: (): Promise<void> => invalidateQueries(),
        }
    );
    return {
        mutate,
        isPending,
        isSuccess,
        isError
    }
}