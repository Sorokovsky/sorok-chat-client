import { useGetProfile } from "./get-profile.hook";

export const useIsAuthenticated = () => {
    const { data: user } = useGetProfile();
    return user !== null && user !== undefined;
};