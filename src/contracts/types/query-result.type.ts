export type QueryResult<T> = {
    data: T | undefined,
    isPending: boolean,
    isSuccess: boolean,
    isError: boolean,
    error: Error | null
};