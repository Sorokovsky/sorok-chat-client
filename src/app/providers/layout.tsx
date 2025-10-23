import { Header } from "@/widgets/ui";
import type { FC, JSX, PropsWithChildren } from "react";
import { useRedirectByAccess } from '@/features/authentication/';
import { HOME_ROUTE, LOGIN_ROUTE } from "@/shared";

export const Layout: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    useRedirectByAccess(LOGIN_ROUTE, HOME_ROUTE);
    return (
        <>
            <Header />
            {children}
        </>
    );
};