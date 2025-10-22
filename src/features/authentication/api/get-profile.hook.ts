import { useQuery } from "@tanstack/react-query";
import { PROFILE_KEY } from "../constants";
import { authenticationService } from "./authentication.service";

export const useGetProfile = () => {
    return useQuery({
        queryKey: [PROFILE_KEY],
        queryFn: authenticationService.getProfile,
        retry: 2
    });
};