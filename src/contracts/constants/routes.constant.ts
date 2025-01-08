import {Route} from "@/types/route.type";
import {pagesService} from "@/services/pages.service";
import {LogIn, LogOut, User} from "lucide-react";

export const LOGIN_ROUTE: Route = {
    title: "Login",
    to: pagesService.login,
    icon: LogIn
}
export const REGISTER_ROUTE: Route = {
    title: "Register",
    to: pagesService.register,
    icon: User
}

export const LOGOUT_ROUTE: Route = {
    title: "Logout",
    to: pagesService.logout,
    icon: LogOut
}

export const FOR_AUTH: Route[] = [LOGOUT_ROUTE];

export const FOR_NOT_AUTH: Route[] = [REGISTER_ROUTE, LOGIN_ROUTE];

export const FOR_ALL: Route[] = [];