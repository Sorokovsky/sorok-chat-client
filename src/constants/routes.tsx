import { HomePage } from "@/components/pages/home/home";
import { LoginPage } from "@/components/pages/login/login";
import { RegistrationPage } from "@/components/pages/registration/registration";
import { AccessRule } from "@/interfaces/access-rule";
import { Route } from "@/interfaces/route";

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

export const ROUTES = [HOME_ROUTE, REGISTRATION_ROUTE, LOGIN_ROUTE];