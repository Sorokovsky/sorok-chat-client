import { pagesService } from "@/services/pages.service";
import { useRouter } from "next/navigation";
import { useIsAuth } from './use-is-auth.hook';
import { useEffect } from 'react';

export const useRedirectGuard = (forAuth: boolean): void => {
    const { isAuth } = useIsAuth();
    const router = useRouter();
    useEffect(() => {        
        if (isAuth !== forAuth) {
            router.replace(pagesService.home);
        }
    }, [isAuth]);
}