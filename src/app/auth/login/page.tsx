"use client"
import {type NextPage} from "next";
import {type JSX, useEffect, useState} from "react";
import {useIsAuth} from "@/hooks/use-is-auth.hook";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Loader} from "@/ui/loader/loader";
import {LoginForm} from "@/components/login-form/login-form";
const LoginPage: NextPage = (): JSX.Element => {
    const {isAuth, isPending: isFetch} = useIsAuth();
    const router: AppRouterInstance = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if(isAuth) router.back();
    }, [isAuth]);
    useEffect(() => {
        setIsLoading(isFetch)
    }, [isFetch]);
    return (
        <div className={"center"}>
            {isLoading ? <Loader /> : <LoginForm />}
        </div>
    );
}
export default LoginPage;