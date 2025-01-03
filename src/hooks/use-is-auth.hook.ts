import {useProfile} from "@/hooks/use-profile.hook";

export const useIsAuth: () => boolean = (): boolean => {
    const {data} = useProfile();
    return data !== undefined;
}