import type {MenuRoute} from "@/types/routes/menu-route.type";
import {LogInIcon, LogOutIcon, UserPlus2Icon} from "lucide-react";
import {pagesService} from "@/services/pages.service";

export const NOT_AUTH_ROUTES: MenuRoute[] = [
    {
        icon: LogOutIcon,
        title: "Вийти",
        path: pagesService.logout,
    },
];

export const FOR_USER_AUTH_ROUTES: MenuRoute[] = [
    {
        icon: LogInIcon,
        title: "Увійти",
        path: pagesService.login,
    },
    {
        icon: UserPlus2Icon,
        title: "Зареєструватися",
        path: pagesService.register,
    },
];