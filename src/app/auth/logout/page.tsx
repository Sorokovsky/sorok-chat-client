"use client"
import {type NextPage} from "next";
import {type JSX, useEffect} from "react";
import {useLogout} from "@/hooks/use-logout";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {pagesService} from "@/services/pages.service";

const Logout: NextPage = (): JSX.Element => {
    const { mutate: logout } = useLogout();
    const router: AppRouterInstance = useRouter();
    useEffect(() => {
        logout();
        router.replace(pagesService.home);
    }, []);
    return (
        <></>
    );
}
export default Logout;