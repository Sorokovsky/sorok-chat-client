import { AccessRule, useIsAuthenticated } from "@/features/authentication";
import { Route, ROUTES } from "@/shared/routes";

export const useGetRoutesByAccess = (routes: Route[] = ROUTES): Route[] => {
    const isAuthenticated = useIsAuthenticated();
    return routes.filter(route => {
        switch (route.accessRule) {
            case AccessRule.DENY:
                return false;
            case AccessRule.PERMIT:
                return true;
            case AccessRule.PRIVATE:
                return isAuthenticated;
            case AccessRule.PUBLIC:
                return !isAuthenticated;
        }
    });
};