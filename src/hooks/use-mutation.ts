import {
    type MutateFunction,
    type QueryCache,
    type QueryClient,
    useMutation as useMutationFetch,
    useQueryClient
} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {type MutationResult} from "@/types/mutation-result.type";
import {RETRIES_FETCH_COUNT} from "@/constants/common.constant";
export const useMutation = <T, V>(
    keys: QueryKeys[],
    callback: V,
    refreshKeys: QueryKeys[] = []
): MutationResult => {
    const client: QueryClient = useQueryClient();
    const globalCache: QueryCache = client.getQueryCache();
    const cache = globalCache.find({queryKey: refreshKeys, exact: false});
    const { mutate, isPending, isSuccess, isError, error } = useMutationFetch({
        mutationKey: keys,
        mutationFn: callback as MutateFunction,
        retry: RETRIES_FETCH_COUNT,

        onSuccess: () => {
            cache?.reset();
            client.invalidateQueries({queryKey: refreshKeys});
        }
    });
    return {mutate, isPending, isSuccess, isError, error} as MutationResult
}