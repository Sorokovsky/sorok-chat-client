import {useQuery} from "@/hooks/use-query";
import {QueryKeys} from "@/enums/query-keys.enum";
import {usersService} from "@/services/users.service";
import {type GetUser} from "@/types/models/users/get-user.type";
import {type QueryResult} from "@/types/query-result.type";
import { SUCCESS_AUTHENTICATED } from '@/constants/messages.constant';

export const useProfile = (): QueryResult<GetUser> => {
    return useQuery([QueryKeys.USERS], () => usersService.getMe(), false, SUCCESS_AUTHENTICATED);
}