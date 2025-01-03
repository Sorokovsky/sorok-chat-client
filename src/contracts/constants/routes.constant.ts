import {Route} from "@/types/route.type";
import {pagesService} from "@/services/pages.service";
import {LogIn, LogOut, User} from "lucide-react";

export const PUBLIC_ROUTES: Route[] = [

];

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