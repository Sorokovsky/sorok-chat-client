import { QueryKeys } from "@/enums/query-keys.enum"
import { useQuery } from "@/hooks/api/use-query.hook"
import { userService } from "@/services/users.service";
import type { GetUser } from "@/types/models/user/get-uset.type";

export const useProfile = () => {
    return useQuery<GetUser>([QueryKeys.GET_ME], () => userService.getMe());
}