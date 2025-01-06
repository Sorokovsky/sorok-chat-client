"use client"
import { useRouter } from 'next/navigation';
import { useIsAuth } from './use-is-auth.hook';
export const useForNotAuth = () => {
    const router = useRouter();
    const { isAuth } = useIsAuth();
    if (isAuth) {
        router.back();
    }
}