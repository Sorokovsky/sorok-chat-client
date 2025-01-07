"use client"
import { RegisterForm } from "@/components/register-form/register-form";
import { Loader } from "@/components/ui/loader/loader";
import { useIsAuth } from "@/hooks/use-is-auth.hook";
import { useRouter } from "next/navigation";
import { useEffect, useState, type FC, type JSX } from "react";

export const RegisterPage: FC = (): JSX.Element => {
    const { isAuth, isPending: isFetch } = useIsAuth();
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        setIsLoading(isFetch);
    }, [isFetch]);
    return (
        <div className={"center"}>
            {isLoading ? <Loader /> : <RegisterForm />}
        </div>
    );
}