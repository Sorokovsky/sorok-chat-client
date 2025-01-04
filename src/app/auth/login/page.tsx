"use client"
import {type NextPage} from "next";
import {type JSX, useEffect, useState} from "react";
import {useIsAuth} from "@/hooks/use-is-auth.hook";
import {useRouter} from "next/navigation";
import {type AppRouterInstance} from "next/dist/shared/lib/app-router-context.shared-runtime";
import {Loader} from "@/ui/loader/loader";
import {Form} from "@/ui/form/form";
import {Button} from "@/ui/button/button";
import {useForm} from "react-hook-form";
import {LoginUser} from "@/types/models/auth/login.type";
import {useLogin} from "@/hooks/use-login.hook";
import {Input} from "@/ui/input/input";
import {register} from "next/dist/client/components/react-dev-overlay/pages/client";
const LoginPage: NextPage = (): JSX.Element => {
    const {isAuth, isPending: isFetch} = useIsAuth();
    const router: AppRouterInstance = useRouter();
    const { mutate } = useLogin();
    const [isLoading, setIsLoading] = useState(false);
    const { handleSubmit, register } = useForm<LoginUser>();
    const login = (login: LoginUser) => {
        mutate(login);
    }
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
                    <Form
                        onSubmit={handleSubmit(login)}
                    >
                        <Input
                            label={"Email"}
                            type={"email"}
                            placeholder={"Enter email"}
                            {...register("email", {
                                required: true,
                            })}
                        />
                        <Input
                            label={"Password"}
                            type={"password"}
                            placeholder={"Enter password"}
                            {...register("password", {
                                required: true,
                            })}
                        />
                        <Button>Login</Button>
                    </Form>
                </>
            )}
        </div>
    );
}
export default LoginPage;