import { useGetProfile } from "./get-profile.hook";
import { useEffect, useState } from 'react';

export const useIsAuthenticated = () => {
    const { data: user, isError } = useGetProfile();
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    useEffect(() => {
        setIsAuthenticated(!isError || user != null || user != undefined);
        
    }, [user, isError]);
    return isAuthenticated;
};