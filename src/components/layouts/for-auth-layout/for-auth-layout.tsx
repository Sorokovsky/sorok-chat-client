"use client"
import {type FC, type JSX, type PropsWithChildren} from "react";
import {useAuthGuard} from "@/hooks/use-auth-guard.hook";

export const ForAuthLayout: FC<PropsWithChildren> = ({children}): JSX.Element => {
    useAuthGuard(true);
    return (
        <>{children}</>
    );
};