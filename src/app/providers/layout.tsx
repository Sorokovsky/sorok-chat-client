import { Header } from "@/widgets/ui";
import type { FC, JSX } from "react";
import { useRedirectByAccess } from '@/features/authentication/';
import { HOME_ROUTE, LOGIN_ROUTE } from "@/shared";
import { Outlet } from "react-router";

export const Layout: FC = (): JSX.Element => {
    useRedirectByAccess(LOGIN_ROUTE, HOME_ROUTE);
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};