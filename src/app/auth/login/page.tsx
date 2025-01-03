"use client"
import {type NextPage} from "next";
import {type JSX, useEffect} from "react";
import {useIsAuth} from "@/hooks/use-is-auth.hook";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";

const LoginPage: NextPage = (): JSX.Element => {
    const isAuth: boolean = useIsAuth();
    const router: AppRouterInstance = useRouter();
    useEffect(() => {
        if(isAuth) router.back();
    }, [isAuth]);
    return (
      <>
          <h1>Login</h1>
      </>
    );
}
export default LoginPage;