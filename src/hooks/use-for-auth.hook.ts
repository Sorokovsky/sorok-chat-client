import { useRouter } from 'next/navigation';
import { useIsAuth } from './use-is-auth.hook';
export const useForAuth = () => {
    const { isAuth } = useIsAuth();
    const router = useRouter();
    if (isAuth === false) {
        router.back();
    }
}