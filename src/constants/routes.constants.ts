import { ACCESS_RULE } from "@/contracts/access.contract";
import { Route } from "@/contracts/route.contract";

export const REGISTRATION_ROUTE: Route = {
    accessRule: ACCESS_RULE.PUBLIC,
    name: "Реєстрація",
    path: "/registration",
};

export const LOGIN_ROUTE: Route = {
  accessRule: ACCESS_RULE.PUBLIC,
  name: "Вхід",
  path: "/login",
};

export const LOGOUT_ROUTE: Route = {
    accessRule: ACCESS_RULE.PRIVATE,
    name: "Вихід",
    path: "/logout"
};

export const ROUTES: Route[] = [REGISTRATION_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE];