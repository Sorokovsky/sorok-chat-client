"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import {CurrentUserAvatar} from "@/components/current-user-avatar/current-user-avatar";
import {MenuLink} from "@/ui/menu-link/menu-link";
import {LOGIN_ROUTE, REGISTER_ROUTE} from "@/constants/routes.constant";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <CurrentUserAvatar />
            <div className="flex items-center justify-between gap-2">
                <MenuLink route={REGISTER_ROUTE} />
                <MenuLink route={LOGIN_ROUTE} />
            </div>
        </header>
    );
}