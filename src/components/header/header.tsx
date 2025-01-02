"use client"
import {type FC, type JSX, useEffect} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import {CurrentUserAvatar} from "@/components/current-user-avatar/current-user-avatar";

export const Header: FC = (): JSX.Element => {
    useEffect(() => {
        console.log('rendered')
    }, [])
    return (
        <header
            className={cn(styles.header)}
        >
            <CurrentUserAvatar />
        </header>
    );
}