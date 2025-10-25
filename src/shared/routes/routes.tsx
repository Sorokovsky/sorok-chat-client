import { RegistrationPage, HomePage, LoginPage, LogoutPage } from "@/pages";
import { AccessRule } from "@/features/authentication";
import { Route } from "@/shared/routes/route";

export const HOME_ROUTE: Route = {
    accessRule: AccessRule.PRIVATE,
    name: "Чати",
    path: "/",
    element: <HomePage />
};

export const REGISTRATION_ROUTE: Route = {
    accessRule: AccessRule.PUBLIC,
    name: "Реєстрація",
    path: "/registration",
    element: <RegistrationPage />
};

export const LOGIN_ROUTE: Route = {
    accessRule: AccessRule.PUBLIC,
    name: "Вхід",
    path: "/login",
    element: <LoginPage />
};

export const LOGOUT_ROUTE: Route = {
    accessRule: AccessRule.PRIVATE,
    name: "Вихід",
    path: "/logout",
    element: <LogoutPage />
};

export const ROUTES = [HOME_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE, LOGOUT_ROUTE];