import {useMutation as useFetching, type UseMutationOptions, useQueryClient} from "@tanstack/react-query";
import type {QueryKeys} from "@/enums/query-keys.enum";
import {toast} from "react-toastify";

export const useMutation = (
    keys: QueryKeys[],
    callback: UseMutationOptions['mutationFn'],
    successMessage?: string,
    refetchKeys: QueryKeys[] = [],
    retry: boolean = false,
) => {
    const client = useQueryClient();
    return useFetching({
        mutationKey: keys,
        mutationFn: callback,
        retry,
        onSuccess() {
            if (successMessage) {
                toast.success(successMessage);
            }
        },
        onError(error) {
            toast.error(error.message);
            client.invalidateQueries({queryKey: refetchKeys});
            client.resetQueries({queryKey: refetchKeys})
        }
    });
}