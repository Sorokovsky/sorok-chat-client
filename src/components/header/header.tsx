"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import { CurrentUserAvatar } from "@/components/current-user-avatar/current-user-avatar";
import { Logo } from "@/components/logo/logo";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <CurrentUserAvatar />
            <Logo />
        </header>
    );
}