"use client"
import {type NextPage} from "next";
import {type JSX, useEffect} from "react";
import {useIsAuth} from "@/hooks/use-is-auth.hook";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Loader} from "@/ui/loader/loader";

const LoginPage: NextPage = (): JSX.Element => {
    const {isAuth, isPending} = useIsAuth();
    const router: AppRouterInstance = useRouter();
    useEffect(() => {
        if(isAuth) router.back();
    }, [isAuth]);
    return (
        <div className={"center"}>
            {isPending ? <Loader /> : (
                <>
                    <h1>Login</h1>
                </>
            )}
        </div>
    );
}
export default LoginPage;