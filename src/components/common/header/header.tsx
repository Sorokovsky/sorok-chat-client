import type { FC, JSX } from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import { Logo } from "@/commons/logo/logo";
import { CurrentUserAvatar } from "@/commons/current-user-avatar/current-user-avatar";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <Logo />
            <CurrentUserAvatar />
        </header>
    );
};