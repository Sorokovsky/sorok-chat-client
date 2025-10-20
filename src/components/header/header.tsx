"use client"
import { LOGIN_ROUTE, ROUTES } from "@/constants/routes.constants";
import { ACCESS_RULE } from "@/contracts/access.contract";
import { useGetRoutesByAccess } from "@/hooks/get-routes-by-access.hooks";
import { IconButton, Toolbar } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FC, JSX, useEffect } from "react";
import { useIsAuthenticated } from '../../hooks/is-authenticated.hook';

export const Header: FC = (): JSX.Element => {
    const pathname = usePathname();
    const isAuthenticated = useIsAuthenticated();
    const router = useRouter();
    const routes = useGetRoutesByAccess();

    useEffect(() => {
        ROUTES.forEach(route => {
            if (route.path === pathname) {
                switch (route.accessRule) {
                    case ACCESS_RULE.PRIVATE:
                        if (!isAuthenticated) {
                            router.push(LOGIN_ROUTE.path);
                        }
                    case ACCESS_RULE.PUBLIC:
                        if (isAuthenticated) {
                            router.push("/");
                        }
                }
            }
        });
    }, [isAuthenticated, pathname]);

    return (
        <header>
            <Toolbar
            >
                {routes.map(route => (
                    <IconButton
                        key={route.path}
                        edge={"start"}
                        color="primary"
                        type="button"
                    >
                        <Link href={route.path}>{route.name}</Link>
                    </IconButton>
                ))}
            </Toolbar>
        </header>
    );
};