"use client"
import { LoginForm } from "@/components/login-form/login-form";
import { Loader } from "@/components/ui/loader/loader";
import { useIsAuth } from "@/hooks/use-is-auth.hook";
import { useEffect, useState, type FC, type JSX } from "react";

export const LoginPage: FC = (): JSX.Element => {
    const {isPending: isFetch} = useIsAuth();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(isFetch)
    }, [isFetch]);
    return (
        <div className={"center"}>
            {isLoading ? <Loader /> : <LoginForm />}
        </div>
    );
}