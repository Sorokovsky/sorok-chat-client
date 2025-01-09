import {
    type MutateFunction,
    type QueryClient,
    useMutation as useMutationFetch,
    useQueryClient
} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {type MutationResult} from "@/types/mutation-result.type";
import {RETRIES_FETCH_COUNT} from "@/constants/common.constant";
import { ApiError } from "@/types/api-error.type";
import toast from "react-hot-toast";
export const useMutation = <T, V>(
    keys: QueryKeys[],
    callback: V,
    refreshKeys: QueryKeys[] = [],
    successMessage: string = ""
): MutationResult => {
    const client: QueryClient = useQueryClient();
    const { mutate, isPending, isSuccess, isError, error } = useMutationFetch({
        mutationKey: keys,
        mutationFn: callback as unknown as MutateFunction,
        retry: RETRIES_FETCH_COUNT,
        onSuccess: () => {
            if (successMessage !== "") toast.success(successMessage);
        },
        onSettled: () => {
            client.resetQueries({ queryKey: refreshKeys });
            client.invalidateQueries({ queryKey: refreshKeys });
        },
        onError: (error: ApiError) => {            
            toast.error(error.message);
        }
    });
    return { mutate, isPending, isSuccess, isError, error } as unknown as MutationResult
}