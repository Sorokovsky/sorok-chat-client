import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {type GetUser} from "@/types/models/users/get-user.type";
import {usersService} from "@/services/users.service";
import {REFETCH_INTERVAL, RETRIES_FETCH_COUNT} from "@/constants/common.constant";

export const useProfile = () => {
    const { data, isPending, isSuccess, isError } = useQuery({
        queryKey: [QueryKeys.USERS],
        queryFn: (): Promise<GetUser> => usersService.getMe(),
        retry: RETRIES_FETCH_COUNT,
        refetchInterval: REFETCH_INTERVAL
    });
    return { data, isPending, isSuccess, isError };
}