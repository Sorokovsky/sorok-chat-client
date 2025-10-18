import { useGetProfile } from "./get-profile.hook";

export const useIsAuthenticated = () => {
    const { data: user } = useGetProfile();
    console.log(user);
    
    return user !== null && user !== undefined;
};