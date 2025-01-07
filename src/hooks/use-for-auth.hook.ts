import { pagesService } from '@/services/pages.service';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuth } from './use-is-auth.hook';
export const useForAuth = () => {
    const { isAuth } = useIsAuth();
    const router = useRouter();
    useEffect(() => {
        if (isAuth === false) {
          router.replace(pagesService.home);
        }
    }, [isAuth]);
}