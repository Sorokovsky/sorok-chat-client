import {QueryKeys} from "@/enums/query-keys.enum";
import { useQuery as useQueryFetching } from "@tanstack/react-query";
import {REFETCH_INTERVAL, RETRIES_FETCH_COUNT} from "@/constants/common.constant";
import {type QueryResult} from "@/types/query-result.type";
export const useQuery = <T>(
    keys: QueryKeys[],
    callback: () => Promise<T>,
    refetch: boolean = false,
    successMessage: string = ""
): QueryResult<T> => {
    const { data, isPending, isSuccess, isError, error } = useQueryFetching({
        queryKey: keys,
        retry: RETRIES_FETCH_COUNT,
        refetchInterval: refetch ? REFETCH_INTERVAL : false,
        queryFn: callback,
    });
    return {data, isPending, isSuccess, isError, error};
};