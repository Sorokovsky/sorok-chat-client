import {useProfile} from "@/hooks/use-profile.hook";

export const useIsAuth= () => {
    const {data, isPending} = useProfile();
    return {isAuth: data !== undefined, isPending }
}