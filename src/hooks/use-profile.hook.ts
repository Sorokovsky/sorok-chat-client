import {useQuery} from "@tanstack/react-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {GetUser} from "@/types/models/users/get-user.type";
import {usersService} from "@/services/users.service";

export const useProfile = () => {
    const { data, isPending, isSuccess, isError } = useQuery({
        queryKey: [QueryKeys.USERS],
        queryFn: (): Promise<GetUser> => usersService.getMe()
    });
    return { data, isPending, isSuccess, isError };
}