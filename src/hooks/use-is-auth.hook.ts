import {useProfile} from "@/hooks/use-profile.hook";

export const useIsAuth = () => {
    const {data} = useProfile();
    return data !== undefined;
}