import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuth } from './use-is-auth.hook';
import { pagesService } from '@/services/pages.service';
export const useForNotAuth = () => {
    const router = useRouter();
    const { isAuth } = useIsAuth();
    useEffect(() => {
        if (isAuth) {
            router.replace(pagesService.home);
        }
    }, [isAuth]);
}