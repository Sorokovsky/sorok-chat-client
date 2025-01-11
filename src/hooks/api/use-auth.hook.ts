import { useProfile } from '@/hooks/api/use-profile.hook';
export const useIsAuth = () => {
    const { data, ...rest } = useProfile();
    const isAuth: boolean = data !== undefined;
    return { isAuth, ...rest };
};