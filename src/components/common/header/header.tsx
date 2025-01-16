import type {FC, JSX} from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import {Logo} from "@/commons/logo/logo";
import {CurrentUserAvatar} from "@/commons/current-user-avatar/current-user-avatar";
import {useUserSettings} from "@/store/user-settings/store";

export const Header: FC = (): JSX.Element => {
    const toggleSettings = useUserSettings(state => state.toggle);
    return (
        <header
            className={cn(styles.header)}
        >
            <Logo id="logo"/>
            <CurrentUserAvatar id="avatar" onClick={toggleSettings}/>
        </header>
    );
};