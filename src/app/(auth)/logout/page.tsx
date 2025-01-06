"use client"
import {type NextPage} from "next";
import {type JSX, useEffect} from "react";
import {useLogout} from "@/hooks/use-logout";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Loader} from "@/ui/loader/loader";

const Logout: NextPage = (): JSX.Element => {
    const { mutate: logout, isPending } = useLogout();
    const router: AppRouterInstance = useRouter();
    useEffect(() => {
        logout(null);
        router.back();
    }, []);
    return (
        <div className={"center"}>
            {isPending && <Loader />}
        </div>
    );
}
export default Logout;