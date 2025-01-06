"use client"
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useIsAuth } from './use-is-auth.hook';
export const useForNotAuth = () => {
    const router = useRouter();
    const { isAuth } = useIsAuth();
    useEffect(() => {
        if (isAuth) {
            router.back();
        }
    }, [isAuth]);
}