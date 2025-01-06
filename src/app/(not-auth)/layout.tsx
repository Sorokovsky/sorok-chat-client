"use client"
import { useForNotAuth } from "@/hooks/use-for-not-auth.hook";
import { type FC, type JSX, type PropsWithChildren } from "react";

const NotAuthLayout: FC<Readonly<PropsWithChildren>> = ({children}): JSX.Element => {
    useForNotAuth();
    return <>{children}</>;
}
export default NotAuthLayout;