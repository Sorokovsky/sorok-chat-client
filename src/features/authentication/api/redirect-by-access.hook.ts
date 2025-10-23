import { Route, ROUTES } from "@/shared";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import { useIsAuthenticated } from "./is-authenticated.hook";
import { AccessRule } from '../models/access-rule';

export const useRedirectByAccess = (toPublic: Route, toPrivate: Route) => {
    const isAuthenticated = useIsAuthenticated();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const route = ROUTES.find(item => item.path === pathname);
        if (!route) return;
        if (isAuthenticated && route.accessRule === AccessRule.PUBLIC) {
            navigate(toPrivate.path);
        } 
        if (!isAuthenticated && route.accessRule === AccessRule.PRIVATE) {
            navigate(toPublic.path);
        }
    }, [isAuthenticated, pathname]);
};