"use client"
import { Loader } from "@/components/ui/loader/loader";
import { useIsAuth } from "@/hooks/use-is-auth.hook";
import { useLogout } from "@/hooks/use-logout";
import { useEffect, type FC, type JSX } from "react";

export const LogoutPage: FC = (): JSX.Element => {
    const { mutate: logout, isPending } = useLogout();
    useEffect(() => {
        logout(null);
    }, []);
    return (
        <div className={"center"}>
            {isPending && <Loader />}
        </div>
    );
}