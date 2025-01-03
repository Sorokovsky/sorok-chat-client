"use client"
import {type NextPage} from "next";
import {type JSX, useEffect, useState} from "react";
import {useIsAuth} from "@/hooks/use-is-auth.hook";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Loader} from "@/ui/loader/loader";
import {Form} from "@/ui/form/form";
import {useGetLoginForm} from "@/hooks/use-login-form.hook";
import {type LoginUser} from "@/types/models/auth/login.type";
import { Form as FormType } from "@/types/form.type"
import {FieldValues} from "react-hook-form";

const LoginPage: NextPage = (): JSX.Element => {
    const {isAuth, isPending: isFetch} = useIsAuth();
    const router: AppRouterInstance = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form: FormType<LoginUser> = useGetLoginForm();
    useEffect(() => {
        if(isAuth) router.back();
    }, [isAuth]);
    useEffect(() => {
        setIsLoading(isFetch)
    }, [isFetch]);
    return (
        <div className={"center"}>
            {isLoading ? <Loader /> : (
                <>
                    <Form form={form as unknown as FormType<FieldValues>} />
                </>
            )}
        </div>
    );
}
export default LoginPage;