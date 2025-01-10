import type { FC, JSX } from "react";
import cn from "clsx";
import styles from "./header.module.sass";
import { AVATAR } from "@/constants/images.constants";
import { Avatar } from "@/ui/avatar/avatar";
import { Logo } from "@/commons/logo/logo";

export const Header: FC = (): JSX.Element => {
    return (
        <header
            className={cn(styles.header)}
        >
            <Logo />
            <Avatar
                imageOrPath={AVATAR}
            />
        </header>
    );
};