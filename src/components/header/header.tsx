"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import {CurrentUserAvatar} from "@/components/current-user-avatar/current-user-avatar";
import {AuthMenu} from "@/components/auth-menu/auth-menu";
import {Toaster} from "react-hot-toast";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <CurrentUserAvatar />
            <AuthMenu />
        </header>
    );
}