"use client"
import {type FC, type JSX} from "react";
import cn from 'clsx';
import styles from "@/components/header/header.module.sass"
import { CurrentUserAvatar } from "@/components/current-user-avatar/current-user-avatar";
import { Logo } from "@/components/logo/logo";
import { useSettingsStore } from '@/store/settings/settings.store';

export const Header: FC = (): JSX.Element => {
    const toggle = useSettingsStore(state => state.toggle);
    return (
        <header
            className={cn(styles.header)}
        >
            <Logo />
            <CurrentUserAvatar onClick={toggle} id={"avatar"} />
        </header>
    );
}