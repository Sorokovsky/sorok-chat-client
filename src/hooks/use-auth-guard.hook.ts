import {useIsAuth} from "@/hooks/api/use-auth.hook";
import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {pagesService} from "@/services/pages.service";

export const useAuthGuard = (forAuth: boolean) => {
    const {isAuth} = useIsAuth();
    const router = useRouter();
    useEffect(() => {
        console.log(isAuth)
        if (isAuth !== forAuth) {
            router.push(pagesService.home);
        }
    }, [isAuth]);
}