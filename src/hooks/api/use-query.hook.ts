import type {QueryKeys} from "@/enums/query-keys.enum";
import type {ApiError} from "@/types/models/error/api-error.type";
import {type QueryFunction, useQuery as useFetchQuery, type UseQueryResult} from "@tanstack/react-query";

export const useQuery = <D>(
    keys: QueryKeys[],
    fetchCallback: QueryFunction,
    refectch: boolean = false
): UseQueryResult<D, ApiError> => {
    return useFetchQuery({
        queryKey: keys,
        queryFn: fetchCallback,
        retry: refectch
    });
};