"use client"
import {type FC, type JSX, useEffect} from "react";
import {useLogout} from "@/hooks/api/use-logout.hook";
import {useIsAuth} from "@/hooks/api/use-auth.hook";

export const LogoutPage: FC = (): JSX.Element => {
    const {mutate} = useLogout();
    const {isAuth} = useIsAuth();
    useEffect(() => {
        if (isAuth) {
            mutate();
        }
    }, [isAuth]);
    return (
        <>
            <h1>Сторінка виходу з облікового запису</h1>
        </>
    );
}