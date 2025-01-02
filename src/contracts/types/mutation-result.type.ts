import {type QueryResult} from "@/types/query-result.type";
import {type UseMutateFunction} from "@tanstack/react-query";

export type MutationResult<T> = Omit<QueryResult<T>, "data"> & {
    mutate: UseMutateFunction<unknown, Error, void, void>
}