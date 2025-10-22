import { useGetProfile } from "./get-profile.hook";

export const useIsAuthenticated = (): boolean => {
    const { data: user } = useGetProfile();
    return user != null && user != undefined;
};