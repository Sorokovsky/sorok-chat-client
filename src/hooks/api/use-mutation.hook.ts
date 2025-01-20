import {MutateFunction, useMutation as useFetching, useQueryClient} from "@tanstack/react-query";
import type {QueryKeys} from "@/enums/query-keys.enum";
import {toast} from "react-toastify";
import type {ApiError} from "@/types/models/error/api-error.type";

export const useMutation = <T, R>(
    keys: QueryKeys[],
    callback: MutateFunction<R, ApiError, T>,
    successMessage?: string,
    refetchKeys: QueryKeys[] = [],
    retry: boolean = false,
) => {
    const client = useQueryClient();
    return useFetching({
        mutationKey: keys,
        mutationFn: callback,
        retry,
        async onSuccess() {
            if (successMessage) {
                toast.success(successMessage);
                await client.invalidateQueries({queryKey: refetchKeys});
                await client.resetQueries({queryKey: refetchKeys});
            }
        },
        onError(error) {
            toast.error(error.message);
        }
    });
}