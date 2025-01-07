import { pagesService } from "@/services/pages.service";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useRedirectGuard = (needRedirect: boolean): void => {
    const router = useRouter();
    useEffect(() => {
        router.replace(pagesService.home);
    }, [needRedirect])
}