import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuthenticated } from './is-authenticated.hook';
export const useFilterAccess = (forAuthenticated: boolean): void => {
    const router = useRouter();
    const isAuthenticated = useIsAuthenticated();
    useEffect(() => {
        console.log(isAuthenticated, forAuthenticated);
        
        if (isAuthenticated !== forAuthenticated) {
            router.push("/");
        }
    }, [isAuthenticated])
}