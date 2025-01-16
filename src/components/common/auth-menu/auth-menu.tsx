"use client"
import {type FC, type JSX, useEffect, useState} from "react";
import {useIsAuth} from "@/hooks/api/use-auth.hook";
import type {MenuRoute} from "@/types/routes/menu-route.type";
import {Menu} from "@/ui/menu/menu";
import {FOR_USER_AUTH_ROUTES, NOT_AUTH_ROUTES} from "@/constants/routes.constants";

export const AuthMenu: FC = (): JSX.Element => {
    const {isAuth} = useIsAuth();
    const [menu, setMenu] = useState<MenuRoute[]>([]);
    useEffect(() => {
        if (isAuth) {
            setMenu(FOR_USER_AUTH_ROUTES);
        } else {
            setMenu(NOT_AUTH_ROUTES);
        }
    }, [isAuth]);
    return <Menu menu={menu}/>;
}