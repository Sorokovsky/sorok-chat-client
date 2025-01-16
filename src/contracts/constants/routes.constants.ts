import type {MenuRoute} from "@/types/routes/menu-route.type";
import {LogInIcon, LogOutIcon, UserPlus2Icon} from "lucide-react";
import {pagesService} from "@/services/pages.service";

export const LOGOUT_ROUTE: MenuRoute = {
    icon: LogOutIcon,
    title: "Вийти",
    path: pagesService.logout,
};

export const REGISTER_ROUTE: MenuRoute = {
    icon: UserPlus2Icon,
    title: "Зареєструватися",
    path: pagesService.register,
};

export const LOGIN_ROUTE: MenuRoute = {
    icon: LogInIcon,
    title: "Увійти",
    path: pagesService.login,
};

export const NOT_AUTH_ROUTES: MenuRoute[] = [REGISTER_ROUTE, LOGIN_ROUTE];

export const FOR_USER_AUTH_ROUTES: MenuRoute[] = [LOGOUT_ROUTE];