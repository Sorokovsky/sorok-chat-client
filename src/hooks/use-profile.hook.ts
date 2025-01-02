import {useQuery} from "@/hooks/use-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {usersService} from "@/services/users.service";
import {type GetUser} from "@/types/models/users/get-user.type";
import {type QueryResult} from "@/types/query-result.type";

export const useProfile = (): QueryResult<GetUser> => {
    return useQuery([QueryKeys.USERS], () => usersService.getMe());
}