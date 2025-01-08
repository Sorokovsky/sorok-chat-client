"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import {CurrentUserAvatar} from "@/components/current-user-avatar/current-user-avatar";
import {AuthMenu} from "@/components/auth-menu/auth-menu";
import { useSettingsStore } from "@/store/settings/settings.store";

export const Header: FC = (): JSX.Element => {
    const toggle = useSettingsStore(state => state.toggle);
    return (
        <header
            className={cn(styles.header)}
        >
            <CurrentUserAvatar onClick={toggle} />
            <AuthMenu />
        </header>
    );
}