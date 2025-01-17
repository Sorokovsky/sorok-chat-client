"use client"
import {type FC, type JSX, type PropsWithChildren} from "react";
import {useAuthGuard} from "@/hooks/use-auth-guard.hook";

export const NotAuthLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    useAuthGuard(false);
    return (
        <>{children}</>
    );
};