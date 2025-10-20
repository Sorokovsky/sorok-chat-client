import { ROUTES } from "@/constants/routes.constants";
import { Route } from "@/contracts/route.contract";
import { useIsAuthenticated } from './is-authenticated.hook';
import { ACCESS_RULE } from '../contracts/access.contract';

export const useGetRoutesByAccess = (routes: Route[] = ROUTES): Route[] => {
    const isAuthenticated = useIsAuthenticated();
    return routes.filter(route => {
        switch (route.accessRule) {
            case ACCESS_RULE.ALL_DENY:
                return false;
            case ACCESS_RULE.ALL_PERMIT:
                return true;
            case ACCESS_RULE.PUBLIC:
                return !isAuthenticated;
            case ACCESS_RULE.PRIVATE:
                return isAuthenticated;
        }
    });
}