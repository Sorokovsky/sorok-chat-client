import {useQuery} from "@tanstack/react-query"
import {PROFILE_KEY} from "@/constants/query-key.constants";
import {authenticationService} from "@/services/authentication.service";

export const useGetProfile = () => useQuery({
    queryKey: [PROFILE_KEY],
    queryFn: authenticationService.getProfile,
    notifyOnChangeProps: "all",
    staleTime: 0,
});